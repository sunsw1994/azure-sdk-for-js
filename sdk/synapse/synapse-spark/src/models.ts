// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PipelineOptions } from "@azure/core-http";
import { OperationOptions } from "@azure/core-http";

// import { HttpResponse } from "@azure/core-http";

import {
  SparkBatchGetSparkBatchJobResponse as GetSparkBatchJobResponse,
  // SynapseAccessControlGetRoleDefinitionsResponse as ListRoleDefinitionsResponse,
  // SynapseAccessControlCreateRoleAssignmentResponse as CreateRoleAssignmentResponse,
  // SynapseAccessControlGetRoleAssignmentsResponse as ListRoleAssignmentsResponse,
  // SynapseAccessControlGetRoleAssignmentsOptionalParams as ListRoleAssignmentsOptions,
  // SynapseAccessControlGetRoleAssignmentByIdResponse as GetRoleAssignmentByIdResponse,
  // SynapseAccessControlGetCallerRoleAssignmentsResponse as GetCallerRoleAssignmentsResponse
} from "./generated/models";

export {
  GetSparkBatchJobResponse,
  // GetCallerRoleAssignmentsResponse,
  // GetRoleDefinitionByIdResponse,
  // ListRoleDefinitionsResponse,
  // CreateRoleAssignmentResponse,
  // ListRoleAssignmentsResponse,
  // GetRoleAssignmentByIdResponse,
  // ListRoleAssignmentsOptions
};

/**
 * Options to create spark client.
 */
export interface SparkClientOptions extends PipelineOptions {}

/**
 * Options to get a role definition.
 */
export type GetSparkBatchJobOptions = OperationOptions;

// /**
//  * Options to get a role definition.
//  */
// export type GetRoleAssignmentOptions = OperationOptions;

// /**
//  * Options to list role definitions.
//  */
// export type ListRoleDefinitionOptions = OperationOptions;

// /**
//  * Options to create role assignment.
//  */
// export type CreateRoleAssignmentOptions = OperationOptions;

// /**
//  * Options to delete role assignment.
//  */
// export type DeleteRoleAssignmentOptions = OperationOptions;

// /**
//  * Options to delete role assignment.
//  */
// export type GetCallerRoleAssignmentsOptions = OperationOptions;

// /**
//  * Arguments for retrieving the next page of search results.
//  */
// export interface ListPageSettings {
//   /**
//    * A token used for retrieving the next page of results when the server
//    * enforces pagination.
//    */
//   continuationToken?: string;
// }

// /**
//  * Represents the repsonse for operations
//  */
// export interface OperationResponse {
//   /**
//    * The underlying HTTP response containing both raw and deserialized response data.
//    */
//   _response: HttpResponse;
// }

// export interface RoleAssignmentsListResponse {
//   /**
//    * List of Synapse role assignments.
//    */
//   value: string[];
// }

// /**
//  * Represents an object with a non-enumerable _response property which provides
//  */
// export type WithResponse<T> = T & { _response: HttpResponse };
