// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { AccessControlClient } from "../src/AccessControlClient";
import { assert } from "chai";
import { authenticate } from "./utils/testAuthentication";
import { Recorder } from "@azure/test-utils-recorder";

describe("AccessControl Client - get role definition", () => {
  let client: AccessControlClient;
  let recorder: Recorder;
  let roleAssignmentId: string;

  beforeEach(async function() {
    const authentication = await authenticate(this);
    client = authentication.client;
    recorder = authentication.recorder;
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("successfully get role definition by id", async function() {
    let roleId = "7af0c69a-a548-47d6-aea3-d00e69bd83aa";
    let getResult = await client.getRoleDefinitionById(roleId);
    assert.equal(
      getResult.name,
      "Sql Admin",
      "Unexpected name of role definition by getRoleDefinitionById."
    );
  });

  it("successfully list role definitions", async function() {
    let roleId = "7af0c69a-a548-47d6-aea3-d00e69bd83aa";
    const list: string[] = [];
    for await (const roleDefinition of client.listRoleDefinitions()) {
      list.push(roleDefinition.id!);
    }
    assert.include(
      list,
      roleId,
      "Failed to fetch expected role definition by listRoleDefinitions."
    );
  });

  it("successfully create role assignment", async function() {
    let roleId = "7af0c69a-a548-47d6-aea3-d00e69bd83aa";
    let principalId = "bf4f36df-eda0-4fc4-9602-69d6ff714d8c";
    let createResult = await client.createRoleAssignment(roleId, principalId);
    assert.equal(
      createResult.roleId,
      roleId,
      "Failed to create expected role assignment by createRoleAssignment."
    );
    assert.isNotNull(
      createResult.id,
      "Failed to create expected role assignment by createRoleAssignment."
    );
    roleAssignmentId = createResult.id as string;
  });

  it("successfully get role assignment", async function() {
    let roleId = "7af0c69a-a548-47d6-aea3-d00e69bd83aa";
    let getResult = await client.getRoleAssignmentById(roleAssignmentId);
    assert.equal(
      getResult.roleId,
      roleId,
      "Failed to get expected role assignment by createRoleAssignment."
    );
  });

  it("successfully list role assignment", async function() {
    let roleId = "7af0c69a-a548-47d6-aea3-d00e69bd83aa";
    let listResult = await client.listRoleAssignments(roleId);
    const list: string[] = [];
    for (const roleAssignment of listResult) {
      list.push(roleAssignment.id!);
    }
    assert.include(
      list,
      roleAssignmentId,
      "Failed to fetch expected role definition by listRoleDefinitions."
    );
  });

  it("successfully delete role assignments", async function() {
    await client.deleteRoleAssignmentById(roleAssignmentId);
  });

  it("successfully list caller's role assignment", async function() {
    let listResult = await client.getCallerRoleAssignments();
    const list: string[] = [];
    for (const roleAssignment of listResult._response.parsedBody) {
      list.push(roleAssignment);
    }
    assert.include(
      list,
      "6e4bf58a-b8e1-4cc3-bbf9-d73143322b78",
      "Failed to fetch expected role definition by getCallerRoleAssignments."
    );
  });
});
