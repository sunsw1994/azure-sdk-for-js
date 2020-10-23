let nock = require('nock');

module.exports.hash = "2e15fb65b80894900a8836a8fada6270";

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
  '014173b6-3a09-4ec1-a917-92ef41b00800',
  'x-ms-ests-server',
  '2.1.11169.11 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AtrBdMTcbH5FlqcMt_ia5NpJ0eYvAQAAACHDJNcOAAAA; expires=Sun, 22-Nov-2020 12:27:14 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 23 Oct 2020 12:27:13 GMT',
  'Content-Length',
  '1322'
]);

nock('https://workspace_name.dev.azuresynapse.net:443', {"encodedQueryParams":true})
  .post('/rbac/getMyAssignedRoles')
  .query(true)
  .reply(200, ["6e4bf58a-b8e1-4cc3-bbf9-d73143322b78","c3a6d2f1-a26f-4810-9b0f-591308d5cbf1"], [
  'Content-Length',
  '79',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'e902ecd7-452c-4403-87b2-2ee11cd75055',
  'Date',
  'Fri, 23 Oct 2020 12:27:15 GMT'
]);
