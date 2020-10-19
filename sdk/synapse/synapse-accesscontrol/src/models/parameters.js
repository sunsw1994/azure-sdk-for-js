"use strict";
exports.__esModule = true;
exports.nextLink = exports.roleAssignmentId = exports.continuationToken = exports.principalId = exports.roleId1 = exports.accept1 = exports.createRoleAssignmentOptions = exports.contentType = exports.roleId = exports.apiVersion = exports.endpoint = exports.accept = void 0;
var mappers_1 = require("../models/mappers");
exports.accept = {
    parameterPath: "accept",
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Accept",
        type: {
            name: "String"
        }
    }
};
exports.endpoint = {
    parameterPath: "endpoint",
    mapper: {
        serializedName: "endpoint",
        required: true,
        type: {
            name: "String"
        }
    },
    skipEncoding: true
};
exports.apiVersion = {
    parameterPath: "apiVersion",
    mapper: {
        defaultValue: "2020-02-01-preview",
        isConstant: true,
        serializedName: "api-version",
        type: {
            name: "String"
        }
    }
};
exports.roleId = {
    parameterPath: "roleId",
    mapper: {
        serializedName: "roleId",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.contentType = {
    parameterPath: ["options", "contentType"],
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Content-Type",
        type: {
            name: "String"
        }
    }
};
exports.createRoleAssignmentOptions = {
    parameterPath: "createRoleAssignmentOptions",
    mapper: mappers_1.RoleAssignmentOptions
};
exports.accept1 = {
    parameterPath: "accept",
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Accept",
        type: {
            name: "String"
        }
    }
};
exports.roleId1 = {
    parameterPath: ["options", "roleId"],
    mapper: {
        serializedName: "roleId",
        type: {
            name: "String"
        }
    }
};
exports.principalId = {
    parameterPath: ["options", "principalId"],
    mapper: {
        serializedName: "principalId",
        type: {
            name: "String"
        }
    }
};
exports.continuationToken = {
    parameterPath: ["options", "continuationToken"],
    mapper: {
        serializedName: "x-ms-continuation",
        type: {
            name: "String"
        }
    }
};
exports.roleAssignmentId = {
    parameterPath: "roleAssignmentId",
    mapper: {
        constraints: {
            MinLength: 1
        },
        serializedName: "roleAssignmentId",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.nextLink = {
    parameterPath: "nextLink",
    mapper: {
        serializedName: "nextLink",
        required: true,
        type: {
            name: "String"
        }
    },
    skipEncoding: true
};
