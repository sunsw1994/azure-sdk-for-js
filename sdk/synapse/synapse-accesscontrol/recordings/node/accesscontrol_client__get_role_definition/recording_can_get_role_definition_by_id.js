let nock = require('nock');

module.exports.hash = "1dc8c90e9a00e3f1ae34db7793b5001e";

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
  'f728dce4-ecf2-49a5-a509-c080b3b10300',
  'x-ms-ests-server',
  '2.1.11169.11 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AvUe7q0kOblNlmUp0lwGtBJJ0eYvAQAAAF4zI9cOAAAA; expires=Sat, 21-Nov-2020 08:01:35 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 22 Oct 2020 08:01:34 GMT',
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
  'e577a397-93ff-4fde-9fd7-15c255084c6e',
  'x-ms-request-id',
  'e577a397-93ff-4fde-9fd7-15c255084c6e',
  'Date',
  'Thu, 22 Oct 2020 08:01:35 GMT'
]);
