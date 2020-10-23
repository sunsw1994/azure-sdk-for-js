let nock = require('nock');

module.exports.hash = "68f5517908985f6a128623bddb8bfe04";

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
  'd60ee621-6d28-4ee5-a91e-324b070b0700',
  'x-ms-ests-server',
  '2.1.11169.11 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=Ajs2ECrzlklOrLSNZ3JLPVpJ0eYvAQAAABrDJNcOAAAA; expires=Sun, 22-Nov-2020 12:27:06 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 23 Oct 2020 12:27:06 GMT',
  'Content-Length',
  '1322'
]);

nock('https://workspace_name.dev.azuresynapse.net:443', {"encodedQueryParams":true})
  .get('/rbac/roles')
  .query(true)
  .reply(200, {"value":[{"id":"6e4bf58a-b8e1-4cc3-bbf9-d73143322b78","name":"Workspace Admin","isBuiltIn":true},{"id":"c3a6d2f1-a26f-4810-9b0f-591308d5cbf1","name":"Apache Spark Admin","isBuiltIn":true},{"id":"7af0c69a-a548-47d6-aea3-d00e69bd83aa","name":"Sql Admin","isBuiltIn":true},{"id":"24fa9e0a-d130-4536-9f92-8b976b16986b","name":"Scope Admin","isBuiltIn":true}]}, [
  'Content-Length',
  '356',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'e3c2491d-eb1d-4e04-aa91-5b596c99cf49',
  'x-ms-request-id',
  'e3c2491d-eb1d-4e04-aa91-5b596c99cf49',
  'Date',
  'Fri, 23 Oct 2020 12:27:07 GMT'
]);
