// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AccessControlClient } from "../../src";

export default class TestClient {
  public readonly client: AccessControlClient;
  constructor(client: AccessControlClient) {
    this.client = client;
  }
  public formatName(name: string): string {
    return name.replace(/[^0-9a-zA-Z-]/g, "");
  }
  public async getRoleDefinition(id: string): Promise<void> {
    await this.client.getRoleDefinitionById(id);
  }
}
