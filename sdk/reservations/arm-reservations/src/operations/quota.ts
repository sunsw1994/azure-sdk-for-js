/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/quotaMappers";
import * as Parameters from "../models/parameters";
import { AzureReservationAPIContext } from "../azureReservationAPIContext";

/** Class representing a Quota. */
export class Quota {
  private readonly client: AzureReservationAPIContext;

  /**
   * Create a Quota.
   * @param {AzureReservationAPIContext} client Reference to the service client.
   */
  constructor(client: AzureReservationAPIContext) {
    this.client = client;
  }

  /**
   * Gets the current service limits (quotas) and usage of a resource. The response from Get API can
   * be leveraged to submit quota update requests.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param resourceName The resource name for a resource provider, such as SKU name for
   * Microsoft.Compute, Sku or TotalLowPriorityCores for Microsoft.MachineLearningServices
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaGetResponse>
   */
  get(subscriptionId: string, providerId: string, location: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.QuotaGetResponse>;
  /**
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param resourceName The resource name for a resource provider, such as SKU name for
   * Microsoft.Compute, Sku or TotalLowPriorityCores for Microsoft.MachineLearningServices
   * @param callback The callback
   */
  get(subscriptionId: string, providerId: string, location: string, resourceName: string, callback: msRest.ServiceCallback<Models.CurrentQuotaLimitBase>): void;
  /**
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param resourceName The resource name for a resource provider, such as SKU name for
   * Microsoft.Compute, Sku or TotalLowPriorityCores for Microsoft.MachineLearningServices
   * @param options The optional parameters
   * @param callback The callback
   */
  get(subscriptionId: string, providerId: string, location: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CurrentQuotaLimitBase>): void;
  get(subscriptionId: string, providerId: string, location: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CurrentQuotaLimitBase>, callback?: msRest.ServiceCallback<Models.CurrentQuotaLimitBase>): Promise<Models.QuotaGetResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        providerId,
        location,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.QuotaGetResponse>;
  }

  /**
   * Create or update the service limits (quota) of a resource to requested value.
   * Steps:
   *
   * 1. Make the Get request to get the quota information for specific resource.
   *
   * 2. To increase the quota, update the limit field in the response from Get request to new value.
   *
   * 3. Submit the JSON to the quota request API to update the quota.
   * The Create quota request may be constructed as follows. The PUT operation can be used to update
   * the quota.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param resourceName The resource name for a resource provider, such as SKU name for
   * Microsoft.Compute, Sku or TotalLowPriorityCores for Microsoft.MachineLearningServices
   * @param createQuotaRequest Quota requests payload.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaCreateOrUpdateResponse>
   */
  createOrUpdate(subscriptionId: string, providerId: string, location: string, resourceName: string, createQuotaRequest: Models.CurrentQuotaLimitBase, options?: msRest.RequestOptionsBase): Promise<Models.QuotaCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(subscriptionId,providerId,location,resourceName,createQuotaRequest,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.QuotaCreateOrUpdateResponse>;
  }

