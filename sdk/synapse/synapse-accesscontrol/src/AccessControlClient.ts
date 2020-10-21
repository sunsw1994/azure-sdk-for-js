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

import { SynapseAccessControl } from "./generated";
import { logger } from "./logger";
import { SDK_VERSION } from "./constants";
import { createSpan } from "./tracing";
import { CanonicalCode } from "@opentelemetry/api";

import { AccesscontrolClientOptions, GetRoleDefinitionOptions } from "./models";

import { SynapseRole } from "./generated/models";

export { PipelineOptions, logger };

export class AccessControlClient {
  /**
   * The base URL to the workspace
   */
  public readonly workspaceEndpoint: string;

  /**
   * @internal
   * @ignore
   * A reference to the auto-generated synapse accesscontrol HTTP client.
   */
  public readonly client: SynapseAccessControl;

  /**
   * Creates an instance of AccessControlClient.
   *
   * Example usage:
   * ```ts
   * import { AccessControlClient } from "@azure/synapse-accesscontrol";
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
    credential: TokenCredential,
    pipelineOptions: AccesscontrolClientOptions = {}
  ) {
    this.workspaceEndpoint = workspaceEndpoint;

    const libInfo = `azsdk-js-synapse-accesscontrol/${SDK_VERSION}`;

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

    this.client = new SynapseAccessControl(credential, workspaceEndpoint, pipeline);
  }

  /**
   * The getRoleDefinitionById method is applicable to any role definition defined by Synapse. This operation requires
   * the specified scope permission.
   *
   * Example usage:
   * ```ts
   * let client = new AccessControlClient(endpoint, credentials);
   * let roleDefinition = await client.getRoleDefinitionById("roleId");
   * ```
   * @summary Get a role definition from a given scope.
   * @param {string} roleId The id of the role definition.
   * @param {GetRoleDefinitionOptions} [options] The optional parameters.
   */
  public async getRoleDefinitionById(
    roleId: string,
    options: GetRoleDefinitionOptions = {}
  ): Promise<SynapseRole> {
    const { span, updatedOptions } = createSpan("GetRoleDefinitionOptions", options);

    try {
      const response = await this.client.getRoleDefinitionById(
        roleId,
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
