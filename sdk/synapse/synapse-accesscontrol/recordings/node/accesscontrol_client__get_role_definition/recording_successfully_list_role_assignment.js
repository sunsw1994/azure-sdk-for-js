let nock = require('nock');

module.exports.hash = "b01f90f044dae46528608835f34da68b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fdev.azuresynapse.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '1322',
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
  'ed7c0c2c-6708-4bf2-9e46-8892ad9c0100',
  'x-ms-ests-server',
  '2.1.11169.11 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=Av-CIaqYNhZKjkEfY4Xe585J0eYvAQAAAB7DJNcOAAAA; expires=Sun, 22-Nov-2020 12:27:11 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 23 Oct 2020 12:27:11 GMT'
]);

nock('https://workspace_name.dev.azuresynapse.net:443', {"encodedQueryParams":true})
  .get('/rbac/roleAssignments')
  .query(true)
  .reply(200, [{"id":"7af0c69a-a548-47d6-aea3-d00e69bd83aa-23a9b13a-a58b-4d8e-a58a-ff4c351fae61","roleId":"7af0c69a-a548-47d6-aea3-d00e69bd83aa","principalId":"23a9b13a-a58b-4d8e-a58a-ff4c351fae61"},{"id":"7af0c69a-a548-47d6-aea3-d00e69bd83aa-bf4f36df-eda0-4fc4-9602-69d6ff714d8c","roleId":"7af0c69a-a548-47d6-aea3-d00e69bd83aa","principalId":"bf4f36df-eda0-4fc4-9602-69d6ff714d8c"}], [
  'Content-Length',
  '369',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-continuation',
  '',
  'x-ms-request-id',
  '20a80166-1dad-488f-8053-dbd7e64fd8f0',
  'Date',
  'Fri, 23 Oct 2020 12:27:12 GMT'
]);
