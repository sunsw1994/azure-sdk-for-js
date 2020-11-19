let nock = require('nock');

module.exports.hash = "9e64519c365d5f39d4f999a359e102f3";

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
  '3f425264-e570-4487-a0ff-2ddc4a0f0200',
  'x-ms-ests-server',
  '2.1.11251.20 - EASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AiNQ32B3--ZEqReActcW-iZJ0eYvAQAAAMt_SdcOAAAA; expires=Sun, 20-Dec-2020 09:13:47 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 20 Nov 2020 09:13:47 GMT',
  'Content-Length',
  '1322'
]);

nock('https://workspace_name.dev.azuresynapse.net:443', {"encodedQueryParams":true})
  .put('/roleAssignments/0580006c-09cd-6245-9658-df2cc9581247', {"roleId":"roll_id","principalId":"principal_id","scope":"workspaces/workspace_name"})
  .query(true)
  .reply(200, {"id":"0580006c-09cd-6245-9658-df2cc9581247","roleDefinitionId":"roll_id","principalId":"principal_id","scope":"workspaces/workspace_name"}, [
  'Content-Length',
  '198',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '30adc830-0414-4eee-8ba0-a9bb138aa347',
  'Date',
  'Fri, 20 Nov 2020 09:13:48 GMT'
]);
