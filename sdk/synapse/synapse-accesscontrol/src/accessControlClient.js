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
exports.__esModule = true;
exports.AccessControlClient = void 0;
var coreHttp = require("@azure/core-http");
var Parameters = require("./models/parameters");
var Mappers = require("./models/mappers");
var accessControlClientContext_1 = require("./accessControlClientContext");
var AccessControlClient = /** @class */ (function (_super) {
    __extends(AccessControlClient, _super);
    /**
     * Initializes a new instance of the AccessControlClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param endpoint The workspace development endpoint, for example
     *                 https://myworkspace.dev.azuresynapse.net.
     * @param options The parameter options
     */
    function AccessControlClient(credentials, endpoint, options) {
        return _super.call(this, credentials, endpoint, options) || this;
    }
    /**
     * List roles.
     * @param options The options parameters.
     */
    AccessControlClient.prototype.getRoleDefinitions = function (options) {
        var operationOptions = coreHttp.operationOptionsToRequestOptionsBase(options || {});
        return this.sendOperationRequest({ options: operationOptions }, getRoleDefinitionsOperationSpec);
    };
    /**
     * Get role by role Id.
     * @param roleId Synapse Built-In Role Id.
     * @param options The options parameters.
     */
    AccessControlClient.prototype.getRoleDefinitionById = function (roleId, options) {
        var operationOptions = coreHttp.operationOptionsToRequestOptionsBase(options || {});
        return this.sendOperationRequest({ roleId: roleId, options: operationOptions }, getRoleDefinitionByIdOperationSpec);
    };
    /**
     * Create role assignment.
     * @param createRoleAssignmentOptions Details of role id and object id.
     * @param options The options parameters.
     */
    AccessControlClient.prototype.createRoleAssignment = function (createRoleAssignmentOptions, options) {
        var operationOptions = coreHttp.operationOptionsToRequestOptionsBase(options || {});
        return this.sendOperationRequest({ createRoleAssignmentOptions: createRoleAssignmentOptions, options: operationOptions }, createRoleAssignmentOperationSpec);
    };
    /**
     * List role assignments.
     * @param options The options parameters.
     */
    AccessControlClient.prototype.getRoleAssignments = function (options) {
        var operationOptions = coreHttp.operationOptionsToRequestOptionsBase(options || {});
        return this.sendOperationRequest({ options: operationOptions }, getRoleAssignmentsOperationSpec);
    };
    /**
     * Get role assignment by role assignment Id.
     * @param roleAssignmentId The ID of the role assignment.
     * @param options The options parameters.
     */
    AccessControlClient.prototype.getRoleAssignmentById = function (roleAssignmentId, options) {
        var operationOptions = coreHttp.operationOptionsToRequestOptionsBase(options || {});
        return this.sendOperationRequest({ roleAssignmentId: roleAssignmentId, options: operationOptions }, getRoleAssignmentByIdOperationSpec);
    };
    /**
     * Delete role assignment by role assignment Id.
     * @param roleAssignmentId The ID of the role assignment.
     * @param options The options parameters.
     */
    AccessControlClient.prototype.deleteRoleAssignmentById = function (roleAssignmentId, options) {
        var operationOptions = coreHttp.operationOptionsToRequestOptionsBase(options || {});
        return this.sendOperationRequest({ roleAssignmentId: roleAssignmentId, options: operationOptions }, deleteRoleAssignmentByIdOperationSpec);
    };
    /**
     * List role assignments of the caller.
     * @param options The options parameters.
     */
    AccessControlClient.prototype.getCallerRoleAssignments = function (options) {
        var operationOptions = coreHttp.operationOptionsToRequestOptionsBase(options || {});
        return this.sendOperationRequest({ options: operationOptions }, getCallerRoleAssignmentsOperationSpec);
    };
    /**
     * GetRoleDefinitionsNext
     * @param nextLink The nextLink from the previous successful call to the GetRoleDefinitions method.
     * @param options The options parameters.
     */
    AccessControlClient.prototype.getRoleDefinitionsNext = function (nextLink, options) {
        var operationOptions = coreHttp.operationOptionsToRequestOptionsBase(options || {});
        return this.sendOperationRequest({ nextLink: nextLink, options: operationOptions }, getRoleDefinitionsNextOperationSpec);
    };
    return AccessControlClient;
}(accessControlClientContext_1.AccessControlClientContext));
exports.AccessControlClient = AccessControlClient;
// Operation Specifications
var serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);
var getRoleDefinitionsOperationSpec = {
    path: "/rbac/roles",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.RolesListResponse
        },
        "default": {
            bodyMapper: Mappers.ErrorContract
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.endpoint],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var getRoleDefinitionByIdOperationSpec = {
    path: "/rbac/roles/{roleId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.SynapseRole
        },
        "default": {
            bodyMapper: Mappers.ErrorContract
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.endpoint, Parameters.roleId],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var createRoleAssignmentOperationSpec = {
    path: "/rbac/roleAssignments",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.RoleAssignmentDetails
        },
        "default": {
            bodyMapper: Mappers.ErrorContract
        }
    },
    requestBody: Parameters.createRoleAssignmentOptions,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.endpoint],
    headerParameters: [Parameters.contentType, Parameters.accept1],
    mediaType: "json",
    serializer: serializer
};
var getRoleAssignmentsOperationSpec = {
    path: "/rbac/roleAssignments",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: { name: "Composite", className: "RoleAssignmentDetails" }
                    }
                }
            },
            headersMapper: Mappers.AccessControlClientGetRoleAssignmentsHeaders
        },
        "default": {
            bodyMapper: Mappers.ErrorContract
        }
    },
    queryParameters: [
        Parameters.apiVersion,
        Parameters.roleId1,
        Parameters.principalId
    ],
    urlParameters: [Parameters.endpoint],
    headerParameters: [Parameters.accept, Parameters.continuationToken],
    serializer: serializer
};
var getRoleAssignmentByIdOperationSpec = {
    path: "/rbac/roleAssignments/{roleAssignmentId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.RoleAssignmentDetails
        },
        "default": {
            bodyMapper: Mappers.ErrorContract
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.endpoint, Parameters.roleAssignmentId],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var deleteRoleAssignmentByIdOperationSpec = {
    path: "/rbac/roleAssignments/{roleAssignmentId}",
    httpMethod: "DELETE",
    responses: {
        200: {},
        204: {},
        "default": {
            bodyMapper: Mappers.ErrorContract
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.endpoint, Parameters.roleAssignmentId],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var getCallerRoleAssignmentsOperationSpec = {
    path: "/rbac/getMyAssignedRoles",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Sequence", element: { type: { name: "String" } } }
            }
        },
        "default": {
            bodyMapper: Mappers.ErrorContract
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.endpoint],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var getRoleDefinitionsNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.RolesListResponse
        },
        "default": {
            bodyMapper: Mappers.ErrorContract
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.endpoint, Parameters.nextLink],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
