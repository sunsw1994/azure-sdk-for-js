// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as coreHttp from "@azure/core-http";
export interface AccesscontrolClientOptions extends coreHttp.PipelineOptions {
  /**
   * The accepted versions of the KeyVault's service API.
   */
  serviceVersion?: "7.0" | "7.1";
}


/**
 * Options for {@link getRoleDefinition}.
 */
export interface GetRoleDefinitionOptions extends coreHttp.OperationOptions {
  /**
   * The version of the role definition to retrieve.
   */
  version?: string;
}
