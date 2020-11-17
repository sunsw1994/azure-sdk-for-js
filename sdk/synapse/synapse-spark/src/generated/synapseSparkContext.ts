import * as coreHttp from "@azure/core-http";
import { SynapseSparkOptionalParams } from "./models";

const packageName = "@azure/synapse-spark";
const packageVersion = "1.0.0";

export class SynapseSparkContext extends coreHttp.ServiceClient {
  endpoint: string;
  livyApiVersion: string;
  sparkPoolName: string;

  /**
   * Initializes a new instance of the SynapseSparkContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param endpoint The workspace development endpoint, for example
   *                 https://myworkspace.dev.azuresynapse.net.
   * @param sparkPoolName Name of the spark pool.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    endpoint: string,
    sparkPoolName: string,
    options?: SynapseSparkOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }
    if (sparkPoolName === undefined) {
      throw new Error("'sparkPoolName' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri =
      options.endpoint ||
      "{endpoint}/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}";

    // Parameter assignments
    this.endpoint = endpoint;
    this.sparkPoolName = sparkPoolName;

    // Assigning values to Constant parameters
    this.livyApiVersion = options.livyApiVersion || "2019-11-01-preview";
  }
}