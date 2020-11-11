// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/// <reference lib="esnext.asynciterable" />

import {
  operationOptionsToRequestOptionsBase,
  OperationOptions,
  RestResponse
} from "@azure/core-http";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AuthenticationClient } from "./AuthenticationClient";
import { LROPoller } from "./generated/lro";
import { createSpan, getCanonicalCode } from "./utils/tracing";
import {
  ListPageSettings,
  DatasetResource,
  UpsertDatasetOptionalParams,
  UpsertDatasetResponse,
  GetDatasetOptionalParams,
  GetDatasetResponse
} from "./models";

export class DataSetClient extends AuthenticationClient {
  /**
   * Gets a dataset.
   * @param datasetName The dataset name.
   * @param options The options parameters.
   */

  public async get(
    datasetName: string,
    options: GetDatasetOptionalParams = {}
  ): Promise<GetDatasetResponse> {
    const { span, updatedOptions } = createSpan("DataSet-Get", options);

    try {
      const response = await this.client.dataset.getDataset(
        datasetName,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: getCanonicalCode(e),
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  private async *listDataSetsPage(
    continuationState: ListPageSettings,
    options: OperationOptions = {}
  ): AsyncIterableIterator<DatasetResource[]> {
    const requestOptions = operationOptionsToRequestOptionsBase(options);
    if (!continuationState.continuationToken) {
      const currentSetResponse = await this.client.dataset.getDatasetsByWorkspace(requestOptions);
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value;
      }
    }

    while (continuationState.continuationToken) {
      const currentSetResponse = await this.client.dataset.getDatasetsByWorkspaceNext(
        continuationState.continuationToken,
        requestOptions
      );
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value;
      } else {
        break;
      }
    }
  }

  private async *listDataSetsAll(
    options: OperationOptions = {}
  ): AsyncIterableIterator<DatasetResource> {
    for await (const page of this.listDataSetsPage({}, options)) {
      yield* page;
    }
  }

  /**
   * Lists datasets.
   * @param options The options parameters.
   */

  public list(options: OperationOptions = {}): PagedAsyncIterableIterator<DatasetResource> {
    const { span, updatedOptions } = createSpan("DataSet-List", options);
    try {
      const iter = this.listDataSetsAll(updatedOptions);
      return {
        next() {
          return iter.next();
        },
        [Symbol.asyncIterator]() {
          return this;
        },
        byPage: (settings: ListPageSettings = {}) => {
          return this.listDataSetsPage(settings, updatedOptions);
        }
      };
    } catch (e) {
      span.setStatus({
        code: getCanonicalCode(e),
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Creates or updates a dataset.
   * @param datasetName The dataset name.
   * @param dataset Dataset resource definition.
   * @param options The options parameters.
   */

  public async beginUpsert(
    datasetName: string,
    dataset: DatasetResource,
    options: UpsertDatasetOptionalParams = {}
  ): Promise<LROPoller<UpsertDatasetResponse>> {
    const { span, updatedOptions } = createSpan("DataSet-BeginUpsert", options);

    try {
      const response = await this.client.dataset.createOrUpdateDataset(
        datasetName,
        dataset,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: getCanonicalCode(e),
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Deletes a dataset.
   * @param datasetName The dataset name.
   * @param options The options parameters.
   */

  public async beginDelete(
    datasetName: string,
    options: OperationOptions = {}
  ): Promise<LROPoller<RestResponse>> {
    const { span, updatedOptions } = createSpan("DataSet-BeginDelete", options);

    try {
      const response = await this.client.dataset.deleteDataset(
        datasetName,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: getCanonicalCode(e),
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }
}