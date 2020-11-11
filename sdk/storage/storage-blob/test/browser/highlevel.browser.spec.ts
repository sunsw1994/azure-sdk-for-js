import * as assert from "assert";

import { AbortController } from "@azure/abort-controller";
import {
  arrayBufferEqual,
  blobToArrayBuffer,
  blobToString,
  bodyToString,
  getBrowserFile,
  getBSU,
  isIE,
  recorderEnvSetup
} from "../utils/index.browser";
import { record, Recorder } from "@azure/test-utils-recorder";
import { ContainerClient, BlobClient, BlockBlobClient, BlobServiceClient } from "../../src";

// tslint:disable:no-empty
describe("Highlevel", () => {
  let containerName: string;
  let containerClient: ContainerClient;
  let blobName: string;
  let blobClient: BlobClient;
  let blockBlobClient: BlockBlobClient;
  let tempFile1: File;
  const tempFile1Length: number = 257 * 1024 * 1024 - 1;
  let tempFile2: File;
  const tempFile2Length: number = 1 * 1024 * 1024 - 1;

  let recorder: Recorder;

  let blobServiceClient: BlobServiceClient;
  beforeEach(async function() {
    recorder = record(this, recorderEnvSetup);
    blobServiceClient = getBSU();
    containerName = recorder.getUniqueName("container");
    containerClient = blobServiceClient.getContainerClient(containerName);
    await containerClient.create();
    blobName = recorder.getUniqueName("blob");
    blobClient = containerClient.getBlobClient(blobName);
    blockBlobClient = blobClient.getBlockBlobClient();
  });

  afterEach(async function() {
    if (!this.currentTest?.isPending()) {
      await containerClient.delete();
      await recorder.stop();
    }
  });

  before(async function() {
    recorder = record(this, recorderEnvSetup);
    tempFile1 = getBrowserFile(recorder.getUniqueName("browserfile"), tempFile1Length);
    tempFile2 = getBrowserFile(recorder.getUniqueName("browserfile2"), tempFile2Length);
    await recorder.stop();
  });

  after(async () => {});

  it("uploadBrowserDataToBlockBlob should abort when blob >= BLOCK_BLOB_MAX_UPLOAD_BLOB_BYTES", async () => {
    recorder.skip("browser", "Temp file - recorder doesn't support saving the file");
    const aborter = AbortController.timeout(1);

    try {
      await blockBlobClient.uploadBrowserData(tempFile1, {
        abortSignal: aborter
      });
      assert.fail();
    } catch (err) {
      assert.equal(err.name, "AbortError");
    }
  });

  it("uploadBrowserDataToBlockBlob should abort when blob < BLOCK_BLOB_MAX_UPLOAD_BLOB_BYTES", async () => {
    recorder.skip("browser", "Temp file - recorder doesn't support saving the file");
    const aborter = AbortController.timeout(1);

    try {
      await blockBlobClient.uploadBrowserData(tempFile2, {
        abortSignal: aborter,
        blockSize: 4 * 1024 * 1024,
        concurrency: 2
      });
      assert.fail();
    } catch (err) {
      assert.equal(err.name, "AbortError");
    }
  });

  it("uploadBrowserDataToBlockBlob should update progress when blob >= BLOCK_BLOB_MAX_UPLOAD_BLOB_BYTES", async () => {
    recorder.skip("browser", "Temp file - recorder doesn't support saving the file");
    let eventTriggered = false;
    const aborter = new AbortController();

    try {
      await blockBlobClient.uploadBrowserData(tempFile1, {
        abortSignal: aborter.signal,
        blockSize: 4 * 1024 * 1024,
        concurrency: 2,
        onProgress: (ev) => {
          assert.ok(ev.loadedBytes);
          eventTriggered = true;
          aborter.abort();
        }
      });
    } catch (err) {}
    assert.ok(eventTriggered);
  });

  it("uploadBrowserDataToBlockBlob should update progress when blob < BLOCK_BLOB_MAX_UPLOAD_BLOB_BYTES", async () => {
    recorder.skip("browser", "Temp file - recorder doesn't support saving the file");
    let eventTriggered = false;
    const aborter = new AbortController();

    try {
      await blockBlobClient.uploadBrowserData(tempFile2, {
        abortSignal: aborter.signal,
        blockSize: 4 * 1024 * 1024,
        concurrency: 2,
        onProgress: (ev) => {
          assert.ok(ev.loadedBytes);
          eventTriggered = true;
          aborter.abort();
        }
      });
    } catch (err) {}
    assert.ok(eventTriggered);
  });

  it("uploadBrowserDataToBlockBlob should success when blob < BLOCK_BLOB_MAX_UPLOAD_BLOB_BYTES", async () => {
    recorder.skip("browser", "Temp file - recorder doesn't support saving the file");
    await blockBlobClient.uploadBrowserData(tempFile2, {
      blockSize: 4 * 1024 * 1024,
      concurrency: 2
    });

    const downloadResponse = await blockBlobClient.download(0);
    const downloadedString = await bodyToString(downloadResponse);
    const uploadedString = await blobToString(tempFile2);

    assert.equal(uploadedString, downloadedString);
  });

  it("uploadBrowserDataToBlockBlob should success when blob < BLOCK_BLOB_MAX_UPLOAD_BLOB_BYTES and configured maxSingleShotSize", async () => {
    recorder.skip("browser", "Temp file - recorder doesn't support saving the file");
    await blockBlobClient.uploadBrowserData(tempFile2, {
      blockSize: 512 * 1024,
      maxSingleShotSize: 0
    });

    const downloadResponse = await blockBlobClient.download(0);
    const downloadedString = await bodyToString(downloadResponse);
    const uploadedString = await blobToString(tempFile2);

    assert.equal(uploadedString, downloadedString);
  });

  it("uploadBrowserDataToBlockBlob should work with tags", async function() {
    recorder.skip("browser", "Temp file - recorder doesn't support saving the file");

    const tags = {
      tag1: "val1",
      tag2: "val2"
    };

    await blockBlobClient.uploadBrowserData(tempFile2, {
      blockSize: 512 * 1024,
      maxSingleShotSize: 0,
      tags
    });

    const response = await blockBlobClient.getTags();
    assert.deepStrictEqual(response.tags, tags);
  });

  it("uploadBrowserDataToBlockBlob should success when blob >= BLOCK_BLOB_MAX_UPLOAD_BLOB_BYTES", async function() {
    recorder.skip("browser", "Temp file - recorder doesn't support saving the file");
    if (isIE()) {
      assert.ok(
        true,
        "Skip this case in IE11 which doesn't have enough memory for downloading validation"
      );
      this.skip();
    }

    await blockBlobClient.uploadBrowserData(tempFile1, {
      blockSize: 4 * 1024 * 1024,
      concurrency: 2
    });

    const downloadResponse = await blockBlobClient.download(0);
    const buf1 = await blobToArrayBuffer(await downloadResponse.blobBody!);
    const buf2 = await blobToArrayBuffer(tempFile1);

    assert.ok(arrayBufferEqual(buf1, buf2));
  });

  it("set tier while upload", async () => {
    recorder.skip("browser", "Temp file - recorder doesn't support saving the file");
    // single upload
    await blockBlobClient.uploadBrowserData(tempFile2, {
      tier: "Hot",
      maxSingleShotSize: 256 * 1024 * 1024
    });
    assert.equal((await blockBlobClient.getProperties()).accessTier, "Hot");

    await blockBlobClient.uploadBrowserData(tempFile2, {
      tier: "Cool",
      maxSingleShotSize: 256 * 1024
    });
    assert.equal((await blockBlobClient.getProperties()).accessTier, "Cool");
  });

  it("uploadData should work with Blob, ArrayBuffer and ArrayBufferView", async () => {
    const byteLength = 10;
    const arrayBuf = new ArrayBuffer(byteLength);
    const uint8Array = new Uint8Array(arrayBuf);
    for (let i = 0; i < byteLength; i++) {
      uint8Array[i] = i;
    }

    const blob = new Blob([arrayBuf]);
    await blockBlobClient.uploadData(blob);
    const downloadedBlob = await (await blockBlobClient.download()).blobBody;
    assert.deepStrictEqual(downloadedBlob, blob);

    await blockBlobClient.uploadData(arrayBuf);
    const downloadedBlob1 = await (await blockBlobClient.download()).blobBody;
    assert.deepStrictEqual(downloadedBlob1, blob);

    const uint8ArrayPartial = new Uint8Array(arrayBuf, 1, 3);
    await blockBlobClient.uploadData(uint8ArrayPartial);
    const downloadedBlob2 = await (await blockBlobClient.download()).blobBody!;
    assert.deepStrictEqual(downloadedBlob2, new Blob([uint8ArrayPartial]));

    const uint16Array = new Uint16Array(arrayBuf, 4, 2);
    await blockBlobClient.uploadData(uint16Array);
    const downloadedBlob3 = await (await blockBlobClient.download()).blobBody!;
    assert.deepStrictEqual(downloadedBlob3, new Blob([uint16Array]));
  });
});
