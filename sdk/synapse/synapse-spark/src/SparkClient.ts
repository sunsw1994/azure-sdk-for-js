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
  ResetSparkSessionTimeoutOptions,
  GetSparkStatementOptions,
  ListSparkStatementOptions,
  CreateSparkStatementOptions,
  CancelSparkStatementOptions,
  OperationResponse
} from "./models";

import {
  GetSparkBatchJobResponse,
  ListSparkBatchJobResponse,
  CreateSparkBatchJobResponse,
  GetSparkSessionResponse,
  ListSparkSessionResponse,
  CreateSparkSessionResponse,
  GetSparkStatementResponse,
  ListSparkStatementResponse,
  CreateSparkStatementResponse
} from "./models";

import {
  SparkBatchJobOptions,
  SparkSessionOptions,
  SparkStatementOptions
} from "./generated/models";

export { PipelineOptions, logger };

export class SparkClient {
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
    sessionId: number,
    options: CancelSparkSessionOptions = {}
  ): Promise<OperationResponse> {
    const { span, updatedOptions } = createSpan("Synapse-CancelSparkSession", options);

    try {
      const response = await this.client.sparkSession.resetSparkSessionTimeout(
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

  public async resetSparkSessionTimeout(
    sessionId: number,
    options: ResetSparkSessionTimeoutOptions
  ): Promise<OperationResponse> {
    const { span, updatedOptions } = createSpan("Synapse-ResetSparkSessionTimeout", options);

    try {
      const response = await this.client.sparkSession.resetSparkSessionTimeout(
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

  public async getSparkStatement(
    sessionId: number,
    statementId: number,
    options: GetSparkStatementOptions = {}
  ): Promise<GetSparkStatementResponse> {
    const { span, updatedOptions } = createSpan("Synapse-GetSparkStatement", options);

    try {
      const response = await this.client.sparkSession.getSparkStatement(
        sessionId,
        statementId,
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

  public async listSparkStatement(
    sessionId: number,
    options: ListSparkStatementOptions = {}
  ): Promise<ListSparkStatementResponse> {
    const { span, updatedOptions } = createSpan("Synapse-ListSparkStatement", options);

    try {
      const response = await this.client.sparkSession.getSparkStatements(
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

  public async createSparkStatement(
    sessionId: number,
    sparkStatementOptions: SparkStatementOptions,
    options: CreateSparkStatementOptions = {}
  ): Promise<CreateSparkStatementResponse> {
    const { span, updatedOptions } = createSpan("Synapse-CreateSparkStatement", options);

    try {
      const response = await this.client.sparkSession.createSparkStatement(
        sessionId,
        sparkStatementOptions,
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

  public async cancelSparkStatement(
    sessionId: number,
    statementId: number,
    options: CancelSparkStatementOptions = {}
  ): Promise<OperationResponse> {
    const { span, updatedOptions } = createSpan("Synapse-CancelSparkStatement", options);

    try {
      const response = await this.client.sparkSession.cancelSparkStatement(
        sessionId,
        statementId,
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
