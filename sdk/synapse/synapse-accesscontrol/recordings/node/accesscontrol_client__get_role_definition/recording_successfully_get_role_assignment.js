let nock = require('nock');

module.exports.hash = "3bee71fd8be5fe763597327277b37779";

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
  'd60ee621-6d28-4ee5-a91e-324b0f0b0700',
  'x-ms-ests-server',
  '2.1.11169.11 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AjLmLaqkifhBiRS1lABY-DU; expires=Sun, 22-Nov-2020 12:27:09 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 23 Oct 2020 12:27:08 GMT',
  'Content-Length',
  '1322'
]);

nock('https://workspace_name.dev.azuresynapse.net:443', {"encodedQueryParams":true})
  .get('/rbac/roleAssignments/7af0c69a-a548-47d6-aea3-d00e69bd83aa-bf4f36df-eda0-4fc4-9602-69d6ff714d8c')
  .query(true)
  .reply(200, {"id":"7af0c69a-a548-47d6-aea3-d00e69bd83aa-bf4f36df-eda0-4fc4-9602-69d6ff714d8c","roleId":"7af0c69a-a548-47d6-aea3-d00e69bd83aa","principalId":"bf4f36df-eda0-4fc4-9602-69d6ff714d8c"}, [
  'Content-Length',
  '183',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '9703fd6f-3b42-4c73-9d5c-fe6b1e0aad41',
  'Date',
  'Fri, 23 Oct 2020 12:27:10 GMT'
]);
