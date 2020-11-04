let nock = require('nock');

module.exports.hash = "cfd48c4ed60e508db62c32aaa998dfb1";

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
  'afc09643-e6d5-4034-91c1-46b798c71800',
  'x-ms-ests-server',
  '2.1.11198.13 - EASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AnsCQU9oOo5LrEzXz9nEdEpJ0eYvAQAAANk3NNcOAAAA; expires=Fri, 04-Dec-2020 05:49:13 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 04 Nov 2020 05:49:13 GMT',
  'Content-Length',
  '1322'
]);

nock('https://workspace_name.dev.azuresynapse.net:443', {"encodedQueryParams":true})
  .get('/livyApi/versions/2019-11-01-preview/sparkPools/sparkpool_name/sessions')
  .query(true)
  .reply(200, {"from":36,"total":0,"sessions":[]}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Kestrel Microsoft-HTTPAPI/2.0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-response-time-ms',
  '62',
  'x-ms-activity-id',
  '57c023d7-4670-4845-9247-d5ad46136d69',
  'x-ms-client-request-id',
  '9eb70567-1432-4de2-b2df-fc62354c16f2',
  'x-ms-request-id',
  'a3fb9566-51f7-4167-9298-d610bfdfb574',
  'Date',
  'Wed, 04 Nov 2020 05:49:14 GMT'
]);
