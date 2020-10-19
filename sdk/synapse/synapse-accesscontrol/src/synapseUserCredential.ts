import {
  InternalPipelineOptions,
  PipelineOptions,
  ServiceClientOptions,
  TokenCredential,
  createPipelineFromOptions,
  bearerTokenAuthenticationPolicy
} from "@azure/core-http";

import { SDK_VERSION } from "./constants";
//export const SDK_VERSION: string = "1.0.0-beta.2";
//export const LIB_INFO = `azsdk-js-schema-registry/${SDK_VERSION}`;


export function createPipeline(
  options: PipelineOptions,
  credential: TokenCredential 
): ServiceClientOptions {
  const internalOptions = convertPipelineOptions(options);
  const policy = bearerTokenAuthenticationPolicy(credential, "https://dev.azuresynapse.net/.default");
  return createPipelineFromOptions(internalOptions, policy);
}

function convertPipelineOptions(options: PipelineOptions): InternalPipelineOptions {
  if (!options.userAgentOptions) {
    options.userAgentOptions = {};
  }

  if (options.userAgentOptions.userAgentPrefix) {
    options.userAgentOptions.userAgentPrefix = `${options.userAgentOptions.userAgentPrefix} ${SDK_VERSION}`;
  } else {
    options.userAgentOptions.userAgentPrefix = SDK_VERSION;
  }

  return {
    ...options,
  };
}
