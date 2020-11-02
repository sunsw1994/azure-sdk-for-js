// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/* eslint @typescript-eslint/member-ordering: 0 */
/// <reference lib="esnext.asynciterable" />

import {
  TokenCredential,
  PipelineOptions,
  createPipelineFromOptions,
  bearerTokenAuthenticationPolicy,
  operationOptionsToRequestOptionsBase
} from "@azure/core-http";

import { SynapseSpark } from "./generated";
import { logger } from "./logger";
import { SDK_VERSION } from "./constants";
import { createSpan } from "./tracing";
import { CanonicalCode } from "@opentelemetry/api";
// import { PagedAsyncIterableIterator } from "@azure/core-paging";

import {
  SparkClientOptions,
  GetSparkBatchJobOptions,
  ListSparkBatchJobOptions,
  CreateSparkBatchJobOptions,
  CancelSparkBatchJobOptions,
  GetSparkSessionOptions,
  ListSparkSessionOptions,
  CreateSparkSessionOptions,
  CancelSparkSessionOptions,
  OperationResponse,
} from "./models";

import {
  GetSparkBatchJobResponse,
  ListSparkBatchJobResponse,
  CreateSparkBatchJobResponse,
  GetSparkSessionResponse,
  ListSparkSessionResponse,
  CreateSparkSessionResponse
} from "./models";

import {
  SparkBatchJobOptions,
  SparkSessionOptions
} from "./generated/models"

export { PipelineOptions, logger };

export class SynapseSparkClient {
  /**
   * The base URL to the workspace
   */
  public readonly workspaceEndpoint: string;

  /**
   * @internal
   * @ignore
   * A reference to the auto-generated synapse accesscontrol HTTP client.
   */
  private readonly client: SynapseSpark;

  /**
   * Creates an instance of AccessControlClient.
   *
   * Example usage:
   * ```ts
   * import { AccessControlClient } from "@azure/synapse-spark";
   * import { DefaultAzureCredential } from "@azure/identity";
   *
   * let workspaceEndpoint = `https://<workspacename>.dev.azuresynapse.net`;
   * let credentials = new DefaultAzureCredential();
   *
   * let client = new AccessControlClient(vaultUrl, credentials);
   * ```
   * @param {string} workspaceEndpoint the base URL to the workspace.
   * @param {TokenCredential} credential An object that implements the `TokenCredential` interface used to authenticate requests to the service. Use the @azure/identity package to create a credential that suits your needs.
   * @param {PipelineOptions} [pipelineOptions] Optional. Pipeline options used to configure workspace API requests.
   *                                                         Omit this parameter to use the default pipeline configuration.
   * @memberof AccessControlClient
   */
  constructor(
    workspaceEndpoint: string,
    sparkPoolName: string,
    credential: TokenCredential,
    pipelineOptions: SparkClientOptions = {}
  ) {
    this.workspaceEndpoint = workspaceEndpoint;

    const libInfo = `azsdk-js-synapse-spark/${SDK_VERSION}`;

    const userAgentOptions = pipelineOptions.userAgentOptions;

    pipelineOptions.userAgentOptions = {
      ...pipelineOptions.userAgentOptions,
      userAgentPrefix:
        userAgentOptions && userAgentOptions.userAgentPrefix
          ? `${userAgentOptions.userAgentPrefix} ${libInfo}`
          : libInfo
    };

    const authPolicy = bearerTokenAuthenticationPolicy(
      credential,
      "https://dev.azuresynapse.net/.default"
    );

    const internalPipelineOptions = {
      ...pipelineOptions,
      ...{
        loggingOptions: {
          logger: logger.info
        }
      }
    };

    const pipeline = createPipelineFromOptions(internalPipelineOptions, authPolicy);

    this.client = new SynapseSpark(credential, workspaceEndpoint, sparkPoolName, pipeline);
  }

  public async getSparkBatchJob(
    batchId: number,
    options: GetSparkBatchJobOptions = {}
  ): Promise<GetSparkBatchJobResponse> {
    const { span, updatedOptions } = createSpan("Synapse-GetSparkBatchJob", options);

    try {
      const response = await this.client.sparkBatch.getSparkBatchJob(
        batchId,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  public async listSparkBatchJob(
    options: ListSparkBatchJobOptions = {}
  ): Promise<ListSparkBatchJobResponse> {
    const { span, updatedOptions } = createSpan("Synapse-ListSparkBatchJob", options);

    try {
      const response = await this.client.sparkBatch.getSparkBatchJobs(
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  public async createSparkBatchJob(
    sparkBatchJobOptions: SparkBatchJobOptions,
    options: CreateSparkBatchJobOptions = {}
  ): Promise<CreateSparkBatchJobResponse> {
    const { span, updatedOptions } = createSpan("Synapse-CreateSparkBatchJob", options);

    try {
      const response = await this.client.sparkBatch.createSparkBatchJob(
        sparkBatchJobOptions,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  public async cancelSparkBatchJob(
    batchId: number,
    options: CancelSparkBatchJobOptions = {}
  ): Promise<OperationResponse> {
    const { span, updatedOptions } = createSpan("Synapse-CancelSparkBatchJob", options);

    try {
      const response = await this.client.sparkBatch.cancelSparkBatchJob(
        batchId,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }


  public async getSparkSession(
    sessionId: number,
    options: GetSparkSessionOptions = {}
  ): Promise<GetSparkSessionResponse> {
    const { span, updatedOptions } = createSpan("Synapse-GetSparkSession", options);

    try {
      const response = await this.client.sparkSession.getSparkSession(
        sessionId,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  public async listSparkSession(
    options: ListSparkSessionOptions = {}
  ): Promise<ListSparkSessionResponse> {
    const { span, updatedOptions } = createSpan("Synapse-ListSparkSession", options);

    try {
      const response = await this.client.sparkSession.getSparkSessions(
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  public async createSparkSeesion(
    sparkSessionOptions: SparkSessionOptions,
    options: CreateSparkSessionOptions = {}
  ): Promise<CreateSparkSessionResponse> {
    const { span, updatedOptions } = createSpan("Synapse-CreateSparkSeesion", options);

    try {
      const response = await this.client.sparkSession.createSparkSession(
        sparkSessionOptions,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  public async cancelSparkSession(
    batchId: number,
    options: CancelSparkSessionOptions = {}
  ): Promise<OperationResponse> {
    const { span, updatedOptions } = createSpan("Synapse-CancelSparkSession", options);

    try {
      const response = await this.client.sparkSession.cancelSparkSession(
        batchId,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }  
}
