// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { SparkClient } from "../src";
import { assert } from "chai";
import { authenticate } from "./utils/testAuthentication";
import { Recorder } from "@azure/test-utils-recorder";
import { getSparkpoolName } from "./utils/utils.common";
import {
  SparkSessionOptions,
  CreateSparkSessionOptions,
  GetSparkSessionOptions,
  ListSparkBatchJobOptions
} from "../src";

describe("Spark Client - session", () => {
  let client: SparkClient;
  let recorder: Recorder;
  let sessionId: number;

  beforeEach(async function() {
    const authentication = await authenticate(this);
    client = authentication.client;
    recorder = authentication.recorder;
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("successfully create Spark Session", async function() {
    let sparkSession: SparkSessionOptions = {
      name: "testSession",
      executorCount: 2,
      driverCores: 4,
      driverMemory: "8g",
      executorCores: 4,
      executorMemory: "8g"
    };
    let options: CreateSparkSessionOptions = {
      detailed: true
    };

    let createResult = await client.createSparkSeesion(sparkSession, options);
    sessionId = createResult.id;
    assert.equal(
      createResult.sparkPoolName,
      getSparkpoolName(),
      "Unexpected result of spark session by createSparkSeesion."
    );
  });

  it("successfully get Spark Session", async function() {
    let options: GetSparkSessionOptions = {
      detailed: true
    };
    let getResult = await client.getSparkSession(sessionId, options);
    assert.equal(
      getResult.sparkPoolName,
      getSparkpoolName(),
      "Unexpected result of spark session by getSparkSession."
    );
  });

  it("successfully list Spark Session", async function() {
    let options: ListSparkBatchJobOptions = {
      fromParam: sessionId - 1,
      size: 2,
      detailed: true
    };
    let listResult = await client.listSparkSession(options);
    assert.equal(
      listResult.from,
      sessionId - 1,
      "Unexpected result of spark session by listSparkSession."
    );
  });

  //   it("successfully list role definitions", async function() {
  //     let roleId = "7af0c69a-a548-47d6-aea3-d00e69bd83aa";
  //     const list: string[] = [];
  //     for await (const roleDefinition of client.listRoleDefinitions()) {
  //       list.push(roleDefinition.id!);
  //     }
  //     assert.include(
  //       list,
  //       roleId,
  //       "Failed to fetch expected role definition by listRoleDefinitions."
  //     );
  //   });

  //   it("successfully create role assignment", async function() {
  //     let roleId = "7af0c69a-a548-47d6-aea3-d00e69bd83aa";
  //     let principalId = "bf4f36df-eda0-4fc4-9602-69d6ff714d8c";
  //     let createResult = await client.createRoleAssignment(roleId, principalId);
  //     assert.equal(
  //       createResult.roleId,
  //       roleId,
  //       "Failed to create expected role assignment by createRoleAssignment."
  //     );
  //     assert.isNotNull(
  //       createResult.id,
  //       "Failed to create expected role assignment by createRoleAssignment."
  //     );
  //     roleAssignmentId = createResult.id as string;
  //   });

  //   it("successfully get role assignment", async function() {
  //     let roleId = "7af0c69a-a548-47d6-aea3-d00e69bd83aa";
  //     let getResult = await client.getRoleAssignmentById(roleAssignmentId);
  //     assert.equal(
  //       getResult.roleId,
  //       roleId,
  //       "Failed to get expected role assignment by createRoleAssignment."
  //     );
  //   });

  //   it("successfully list role assignment", async function() {
  //     let roleId = "7af0c69a-a548-47d6-aea3-d00e69bd83aa";
  //     let listResult = await client.listRoleAssignments(roleId);
  //     const list: string[] = [];
  //     for (const roleAssignment of listResult) {
  //       list.push(roleAssignment.id!);
  //     }
  //     assert.include(
  //       list,
  //       roleAssignmentId,
  //       "Failed to fetch expected role definition by listRoleDefinitions."
  //     );
  //   });

  //   it("successfully delete role assignments", async function() {
  //     await client.deleteRoleAssignmentById(roleAssignmentId);
  //   });

  //   it("successfully list caller's role assignment", async function() {
  //     let listResult = await client.getCallerRoleAssignments();
  //     const list: string[] = [];
  //     for (const roleAssignment of listResult._response.parsedBody) {
  //       list.push(roleAssignment);
  //     }
  //     assert.include(
  //       list,
  //       "6e4bf58a-b8e1-4cc3-bbf9-d73143322b78",
  //       "Failed to fetch expected role definition by getCallerRoleAssignments."
  //     );
  //   });
});
