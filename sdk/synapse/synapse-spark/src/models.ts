// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PipelineOptions } from "@azure/core-http";
import { OperationOptions } from "@azure/core-http";
import { HttpResponse } from "@azure/core-http";

import {
  SparkBatchGetSparkBatchJobResponse as GetSparkBatchJobResponse,
  SparkBatchGetSparkBatchJobsResponse as ListSparkBatchJobResponse,
  SparkBatchCreateSparkBatchJobResponse as CreateSparkBatchJobResponse,
  SparkSessionGetSparkSessionResponse as GetSparkSessionResponse,
  SparkSessionGetSparkSessionsResponse as ListSparkSessionResponse,
  SparkSessionCreateSparkSessionResponse as CreateSparkSessionResponse
} from "./generated/models";

export {
  GetSparkBatchJobResponse,
  ListSparkBatchJobResponse,
  CreateSparkBatchJobResponse,
  GetSparkSessionResponse,
  ListSparkSessionResponse,
  CreateSparkSessionResponse
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
//  * Options to list role definitions.
//  */
export type ListSparkBatchJobOptions = OperationOptions;

// /**
//  * Options to create role assignment.
//  */
export type CreateSparkBatchJobOptions = OperationOptions;

// /**
//  * Options to delete role assignment.
//  */
export type CancelSparkBatchJobOptions = OperationOptions;

/**
 * Options to get a role definition.
 */
export type GetSparkSessionOptions = OperationOptions;

// /**
//  * Options to list role definitions.
//  */
export type ListSparkSessionOptions = OperationOptions;

// /**
//  * Options to create role assignment.
//  */
export type CreateSparkSessionOptions = OperationOptions;

// /**
//  * Options to delete role assignment.
//  */
export type CancelSparkSessionOptions = OperationOptions;

// /**
//  * Options to delete role assignment.
//  */
// export type GetCallerRoleAssignmentsOptions = OperationOptions;

// /**
//  * Arguments for retrieving the next page of search results.
//  */
export interface ListPageSettings {
  /**
   * A token used for retrieving the next page of results when the server
   * enforces pagination.
   */
  continuationToken?: string;
}

// /**
//  * Represents the repsonse for operations
//  */
export interface OperationResponse {
  /**
   * The underlying HTTP response containing both raw and deserialized response data.
   */
  _response: HttpResponse;
}

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
