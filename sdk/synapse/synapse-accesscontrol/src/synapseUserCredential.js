"use strict";
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
exports.createPipeline = exports.LIB_INFO = exports.SDK_VERSION = void 0;
var core_http_1 = require("@azure/core-http");
exports.SDK_VERSION = "1.0.0-beta.2";
exports.LIB_INFO = "azsdk-js-schema-registry/" + exports.SDK_VERSION;
function createPipeline(options, credential) {
  var internalOptions = convertPipelineOptions(options);
  var policy = core_http_1.bearerTokenAuthenticationPolicy(
    credential,
    "https://dev.azuresynapse.net/.default"
  );
  return core_http_1.createPipelineFromOptions(internalOptions, policy);
}
exports.createPipeline = createPipeline;
function convertPipelineOptions(options) {
  if (!options.userAgentOptions) {
    options.userAgentOptions = {};
  }
  if (options.userAgentOptions.userAgentPrefix) {
    options.userAgentOptions.userAgentPrefix =
      options.userAgentOptions.userAgentPrefix + " " + exports.LIB_INFO;
  } else {
    options.userAgentOptions.userAgentPrefix = exports.LIB_INFO;
  }
  return __assign({}, options);
}
