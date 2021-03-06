// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates data feed management operations.
 */
// Load the .env file if it exists
require("dotenv").config();
const {
  MetricsAdvisorKeyCredential,
  MetricsAdvisorAdministrationClient
} = require("@azure/ai-metrics-advisor");

async function main() {
  // You will need to set these environment variables or edit the following values
  const endpoint = process.env["METRICS_ADVISOR_ENDPOINT"] || "<service endpoint>";
  const subscriptionKey = process.env["METRICS_ADVISOR_SUBSCRIPTION_KEY"] || "<subscription key>";
  const apiKey = process.env["METRICS_ADVISOR_API_KEY"] || "<api key>";
  const credential = new MetricsAdvisorKeyCredential(subscriptionKey, apiKey);
  const existingDataFeedId = process.env["METRICS_ADVISOR_DATAFEED_ID"] || "<datafeed id>";

  const adminClient = new MetricsAdvisorAdministrationClient(endpoint, credential);
  await listDataFeeds(adminClient);
  await getDataFeed(adminClient, existingDataFeedId);
  const created = await createDataFeed(adminClient);
  await updateDataFeed(adminClient, created.id);
  await deleteDataFeed(adminClient, created.id);
}

async function listDataFeeds(client) {
  console.log("Listing Datafeeds ...");
  console.log("  using while loop");
  const iter = client.listDataFeeds({
    filter: {
      // dataFeedName: "js-blob-datafeed"
    }
  });
  let result = await iter.next();
  while (!result.done) {
    console.log(`id :${result.value.id}, name: ${result.value.name}`);
    result = await iter.next();
  }

  // second approach
  console.log("  using for-await-of loop");
  for await (const datatFeed of client.listDataFeeds()) {
    console.log(`id :${datatFeed.id}, name: ${datatFeed.name}`);
  }

  // by pages
  console.log("  by pages");
  const pages = client.listDataFeeds().byPage({ maxPageSize: 1 });
  let page = await pages.next();
  let i = 1;
  while (!page.done) {
    if (page.value.dataFeeds) {
      console.log(`-- page ${i++}`);
      for (const feed of page.value.dataFeeds) {
        console.log(`  ${feed.id} - ${feed.name}`);
      }
    }
    page = await pages.next();
  }
}

async function createDataFeed(client) {
  const metrics = [
    {
      name: "Metric1",
      displayName: "Metric1",
      description: ""
    },
    {
      name: "Metric2",
      displayName: "Metric2",
      description: ""
    }
  ];
  const dimension = [
    { name: "Dim1", displayName: "Dim1 display" },
    { name: "Dim2", displayName: "Dim2 display" }
  ];
  const dataFeedSchema = {
    metrics,
    dimensions: dimension,
    timestampColumn: null
  };
  const dataFeedIngestion = {
    ingestionStartTime: new Date(Date.UTC(2020, 8, 21)),
    ingestionStartOffsetInSeconds: 0,
    dataSourceRequestConcurrency: -1,
    ingestionRetryDelayInSeconds: -1,
    stopRetryAfterInSeconds: -1
  };
  const granularity = {
    granularityType: "Daily"
  };
  const source = {
    dataSourceType: "AzureBlob",
    dataSourceParameter: {
      connectionString:
        process.env.METRICS_ADVISOR_AZURE_BLOB_CONNECTION_STRING ||
        "<Azure Blob storage connection string>",
      container: process.env.METRICS_ADVISOR_AZURE_BLOB_CONTAINER || "<Azure Blob container name>",
      blobTemplate:
        process.env.METRICS_ADVISOR_AZURE_BLOB_TEMPLATE || "<Azure Blob data file name template>"
    }
  };
  const options = {
    rollupSettings: {
      rollupType: "AutoRollup",
      rollupMethod: "Sum",
      rollupIdentificationValue: "__CUSTOM_SUM__"
    },
    missingDataPointFillSettings: {
      fillType: "CustomValue",
      customFillValue: 567
    },
    accessMode: "Private"
  };

  console.log("Creating Datafeed...");
  const result = await client.createDataFeed({
    name: "test-datafeed-" + new Date().getTime().toFixed(),
    source,
    granularity,
    schema: dataFeedSchema,
    ingestionSettings: dataFeedIngestion,
    options
  });
  console.dir(result);
  return result;
}

async function getDataFeed(client, dataFeedId) {
  console.log("Retrieving datafeed by id...");
  const result = await client.getDataFeed(dataFeedId);
  console.log("datafeed result is as follows - ");
  console.log(`  id: ${result.id}`);
  console.log(`  data source type: ${result.source.dataSourceType}`);
  console.log(`  name: ${result.name}`);
}

async function updateDataFeed(client, dataFeedId) {
  const patch = {
    source: {
      dataSourceType: "AzureBlob"
    },
    name: "new name test-datafeed " + new Date().getTime().toString(),
    ingestionSettings: {
      ingestionStartTime: new Date(Date.UTC(2020, 8, 15)),
      ingestionRetryDelayInSeconds: 3000,
      stopRetryAfterInSeconds: 667777,
      ingestionStartOffsetInSeconds: 4444
    },
    options: {
      dataFeedDescription: "New datafeed description",
      missingDataPointFillSettings: {
        fillType: "SmartFilling"
      },
      status: "Paused"
    }
  };

  try {
    console.log(`Updating datafeed ${dataFeedId}...`);
    const updated = await client.updateDataFeed(dataFeedId, patch);
    console.dir(updated);
  } catch (err) {
    console.log("Error occured when updating data feed");
    console.log(err);
  }
}

async function deleteDataFeed(client, dataFeedId) {
  console.log(`Deleting datafeed ${dataFeedId}...`);
  await client.deleteDataFeed(dataFeedId);
}

main()
  .then(() => {
    console.log("Succeeded");
    return;
  })
  .catch((err) => {
    console.log("Error occurred:");
    console.log(err);
  });
