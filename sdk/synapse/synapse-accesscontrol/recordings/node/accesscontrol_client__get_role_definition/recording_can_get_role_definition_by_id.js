let nock = require('nock');

module.exports.hash = "8ea9aacabe77e86c788e92ef27791c5d";

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
  'd7d9d776-c7e1-45da-bfe3-13cbf0640200',
  'x-ms-ests-server',
  '2.1.11169.11 - EASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AoZLoSljTKVOiw1VRQps6pVJ0eYvAQAAAPRyJNcOAAAA; expires=Sun, 22-Nov-2020 06:45:08 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 23 Oct 2020 06:45:08 GMT',
  'Content-Length',
  '1322'
]);

nock('https://workspace_name.dev.azuresynapse.net:443', {"encodedQueryParams":true})
  .get('/rbac/roles/7af0c69a-a548-47d6-aea3-d00e69bd83aa')
  .query(true)
  .reply(200, {"id":"7af0c69a-a548-47d6-aea3-d00e69bd83aa","name":"Sql Admin","isBuiltIn":true}, [
  'Content-Length',
  '81',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '668653d1-038f-444f-9f51-1c92808ddcbb',
  'x-ms-request-id',
  '668653d1-038f-444f-9f51-1c92808ddcbb',
  'Date',
  'Fri, 23 Oct 2020 06:45:09 GMT'
]);
