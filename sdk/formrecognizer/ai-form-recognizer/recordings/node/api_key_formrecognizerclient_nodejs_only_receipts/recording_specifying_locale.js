let nock = require('nock');

module.exports.hash = "32d92add86286f2f610b9db8a55092f0";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/v2.1-preview.1/prebuilt/receipt/analyze', {"source":"https://storageaccount/testingdata/contoso-allinone.jpg?sastoken"})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.1-preview.1/prebuilt/receipt/analyzeResults/3c5f781b-1fad-4507-bb47-3940edad049e',
  'x-envoy-upstream-service-time',
  '499',
  'apim-request-id',
  '3c5f781b-1fad-4507-bb47-3940edad049e',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 10 Nov 2020 19:24:14 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.1/prebuilt/receipt/analyzeResults/3c5f781b-1fad-4507-bb47-3940edad049e')
  .reply(200, {"status":"notStarted","createdDateTime":"2020-11-10T19:24:14Z","lastUpdatedDateTime":"2020-11-10T19:24:14Z"}, [
  'Content-Length',
  '109',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '13',
  'apim-request-id',
  'f5434f76-5fb2-4384-8a75-3f48e2ccd1c2',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 10 Nov 2020 19:24:14 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.1/prebuilt/receipt/analyzeResults/3c5f781b-1fad-4507-bb47-3940edad049e')
  .reply(200, {"status":"notStarted","createdDateTime":"2020-11-10T19:24:14Z","lastUpdatedDateTime":"2020-11-10T19:24:14Z"}, [
  'Content-Length',
  '109',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '12',
  'apim-request-id',
  '32c29e69-eca0-4dca-a946-673dcfe3fd79',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 10 Nov 2020 19:24:14 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.1/prebuilt/receipt/analyzeResults/3c5f781b-1fad-4507-bb47-3940edad049e')
  .reply(200, {"status":"succeeded","createdDateTime":"2020-11-10T19:24:14Z","lastUpdatedDateTime":"2020-11-10T19:24:16Z","analyzeResult":{"version":"2.1.0","readResults":[{"page":1,"angle":0.1273,"width":1688,"height":3000,"unit":"pixel"}],"documentResults":[{"docType":"prebuilt:receipt","pageRange":[1,1],"fields":{"ReceiptType":{"type":"string","valueString":"Itemized","confidence":0.99},"MerchantName":{"type":"string","valueString":"Contoso Contoso","text":"Contoso Contoso","boundingBox":[380.9,282.9,1116,473.2,1025,824.4,290,634],"page":1,"confidence":0.769},"MerchantAddress":{"type":"string","valueString":"123 Main Street Redmond, WA 98052","text":"123 Main Street Redmond, WA 98052","boundingBox":[298.3,676.5,844.6,781.5,810.7,958,264.4,853],"page":1,"confidence":0.99},"MerchantPhoneNumber":{"type":"phoneNumber","valuePhoneNumber":"+919876543210","text":"987-654-3210","boundingBox":[271,1000,651,1049,643,1125,264,1075],"page":1,"confidence":0.995},"TransactionDate":{"type":"date","valueDate":"2019-10-06","text":"6/10/2019","boundingBox":[259,1224,510,1246,505,1331,255,1312],"page":1,"confidence":0.995},"TransactionTime":{"type":"time","valueTime":"13:59:00","text":"13:59","boundingBox":[527,1248,681,1262,675,1341,522,1332],"page":1,"confidence":0.995},"Items":{"type":"array","valueArray":[{"type":"object","valueObject":{"Quantity":{"type":"number","valueNumber":1,"text":"1","boundingBox":[244,1581,288,1584,285,1678,241,1675],"page":1,"confidence":0.936},"Name":{"type":"string","valueString":"Cappuccino","text":"Cappuccino","boundingBox":[306,1585,658,1598,657,1688,304,1679],"page":1,"confidence":0.976},"TotalPrice":{"type":"number","valueNumber":2.2,"text":"$2.20","boundingBox":[1106,1579,1260,1574,1263,1656,1108,1662],"page":1,"confidence":0.988}}},{"type":"object","valueObject":{"Quantity":{"type":"number","valueNumber":1,"text":"1","boundingBox":[227,1839,278,1839,277,1924,226,1924],"page":1,"confidence":0.882},"Name":{"type":"string","valueString":"BACON & EGGS Sunny-side-up","text":"BACON & EGGS Sunny-side-up","boundingBox":[294,1839,757,1839,757,2064,294,2064],"page":1,"confidence":0.506},"TotalPrice":{"type":"number","valueNumber":9.5,"text":"$9.5","boundingBox":[1134,1948,1252,1948,1252,2041,1134,2041],"page":1,"confidence":0.987}}}]},"Tax":{"type":"number","valueNumber":1.17,"text":"1.17","boundingBox":[1186,2356,1307,2361,1303,2452,1182,2447],"page":1,"confidence":0.994},"Total":{"type":"number","valueNumber":14.5,"text":"$14.50","boundingBox":[1033,2623,1376,2641,1370,2758,1027,2740],"page":1,"confidence":0.988},"Subtotal":{"type":"number","valueNumber":11.7,"text":"11.70","boundingBox":[1139,2228,1309,2228,1308,2313,1138,2313],"page":1,"confidence":0.269}}}]}}, [
  'Content-Length',
  '2711',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '43',
  'apim-request-id',
  'b9c1cd01-d4fa-44c6-948b-a3a710855982',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 10 Nov 2020 19:24:19 GMT'
]);
