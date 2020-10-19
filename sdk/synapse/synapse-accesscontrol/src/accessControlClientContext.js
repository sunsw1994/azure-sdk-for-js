"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.AccessControlClientContext = void 0;
var coreHttp = require("@azure/core-http");
var synapseUserCredential_1 = require("./synapseUserCredential");
var packageName = "@azure/synapse-accesscontrol";
var packageVersion = "1.0.0";
var AccessControlClientContext = /** @class */ (function (_super) {
    __extends(AccessControlClientContext, _super);
    /**
     * Initializes a new instance of the AccessControlClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param endpoint The workspace development endpoint, for example
     *                 https://myworkspace.dev.azuresynapse.net.
     * @param options The parameter options
     */
    function AccessControlClientContext(credentials, endpoint, options) {
        var _this = this;
        if (credentials === undefined) {
            throw new Error("'credentials' cannot be null");
        }
        if (endpoint === undefined) {
            throw new Error("'endpoint' cannot be null");
        }
        // Initializing default values for options
        if (!options) {
            options = {};
        }
        if (!options.userAgent) {
            var defaultUserAgent = coreHttp.getDefaultUserAgentValue();
            options.userAgent = packageName + "/" + packageVersion + " " + defaultUserAgent;
        }
        var pipeline = synapseUserCredential_1.createPipeline(options, credentials);
        _this = _super.call(this, credentials, __assign({}, pipeline)) || this;
        _this.requestContentType = "application/json; charset=utf-8";
        _this.baseUri = options.endpoint || "{endpoint}";
        // Parameter assignments
        _this.endpoint = endpoint;
        // Assigning values to Constant parameters
        _this.apiVersion = options.apiVersion || "2020-02-01-preview";
        return _this;
    }
    return AccessControlClientContext;
}(coreHttp.ServiceClient));
exports.AccessControlClientContext = AccessControlClientContext;
