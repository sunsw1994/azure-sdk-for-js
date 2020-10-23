// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PipelineOptions, OperationOptions } from "@azure/core-http";

import {
  SynapseAccessControlGetRoleDefinitionByIdResponse as GetRoleDefinitionByIdResponse,
  SynapseAccessControlGetRoleDefinitionsResponse as ListRoleDefinitionsResponse
} from "./generated/models";

export { GetRoleDefinitionByIdResponse, ListRoleDefinitionsResponse };

/**
 * Options to create accesscontrol client.
 */
export interface AccesscontrolClientOptions extends PipelineOptions {}

/**
 * Options to get a role definition.
 */
export type GetRoleDefinitionOptions = OperationOptions;

/**
 * Options to list role definitions.
 */
export type ListRoleDefinitionOptions = OperationOptions;

/**
 * Arguments for retrieving the next page of search results.
 */
export interface ListPageSettings {
  /**
   * A token used for retrieving the next page of results when the server
   * enforces pagination.
   */
  continuationToken?: string;
}
