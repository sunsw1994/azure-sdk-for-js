// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { EnvironmentCredential } from "@azure/identity";
import { AccessControlClient } from "../src/AccessControlClient";
import { getWorkspaceName } from "./utils/utils.common";
import * as assert from "assert";
import { add } from "./add";
var expect = require("chai").expect;
// import { authenticate } from "./utils/testAuthentication";
import { env } from "@azure/test-utils-recorder";
//import TestClient from "./utils/testClient";

describe("AccessControl Client - get role definition", () => {
  // let client: AccessControlClient;
  // let recorder: Recorder;

  beforeEach(async function() {
    // const authentication = await authenticate(this);
    // client = authentication.client;
    // //testClient = authentication.testClient;
    // recorder = authentication.recorder;
  });

  afterEach(async function() {
    // await recorder.stop();
  });

  it("1 + 1 = 2", function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it("can get role definition by id", async function() {
    const worksapceName = getWorkspaceName();
    const workspaceEndpoint = `https://${worksapceName}.vault.azure.net`;
    console.log(env.AZURE_CLIENT_SECRET);
    const credential = new EnvironmentCredential();
    const client = new AccessControlClient(workspaceEndpoint, credential);
    let id = "7af0c69a-a548-47d6-aea3-d00e69bd83aa";
    let getResult = await client.getRoleDefinitionById(id);
    assert.equal(
      getResult.name,
      "Sql Admin",
      "Unexpected name of role definition by getRoleDefinitionById."
    );
  });
});
