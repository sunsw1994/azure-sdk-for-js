// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SparkClient } from "../../src";

export default class TestClient {
  public readonly client: SparkClient;
  constructor(client: SparkClient) {
    this.client = client;
  }
  public formatName(name: string): string {
    return name.replace(/[^0-9a-zA-Z-]/g, "");
  }
}