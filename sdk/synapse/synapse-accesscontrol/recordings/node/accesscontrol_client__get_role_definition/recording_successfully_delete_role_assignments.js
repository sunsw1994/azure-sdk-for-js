let nock = require('nock');

module.exports.hash = "5d67dbe0f9db42f83000696f2b8e136c";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fdev.azuresynapse.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '1317',
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
  '5c961bc6-51ff-4416-9fd4-217db4ec0300',
  'x-ms-ests-server',
  '2.1.11169.11 - EASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AvHchz0FleJJn_m9bghB3b9J0eYvAQAAACDDJNcOAAAA; expires=Sun, 22-Nov-2020 12:27:12 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 23 Oct 2020 12:27:12 GMT'
]);

nock('https://workspace_name.dev.azuresynapse.net:443', {"encodedQueryParams":true})
  .delete('/rbac/roleAssignments/7af0c69a-a548-47d6-aea3-d00e69bd83aa-bf4f36df-eda0-4fc4-9602-69d6ff714d8c')
  .query(true)
  .reply(200, "", [
  'Content-Length',
  '0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '86b85705-09af-4714-b0df-dcbedb1afb79',
  'Date',
  'Fri, 23 Oct 2020 12:27:13 GMT'
]);
