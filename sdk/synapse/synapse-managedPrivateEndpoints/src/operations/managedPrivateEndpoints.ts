import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ManagedPrivateEndpointsClient } from "../managedPrivateEndpointsClient";
import {
  ManagedPrivateEndpointsGetResponse,
  ManagedPrivateEndpoint,
  ManagedPrivateEndpointsCreateResponse,
  ManagedPrivateEndpointsListResponse,
  ManagedPrivateEndpointsListNextResponse
} from "../models";

/**
 * Class representing a ManagedPrivateEndpoints.
 */
export class ManagedPrivateEndpoints {
  private readonly client: ManagedPrivateEndpointsClient;

  /**
   * Initialize a new instance of the class ManagedPrivateEndpoints class.
   * @param client Reference to the service client
   */
  constructor(client: ManagedPrivateEndpointsClient) {
    this.client = client;
  }

  /**
   * Get Managed Private Endpoints
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedPrivateEndpointName Managed private endpoint name
   * @param options The options parameters.
   */
  get(
    managedVirtualNetworkName: string,
    managedPrivateEndpointName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedPrivateEndpointsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        managedVirtualNetworkName,
        managedPrivateEndpointName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<ManagedPrivateEndpointsGetResponse>;
  }

  /**
   * Create Managed Private Endpoints
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedPrivateEndpointName Managed private endpoint name
   * @param managedPrivateEndpoint Managed private endpoint properties.
   * @param options The options parameters.
   */
  create(
    managedVirtualNetworkName: string,
    managedPrivateEndpointName: string,
    managedPrivateEndpoint: ManagedPrivateEndpoint,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedPrivateEndpointsCreateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        managedVirtualNetworkName,
        managedPrivateEndpointName,
        managedPrivateEndpoint,
        options: operationOptions
      },
      createOperationSpec
    ) as Promise<ManagedPrivateEndpointsCreateResponse>;
  }

  /**
   * Delete Managed Private Endpoints
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedPrivateEndpointName Managed private endpoint name
   * @param options The options parameters.
   */
  delete(
    managedVirtualNetworkName: string,
    managedPrivateEndpointName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        managedVirtualNetworkName,
        managedPrivateEndpointName,
        options: operationOptions
      },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * List Managed Private Endpoints
   * @param managedVirtualNetworkName Managed virtual network name
   * @param options The options parameters.
   */
  list(
    managedVirtualNetworkName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedPrivateEndpointsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { managedVirtualNetworkName, options: operationOptions },
      listOperationSpec
    ) as Promise<ManagedPrivateEndpointsListResponse>;
  }

  /**
   * ListNext
   * @param managedVirtualNetworkName Managed virtual network name
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    managedVirtualNetworkName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedPrivateEndpointsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { managedVirtualNetworkName, nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<ManagedPrivateEndpointsListNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/managedVirtualNetworks/{managedVirtualNetworkName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedPrivateEndpoint
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.managedVirtualNetworkName,
    Parameters.managedPrivateEndpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreHttp.OperationSpec = {
  path:
    "/managedVirtualNetworks/{managedVirtualNetworkName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedPrivateEndpoint
    }
  },
  requestBody: Parameters.managedPrivateEndpoint,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.managedVirtualNetworkName,
    Parameters.managedPrivateEndpointName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/managedVirtualNetworks/{managedVirtualNetworkName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
  httpMethod: "DELETE",
  responses: { 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.managedVirtualNetworkName,
    Parameters.managedPrivateEndpointName
  ],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/managedVirtualNetworks/{managedVirtualNetworkName}/managedPrivateEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedPrivateEndpointListResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.managedVirtualNetworkName],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedPrivateEndpointListResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.managedVirtualNetworkName, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