  /**
   * Update the service limits (quota) of a resource to requested value.
   * Steps:
   *
   * 1. Make the Get request to get the quota information for specific resource.
   *
   * 2. To increase the quota, update the limit field in the response from Get request to new value.
   *
   * 3. Submit the JSON to the quota request API to update the quota.
   * The Update quota request may be constructed as follows. The PATCH operation can be used to
   * update the quota.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param resourceName The resource name for a resource provider, such as SKU name for
   * Microsoft.Compute, Sku or TotalLowPriorityCores for Microsoft.MachineLearningServices
   * @param createQuotaRequest Quota requests payload.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaUpdateResponse>
   */
  update(subscriptionId: string, providerId: string, location: string, resourceName: string, createQuotaRequest: Models.CurrentQuotaLimitBase, options?: msRest.RequestOptionsBase): Promise<Models.QuotaUpdateResponse> {
    return this.beginUpdate(subscriptionId,providerId,location,resourceName,createQuotaRequest,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.QuotaUpdateResponse>;
  }

  /**
   * Get a list of current service limits (quota) and usages of all the resources. The response from
   * List API can be leveraged to submit quota update requests.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaListResponse>
   */
  list(subscriptionId: string, providerId: string, location: string, options?: msRest.RequestOptionsBase): Promise<Models.QuotaListResponse>;
  /**
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param callback The callback
   */
  list(subscriptionId: string, providerId: string, location: string, callback: msRest.ServiceCallback<Models.QuotaLimits>): void;
  /**
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(subscriptionId: string, providerId: string, location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.QuotaLimits>): void;
  list(subscriptionId: string, providerId: string, location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.QuotaLimits>, callback?: msRest.ServiceCallback<Models.QuotaLimits>): Promise<Models.QuotaListResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        providerId,
        location,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.QuotaListResponse>;
  }

  /**
   * Create or update the service limits (quota) of a resource to requested value.
   * Steps:
   *
   * 1. Make the Get request to get the quota information for specific resource.
   *
   * 2. To increase the quota, update the limit field in the response from Get request to new value.
   *
   * 3. Submit the JSON to the quota request API to update the quota.
   * The Create quota request may be constructed as follows. The PUT operation can be used to update
   * the quota.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param resourceName The resource name for a resource provider, such as SKU name for
   * Microsoft.Compute, Sku or TotalLowPriorityCores for Microsoft.MachineLearningServices
   * @param createQuotaRequest Quota requests payload.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(subscriptionId: string, providerId: string, location: string, resourceName: string, createQuotaRequest: Models.CurrentQuotaLimitBase, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        subscriptionId,
        providerId,
        location,
        resourceName,
        createQuotaRequest,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Update the service limits (quota) of a resource to requested value.
   * Steps:
   *
   * 1. Make the Get request to get the quota information for specific resource.
   *
   * 2. To increase the quota, update the limit field in the response from Get request to new value.
   *
   * 3. Submit the JSON to the quota request API to update the quota.
   * The Update quota request may be constructed as follows. The PATCH operation can be used to
   * update the quota.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource provider id.
   * @param location Azure region.
   * @param resourceName The resource name for a resource provider, such as SKU name for
   * Microsoft.Compute, Sku or TotalLowPriorityCores for Microsoft.MachineLearningServices
   * @param createQuotaRequest Quota requests payload.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(subscriptionId: string, providerId: string, location: string, resourceName: string, createQuotaRequest: Models.CurrentQuotaLimitBase, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        subscriptionId,
        providerId,
        location,
        resourceName,
        createQuotaRequest,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Get a list of current service limits (quota) and usages of all the resources. The response from
   * List API can be leveraged to submit quota update requests.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaListResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.QuotaListResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.QuotaLimits>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.QuotaLimits>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.QuotaLimits>, callback?: msRest.ServiceCallback<Models.QuotaLimits>): Promise<Models.QuotaListResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.QuotaListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimits/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.providerId,
    Parameters.location0,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CurrentQuotaLimitBase,
      headersMapper: Mappers.QuotaGetHeaders
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse,
      headersMapper: Mappers.QuotaGetHeaders
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimits",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.providerId,
    Parameters.location0
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.QuotaLimits,
      headersMapper: Mappers.QuotaListHeaders
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse,
      headersMapper: Mappers.QuotaListHeaders
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimits/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.providerId,
    Parameters.location0,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "createQuotaRequest",
    mapper: {
      ...Mappers.CurrentQuotaLimitBase,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestOneResourceSubmitResponse
    },
    201: {
      bodyMapper: Mappers.QuotaRequestSubmitResponse201
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimits/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.providerId,
    Parameters.location0,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "createQuotaRequest",
    mapper: {
      ...Mappers.CurrentQuotaLimitBase,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestOneResourceSubmitResponse
    },
    201: {
      bodyMapper: Mappers.QuotaRequestSubmitResponse201
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.QuotaLimits,
      headersMapper: Mappers.QuotaListHeaders
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse,
      headersMapper: Mappers.QuotaListHeaders
    }
  },
  serializer
};