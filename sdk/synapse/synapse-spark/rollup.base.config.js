import path from "path";
import nodeResolve from "@rollup/plugin-node-resolve";
import multiEntry from "@rollup/plugin-multi-entry";
import cjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import sourcemaps from "rollup-plugin-sourcemaps";
import viz from "rollup-plugin-visualizer";
import shim from "rollup-plugin-shim";

const pkg = require("./package.json");
const version = pkg.version;
const depNames = Object.keys(pkg.dependencies);
const devDepNames = Object.keys(pkg.devDependencies);
const input = "dist-esm/src/index.js";
const production = process.env.NODE_ENV === "production";
const banner = [
  "/*!",
  " * Copyright (c) Microsoft and contributors. All rights reserved.",
  " * Licensed under the MIT License. See License.txt in the project root for",
  " * license information.",
  " * ",
  ` * Azure Synapse Spark SDK for JavaScript - ${version}`,
  " */"
].join("\n");

export function nodeConfig(test = false) {
  const externalNodeBuiltins = [
    "fs",
    "crypto",
    "child_process",
    "os",
    "path",
    "stream",
    "util",
    "buffer"
  ];
  const baseConfig = {
    input: input,
    external: depNames.concat(externalNodeBuiltins),
    output: {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
      banner: banner,
      name: "auzresynaspespark"
    },
    preserveSymlinks: false,
    plugins: [
      sourcemaps(),
      replace({
        delimiters: ["", ""],
        values: {
          // replace dynamic checks with if (true) since this is for node only.
          // Allows rollup's dead code elimination to be more aggressive.
          "if (isNode)": "if (true)"
        }
      }),
      nodeResolve({ preferBuiltins: true }),
      cjs()
    ]
  };

  if (test) {
    // Entry points - test files under the `test` folder(common for both browser and node), node specific test files
    baseConfig.input = ["dist-esm/test/*.spec.js", "dist-esm/test/node/*.spec.js"];
    baseConfig.plugins.unshift(multiEntry({ exports: false }));

    // different output file
    baseConfig.output.file = "dist-test/index.node.js";

    // mark assert as external
    baseConfig.external.push("assert", ...devDepNames);

    // Disable tree-shaking of test code.  In rollup-plugin-node-resolve@5.0.0, rollup started respecting
    // the "sideEffects" field in package.json.  Since our package.json sets "sideEffects=false", this also
    // applies to test code, which causes all tests to be removed by tree-shaking.
    baseConfig.treeshake = false;
  } else if (production) {
    baseConfig.plugins.push(terser());
  }

  return baseConfig;
}

export function browserConfig(test = false) {
  const baseConfig = {
    input: input,
    output: {
      file: "dist-browser/azure-synapse-spark.js",
      banner: banner,
      format: "umd",
      name: "Azure.Synapse.Spark",
      globals: {
        "@azure/core-http": "AzureCoreHTTP",
        "@azure/core-arm": "AzureCoreARM",
        "@azure/core-tracing": "AzureCoreTracing",
        "@opentelemetry/api": "OpentelemetryApi",
        tslib: "tslib",
        stream: "stream"
      },
      sourcemap: true
    },
    preserveSymlinks: false,
    plugins: [
      sourcemaps(),
      replace({
        delimiters: ["", ""],
        values: {
          // replace dynamic checks with if (false) since this is for
          // browser only. Rollup's dead code elimination will remove
          // any code guarded by if (isNode) { ... }
          "if (isNode)": "if (false)"
        }
      }),
      shim({
        constants: `export default {}`,
        fs: `export default {}`,
        os: `export default {}`,
        dotenv: `export function config() { }`,
        path: `export default {}`
      }),
      nodeResolve({
        mainFields: ["module", "browser"],
        preferBuiltins: false
      }),
      cjs({
        namedExports: {
          chai: ["assert"],
          //assert: ["ok", "equal", "strictEqual", "deepEqual", "throws"],
          "@opentelemetry/api": ["CanonicalCode", "SpanKind", "TraceFlags"]
        }
      }),
      viz({ filename: "dist-browser/browser-stats.html", sourcemap: false })
    ]
  };

  if (test) {
    // Entry points - test files under the `test` folder(common for both browser and node), browser specific test files
    baseConfig.input = ["dist-esm/test/*.spec.js", "dist-esm/test/browser/*.spec.js"];
    baseConfig.plugins.unshift(multiEntry({ exports: false }));
    baseConfig.output.file = "dist-test/index.browser.js";
    baseConfig.external = ["fs-extra", "path"];

    baseConfig.onwarn = (warning) => {
      if (
        warning.code === "CIRCULAR_DEPENDENCY" &&
        warning.importer.indexOf(path.normalize("node_modules/chai/lib") === 0)
      ) {
        // Chai contains circular references, but they are not fatal and can be ignored.
        return;
      }

      console.error(`(!) ${warning.message}`);
    };

    // Disable tree-shaking of test code.  In rollup-plugin-node-resolve@5.0.0, rollup started respecting
    // the "sideEffects" field in package.json.  Since our package.json sets "sideEffects=false", this also
    // applies to test code, which causes all tests to be removed by tree-shaking.
    baseConfig.treeshake = false;
  }

  return baseConfig;
}
