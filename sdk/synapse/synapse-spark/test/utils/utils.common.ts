// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { env } from "@azure/test-utils-recorder";
import * as assert from "assert";

// Async iterator's polyfill for Node 8
if (!Symbol || !(Symbol as any).asyncIterator) {
  (Symbol as any).asyncIterator = Symbol.for("Symbol.asyncIterator");
}

export function getWorkspaceName(): string {
  const WorkspaceEnvVarName = "WORKSPACE_NAME";
  const WorkspaceName: string | undefined = env[WorkspaceEnvVarName];

  if (!WorkspaceName) {
    throw new Error(`${WorkspaceEnvVarName} environment variable not specified.`);
  }

  return WorkspaceName;
}

export function getSparkpoolName(): string {
  const SparkpoolEnvVarName = "SPARKPOOL_NAME";
  const Sparkpool: string | undefined = env[SparkpoolEnvVarName];

  if (!Sparkpool) {
    throw new Error(`${SparkpoolEnvVarName} environment variable not specified.`);
  }

  return Sparkpool;
}

export async function assertThrowsAbortError(cb: () => Promise<any>): Promise<void> {
  let passed = false;
  try {
    await cb();
    passed = true;
  } catch (e) {
    console.log(`name: ${e.name}, message: ${e.message}`);
    assert.equal(e.name, "AbortError");
    assert.equal(e.message, "The operation was aborted.");
  }

  if (passed) {
    throw new Error("Expected cb to throw an AbortError");
  }
}
