import { EnvironmentCredential,TokenCredentialOptions,AuthorizationCodeCredential,DefaultAzureCredential } from "@azure/identity";
import { TokenCredential } from '@azure/core-http';

// Load the .env file if it exists
import * as dotenv from "dotenv";
import { AccessControlClient } from "../../../src/accessControlClient";

dotenv.config();

export async function main() {
  // Azure AD Credential information is required to run this sample:
  if (
    !process.env.AZURE_TENANT_ID ||
    !process.env.AZURE_CLIENT_ID ||
    !process.env.AZURE_CLIENT_SECRET
  ) {
    console.warn(
      "Azure AD authentication information not provided, but it is required to run this sample. Exiting."
    );
    return;
  }

  // ONLY AVAILABLE IN NODE.JS RUNTIME
  // DefaultAzureCredential will first look for Azure Active Directory (AAD)
  // client secret credentials in the following environment variables:
  //
  // - AZURE_TENANT_ID: The ID of your AAD tenant
  // - AZURE_CLIENT_ID: The ID of your AAD app registration (client)
  // - AZURE_CLIENT_SECRET: The client secret for your AAD app registration
  //
  // If those environment variables aren't found and your application is deployed
  // to an Azure VM or App Service instance, the managed service identity endpoint
  // will be used as a fallback authentication source.
  //console.log(await defaultAzureCredential.getToken("https://dev.azuresynapse.net/"))

  const defaultddd = new DefaultAzureCredential();
  //console.log(await defaultddd.getToken("https://dev.azuresynapse.net/.default"))
  
  // console.log("the result is:");
  // console.log(await defaultAzureCredential.getToken("https://dev.azuresynapse.net/.default"));



  // var operation:TokenCredentialOptions = {
  //   authorityHost:"https://dev.azuresynapse.net/.default"
  // }
  const defaultAzureCredential = new EnvironmentCredential();

  const accesscontrol = new AccessControlClient(
    defaultAzureCredential,
    "https://shangweiworkspacecli.dev.azuresynapse.net",
    //operation
  );

  accesscontrol.getRoleDefinitionById("7af0c69a-a548-47d6-aea3-d00e69bd83aa").then((result)=>{
      console.log("the result is:");
      console.log(result);
    })
  accesscontrol.getRoleDefinitions().then((result)=>{
      console.log("the result is:");
      console.log(result);
    })

}

main().catch((err) => {
  console.error("Error running sample:", err.message);
});