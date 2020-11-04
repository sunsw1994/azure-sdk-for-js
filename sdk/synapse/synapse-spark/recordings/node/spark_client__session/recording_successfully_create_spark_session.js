let nock = require('nock');

module.exports.hash = "a95bcf887b221ee9654bb39edef9b135";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fdev.azuresynapse.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '4f6053f4-a674-4aa1-8c32-acdae9751800',
  'x-ms-ests-server',
  '2.1.11198.13 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AvSjm05bvIpFsM01HZDo2t1J0eYvAQAAANU3NNcOAAAA; expires=Fri, 04-Dec-2020 05:49:10 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 04 Nov 2020 05:49:10 GMT',
  'Content-Length',
  '1322'
]);

nock('https://workspace_name.dev.azuresynapse.net:443', {"encodedQueryParams":true})
  .post('/livyApi/versions/2019-11-01-preview/sparkPools/sparkpool_name/sessions', {"name":"testSession","driverMemory":"8g","driverCores":4,"executorMemory":"8g","executorCores":4,"numExecutors":2})
  .query(true)
  .reply(200, {"livyInfo":{"notStartedAt":null,"startingAt":null,"idleAt":null,"deadAt":null,"shuttingDownAt":null,"killedAt":null,"recoveringAt":null,"busyAt":null,"errorAt":null,"currentState":"not_started","jobCreationRequest":{"name":"testSession","conf":{},"driverMemory":"8g","driverCores":4,"executorMemory":"8g","executorCores":4,"numExecutors":2}},"name":"testSession","workspaceName":"workspace_name","computeName":"sparkpool_name","sparkPoolName":"sparkpool_name","submitterId":"bf4f36df-eda0-4fc4-9602-69d6ff714d8c","artifactId":"Livy","jobType":"SparkSession","result":"Uncertain","schedulerInfo":{"submittedAt":"2020-11-04T05:49:11.1712566+00:00","scheduledAt":null,"endedAt":null,"cancellationRequestedAt":null,"currentState":"Queued"},"pluginInfo":{"preparationStartedAt":null,"resourceAcquisitionStartedAt":null,"submissionStartedAt":null,"monitoringStartedAt":null,"cleanupStartedAt":null,"currentState":"Preparation"},"tags":{},"id":37,"appId":null,"appInfo":null,"state":"not_started","log":null}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Kestrel Microsoft-HTTPAPI/2.0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-job-submitted-by-name',
  'bf4f36df-eda0-4fc4-9602-69d6ff714d8c',
  'x-ms-job-submitted-on',
  '11/4/2020 5:49:11 AM +00:00',
  'x-ms-job-scheduled-on',
  '1/1/0001 12:00:00 AM +00:00',
  'x-ms-job-ended-on',
  '',
  'x-ms-job-scheduler-state',
  'Queued',
  'x-ms-job-internal-id',
  '37',
  'x-ms-job-result',
  'Uncertain',
  'x-ms-job-type',
  'SparkServiceSession',
  'x-ms-job-queued-on',
  '1/1/0001 12:00:00 AM +00:00',
  'x-ms-job-clusterrequested-on',
  '1/1/0001 12:00:00 AM +00:00',
  'x-ms-job-livysubmission-on',
  '1/1/0001 12:00:00 AM +00:00',
  'x-ms-response-time-ms',
  '86',
  'x-ms-activity-id',
  'd1a34a91-77f6-4e07-91cb-c9d048932831',
  'x-ms-client-request-id',
  '82b070bb-f463-40bd-b3e1-d7f32beee38b',
  'x-ms-request-id',
  'd6b641ba-6681-4764-beeb-ef8ad46d148b',
  'Date',
  'Wed, 04 Nov 2020 05:49:11 GMT'
]);
