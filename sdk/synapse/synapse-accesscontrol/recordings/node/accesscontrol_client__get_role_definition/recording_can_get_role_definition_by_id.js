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
  'cb65995e-49bc-4b47-a99c-4f95fb540900',
  'x-ms-ests-server',
  '2.1.11169.10 - EASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AnoHrbrvqJFBj6FYTIn7QRFJ0eYvAQAAAAwMItcOAAAA; expires=Fri, 20-Nov-2020 11:01:33 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 21 Oct 2020 11:01:32 GMT',
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
  'c269a7ee-2a6e-4ac0-926e-288a24d0d2af',
  'x-ms-request-id',
  'c269a7ee-2a6e-4ac0-926e-288a24d0d2af',
  'Date',
  'Wed, 21 Oct 2020 11:01:34 GMT'
]);
