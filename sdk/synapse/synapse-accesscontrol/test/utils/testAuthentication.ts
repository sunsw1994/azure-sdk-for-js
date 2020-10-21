// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { EnvironmentCredential } from "@azure/identity";
import { AccessControlClient } from "../../src";
import { record, RecorderEnvironmentSetup } from "@azure/test-utils-recorder";
import { uniqueString } from "./recorderUtils";
import TestClient from "./testClient";
import { getWorkspaceName } from "./utils.common";

export async function authenticate(that: any): Promise<any> {
  const secretSuffix = uniqueString();
  const recorderEnvSetup: RecorderEnvironmentSetup = {
    replaceableVariables: {
      AZURE_CLIENT_ID: "azure_client_id",
      AZURE_CLIENT_SECRET: "azure_client_secret",
      AZURE_TENANT_ID: "azure_tenant_id",
      WORKSPACE_NAME: "workspace_name"
    },
    customizationsOnRecordings: [],
    queryParametersToSkip: []
  };
  const recorder = record(that, recorderEnvSetup);
  //   const credential = await new ClientSecretCredential(
  //     env.AZURE_TENANT_ID,
  //     env.AZURE_CLIENT_ID,
  //     env.AZURE_CLIENT_SECRET
  //   );
  const credential = new EnvironmentCredential();

  const worksapceName = getWorkspaceName();
  const workspaceEndpoint = `https://${worksapceName}.vault.azure.net`;
  const client = new AccessControlClient(workspaceEndpoint, credential);
  const testClient = new TestClient(client);

  return { recorder, client, testClient, secretSuffix };
}
