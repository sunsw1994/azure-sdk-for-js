import rollup from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import cjs from "@rollup/plugin-commonjs";
import sourcemaps from "rollup-plugin-sourcemaps";


/**
 * @type {rollup.RollupFileOptions}
 */

const pkg = require("./package.json");
const version = pkg.version;
const banner = [
  "/*!",
  " * Copyright (c) Microsoft and contributors. All rights reserved.",
  " * Licensed under the MIT License. See License.txt in the project root for",
  " * license information.",
  " * ",
  ` * Azure Synapse Accesscontrol SDK for JavaScript - ${version}`,
  " */"
].join("\n");

const config = {
  input: "./dist-esm/index.js",
  external: ["@azure/core-http", "@azure/core-arm"],
  output: {
    banner: banner,
    file: "./dist/synapse-accesscontrol.js",
    format: "cjs",
    name: "azuresynapseaccesscontrol",
    globals: {
      "@azure/core-http": "coreHttp",
      "@azure/core-arm": "coreArm"
    },
    sourcemap: true,
  },
  preserveSymlinks: false,
  plugins: [
    nodeResolve({
      mainFields: ["module", "browser"],
      preferBuiltins: false
    }),
    sourcemaps(), 
    cjs({
    namedExports: {
      chai: ["assert"],
      assert: ["ok", "equal", "strictEqual", "deepEqual", "throws"],
      "@opentelemetry/api": ["CanonicalCode", "SpanKind", "TraceFlags"]
    }
  })]
};

export default config;
