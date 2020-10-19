"use strict";
exports.__esModule = true;
exports.AccessControlClientGetRoleAssignmentsHeaders = exports.RoleAssignmentDetails = exports.RoleAssignmentOptions = exports.ErrorDetail = exports.ErrorResponse = exports.ErrorContract = exports.SynapseRole = exports.RolesListResponse = void 0;
exports.RolesListResponse = {
    type: {
        name: "Composite",
        className: "RolesListResponse",
        modelProperties: {
            value: {
                serializedName: "value",
                required: true,
                type: {
                    name: "Sequence",
                    element: { type: { name: "Composite", className: "SynapseRole" } }
                }
            },
            nextLink: {
                serializedName: "nextLink",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.SynapseRole = {
    type: {
        name: "Composite",
        className: "SynapseRole",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            isBuiltIn: {
                serializedName: "isBuiltIn",
                required: true,
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
exports.ErrorContract = {
    type: {
        name: "Composite",
        className: "ErrorContract",
        modelProperties: {
            error: {
                serializedName: "error",
                type: {
                    name: "Composite",
                    className: "ErrorResponse"
                }
            }
        }
    }
};
exports.ErrorResponse = {
    type: {
        name: "Composite",
        className: "ErrorResponse",
        modelProperties: {
            code: {
                serializedName: "code",
                required: true,
                type: {
                    name: "String"
                }
            },
            message: {
                serializedName: "message",
                required: true,
                type: {
                    name: "String"
                }
            },
            target: {
                serializedName: "target",
                type: {
                    name: "String"
                }
            },
            details: {
                serializedName: "details",
                type: {
                    name: "Sequence",
                    element: { type: { name: "Composite", className: "ErrorDetail" } }
                }
            }
        }
    }
};
exports.ErrorDetail = {
    type: {
        name: "Composite",
        className: "ErrorDetail",
        modelProperties: {
            code: {
                serializedName: "code",
                required: true,
                type: {
                    name: "String"
                }
            },
            message: {
                serializedName: "message",
                required: true,
                type: {
                    name: "String"
                }
            },
            target: {
                serializedName: "target",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.RoleAssignmentOptions = {
    type: {
        name: "Composite",
        className: "RoleAssignmentOptions",
        modelProperties: {
            roleId: {
                serializedName: "roleId",
                required: true,
                type: {
                    name: "String"
                }
            },
            principalId: {
                serializedName: "principalId",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.RoleAssignmentDetails = {
    type: {
        name: "Composite",
        className: "RoleAssignmentDetails",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            roleId: {
                serializedName: "roleId",
                type: {
                    name: "String"
                }
            },
            principalId: {
                serializedName: "principalId",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.AccessControlClientGetRoleAssignmentsHeaders = {
    type: {
        name: "Composite",
        className: "AccessControlClientGetRoleAssignmentsHeaders",
        modelProperties: {
            xMsContinuation: {
                serializedName: "x-ms-continuation",
                type: {
                    name: "String"
                }
            }
        }
    }
};
