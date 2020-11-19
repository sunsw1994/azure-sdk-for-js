import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-http";
import {
  CheckPrincipalAccessRequest as CheckPrincipalAccessRequestMapper,
  RoleAssignmentRequest as RoleAssignmentRequestMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
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

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json, text/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const subject: OperationParameter = {
  parameterPath: "subject",
  mapper: CheckPrincipalAccessRequestMapper
};

export const actions: OperationParameter = {
  parameterPath: "actions",
  mapper: CheckPrincipalAccessRequestMapper
};

export const scope: OperationParameter = {
  parameterPath: "scope",
  mapper: CheckPrincipalAccessRequestMapper
};

export const endpoint: OperationURLParameter = {
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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-08-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const isBuiltIn: OperationQueryParameter = {
  parameterPath: ["options", "isBuiltIn"],
  mapper: {
    serializedName: "isBuiltIn",
    type: {
      name: "Boolean"
    }
  }
};

export const scope1: OperationQueryParameter = {
  parameterPath: ["options", "scope"],
  mapper: {
    serializedName: "scope",
    type: {
      name: "String"
    }
  }
};

export const roleDefinitionId: OperationURLParameter = {
  parameterPath: "roleDefinitionId",
  mapper: {
    serializedName: "roleDefinitionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const roleId: OperationQueryParameter = {
  parameterPath: ["options", "roleId"],
  mapper: {
    serializedName: "roleId",
    type: {
      name: "String"
    }
  }
};

export const principalId: OperationQueryParameter = {
  parameterPath: ["options", "principalId"],
  mapper: {
    serializedName: "principalId",
    type: {
      name: "String"
    }
  }
};

export const continuationToken: OperationParameter = {
  parameterPath: ["options", "continuationToken"],
  mapper: {
    serializedName: "x-ms-continuation",
    type: {
      name: "String"
    }
  }
};

export const roleId1: OperationParameter = {
  parameterPath: "roleId",
  mapper: RoleAssignmentRequestMapper
};

export const principalId1: OperationParameter = {
  parameterPath: "principalId",
  mapper: RoleAssignmentRequestMapper
};

export const scope2: OperationParameter = {
  parameterPath: "scope",
  mapper: RoleAssignmentRequestMapper
};

export const principalType: OperationParameter = {
  parameterPath: ["options", "principalType"],
  mapper: RoleAssignmentRequestMapper
};

export const roleAssignmentId: OperationURLParameter = {
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
