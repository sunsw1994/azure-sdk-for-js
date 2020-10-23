// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { AccessControlClient } from "../src/AccessControlClient";
import * as assert from "assert";
import { authenticate } from "./utils/testAuthentication";
import { Recorder } from "@azure/test-utils-recorder";

describe("AccessControl Client - get role definition", () => {
  let client: AccessControlClient;
  let recorder: Recorder;

  beforeEach(async function() {
    const authentication = await authenticate(this);
    client = authentication.client;
    //testClient = authentication.testClient;
    recorder = authentication.recorder;
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("can get role definition by id", async function() {
    let roleId = "7af0c69a-a548-47d6-aea3-d00e69bd83aa";
    let getResult = await client.getRoleDefinitionById(roleId);
    assert.equal(
      getResult.name,
      "Sql Admin",
      "Unexpected name of role definition by getRoleDefinitionById."
    );
  });

  it("can list role definitions", async function() {
    let roleId = "7af0c69a-a548-47d6-aea3-d00e69bd83aa";
    const list: string[] = [];
    for await (const roleDefinition of client.listRoleDefinitions()) {
      list.push(roleDefinition.id!);
    }

    //assert.include()
  });

});
