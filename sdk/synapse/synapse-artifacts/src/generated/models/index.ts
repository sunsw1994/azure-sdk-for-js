import * as coreHttp from "@azure/core-http";
import { LROSYM, LROResponseInfo } from "../lro/models";

export type LinkedServiceUnion =
  | AzureStorageLinkedService
  | AzureBlobStorageLinkedService
  | AzureTableStorageLinkedService
  | AzureSqlDWLinkedService
  | SqlServerLinkedService
  | AzureSqlDatabaseLinkedService
  | AzureSqlMILinkedService
  | AzureBatchLinkedService
  | AzureKeyVaultLinkedService
  | CosmosDbLinkedService
  | DynamicsLinkedService
  | DynamicsCrmLinkedService
  | CommonDataServiceForAppsLinkedService
  | HDInsightLinkedService
  | FileServerLinkedService
  | AzureFileStorageLinkedService
  | GoogleCloudStorageLinkedService
  | OracleLinkedService
  | AzureMySqlLinkedService
  | MySqlLinkedService
  | PostgreSqlLinkedService
  | SybaseLinkedService
  | Db2LinkedService
  | TeradataLinkedService
  | AzureMLLinkedService
  | AzureMLServiceLinkedService
  | OdbcLinkedService
  | InformixLinkedService
  | MicrosoftAccessLinkedService
  | HdfsLinkedService
  | ODataLinkedService
  | WebLinkedService
  | CassandraLinkedService
  | MongoDbLinkedService
  | MongoDbV2LinkedService
  | CosmosDbMongoDbApiLinkedService
  | AzureDataLakeStoreLinkedService
  | AzureBlobFSLinkedService
  | Office365LinkedService
  | SalesforceLinkedService
  | SalesforceServiceCloudLinkedService
  | SapCloudForCustomerLinkedService
  | SapEccLinkedService
  | SapOpenHubLinkedService
  | RestServiceLinkedService
  | AmazonS3LinkedService
  | AmazonRedshiftLinkedService
  | CustomDataSourceLinkedService
  | AzureSearchLinkedService
  | HttpLinkedService
  | FtpServerLinkedService
  | SftpServerLinkedService
  | SapBWLinkedService
  | SapHanaLinkedService
  | AmazonMWSLinkedService
  | AzurePostgreSqlLinkedService
  | ConcurLinkedService
  | CouchbaseLinkedService
  | DrillLinkedService
  | EloquaLinkedService
  | GoogleBigQueryLinkedService
  | GreenplumLinkedService
  | HBaseLinkedService
  | HiveLinkedService
  | HubspotLinkedService
  | ImpalaLinkedService
  | JiraLinkedService
  | MagentoLinkedService
  | MariaDBLinkedService
  | AzureMariaDBLinkedService
  | MarketoLinkedService
  | PaypalLinkedService
  | PhoenixLinkedService
  | PrestoLinkedService
  | QuickBooksLinkedService
  | ServiceNowLinkedService
  | ShopifyLinkedService
  | SparkLinkedService
  | SquareLinkedService
  | XeroLinkedService
  | ZohoLinkedService
  | VerticaLinkedService
  | NetezzaLinkedService
  | SalesforceMarketingCloudLinkedService
  | HDInsightOnDemandLinkedService
  | AzureDataLakeAnalyticsLinkedService
  | AzureDatabricksLinkedService
  | ResponsysLinkedService
  | DynamicsAXLinkedService
  | OracleServiceCloudLinkedService
  | GoogleAdWordsLinkedService
  | SapTableLinkedService
  | AzureDataExplorerLinkedService
  | AzureFunctionLinkedService;
export type DatasetUnion =
  | AvroDataset
  | ParquetDataset
  | DelimitedTextDataset
  | JsonDataset
  | OrcDataset
  | BinaryDataset
  | AzureTableDataset
  | AzureSqlTableDataset
  | AzureSqlMITableDataset
  | AzureSqlDWTableDataset
  | CassandraTableDataset
  | CustomDataset
  | CosmosDbSqlApiCollectionDataset
  | DocumentDbCollectionDataset
  | DynamicsEntityDataset
  | DynamicsCrmEntityDataset
  | CommonDataServiceForAppsEntityDataset
  | Office365Dataset
  | MongoDbCollectionDataset
  | MongoDbV2CollectionDataset
  | CosmosDbMongoDbApiCollectionDataset
  | ODataResourceDataset
  | OracleTableDataset
  | TeradataTableDataset
  | AzureMySqlTableDataset
  | AmazonRedshiftTableDataset
  | Db2TableDataset
  | RelationalTableDataset
  | InformixTableDataset
  | OdbcTableDataset
  | MySqlTableDataset
  | PostgreSqlTableDataset
  | MicrosoftAccessTableDataset
  | SalesforceObjectDataset
  | SalesforceServiceCloudObjectDataset
  | SybaseTableDataset
  | SapBwCubeDataset
  | SapCloudForCustomerResourceDataset
  | SapEccResourceDataset
  | SapHanaTableDataset
  | SapOpenHubTableDataset
  | SqlServerTableDataset
  | RestResourceDataset
  | SapTableResourceDataset
  | WebTableDataset
  | AzureSearchIndexDataset
  | AmazonMWSObjectDataset
  | AzurePostgreSqlTableDataset
  | ConcurObjectDataset
  | CouchbaseTableDataset
  | DrillTableDataset
  | EloquaObjectDataset
  | GoogleBigQueryObjectDataset
  | GreenplumTableDataset
  | HBaseObjectDataset
  | HiveObjectDataset
  | HubspotObjectDataset
  | ImpalaObjectDataset
  | JiraObjectDataset
  | MagentoObjectDataset
  | MariaDBTableDataset
  | AzureMariaDBTableDataset
  | MarketoObjectDataset
  | PaypalObjectDataset
  | PhoenixObjectDataset
  | PrestoObjectDataset
  | QuickBooksObjectDataset
  | ServiceNowObjectDataset
  | ShopifyObjectDataset
  | SparkObjectDataset
  | SquareObjectDataset
  | XeroObjectDataset
  | ZohoObjectDataset
  | NetezzaTableDataset
  | VerticaTableDataset
  | SalesforceMarketingCloudObjectDataset
  | ResponsysObjectDataset
  | DynamicsAXResourceDataset
  | OracleServiceCloudObjectDataset
  | AzureDataExplorerTableDataset
  | GoogleAdWordsObjectDataset;
export type ActivityUnion =
  | ControlActivity
  | ExecutionActivityUnion
  | ExecutePipelineActivity
  | IfConditionActivity
  | SwitchActivity
  | ForEachActivity
  | WaitActivity
  | UntilActivity
  | ValidationActivity
  | FilterActivity
  | SetVariableActivity
  | AppendVariableActivity
  | WebHookActivity
  | SynapseNotebookActivity
  | SynapseSparkJobDefinitionActivity
  | SqlPoolStoredProcedureActivity;
export type TriggerUnion =
  | RerunTumblingWindowTrigger
  | MultiplePipelineTriggerUnion
  | TumblingWindowTrigger
  | ChainingTrigger;
export type DataFlowUnion = MappingDataFlow;
export type IntegrationRuntimeUnion =
  | ManagedIntegrationRuntime
  | SelfHostedIntegrationRuntime;
export type SecretBaseUnion = SecureString | AzureKeyVaultSecretReference;
export type DatasetLocationUnion =
  | AzureBlobStorageLocation
  | AzureBlobFSLocation
  | AzureDataLakeStoreLocation
  | AmazonS3Location
  | FileServerLocation
  | AzureFileStorageLocation
  | GoogleCloudStorageLocation
  | FtpServerLocation
  | SftpLocation
  | HttpServerLocation
  | HdfsLocation;
export type DatasetStorageFormatUnion =
  | TextFormat
  | JsonFormat
  | AvroFormat
  | OrcFormat
  | ParquetFormat;
export type DatasetCompressionUnion =
  | DatasetBZip2Compression
  | DatasetGZipCompression
  | DatasetDeflateCompression
  | DatasetZipDeflateCompression;
export type WebLinkedServiceTypePropertiesUnion =
  | WebAnonymousAuthentication
  | WebBasicAuthentication
  | WebClientCertificateAuthentication;
export type StoreReadSettingsUnion =
  | AzureBlobStorageReadSettings
  | AzureBlobFSReadSettings
  | AzureDataLakeStoreReadSettings
  | AmazonS3ReadSettings
  | FileServerReadSettings
  | AzureFileStorageReadSettings
  | GoogleCloudStorageReadSettings
  | FtpReadSettings
  | SftpReadSettings
  | HttpReadSettings
  | HdfsReadSettings;
export type StoreWriteSettingsUnion =
  | SftpWriteSettings
  | AzureBlobStorageWriteSettings
  | AzureBlobFSWriteSettings
  | AzureDataLakeStoreWriteSettings
  | FileServerWriteSettings;
export type FormatReadSettingsUnion = DelimitedTextReadSettings;
export type FormatWriteSettingsUnion =
  | AvroWriteSettings
  | DelimitedTextWriteSettings
  | JsonWriteSettings;
export type CopySourceUnion =
  | AvroSource
  | ParquetSource
  | DelimitedTextSource
  | JsonSource
  | OrcSource
  | BinarySource
  | TabularSourceUnion
  | BlobSource
  | DocumentDbCollectionSource
  | CosmosDbSqlApiSource
  | DynamicsSource
  | DynamicsCrmSource
  | CommonDataServiceForAppsSource
  | RelationalSource
  | MicrosoftAccessSource
  | ODataSource
  | SalesforceServiceCloudSource
  | RestSource
  | FileSystemSource
  | HdfsSource
  | AzureDataExplorerSource
  | OracleSource
  | WebSource
  | MongoDbSource
  | MongoDbV2Source
  | CosmosDbMongoDbApiSource
  | Office365Source
  | AzureDataLakeStoreSource
  | AzureBlobFSSource
  | HttpSource;
export type CopySinkUnion =
  | DelimitedTextSink
  | JsonSink
  | OrcSink
  | AzurePostgreSqlSink
  | AzureMySqlSink
  | SapCloudForCustomerSink
  | AzureQueueSink
  | AzureTableSink
  | AvroSink
  | ParquetSink
  | BinarySink
  | BlobSink
  | FileSystemSink
  | DocumentDbCollectionSink
  | CosmosDbSqlApiSink
  | SqlSink
  | SqlServerSink
  | AzureSqlSink
  | SqlMISink
  | SqlDWSink
  | OracleSink
  | AzureDataLakeStoreSink
  | AzureBlobFSSink
  | AzureSearchIndexSink
  | OdbcSink
  | InformixSink
  | MicrosoftAccessSink
  | DynamicsSink
  | DynamicsCrmSink
  | CommonDataServiceForAppsSink
  | AzureDataExplorerSink
  | SalesforceSink
  | SalesforceServiceCloudSink
  | CosmosDbMongoDbApiSink;
export type CopyTranslatorUnion = TabularTranslator;
export type DependencyReferenceUnion =
  | TriggerDependencyReferenceUnion
  | SelfDependencyTumblingWindowTriggerReference;
export type LinkedIntegrationRuntimeTypeUnion =
  | LinkedIntegrationRuntimeKeyAuthorization
  | LinkedIntegrationRuntimeRbacAuthorization;
export type ExecutionActivityUnion =
  | CopyActivity
  | HDInsightHiveActivity
  | HDInsightPigActivity
  | HDInsightMapReduceActivity
  | HDInsightStreamingActivity
  | HDInsightSparkActivity
  | ExecuteSsisPackageActivity
  | CustomActivity
  | SqlServerStoredProcedureActivity
  | DeleteActivity
  | AzureDataExplorerCommandActivity
  | LookupActivity
  | WebActivity
  | GetMetadataActivity
  | AzureMLBatchExecutionActivity
  | AzureMLUpdateResourceActivity
  | AzureMLExecutePipelineActivity
  | DataLakeAnalyticsUsqlActivity
  | DatabricksNotebookActivity
  | DatabricksSparkJarActivity
  | DatabricksSparkPythonActivity
  | AzureFunctionActivity
  | ExecuteDataFlowActivity;
export type MultiplePipelineTriggerUnion =
  | ScheduleTrigger
  | BlobTrigger
  | BlobEventsTrigger;
export type TabularSourceUnion =
  | AzureTableSource
  | InformixSource
  | Db2Source
  | OdbcSource
  | MySqlSource
  | PostgreSqlSource
  | SybaseSource
  | SapBwSource
  | SalesforceSource
  | SapCloudForCustomerSource
  | SapEccSource
  | SapHanaSource
  | SapOpenHubSource
  | SapTableSource
  | SqlSource
  | SqlServerSource
  | AzureSqlSource
  | SqlMISource
  | SqlDWSource
  | AzureMySqlSource
  | TeradataSource
  | CassandraSource
  | AmazonMWSSource
  | AzurePostgreSqlSource
  | ConcurSource
  | CouchbaseSource
  | DrillSource
  | EloquaSource
  | GoogleBigQuerySource
  | GreenplumSource
  | HBaseSource
  | HiveSource
  | HubspotSource
  | ImpalaSource
  | JiraSource
  | MagentoSource
  | MariaDBSource
  | AzureMariaDBSource
  | MarketoSource
  | PaypalSource
  | PhoenixSource
  | PrestoSource
  | QuickBooksSource
  | ServiceNowSource
  | ShopifySource
  | SparkSource
  | SquareSource
  | XeroSource
  | ZohoSource
  | NetezzaSource
  | VerticaSource
  | SalesforceMarketingCloudSource
  | ResponsysSource
  | DynamicsAXSource
  | OracleServiceCloudSource
  | GoogleAdWordsSource
  | AmazonRedshiftSource;
export type TriggerDependencyReferenceUnion = TumblingWindowTriggerDependencyReference;

/**
 * A list of linked service resources.
 */
export interface LinkedServiceListResponse {
  /**
   * List of linked services.
   */
  value: LinkedServiceResource[];
  /**
   * The link to the next page of results, if any remaining results exist.
   */
  nextLink?: string;
}

/**
 * The Azure Synapse nested object which contains the information and credential which can be used to connect with related store or compute resource.
 */
export interface LinkedService {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type:
    | "AzureStorage"
    | "AzureBlobStorage"
    | "AzureTableStorage"
    | "AzureSqlDW"
    | "SqlServer"
    | "AzureSqlDatabase"
    | "AzureSqlMI"
    | "AzureBatch"
    | "AzureKeyVault"
    | "CosmosDb"
    | "Dynamics"
    | "DynamicsCrm"
    | "CommonDataServiceForApps"
    | "HDInsight"
    | "FileServer"
    | "AzureFileStorage"
    | "GoogleCloudStorage"
    | "Oracle"
    | "AzureMySql"
    | "MySql"
    | "PostgreSql"
    | "Sybase"
    | "Db2"
    | "Teradata"
    | "AzureML"
    | "AzureMLService"
    | "Odbc"
    | "Informix"
    | "MicrosoftAccess"
    | "Hdfs"
    | "OData"
    | "Web"
    | "Cassandra"
    | "MongoDb"
    | "MongoDbV2"
    | "CosmosDbMongoDbApi"
    | "AzureDataLakeStore"
    | "AzureBlobFS"
    | "Office365"
    | "Salesforce"
    | "SalesforceServiceCloud"
    | "SapCloudForCustomer"
    | "SapEcc"
    | "SapOpenHub"
    | "RestService"
    | "AmazonS3"
    | "AmazonRedshift"
    | "CustomDataSource"
    | "AzureSearch"
    | "HttpServer"
    | "FtpServer"
    | "Sftp"
    | "SapBW"
    | "SapHana"
    | "AmazonMWS"
    | "AzurePostgreSql"
    | "Concur"
    | "Couchbase"
    | "Drill"
    | "Eloqua"
    | "GoogleBigQuery"
    | "Greenplum"
    | "HBase"
    | "Hive"
    | "Hubspot"
    | "Impala"
    | "Jira"
    | "Magento"
    | "MariaDB"
    | "AzureMariaDB"
    | "Marketo"
    | "Paypal"
    | "Phoenix"
    | "Presto"
    | "QuickBooks"
    | "ServiceNow"
    | "Shopify"
    | "Spark"
    | "Square"
    | "Xero"
    | "Zoho"
    | "Vertica"
    | "Netezza"
    | "SalesforceMarketingCloud"
    | "HDInsightOnDemand"
    | "AzureDataLakeAnalytics"
    | "AzureDatabricks"
    | "Responsys"
    | "DynamicsAX"
    | "OracleServiceCloud"
    | "GoogleAdWords"
    | "SapTable"
    | "AzureDataExplorer"
    | "AzureFunction";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The integration runtime reference.
   */
  connectVia?: IntegrationRuntimeReference;
  /**
   * Linked service description.
   */
  description?: string;
  /**
   * Parameters for linked service.
   */
  parameters?: { [propertyName: string]: ParameterSpecification };
  /**
   * List of tags that can be used for describing the linked service.
   */
  annotations?: any[];
}

/**
 * Integration runtime reference type.
 */
export interface IntegrationRuntimeReference {
  /**
   * Type of integration runtime.
   */
  type: IntegrationRuntimeReferenceType;
  /**
   * Reference integration runtime name.
   */
  referenceName: string;
  /**
   * Arguments for integration runtime.
   */
  parameters?: { [propertyName: string]: any };
}

/**
 * Definition of a single parameter for an entity.
 */
export interface ParameterSpecification {
  /**
   * Parameter type.
   */
  type: ParameterType;
  /**
   * Default value of parameter.
   */
  defaultValue?: any;
}

export interface Resource {
  /**
   * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/**
 * The object that defines the structure of an Azure Synapse error response.
 */
export interface CloudError {
  /**
   * Error code.
   */
  code: string;
  /**
   * Error message.
   */
  message: string;
  /**
   * Property name/path in request associated with error.
   */
  target?: string;
  /**
   * Array with additional error details.
   */
  details?: CloudError[];
}

/**
 * A list of dataset resources.
 */
export interface DatasetListResponse {
  /**
   * List of datasets.
   */
  value: DatasetResource[];
  /**
   * The link to the next page of results, if any remaining results exist.
   */
  nextLink?: string;
}

/**
 * The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents.
 */
export interface Dataset {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type:
    | "Avro"
    | "Parquet"
    | "DelimitedText"
    | "Json"
    | "Orc"
    | "Binary"
    | "AzureTable"
    | "AzureSqlTable"
    | "AzureSqlMITable"
    | "AzureSqlDWTable"
    | "CassandraTable"
    | "CustomDataset"
    | "CosmosDbSqlApiCollection"
    | "DocumentDbCollection"
    | "DynamicsEntity"
    | "DynamicsCrmEntity"
    | "CommonDataServiceForAppsEntity"
    | "Office365Table"
    | "MongoDbCollection"
    | "MongoDbV2Collection"
    | "CosmosDbMongoDbApiCollection"
    | "ODataResource"
    | "OracleTable"
    | "TeradataTable"
    | "AzureMySqlTable"
    | "AmazonRedshiftTable"
    | "Db2Table"
    | "RelationalTable"
    | "InformixTable"
    | "OdbcTable"
    | "MySqlTable"
    | "PostgreSqlTable"
    | "MicrosoftAccessTable"
    | "SalesforceObject"
    | "SalesforceServiceCloudObject"
    | "SybaseTable"
    | "SapBwCube"
    | "SapCloudForCustomerResource"
    | "SapEccResource"
    | "SapHanaTable"
    | "SapOpenHubTable"
    | "SqlServerTable"
    | "RestResource"
    | "SapTableResource"
    | "WebTable"
    | "AzureSearchIndex"
    | "AmazonMWSObject"
    | "AzurePostgreSqlTable"
    | "ConcurObject"
    | "CouchbaseTable"
    | "DrillTable"
    | "EloquaObject"
    | "GoogleBigQueryObject"
    | "GreenplumTable"
    | "HBaseObject"
    | "HiveObject"
    | "HubspotObject"
    | "ImpalaObject"
    | "JiraObject"
    | "MagentoObject"
    | "MariaDBTable"
    | "AzureMariaDBTable"
    | "MarketoObject"
    | "PaypalObject"
    | "PhoenixObject"
    | "PrestoObject"
    | "QuickBooksObject"
    | "ServiceNowObject"
    | "ShopifyObject"
    | "SparkObject"
    | "SquareObject"
    | "XeroObject"
    | "ZohoObject"
    | "NetezzaTable"
    | "VerticaTable"
    | "SalesforceMarketingCloudObject"
    | "ResponsysObject"
    | "DynamicsAXResource"
    | "OracleServiceCloudObject"
    | "AzureDataExplorerTable"
    | "GoogleAdWordsObject";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Dataset description.
   */
  description?: string;
  /**
   * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
   */
  structure?: any;
  /**
   * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
   */
  schema?: any;
  /**
   * Linked service reference.
   */
  linkedServiceName: LinkedServiceReference;
  /**
   * Parameters for dataset.
   */
  parameters?: { [propertyName: string]: ParameterSpecification };
  /**
   * List of tags that can be used for describing the Dataset.
   */
  annotations?: any[];
  /**
   * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
   */
  folder?: DatasetFolder;
}

/**
 * Linked service reference type.
 */
export interface LinkedServiceReference {
  /**
   * Linked service reference type.
   */
  type: Type;
  /**
   * Reference LinkedService name.
   */
  referenceName: string;
  /**
   * Arguments for LinkedService.
   */
  parameters?: { [propertyName: string]: any };
}

/**
 * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
 */
export interface DatasetFolder {
  /**
   * The name of the folder that this Dataset is in.
   */
  name?: string;
}

/**
 * A list of pipeline resources.
 */
export interface PipelineListResponse {
  /**
   * List of pipelines.
   */
  value: PipelineResource[];
  /**
   * The link to the next page of results, if any remaining results exist.
   */
  nextLink?: string;
}

/**
 * A pipeline activity.
 */
export interface Activity {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type:
    | "Container"
    | "Execution"
    | "Copy"
    | "HDInsightHive"
    | "HDInsightPig"
    | "HDInsightMapReduce"
    | "HDInsightStreaming"
    | "HDInsightSpark"
    | "ExecuteSSISPackage"
    | "Custom"
    | "SqlServerStoredProcedure"
    | "ExecutePipeline"
    | "Delete"
    | "AzureDataExplorerCommand"
    | "Lookup"
    | "WebActivity"
    | "GetMetadata"
    | "IfCondition"
    | "Switch"
    | "ForEach"
    | "AzureMLBatchExecution"
    | "AzureMLUpdateResource"
    | "AzureMLExecutePipeline"
    | "DataLakeAnalyticsU-SQL"
    | "Wait"
    | "Until"
    | "Validation"
    | "Filter"
    | "DatabricksNotebook"
    | "DatabricksSparkJar"
    | "DatabricksSparkPython"
    | "SetVariable"
    | "AppendVariable"
    | "AzureFunctionActivity"
    | "WebHook"
    | "ExecuteDataFlow"
    | "SynapseNotebook"
    | "SparkJob"
    | "SqlPoolStoredProcedure";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Activity name.
   */
  name: string;
  /**
   * Activity description.
   */
  description?: string;
  /**
   * Activity depends on condition.
   */
  dependsOn?: ActivityDependency[];
  /**
   * Activity user properties.
   */
  userProperties?: UserProperty[];
}

/**
 * Activity dependency information.
 */
export interface ActivityDependency {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Activity name.
   */
  activity: string;
  /**
   * Match-Condition for the dependency.
   */
  dependencyConditions: DependencyCondition[];
}

/**
 * User property.
 */
export interface UserProperty {
  /**
   * User property name.
   */
  name: string;
  /**
   * User property value. Type: string (or Expression with resultType string).
   */
  value: any;
}

/**
 * Definition of a single variable for a Pipeline.
 */
export interface VariableSpecification {
  /**
   * Variable type.
   */
  type: VariableType;
  /**
   * Default value of variable.
   */
  defaultValue?: any;
}

/**
 * The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
 */
export interface PipelineFolder {
  /**
   * The name of the folder that this Pipeline is in.
   */
  name?: string;
}

/**
 * Response body with a run identifier.
 */
export interface CreateRunResponse {
  /**
   * Identifier of a run.
   */
  runId: string;
}

/**
 * Query parameters for listing runs.
 */
export interface RunFilterParameters {
  /**
   * The continuation token for getting the next page of results. Null for first page.
   */
  continuationToken?: string;
  /**
   * The time at or after which the run event was updated in 'ISO 8601' format.
   */
  lastUpdatedAfter: Date;
  /**
   * The time at or before which the run event was updated in 'ISO 8601' format.
   */
  lastUpdatedBefore: Date;
  /**
   * List of filters.
   */
  filters?: RunQueryFilter[];
  /**
   * List of OrderBy option.
   */
  orderBy?: RunQueryOrderBy[];
}

/**
 * Query filter option for listing runs.
 */
export interface RunQueryFilter {
  /**
   * Parameter name to be used for filter. The allowed operands to query pipeline runs are PipelineName, RunStart, RunEnd and Status; to query activity runs are ActivityName, ActivityRunStart, ActivityRunEnd, ActivityType and Status, and to query trigger runs are TriggerName, TriggerRunTimestamp and Status.
   */
  operand: RunQueryFilterOperand;
  /**
   * Operator to be used for filter.
   */
  operator: RunQueryFilterOperator;
  /**
   * List of filter values.
   */
  values: string[];
}

/**
 * An object to provide order by options for listing runs.
 */
export interface RunQueryOrderBy {
  /**
   * Parameter name to be used for order by. The allowed parameters to order by for pipeline runs are PipelineName, RunStart, RunEnd and Status; for activity runs are ActivityName, ActivityRunStart, ActivityRunEnd and Status; for trigger runs are TriggerName, TriggerRunTimestamp and Status.
   */
  orderBy: RunQueryOrderByField;
  /**
   * Sorting order of the parameter.
   */
  order: RunQueryOrder;
}

/**
 * A list pipeline runs.
 */
export interface PipelineRunsQueryResponse {
  /**
   * List of pipeline runs.
   */
  value: PipelineRun[];
  /**
   * The continuation token for getting the next page of results, if any remaining results exist, null otherwise.
   */
  continuationToken?: string;
}

/**
 * Information about a pipeline run.
 */
export interface PipelineRun {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Identifier of a run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runId?: string;
  /**
   * Identifier that correlates all the recovery runs of a pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runGroupId?: string;
  /**
   * Indicates if the recovered pipeline run is the latest in its group.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isLatest?: boolean;
  /**
   * The pipeline name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly pipelineName?: string;
  /**
   * The full or partial list of parameter name, value pair used in the pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly parameters?: { [propertyName: string]: string };
  /**
   * Entity that started the pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly invokedBy?: PipelineRunInvokedBy;
  /**
   * The last updated timestamp for the pipeline run event in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastUpdated?: Date;
  /**
   * The start time of a pipeline run in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runStart?: Date;
  /**
   * The end time of a pipeline run in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runEnd?: Date;
  /**
   * The duration of a pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly durationInMs?: number;
  /**
   * The status of a pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * The message from a pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
}

/**
 * Provides entity name and id that started the pipeline run.
 */
export interface PipelineRunInvokedBy {
  /**
   * Name of the entity that started the pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The ID of the entity that started the run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The type of the entity that started the run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly invokedByType?: string;
}

/**
 * A list activity runs.
 */
export interface ActivityRunsQueryResponse {
  /**
   * List of activity runs.
   */
  value: ActivityRun[];
  /**
   * The continuation token for getting the next page of results, if any remaining results exist, null otherwise.
   */
  continuationToken?: string;
}

/**
 * Information about an activity run in a pipeline.
 */
export interface ActivityRun {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The name of the pipeline.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly pipelineName?: string;
  /**
   * The id of the pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly pipelineRunId?: string;
  /**
   * The name of the activity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly activityName?: string;
  /**
   * The type of the activity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly activityType?: string;
  /**
   * The id of the activity run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly activityRunId?: string;
  /**
   * The name of the compute linked service.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly linkedServiceName?: string;
  /**
   * The status of the activity run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * The start time of the activity run in 'ISO 8601' format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly activityRunStart?: Date;
  /**
   * The end time of the activity run in 'ISO 8601' format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly activityRunEnd?: Date;
  /**
   * The duration of the activity run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly durationInMs?: number;
  /**
   * The input for the activity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly input?: any;
  /**
   * The output for the activity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly output?: any;
  /**
   * The error if any from the activity run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: any;
}

/**
 * A list of trigger resources.
 */
export interface TriggerListResponse {
  /**
   * List of triggers.
   */
  value: TriggerResource[];
  /**
   * The link to the next page of results, if any remaining results exist.
   */
  nextLink?: string;
}

/**
 * Azure Synapse nested object which contains information about creating pipeline run
 */
export interface Trigger {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type:
    | "RerunTumblingWindowTrigger"
    | "MultiplePipelineTrigger"
    | "ScheduleTrigger"
    | "BlobTrigger"
    | "BlobEventsTrigger"
    | "TumblingWindowTrigger"
    | "ChainingTrigger";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Trigger description.
   */
  description?: string;
  /**
   * Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runtimeState?: TriggerRuntimeState;
  /**
   * List of tags that can be used for describing the trigger.
   */
  annotations?: any[];
}

/**
 * Defines the response of a trigger subscription operation.
 */
export interface TriggerSubscriptionOperationStatus {
  /**
   * Trigger name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggerName?: string;
  /**
   * Event Subscription Status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: EventSubscriptionStatus;
}

/**
 * A list of trigger runs.
 */
export interface TriggerRunsQueryResponse {
  /**
   * List of trigger runs.
   */
  value: TriggerRun[];
  /**
   * The continuation token for getting the next page of results, if any remaining results exist, null otherwise.
   */
  continuationToken?: string;
}

/**
 * Trigger runs.
 */
export interface TriggerRun {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Trigger run id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggerRunId?: string;
  /**
   * Trigger name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggerName?: string;
  /**
   * Trigger type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggerType?: string;
  /**
   * Trigger run start time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggerRunTimestamp?: Date;
  /**
   * Trigger run status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: TriggerRunStatus;
  /**
   * Trigger error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * List of property name and value related to trigger run. Name, value pair depends on type of trigger.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly properties?: { [propertyName: string]: string };
  /**
   * List of pipeline name and run Id triggered by the trigger run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggeredPipelines?: { [propertyName: string]: string };
}

/**
 * Azure Synapse nested object which contains a flow with data movements and transformations.
 */
export interface DataFlow {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type: "MappingDataFlow";
  /**
   * The description of the data flow.
   */
  description?: string;
  /**
   * List of tags that can be used for describing the data flow.
   */
  annotations?: any[];
  /**
   * The folder that this data flow is in. If not specified, Data flow will appear at the root level.
   */
  folder?: DataFlowFolder;
}

/**
 * The folder that this data flow is in. If not specified, Data flow will appear at the root level.
 */
export interface DataFlowFolder {
  /**
   * The name of the folder that this data flow is in.
   */
  name?: string;
}

/**
 * A list of data flow resources.
 */
export interface DataFlowListResponse {
  /**
   * List of data flows.
   */
  value: DataFlowResource[];
  /**
   * The link to the next page of results, if any remaining results exist.
   */
  nextLink?: string;
}

/**
 * Request body structure for creating data flow debug session.
 */
export interface CreateDataFlowDebugSessionRequest {
  /**
   * The name of the data flow.
   */
  dataFlowName?: string;
  /**
   * The ID of existing Databricks cluster.
   */
  existingClusterId?: string;
  /**
   * Timeout setting for Databricks cluster.
   */
  clusterTimeout?: number;
  /**
   * The name of new Databricks cluster.
   */
  newClusterName?: string;
  /**
   * The type of new Databricks cluster.
   */
  newClusterNodeType?: string;
  /**
   * Data bricks linked service.
   */
  dataBricksLinkedService?: LinkedServiceResource;
}

/**
 * Response body structure for creating data flow debug session.
 */
export interface CreateDataFlowDebugSessionResponse {
  /**
   * The ID of data flow debug session.
   */
  sessionId?: string;
}

/**
 * A list of active debug sessions.
 */
export interface QueryDataFlowDebugSessionsResponse {
  /**
   * Array with all active debug sessions.
   */
  value?: DataFlowDebugSessionInfo[];
  /**
   * The link to the next page of results, if any remaining results exist.
   */
  nextLink?: string;
}

/**
 * Data flow debug session info.
 */
export interface DataFlowDebugSessionInfo {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The name of the data flow.
   */
  dataFlowName?: string;
  /**
   * Compute type of the cluster.
   */
  computeType?: string;
  /**
   * Core count of the cluster.
   */
  coreCount?: number;
  /**
   * Node count of the cluster. (deprecated property)
   */
  nodeCount?: number;
  /**
   * Attached integration runtime name of data flow debug session.
   */
  integrationRuntimeName?: string;
  /**
   * The ID of data flow debug session.
   */
  sessionId?: string;
  /**
   * Start time of data flow debug session.
   */
  startTime?: string;
  /**
   * Compute type of the cluster.
   */
  timeToLiveInMinutes?: number;
  /**
   * Last activity time of data flow debug session.
   */
  lastActivityTime?: string;
}

/**
 * Request body structure for starting data flow debug session.
 */
export interface DataFlowDebugPackage {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The ID of data flow debug session.
   */
  sessionId?: string;
  /**
   * Data flow instance.
   */
  dataFlow?: DataFlowDebugResource;
  /**
   * List of datasets.
   */
  datasets?: DatasetDebugResource[];
  /**
   * List of linked services.
   */
  linkedServices?: LinkedServiceDebugResource[];
  /**
   * Staging info for debug session.
   */
  staging?: DataFlowStagingInfo;
  /**
   * Data flow debug settings.
   */
  debugSettings?: DataFlowDebugPackageDebugSettings;
}

/**
 * Azure Synapse nested debug resource.
 */
export interface SubResourceDebugResource {
  /**
   * The resource name.
   */
  name?: string;
}

/**
 * Staging info for execute data flow activity.
 */
export interface DataFlowStagingInfo {
  /**
   * Staging linked service reference.
   */
  linkedService?: LinkedServiceReference;
  /**
   * Folder path for staging blob.
   */
  folderPath?: string;
}

/**
 * Data flow debug settings.
 */
export interface DataFlowDebugPackageDebugSettings {
  /**
   * Source setting for data flow debug.
   */
  sourceSettings?: DataFlowSourceSetting[];
  /**
   * Data flow parameters.
   */
  parameters?: { [propertyName: string]: any };
  /**
   * Parameters for dataset.
   */
  datasetParameters?: any;
}

/**
 * Definition of data flow source setting for debug.
 */
export interface DataFlowSourceSetting {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The data flow source name.
   */
  sourceName?: string;
  /**
   * Defines the row limit of data flow source in debug.
   */
  rowLimit?: number;
}

/**
 * Response body structure for starting data flow debug session.
 */
export interface AddDataFlowToDebugSessionResponse {
  /**
   * The ID of data flow debug job version.
   */
  jobVersion?: string;
}

/**
 * Request body structure for deleting data flow debug session.
 */
export interface DeleteDataFlowDebugSessionRequest {
  /**
   * The ID of data flow debug session.
   */
  sessionId?: string;
  /**
   * The data flow which contains the debug session.
   */
  dataFlowName?: string;
}

/**
 * Request body structure for data flow expression preview.
 */
export interface DataFlowDebugCommandRequest {
  /**
   * The ID of data flow debug session.
   */
  sessionId: string;
  /**
   * The data flow which contains the debug session.
   */
  dataFlowName?: string;
  /**
   * The command name.
   */
  commandName?: string;
  /**
   * The command payload object.
   */
  commandPayload: any;
}

/**
 * Response body structure of data flow result for data preview, statistics or expression preview.
 */
export interface DataFlowDebugCommandResponse {
  /**
   * The run status of data preview, statistics or expression preview.
   */
  status?: string;
  /**
   * The result data of data preview, statistics or expression preview.
   */
  data?: string;
}

/**
 * A list of sql scripts resources.
 */
export interface SqlScriptsListResponse {
  /**
   * List of sql scripts.
   */
  value: SqlScriptResource[];
  /**
   * The link to the next page of results, if any remaining results exist.
   */
  nextLink?: string;
}

/**
 * SQL script.
 */
export interface SqlScript {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The description of the SQL script.
   */
  description?: string;
  /**
   * The type of the SQL script.
   */
  type?: SqlScriptType;
  /**
   * The content of the SQL script.
   */
  content: SqlScriptContent;
}

/**
 * The content of the SQL script.
 */
export interface SqlScriptContent {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * SQL query to execute.
   */
  query: string;
  /**
   * The connection used to execute the SQL script.
   */
  currentConnection: SqlConnection;
  /**
   * The metadata of the SQL script.
   */
  metadata?: SqlScriptMetadata;
}

/**
 * The connection used to execute the SQL script.
 */
export interface SqlConnection {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The type of the connection.
   */
  type: SqlConnectionType;
  /**
   * The identifier of the connection.
   */
  name: string;
}

/**
 * The metadata of the SQL script.
 */
export interface SqlScriptMetadata {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The language of the SQL script.
   */
  language?: string;
}

/**
 * A list of spark job definitions resources.
 */
export interface SparkJobDefinitionsListResponse {
  /**
   * List of spark job definitions.
   */
  value: SparkJobDefinitionResource[];
  /**
   * The link to the next page of results, if any remaining results exist.
   */
  nextLink?: string;
}

/**
 * Spark job definition.
 */
export interface SparkJobDefinition {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The description of the Spark job definition.
   */
  description?: string;
  /**
   * Big data pool reference.
   */
  targetBigDataPool: BigDataPoolReference;
  /**
   * The required Spark version of the application.
   */
  requiredSparkVersion?: string;
  /**
   * The language of the Spark application.
   */
  language?: string;
  /**
   * The properties of the Spark job.
   */
  jobProperties: SparkJobProperties;
}

/**
 * Big data pool reference.
 */
export interface BigDataPoolReference {
  /**
   * Big data pool reference type.
   */
  type: BigDataPoolReferenceType;
  /**
   * Reference big data pool name.
   */
  referenceName: string;
}

/**
 * The properties of the Spark job.
 */
export interface SparkJobProperties {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The name of the job.
   */
  name?: string;
  /**
   * File containing the application to execute.
   */
  file: string;
  /**
   * Main class for Java/Scala application.
   */
  className?: string;
  /**
   * Spark configuration properties.
   */
  conf?: any;
  /**
   * Command line arguments for the application.
   */
  args?: string[];
  /**
   * Jars to be used in this job.
   */
  jars?: string[];
  /**
   * files to be used in this job.
   */
  files?: string[];
  /**
   * Archives to be used in this job.
   */
  archives?: string[];
  /**
   * Amount of memory to use for the driver process.
   */
  driverMemory: string;
  /**
   * Number of cores to use for the driver.
   */
  driverCores: number;
  /**
   * Amount of memory to use per executor process.
   */
  executorMemory: string;
  /**
   * Number of cores to use for each executor.
   */
  executorCores: number;
  /**
   * Number of executors to launch for this job.
   */
  numExecutors: number;
}

export interface SparkBatchJob {
  livyInfo?: SparkBatchJobState;
  /**
   * The batch name.
   */
  name?: string;
  /**
   * The workspace name.
   */
  workspaceName?: string;
  /**
   * The Spark pool name.
   */
  sparkPoolName?: string;
  /**
   * The submitter name.
   */
  submitterName?: string;
  /**
   * The submitter identifier.
   */
  submitterId?: string;
  /**
   * The artifact identifier.
   */
  artifactId?: string;
  /**
   * The job type.
   */
  jobType?: SparkJobType;
  /**
   * The Spark batch job result.
   */
  result?: SparkBatchJobResultType;
  /**
   * The scheduler information.
   */
  scheduler?: SparkScheduler;
  /**
   * The plugin information.
   */
  plugin?: SparkServicePlugin;
  /**
   * The error information.
   */
  errors?: SparkServiceError[];
  /**
   * The tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * The session Id.
   */
  id: number;
  /**
   * The application id of this session
   */
  appId?: string;
  /**
   * The detailed application info.
   */
  appInfo?: { [propertyName: string]: string };
  /**
   * The batch state
   */
  state?: string;
  /**
   * The log lines.
   */
  logLines?: string[];
}

export interface SparkBatchJobState {
  /**
   * the time that at which "not_started" livy state was first seen.
   */
  notStartedAt?: Date;
  /**
   * the time that at which "starting" livy state was first seen.
   */
  startingAt?: Date;
  /**
   * the time that at which "running" livy state was first seen.
   */
  runningAt?: Date;
  /**
   * time that at which "dead" livy state was first seen.
   */
  deadAt?: Date;
  /**
   * the time that at which "success" livy state was first seen.
   */
  successAt?: Date;
  /**
   * the time that at which "killed" livy state was first seen.
   */
  terminatedAt?: Date;
  /**
   * the time that at which "recovering" livy state was first seen.
   */
  recoveringAt?: Date;
  /**
   * the Spark job state.
   */
  currentState?: string;
  jobCreationRequest?: SparkRequest;
}

export interface SparkRequest {
  name?: string;
  file?: string;
  className?: string;
  arguments?: string[];
  jars?: string[];
  pythonFiles?: string[];
  files?: string[];
  archives?: string[];
  /**
   * Dictionary of <string>
   */
  configuration?: { [propertyName: string]: string };
  driverMemory?: string;
  driverCores?: number;
  executorMemory?: string;
  executorCores?: number;
  executorCount?: number;
}

export interface SparkScheduler {
  submittedAt?: Date;
  scheduledAt?: Date;
  endedAt?: Date;
  cancellationRequestedAt?: Date;
  currentState?: SchedulerCurrentState;
}

export interface SparkServicePlugin {
  preparationStartedAt?: Date;
  resourceAcquisitionStartedAt?: Date;
  submissionStartedAt?: Date;
  monitoringStartedAt?: Date;
  cleanupStartedAt?: Date;
  currentState?: PluginCurrentState;
}

export interface SparkServiceError {
  message?: string;
  errorCode?: string;
  source?: SparkErrorSource;
}

/**
 * A list of Notebook resources.
 */
export interface NotebookListResponse {
  /**
   * List of Notebooks.
   */
  value: NotebookResource[];
  /**
   * The link to the next page of results, if any remaining results exist.
   */
  nextLink?: string;
}

/**
 * Notebook.
 */
export interface Notebook {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The description of the notebook.
   */
  description?: string;
  /**
   * Big data pool reference.
   */
  bigDataPool?: BigDataPoolReference;
  /**
   * Session properties.
   */
  sessionProperties?: NotebookSessionProperties;
  /**
   * Notebook root-level metadata.
   */
  metadata: NotebookMetadata;
  /**
   * Notebook format (major number). Incremented between backwards incompatible changes to the notebook format.
   */
  nbformat: number;
  /**
   * Notebook format (minor number). Incremented for backward compatible changes to the notebook format.
   */
  nbformatMinor: number;
  /**
   * Array of cells of the current notebook.
   */
  cells: NotebookCell[];
}

/**
 * Session properties.
 */
export interface NotebookSessionProperties {
  /**
   * Amount of memory to use for the driver process.
   */
  driverMemory: string;
  /**
   * Number of cores to use for the driver.
   */
  driverCores: number;
  /**
   * Amount of memory to use per executor process.
   */
  executorMemory: string;
  /**
   * Number of cores to use for each executor.
   */
  executorCores: number;
  /**
   * Number of executors to launch for this session.
   */
  numExecutors: number;
}

/**
 * Notebook root-level metadata.
 */
export interface NotebookMetadata {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Kernel information.
   */
  kernelspec?: NotebookKernelSpec;
  /**
   * Language info.
   */
  languageInfo?: NotebookLanguageInfo;
}

/**
 * Kernel information.
 */
export interface NotebookKernelSpec {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Name of the kernel specification.
   */
  name: string;
  /**
   * Name to display in UI.
   */
  displayName: string;
}

/**
 * Language info.
 */
export interface NotebookLanguageInfo {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The programming language which this kernel runs.
   */
  name: string;
  /**
   * The codemirror mode to use for code in this language.
   */
  codemirrorMode?: string;
}

/**
 * Notebook cell.
 */
export interface NotebookCell {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * String identifying the type of cell.
   */
  cellType: string;
  /**
   * Cell-level metadata.
   */
  metadata: any;
  /**
   * Contents of the cell, represented as an array of lines.
   */
  source: string[];
  /**
   * Attachments associated with the cell.
   */
  attachments?: any;
  /**
   * Cell-level output items.
   */
  outputs?: NotebookCellOutputItem[];
}

/**
 * An item of the notebook cell execution output.
 */
export interface NotebookCellOutputItem {
  /**
   * For output_type=stream, determines the name of stream (stdout / stderr).
   */
  name?: string;
  /**
   * Execution sequence number.
   */
  executionCount?: number;
  /**
   * Execution, display, or stream outputs.
   */
  outputType: CellOutputType;
  /**
   * For output_type=stream, the stream's text output, represented as a string or an array of strings.
   */
  text?: any;
  /**
   * Output data. Use MIME type as key, and content as value.
   */
  data?: any;
  /**
   * Metadata for the output item.
   */
  metadata?: any;
}

/**
 * Details of the data lake storage account associated with the workspace
 */
export interface DataLakeStorageAccountDetails {
  /**
   * Account URL
   */
  accountUrl?: string;
  /**
   * Filesystem name
   */
  filesystem?: string;
}

/**
 * Virtual Network Profile
 */
export interface VirtualNetworkProfile {
  /**
   * Subnet ID used for computes in workspace
   */
  computeSubnetId?: string;
}

/**
 * Private endpoint details
 */
export interface PrivateEndpoint {
  /**
   * Resource id of the private endpoint.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/**
 * Connection state details of the private endpoint
 */
export interface PrivateLinkServiceConnectionState {
  /**
   * The private link service connection status.
   */
  status?: PrivateLinkServiceConnectionStateStatus;
  /**
   * The private link service connection description.
   */
  description?: string;
  /**
   * The actions required for private link service connection.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionsRequired?: string;
}

/**
 * Managed Virtual Network Settings
 */
export interface ManagedVirtualNetworkSettings {
  /**
   * Prevent Data Exfiltration
   */
  preventDataExfiltration?: boolean;
  /**
   * Linked Access Check On Target Resource
   */
  linkedAccessCheckOnTargetResource?: boolean;
  /**
   * Allowed Aad Tenant Ids For Linking
   */
  allowedAadTenantIdsForLinking?: string[];
}

/**
 * The workspace managed identity
 */
export interface ManagedIdentity {
  /**
   * The principal ID of the workspace managed identity
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of the workspace managed identity
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /**
   * The type of managed identity for the workspace
   */
  type?: ResourceIdentityType;
}

/**
 * Contains details when the response code indicates an error.
 */
export interface ErrorContract {
  /**
   * The error details.
   */
  error?: ErrorResponse;
}

/**
 * The resource management error response.
 */
export interface ErrorResponse {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorResponse[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: any;
}

/**
 * List of SQL pools
 */
export interface SqlPoolInfoListResult {
  /**
   * Link to the next page of results
   */
  nextLink?: string;
  /**
   * List of SQL pools
   */
  value?: SqlPool[];
}

/**
 * SQL pool SKU
 */
export interface Sku {
  /**
   * The service tier
   */
  tier?: string;
  /**
   * The SKU name
   */
  name?: string;
  /**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
  capacity?: number;
}

/**
 * Collection of Big Data pool information
 */
export interface BigDataPoolResourceInfoListResult {
  /**
   * Link to the next page of results
   */
  nextLink?: string;
  /**
   * List of Big Data pools
   */
  value?: BigDataPoolResourceInfo[];
}

/**
 * Auto-scaling properties of a Big Data pool powered by Apache Spark
 */
export interface AutoScaleProperties {
  /**
   * The minimum number of nodes the Big Data pool can support.
   */
  minNodeCount?: number;
  /**
   * Whether automatic scaling is enabled for the Big Data pool.
   */
  enabled?: boolean;
  /**
   * The maximum number of nodes the Big Data pool can support.
   */
  maxNodeCount?: number;
}

/**
 * Auto-pausing properties of a Big Data pool powered by Apache Spark
 */
export interface AutoPauseProperties {
  /**
   * Number of minutes of idle time before the Big Data pool is automatically paused.
   */
  delayInMinutes?: number;
  /**
   * Whether auto-pausing is enabled for the Big Data pool.
   */
  enabled?: boolean;
}

/**
 * Library requirements for a Big Data pool powered by Apache Spark
 */
export interface LibraryRequirements {
  /**
   * The last update time of the library requirements file.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly time?: Date;
  /**
   * The library requirements.
   */
  content?: string;
  /**
   * The filename of the library requirements file.
   */
  filename?: string;
}

/**
 * A list of integration runtime resources.
 */
export interface IntegrationRuntimeListResponse {
  /**
   * List of integration runtimes.
   */
  value: IntegrationRuntimeResource[];
  /**
   * The link to the next page of results, if any remaining results exist.
   */
  nextLink?: string;
}

/**
 * Azure Synapse nested object which serves as a compute resource for activities.
 */
export interface IntegrationRuntime {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type: "Managed" | "SelfHosted";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Integration runtime description.
   */
  description?: string;
}

/**
 * Azure Synapse expression definition.
 */
export interface Expression {
  /**
   * Expression type.
   */
  type: ExpressionType;
  /**
   * Expression value.
   */
  value: string;
}

/**
 * The base definition of a secret type.
 */
export interface SecretBase {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type: "SecureString" | "AzureKeyVaultSecret";
}

/**
 * Request body structure for starting data flow debug session.
 */
export interface StartDataFlowDebugSessionRequest {
  /**
   * The ID of data flow debug session.
   */
  sessionId?: string;
  /**
   * Data flow instance.
   */
  dataFlow?: DataFlowResource;
  /**
   * List of datasets.
   */
  datasets?: DatasetResource[];
  /**
   * List of linked services.
   */
  linkedServices?: LinkedServiceResource[];
  /**
   * Staging info for debug session.
   */
  staging?: any;
  /**
   * Data flow debug settings.
   */
  debugSettings?: any;
  /**
   * The type of new Databricks cluster.
   */
  incrementalDebug?: boolean;
}

/**
 * Response body structure for starting data flow debug session.
 */
export interface StartDataFlowDebugSessionResponse {
  /**
   * The ID of data flow debug job version.
   */
  jobVersion?: string;
}

/**
 * Request body structure for data flow preview data.
 */
export interface DataFlowDebugPreviewDataRequest {
  /**
   * The ID of data flow debug session.
   */
  sessionId?: string;
  /**
   * The data flow which contains the debug session.
   */
  dataFlowName?: string;
  /**
   * The output stream name.
   */
  streamName?: string;
  /**
   * The row limit for preview request.
   */
  rowLimits?: number;
}

/**
 * Request body structure for data flow statistics.
 */
export interface DataFlowDebugStatisticsRequest {
  /**
   * The ID of data flow debug session.
   */
  sessionId?: string;
  /**
   * The data flow which contains the debug session.
   */
  dataFlowName?: string;
  /**
   * The output stream name.
   */
  streamName?: string;
  /**
   * List of column names.
   */
  columns?: string[];
}

/**
 * Request body structure for data flow expression preview.
 */
export interface EvaluateDataFlowExpressionRequest {
  /**
   * The ID of data flow debug session.
   */
  sessionId?: string;
  /**
   * The data flow which contains the debug session.
   */
  dataFlowName?: string;
  /**
   * The output stream name.
   */
  streamName?: string;
  /**
   * The row limit for preview request.
   */
  rowLimits?: number;
  /**
   * The expression for preview.
   */
  expression?: string;
}

/**
 * Response body structure of data flow query for data preview, statistics or expression preview.
 */
export interface DataFlowDebugQueryResponse {
  /**
   * The run ID of data flow debug session.
   */
  runId?: string;
}

/**
 * Response body structure of data flow result for data preview, statistics or expression preview.
 */
export interface DataFlowDebugResultResponse {
  /**
   * The run status of data preview, statistics or expression preview.
   */
  status?: string;
  /**
   * The result data of data preview, statistics or expression preview.
   */
  data?: string;
}

/**
 * Defines the response of a provision trigger dependency operation.
 */
export interface TriggerDependencyProvisioningStatus {
  /**
   * Trigger name.
   */
  triggerName: string;
  /**
   * Provisioning status.
   */
  provisioningStatus: string;
}

/**
 * Pipeline reference type.
 */
export interface PipelineReference {
  /**
   * Pipeline reference type.
   */
  type: PipelineReferenceType;
  /**
   * Reference pipeline name.
   */
  referenceName: string;
  /**
   * Reference name.
   */
  name?: string;
}

/**
 * Pipeline that needs to be triggered with the given parameters.
 */
export interface TriggerPipelineReference {
  /**
   * Pipeline reference.
   */
  pipelineReference?: PipelineReference;
  /**
   * Pipeline parameters.
   */
  parameters?: { [propertyName: string]: any };
}

/**
 * Parameters for updating a workspace resource.
 */
export interface WorkspaceUpdateParameters {
  /**
   * The resource tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Managed service identity of the workspace.
   */
  identity?: WorkspaceIdentity;
}

/**
 * Identity properties of the workspace resource.
 */
export interface WorkspaceIdentity {
  /**
   * The identity type. Currently the only supported type is 'SystemAssigned'.
   */
  type: "SystemAssigned";
  /**
   * The principal id of the identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The client tenant id of the identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
}

/**
 * Dataset reference type.
 */
export interface DatasetReference {
  /**
   * Dataset reference type.
   */
  type: DatasetReferenceType;
  /**
   * Reference dataset name.
   */
  referenceName: string;
  /**
   * Arguments for dataset.
   */
  parameters?: { [propertyName: string]: any };
}

/**
 * Data flow reference type.
 */
export interface DataFlowReference {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Data flow reference type.
   */
  type: DataFlowReferenceType;
  /**
   * Reference data flow name.
   */
  referenceName: string;
  /**
   * Reference data flow parameters from dataset.
   */
  datasetParameters?: any;
}

/**
 * Rerun tumbling window trigger Parameters.
 */
export interface RerunTumblingWindowTriggerActionParameters {
  /**
   * The start time for the time period for which restatement is initiated. Only UTC time is currently supported.
   */
  startTime: Date;
  /**
   * The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
   */
  endTime: Date;
  /**
   * The max number of parallel time windows (ready for execution) for which a rerun is triggered.
   */
  maxConcurrency: number;
}

/**
 * A list of rerun triggers.
 */
export interface RerunTriggerListResponse {
  /**
   * List of rerun triggers.
   */
  value: RerunTriggerResource[];
  /**
   * The continuation token for getting the next page of results, if any remaining results exist, null otherwise.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/**
 * The request payload of get SSIS object metadata.
 */
export interface GetSsisObjectMetadataRequest {
  /**
   * Metadata path.
   */
  metadataPath?: string;
}

/**
 * The status of the operation.
 */
export interface SsisObjectMetadataStatusResponse {
  /**
   * The status of the operation.
   */
  status?: string;
  /**
   * The operation name.
   */
  name?: string;
  /**
   * The operation properties.
   */
  properties?: string;
  /**
   * The operation error message.
   */
  error?: string;
}

/**
 * The exposure control request.
 */
export interface ExposureControlRequest {
  /**
   * The feature name.
   */
  featureName?: string;
  /**
   * The feature type.
   */
  featureType?: string;
}

/**
 * The exposure control response.
 */
export interface ExposureControlResponse {
  /**
   * The feature name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly featureName?: string;
  /**
   * The feature value.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: string;
}

/**
 * Synapse notebook reference type.
 */
export interface SynapseNotebookReference {
  /**
   * Synapse notebook reference type.
   */
  type: NotebookReferenceType;
  /**
   * Reference notebook name.
   */
  referenceName: string;
}

/**
 * Synapse spark job reference type.
 */
export interface SynapseSparkJobReference {
  /**
   * Synapse spark job reference type.
   */
  type: SparkJobReferenceType;
  /**
   * Reference spark job name.
   */
  referenceName: string;
}

/**
 * SQL pool reference type.
 */
export interface SqlPoolReference {
  /**
   * SQL pool reference type.
   */
  type: SqlPoolReferenceType;
  /**
   * Reference SQL pool name.
   */
  referenceName: string;
}

/**
 * A data flow transformation.
 */
export interface Transformation {
  /**
   * Transformation name.
   */
  name: string;
  /**
   * Transformation description.
   */
  description?: string;
}

/**
 * Dataset location.
 */
export interface DatasetLocation {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type:
    | "AzureBlobStorageLocation"
    | "AzureBlobFSLocation"
    | "AzureDataLakeStoreLocation"
    | "AmazonS3Location"
    | "FileServerLocation"
    | "AzureFileStorageLocation"
    | "GoogleCloudStorageLocation"
    | "FtpServerLocation"
    | "SftpLocation"
    | "HttpServerLocation"
    | "HdfsLocation";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Specify the folder path of dataset. Type: string (or Expression with resultType string)
   */
  folderPath?: any;
  /**
   * Specify the file name of dataset. Type: string (or Expression with resultType string).
   */
  fileName?: any;
}

/**
 * Columns that define the structure of the dataset.
 */
export interface DatasetDataElement {
  /**
   * Name of the column. Type: string (or Expression with resultType string).
   */
  name?: any;
  /**
   * Type of the column. Type: string (or Expression with resultType string).
   */
  type?: any;
}

/**
 * Columns that define the physical type schema of the dataset.
 */
export interface DatasetSchemaDataElement {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Name of the schema column. Type: string (or Expression with resultType string).
   */
  name?: any;
  /**
   * Type of the schema column. Type: string (or Expression with resultType string).
   */
  type?: any;
}

/**
 * The format definition of a storage.
 */
export interface DatasetStorageFormat {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type:
    | "TextFormat"
    | "JsonFormat"
    | "AvroFormat"
    | "OrcFormat"
    | "ParquetFormat";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Serializer. Type: string (or Expression with resultType string).
   */
  serializer?: any;
  /**
   * Deserializer. Type: string (or Expression with resultType string).
   */
  deserializer?: any;
}

/**
 * The compression method used on a dataset.
 */
export interface DatasetCompression {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type: "BZip2" | "GZip" | "Deflate" | "ZipDeflate";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
}

/**
 * Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models.
 */
export interface WebLinkedServiceTypeProperties {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  authenticationType: "Anonymous" | "Basic" | "ClientCertificate";
  /**
   * The URL of the web service endpoint, e.g. http://www.microsoft.com . Type: string (or Expression with resultType string).
   */
  url: any;
}

/**
 * Custom script action to run on HDI ondemand cluster once it's up.
 */
export interface ScriptAction {
  /**
   * The user provided name of the script action.
   */
  name: string;
  /**
   * The URI for the script action.
   */
  uri: string;
  /**
   * The node types on which the script action should be executed.
   */
  roles: HdiNodeTypes;
  /**
   * The parameters for the script action.
   */
  parameters?: string;
}

/**
 * Execution policy for an activity.
 */
export interface ActivityPolicy {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  timeout?: any;
  /**
   * Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  retry?: any;
  /**
   * Interval between each retry attempt (in seconds). The default is 30 sec.
   */
  retryIntervalInSeconds?: number;
  /**
   * When set to true, Input from activity is considered as secure and will not be logged to monitoring.
   */
  secureInput?: boolean;
  /**
   * When set to true, Output from activity is considered as secure and will not be logged to monitoring.
   */
  secureOutput?: boolean;
}

/**
 * Connector read setting.
 */
export interface StoreReadSettings {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type:
    | "AzureBlobStorageReadSettings"
    | "AzureBlobFSReadSettings"
    | "AzureDataLakeStoreReadSettings"
    | "AmazonS3ReadSettings"
    | "FileServerReadSettings"
    | "AzureFileStorageReadSettings"
    | "GoogleCloudStorageReadSettings"
    | "FtpReadSettings"
    | "SftpReadSettings"
    | "HttpReadSettings"
    | "HdfsReadSettings";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
   */
  maxConcurrentConnections?: any;
}

/**
 * Connector write settings.
 */
export interface StoreWriteSettings {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type:
    | "SftpWriteSettings"
    | "AzureBlobStorageWriteSettings"
    | "AzureBlobFSWriteSettings"
    | "AzureDataLakeStoreWriteSettings"
    | "FileServerWriteSettings";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
   */
  maxConcurrentConnections?: any;
  /**
   * The type of copy behavior for copy sink.
   */
  copyBehavior?: any;
}

/**
 * Distcp settings.
 */
export interface DistcpSettings {
  /**
   * Specifies the Yarn ResourceManager endpoint. Type: string (or Expression with resultType string).
   */
  resourceManagerEndpoint: any;
  /**
   * Specifies an existing folder path which will be used to store temp Distcp command script. The script file is generated by ADF and will be removed after Copy job finished. Type: string (or Expression with resultType string).
   */
  tempScriptPath: any;
  /**
   * Specifies the Distcp options. Type: string (or Expression with resultType string).
   */
  distcpOptions?: any;
}

/**
 * Format read settings.
 */
export interface FormatReadSettings {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type: "DelimitedTextReadSettings";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
}

/**
 * Format write settings.
 */
export interface FormatWriteSettings {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type:
    | "AvroWriteSettings"
    | "DelimitedTextWriteSettings"
    | "JsonWriteSettings";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
}

/**
 * A copy activity source.
 */
export interface CopySource {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type:
    | "AvroSource"
    | "ParquetSource"
    | "DelimitedTextSource"
    | "JsonSource"
    | "OrcSource"
    | "BinarySource"
    | "TabularSource"
    | "AzureTableSource"
    | "BlobSource"
    | "DocumentDbCollectionSource"
    | "CosmosDbSqlApiSource"
    | "DynamicsSource"
    | "DynamicsCrmSource"
    | "CommonDataServiceForAppsSource"
    | "RelationalSource"
    | "InformixSource"
    | "MicrosoftAccessSource"
    | "Db2Source"
    | "OdbcSource"
    | "MySqlSource"
    | "PostgreSqlSource"
    | "SybaseSource"
    | "SapBwSource"
    | "ODataSource"
    | "SalesforceSource"
    | "SalesforceServiceCloudSource"
    | "SapCloudForCustomerSource"
    | "SapEccSource"
    | "SapHanaSource"
    | "SapOpenHubSource"
    | "SapTableSource"
    | "RestSource"
    | "SqlSource"
    | "SqlServerSource"
    | "AzureSqlSource"
    | "SqlMISource"
    | "SqlDWSource"
    | "FileSystemSource"
    | "HdfsSource"
    | "AzureMySqlSource"
    | "AzureDataExplorerSource"
    | "OracleSource"
    | "TeradataSource"
    | "WebSource"
    | "CassandraSource"
    | "MongoDbSource"
    | "MongoDbV2Source"
    | "CosmosDbMongoDbApiSource"
    | "Office365Source"
    | "AzureDataLakeStoreSource"
    | "AzureBlobFSSource"
    | "HttpSource"
    | "AmazonMWSSource"
    | "AzurePostgreSqlSource"
    | "ConcurSource"
    | "CouchbaseSource"
    | "DrillSource"
    | "EloquaSource"
    | "GoogleBigQuerySource"
    | "GreenplumSource"
    | "HBaseSource"
    | "HiveSource"
    | "HubspotSource"
    | "ImpalaSource"
    | "JiraSource"
    | "MagentoSource"
    | "MariaDBSource"
    | "AzureMariaDBSource"
    | "MarketoSource"
    | "PaypalSource"
    | "PhoenixSource"
    | "PrestoSource"
    | "QuickBooksSource"
    | "ServiceNowSource"
    | "ShopifySource"
    | "SparkSource"
    | "SquareSource"
    | "XeroSource"
    | "ZohoSource"
    | "NetezzaSource"
    | "VerticaSource"
    | "SalesforceMarketingCloudSource"
    | "ResponsysSource"
    | "DynamicsAXSource"
    | "OracleServiceCloudSource"
    | "GoogleAdWordsSource"
    | "AmazonRedshiftSource";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Source retry count. Type: integer (or Expression with resultType integer).
   */
  sourceRetryCount?: any;
  /**
   * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  sourceRetryWait?: any;
  /**
   * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
   */
  maxConcurrentConnections?: any;
}

/**
 * A copy activity sink.
 */
export interface CopySink {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type:
    | "DelimitedTextSink"
    | "JsonSink"
    | "OrcSink"
    | "AzurePostgreSqlSink"
    | "AzureMySqlSink"
    | "SapCloudForCustomerSink"
    | "AzureQueueSink"
    | "AzureTableSink"
    | "AvroSink"
    | "ParquetSink"
    | "BinarySink"
    | "BlobSink"
    | "FileSystemSink"
    | "DocumentDbCollectionSink"
    | "CosmosDbSqlApiSink"
    | "SqlSink"
    | "SqlServerSink"
    | "AzureSqlSink"
    | "SqlMISink"
    | "SqlDWSink"
    | "OracleSink"
    | "AzureDataLakeStoreSink"
    | "AzureBlobFSSink"
    | "AzureSearchIndexSink"
    | "OdbcSink"
    | "InformixSink"
    | "MicrosoftAccessSink"
    | "DynamicsSink"
    | "DynamicsCrmSink"
    | "CommonDataServiceForAppsSink"
    | "AzureDataExplorerSink"
    | "SalesforceSink"
    | "SalesforceServiceCloudSink"
    | "CosmosDbMongoDbApiSink";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  writeBatchSize?: any;
  /**
   * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  writeBatchTimeout?: any;
  /**
   * Sink retry count. Type: integer (or Expression with resultType integer).
   */
  sinkRetryCount?: any;
  /**
   * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  sinkRetryWait?: any;
  /**
   * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
   */
  maxConcurrentConnections?: any;
}

/**
 * Staging settings.
 */
export interface StagingSettings {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Staging linked service reference.
   */
  linkedServiceName: LinkedServiceReference;
  /**
   * The path to storage for storing the interim data. Type: string (or Expression with resultType string).
   */
  path?: any;
  /**
   * Specifies whether to use compression when copying data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean).
   */
  enableCompression?: any;
}

/**
 * Redirect incompatible row settings
 */
export interface RedirectIncompatibleRowSettings {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Name of the Azure Storage, Storage SAS, or Azure Data Lake Store linked service used for redirecting incompatible row. Must be specified if redirectIncompatibleRowSettings is specified. Type: string (or Expression with resultType string).
   */
  linkedServiceName: any;
  /**
   * The path for storing the redirect incompatible row data. Type: string (or Expression with resultType string).
   */
  path?: any;
}

/**
 * The settings that will be leveraged for SAP HANA source partitioning.
 */
export interface SapHanaPartitionSettings {
  /**
   * The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
  partitionColumnName?: any;
}

/**
 * The settings that will be leveraged for SAP table source partitioning.
 */
export interface SapTablePartitionSettings {
  /**
   * The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
  partitionColumnName?: any;
  /**
   * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
  partitionUpperBound?: any;
  /**
   * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
  partitionLowerBound?: any;
  /**
   * The maximum value of partitions the table will be split into. Type: integer (or Expression with resultType string).
   */
  maxPartitionsNumber?: any;
}

/**
 * SQL stored procedure parameter.
 */
export interface StoredProcedureParameter {
  /**
   * Stored procedure parameter value. Type: string (or Expression with resultType string).
   */
  value?: any;
  /**
   * Stored procedure parameter type.
   */
  type?: StoredProcedureParameterType;
}

/**
 * The settings that will be leveraged for Oracle source partitioning.
 */
export interface OraclePartitionSettings {
  /**
   * Names of the physical partitions of Oracle table.
   */
  partitionNames?: any;
  /**
   * The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
  partitionColumnName?: any;
  /**
   * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
  partitionUpperBound?: any;
  /**
   * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
  partitionLowerBound?: any;
}

/**
 * The settings that will be leveraged for teradata source partitioning.
 */
export interface TeradataPartitionSettings {
  /**
   * The name of the column that will be used for proceeding range or hash partitioning. Type: string (or Expression with resultType string).
   */
  partitionColumnName?: any;
  /**
   * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
  partitionUpperBound?: any;
  /**
   * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
  partitionLowerBound?: any;
}

/**
 * Cursor methods for Mongodb query
 */
export interface MongoDbCursorMethodsProperties {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. Type: string (or Expression with resultType string).
   */
  project?: any;
  /**
   * Specifies the order in which the query returns matching documents. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
   */
  sort?: any;
  /**
   * Specifies the how many documents skipped and where MongoDB begins returning results. This approach may be useful in implementing paginated results. Type: integer (or Expression with resultType integer).
   */
  skip?: any;
  /**
   * Specifies the maximum number of documents the server returns. limit() is analogous to the LIMIT statement in a SQL database. Type: integer (or Expression with resultType integer).
   */
  limit?: any;
}

/**
 * The settings that will be leveraged for Netezza source partitioning.
 */
export interface NetezzaPartitionSettings {
  /**
   * The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
  partitionColumnName?: any;
  /**
   * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
  partitionUpperBound?: any;
  /**
   * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
  partitionLowerBound?: any;
}

/**
 * The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3.
 */
export interface RedshiftUnloadSettings {
  /**
   * The name of the Amazon S3 linked service which will be used for the unload operation when copying from the Amazon Redshift source.
   */
  s3LinkedServiceName: LinkedServiceReference;
  /**
   * The bucket of the interim Amazon S3 which will be used to store the unloaded data from Amazon Redshift source. The bucket must be in the same region as the Amazon Redshift source. Type: string (or Expression with resultType string).
   */
  bucketName: any;
}

/**
 * PolyBase settings.
 */
export interface PolybaseSettings {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Reject type.
   */
  rejectType?: PolybaseSettingsRejectType;
  /**
   * Specifies the value or the percentage of rows that can be rejected before the query fails. Type: number (or Expression with resultType number), minimum: 0.
   */
  rejectValue?: any;
  /**
   * Determines the number of rows to attempt to retrieve before the PolyBase recalculates the percentage of rejected rows. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  rejectSampleValue?: any;
  /**
   * Specifies how to handle missing values in delimited text files when PolyBase retrieves data from the text file. Type: boolean (or Expression with resultType boolean).
   */
  useTypeDefault?: any;
}

/**
 * DW Copy Command settings.
 */
export interface DWCopyCommandSettings {
  /**
   * Specifies the default values for each target column in SQL DW. The default values in the property overwrite the DEFAULT constraint set in the DB, and identity column cannot have a default value. Type: array of objects (or Expression with resultType array of objects).
   */
  defaultValues?: DWCopyCommandDefaultValue[];
  /**
   * Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" }
   */
  additionalOptions?: { [propertyName: string]: string };
}

/**
 * Default value.
 */
export interface DWCopyCommandDefaultValue {
  /**
   * Column name. Type: object (or Expression with resultType string).
   */
  columnName?: any;
  /**
   * The default value of the column. Type: object (or Expression with resultType string).
   */
  defaultValue?: any;
}

/**
 * Log storage settings.
 */
export interface LogStorageSettings {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Log storage linked service reference.
   */
  linkedServiceName: LinkedServiceReference;
  /**
   * The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string).
   */
  path?: any;
}

/**
 * A copy activity translator.
 */
export interface CopyTranslator {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type: "TabularTranslator";
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
}

/**
 * SSIS package location.
 */
export interface SsisPackageLocation {
  /**
   * The SSIS package path. Type: string (or Expression with resultType string).
   */
  packagePath?: any;
  /**
   * The type of SSIS package location.
   */
  type?: SsisPackageLocationType;
  /**
   * Password of the package.
   */
  packagePassword?: SecretBaseUnion;
  /**
   * The package access credential.
   */
  accessCredential?: SsisAccessCredential;
  /**
   * The configuration file of the package execution. Type: string (or Expression with resultType string).
   */
  configurationPath?: any;
  /**
   * The package name.
   */
  packageName?: string;
  /**
   * The embedded package content. Type: string (or Expression with resultType string).
   */
  packageContent?: any;
  /**
   * The embedded package last modified date.
   */
  packageLastModifiedDate?: string;
  /**
   * The embedded child package list.
   */
  childPackages?: SsisChildPackage[];
}

/**
 * SSIS access credential.
 */
export interface SsisAccessCredential {
  /**
   * Domain for windows authentication.
   */
  domain: any;
  /**
   * UseName for windows authentication.
   */
  userName: any;
  /**
   * Password for windows authentication.
   */
  password: SecretBaseUnion;
}

/**
 * SSIS embedded child package.
 */
export interface SsisChildPackage {
  /**
   * Path for embedded child package. Type: string (or Expression with resultType string).
   */
  packagePath: any;
  /**
   * Name for embedded child package.
   */
  packageName?: string;
  /**
   * Content for embedded child package. Type: string (or Expression with resultType string).
   */
  packageContent: any;
  /**
   * Last modified date for embedded child package.
   */
  packageLastModifiedDate?: string;
}

/**
 * SSIS package execution credential.
 */
export interface SsisExecutionCredential {
  /**
   * Domain for windows authentication.
   */
  domain: any;
  /**
   * UseName for windows authentication.
   */
  userName: any;
  /**
   * Password for windows authentication.
   */
  password: SecureString;
}

/**
 * SSIS execution parameter.
 */
export interface SsisExecutionParameter {
  /**
   * SSIS package execution parameter value. Type: string (or Expression with resultType string).
   */
  value: any;
}

/**
 * SSIS property override.
 */
export interface SsisPropertyOverride {
  /**
   * SSIS package property override value. Type: string (or Expression with resultType string).
   */
  value: any;
  /**
   * Whether SSIS package property override value is sensitive data. Value will be encrypted in SSISDB if it is true
   */
  isSensitive?: boolean;
}

/**
 * SSIS package execution log location
 */
export interface SsisLogLocation {
  /**
   * The SSIS package execution log path. Type: string (or Expression with resultType string).
   */
  logPath: any;
  /**
   * The type of SSIS log location.
   */
  type: SsisLogLocationType;
  /**
   * The package execution log access credential.
   */
  accessCredential?: SsisAccessCredential;
  /**
   * Specifies the interval to refresh log. The default interval is 5 minutes. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  logRefreshInterval?: any;
}

/**
 * Reference objects for custom activity
 */
export interface CustomActivityReferenceObject {
  /**
   * Linked service references.
   */
  linkedServices?: LinkedServiceReference[];
  /**
   * Dataset references.
   */
  datasets?: DatasetReference[];
}

/**
 * Web activity authentication properties.
 */
export interface WebActivityAuthentication {
  /**
   * Web activity authentication (Basic/ClientCertificate/MSI)
   */
  type: string;
  /**
   * Base64-encoded contents of a PFX file.
   */
  pfx?: SecretBaseUnion;
  /**
   * Web activity authentication user name for basic authentication.
   */
  username?: string;
  /**
   * Password for the PFX file or basic authentication.
   */
  password?: SecretBaseUnion;
  /**
   * Resource for which Azure Auth token will be requested when using MSI Authentication.
   */
  resource?: string;
}

/**
 * Switch cases with have a value and corresponding activities.
 */
export interface SwitchCase {
  /**
   * Expected value that satisfies the expression result of the 'on' property.
   */
  value?: string;
  /**
   * List of activities to execute for satisfied case condition.
   */
  activities?: ActivityUnion[];
}

/**
 * Azure ML WebService Input/Output file
 */
export interface AzureMLWebServiceFile {
  /**
   * The relative file path, including container name, in the Azure Blob Storage specified by the LinkedService. Type: string (or Expression with resultType string).
   */
  filePath: any;
  /**
   * Reference to an Azure Storage LinkedService, where Azure ML WebService Input/Output file located.
   */
  linkedServiceName: LinkedServiceReference;
}

/**
 * Compute properties for data flow activity.
 */
export interface ExecuteDataFlowActivityTypePropertiesCompute {
  /**
   * Compute type of the cluster which will execute data flow job.
   */
  computeType?: DataFlowComputeType;
  /**
   * Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
   */
  coreCount?: number;
}

/**
 * The workflow trigger recurrence.
 */
export interface ScheduleTriggerRecurrence {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The frequency.
   */
  frequency?: RecurrenceFrequency;
  /**
   * The interval.
   */
  interval?: number;
  /**
   * The start time.
   */
  startTime?: Date;
  /**
   * The end time.
   */
  endTime?: Date;
  /**
   * The time zone.
   */
  timeZone?: string;
  /**
   * The recurrence schedule.
   */
  schedule?: RecurrenceSchedule;
}

/**
 * The recurrence schedule.
 */
export interface RecurrenceSchedule {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The minutes.
   */
  minutes?: number[];
  /**
   * The hours.
   */
  hours?: number[];
  /**
   * The days of the week.
   */
  weekDays?: DayOfWeek[];
  /**
   * The month days.
   */
  monthDays?: number[];
  /**
   * The monthly occurrences.
   */
  monthlyOccurrences?: RecurrenceScheduleOccurrence[];
}

/**
 * The recurrence schedule occurrence.
 */
export interface RecurrenceScheduleOccurrence {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The day of the week.
   */
  day?: DayOfWeek;
  /**
   * The occurrence.
   */
  occurrence?: number;
}

/**
 * Execution policy for an activity.
 */
export interface RetryPolicy {
  /**
   * Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  count?: any;
  /**
   * Interval between retries in seconds. Default is 30.
   */
  intervalInSeconds?: number;
}

/**
 * Referenced dependency.
 */
export interface DependencyReference {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  type:
    | "TriggerDependencyReference"
    | "TumblingWindowTriggerDependencyReference"
    | "SelfDependencyTumblingWindowTriggerReference";
}

/**
 * Trigger reference type.
 */
export interface TriggerReference {
  /**
   * Trigger reference type.
   */
  type: TriggerReferenceType;
  /**
   * Reference trigger name.
   */
  referenceName: string;
}

/**
 * The compute resource properties for managed integration runtime.
 */
export interface IntegrationRuntimeComputeProperties {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities
   */
  location?: string;
  /**
   * The node size requirement to managed integration runtime.
   */
  nodeSize?: string;
  /**
   * The required number of nodes for managed integration runtime.
   */
  numberOfNodes?: number;
  /**
   * Maximum parallel executions count per node for managed integration runtime.
   */
  maxParallelExecutionsPerNode?: number;
  /**
   * Data flow properties for managed integration runtime.
   */
  dataFlowProperties?: IntegrationRuntimeDataFlowProperties;
  /**
   * VNet properties for managed integration runtime.
   */
  vNetProperties?: IntegrationRuntimeVNetProperties;
}

/**
 * Data flow properties for managed integration runtime.
 */
export interface IntegrationRuntimeDataFlowProperties {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Compute type of the cluster which will execute data flow job.
   */
  computeType?: DataFlowComputeType;
  /**
   * Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
   */
  coreCount?: number;
  /**
   * Time to live (in minutes) setting of the cluster which will execute data flow job.
   */
  timeToLive?: number;
}

/**
 * VNet properties for managed integration runtime.
 */
export interface IntegrationRuntimeVNetProperties {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The ID of the VNet that this integration runtime will join.
   */
  vNetId?: string;
  /**
   * The name of the subnet this integration runtime will join.
   */
  subnet?: string;
  /**
   * Resource IDs of the public IP addresses that this integration runtime will use.
   */
  publicIPs?: string[];
}

/**
 * SSIS properties for managed integration runtime.
 */
export interface IntegrationRuntimeSsisProperties {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * Catalog information for managed dedicated integration runtime.
   */
  catalogInfo?: IntegrationRuntimeSsisCatalogInfo;
  /**
   * License type for bringing your own license scenario.
   */
  licenseType?: IntegrationRuntimeLicenseType;
  /**
   * Custom setup script properties for a managed dedicated integration runtime.
   */
  customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptProperties;
  /**
   * Data proxy properties for a managed dedicated integration runtime.
   */
  dataProxyProperties?: IntegrationRuntimeDataProxyProperties;
  /**
   * The edition for the SSIS Integration Runtime
   */
  edition?: IntegrationRuntimeEdition;
  /**
   * Custom setup without script properties for a SSIS integration runtime.
   */
  expressCustomSetupProperties?: CustomSetupBase[];
}

/**
 * Catalog information for managed dedicated integration runtime.
 */
export interface IntegrationRuntimeSsisCatalogInfo {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The catalog database server URL.
   */
  catalogServerEndpoint?: string;
  /**
   * The administrator user name of catalog database.
   */
  catalogAdminUserName?: string;
  /**
   * The password of the administrator user account of the catalog database.
   */
  catalogAdminPassword?: SecureString;
  /**
   * The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/
   */
  catalogPricingTier?: IntegrationRuntimeSsisCatalogPricingTier;
}

/**
 * Custom setup script properties for a managed dedicated integration runtime.
 */
export interface IntegrationRuntimeCustomSetupScriptProperties {
  /**
   * The URI of the Azure blob container that contains the custom setup script.
   */
  blobContainerUri?: string;
  /**
   * The SAS token of the Azure blob container.
   */
  sasToken?: SecureString;
}

/**
 * Data proxy properties for a managed dedicated integration runtime.
 */
export interface IntegrationRuntimeDataProxyProperties {
  /**
   * The self-hosted integration runtime reference.
   */
  connectVia?: EntityReference;
  /**
   * The staging linked service reference.
   */
  stagingLinkedService?: EntityReference;
  /**
   * The path to contain the staged data in the Blob storage.
   */
  path?: string;
}

/**
 * The entity reference.
 */
export interface EntityReference {
  /**
   * The type of this referenced entity.
   */
  type?: IntegrationRuntimeEntityReferenceType;
  /**
   * The name of this referenced entity.
   */
  referenceName?: string;
}

/**
 * The base definition of the custom setup.
 */
export interface CustomSetupBase {
  /**
   * The type of custom setup.
   */
  type: string;
}

/**
 * The base definition of a linked integration runtime.
 */
export interface LinkedIntegrationRuntimeType {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  authorizationType: "Key" | "RBAC";
}

/**
 * The storage account linked service.
 */
export type AzureStorageLinkedService = LinkedService & {
  /**
   * The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * The Azure key vault secret reference of accountKey in connection string.
   */
  accountKey?: AzureKeyVaultSecretReference;
  /**
   * SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  sasUri?: any;
  /**
   * The Azure key vault secret reference of sasToken in sas uri.
   */
  sasToken?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: string;
};

/**
 * The azure blob storage linked service.
 */
export type AzureBlobStorageLinkedService = LinkedService & {
  /**
   * The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * The Azure key vault secret reference of accountKey in connection string.
   */
  accountKey?: AzureKeyVaultSecretReference;
  /**
   * SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  sasUri?: any;
  /**
   * The Azure key vault secret reference of sasToken in sas uri.
   */
  sasToken?: AzureKeyVaultSecretReference;
  /**
   * Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property.
   */
  serviceEndpoint?: string;
  /**
   * The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The key of the service principal used to authenticate against Azure SQL Data Warehouse.
   */
  servicePrincipalKey?: SecretBaseUnion;
  /**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
  tenant?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: string;
};

/**
 * The azure table storage linked service.
 */
export type AzureTableStorageLinkedService = LinkedService & {
  /**
   * The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * The Azure key vault secret reference of accountKey in connection string.
   */
  accountKey?: AzureKeyVaultSecretReference;
  /**
   * SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  sasUri?: any;
  /**
   * The Azure key vault secret reference of sasToken in sas uri.
   */
  sasToken?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: string;
};

/**
 * Azure SQL Data Warehouse linked service.
 */
export type AzureSqlDWLinkedService = LinkedService & {
  /**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  password?: AzureKeyVaultSecretReference;
  /**
   * The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The key of the service principal used to authenticate against Azure SQL Data Warehouse.
   */
  servicePrincipalKey?: SecretBaseUnion;
  /**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
  tenant?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * SQL Server linked service.
 */
export type SqlServerLinkedService = LinkedService & {
  /**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString: any;
  /**
   * The on-premises Windows authentication user name. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * The on-premises Windows authentication password.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Microsoft Azure SQL Database linked service.
 */
export type AzureSqlDatabaseLinkedService = LinkedService & {
  /**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  password?: AzureKeyVaultSecretReference;
  /**
   * The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The key of the service principal used to authenticate against Azure SQL Database.
   */
  servicePrincipalKey?: SecretBaseUnion;
  /**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
  tenant?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Azure SQL Managed Instance linked service.
 */
export type AzureSqlMILinkedService = LinkedService & {
  /**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  password?: AzureKeyVaultSecretReference;
  /**
   * The ID of the service principal used to authenticate against Azure SQL Managed Instance. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The key of the service principal used to authenticate against Azure SQL Managed Instance.
   */
  servicePrincipalKey?: SecretBaseUnion;
  /**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
  tenant?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Azure Batch linked service.
 */
export type AzureBatchLinkedService = LinkedService & {
  /**
   * The Azure Batch account name. Type: string (or Expression with resultType string).
   */
  accountName: any;
  /**
   * The Azure Batch account access key.
   */
  accessKey?: SecretBaseUnion;
  /**
   * The Azure Batch URI. Type: string (or Expression with resultType string).
   */
  batchUri: any;
  /**
   * The Azure Batch pool name. Type: string (or Expression with resultType string).
   */
  poolName: any;
  /**
   * The Azure Storage linked service reference.
   */
  linkedServiceName: LinkedServiceReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Azure Key Vault linked service.
 */
export type AzureKeyVaultLinkedService = LinkedService & {
  /**
   * The base URL of the Azure Key Vault. e.g. https://myakv.vault.azure.net Type: string (or Expression with resultType string).
   */
  baseUrl: any;
};

/**
 * Microsoft Azure Cosmos Database (CosmosDB) linked service.
 */
export type CosmosDbLinkedService = LinkedService & {
  /**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string)
   */
  accountEndpoint?: any;
  /**
   * The name of the database. Type: string (or Expression with resultType string)
   */
  database?: any;
  /**
   * The account key of the Azure CosmosDB account. Type: SecureString or AzureKeyVaultSecretReference.
   */
  accountKey?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Dynamics linked service.
 */
export type DynamicsLinkedService = LinkedService & {
  /**
   * The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
   */
  deploymentType: DynamicsDeploymentType;
  /**
   * The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
   */
  hostName?: string;
  /**
   * The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  port?: string;
  /**
   * The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
   */
  serviceUri?: string;
  /**
   * The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string).
   */
  organizationName?: string;
  /**
   * The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
   */
  authenticationType: DynamicsAuthenticationType;
  /**
   * User name to access the Dynamics instance. Type: string (or Expression with resultType string).
   */
  username?: any;
  /**
   * Password to access the Dynamics instance.
   */
  password?: SecretBaseUnion;
  /**
   * The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
   */
  servicePrincipalCredentialType?: DynamicsServicePrincipalCredentialType;
  /**
   * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
   */
  servicePrincipalCredential?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Dynamics CRM linked service.
 */
export type DynamicsCrmLinkedService = LinkedService & {
  /**
   * The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string).
   */
  deploymentType: DynamicsDeploymentType;
  /**
   * The host name of the on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
   */
  hostName?: any;
  /**
   * The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  port?: any;
  /**
   * The URL to the Microsoft Dynamics CRM server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
   */
  serviceUri?: any;
  /**
   * The organization name of the Dynamics CRM instance. The property is required for on-prem and required for online when there are more than one Dynamics CRM instances associated with the user. Type: string (or Expression with resultType string).
   */
  organizationName?: any;
  /**
   * The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
   */
  authenticationType: DynamicsAuthenticationType;
  /**
   * User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string).
   */
  username?: any;
  /**
   * Password to access the Dynamics CRM instance.
   */
  password?: SecretBaseUnion;
  /**
   * The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
   */
  servicePrincipalCredentialType?: DynamicsServicePrincipalCredentialType;
  /**
   * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
   */
  servicePrincipalCredential?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Common Data Service for Apps linked service.
 */
export type CommonDataServiceForAppsLinkedService = LinkedService & {
  /**
   * The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string).
   */
  deploymentType: DynamicsDeploymentType;
  /**
   * The host name of the on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
   */
  hostName?: any;
  /**
   * The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  port?: any;
  /**
   * The URL to the Microsoft Common Data Service for Apps server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
   */
  serviceUri?: any;
  /**
   * The organization name of the Common Data Service for Apps instance. The property is required for on-prem and required for online when there are more than one Common Data Service for Apps instances associated with the user. Type: string (or Expression with resultType string).
   */
  organizationName?: any;
  /**
   * The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
   */
  authenticationType: DynamicsAuthenticationType;
  /**
   * User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string).
   */
  username?: any;
  /**
   * Password to access the Common Data Service for Apps instance.
   */
  password?: SecretBaseUnion;
  /**
   * The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
   */
  servicePrincipalCredentialType?: DynamicsServicePrincipalCredentialType;
  /**
   * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
   */
  servicePrincipalCredential?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * HDInsight linked service.
 */
export type HDInsightLinkedService = LinkedService & {
  /**
   * HDInsight cluster URI. Type: string (or Expression with resultType string).
   */
  clusterUri: any;
  /**
   * HDInsight cluster user name. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * HDInsight cluster password.
   */
  password?: SecretBaseUnion;
  /**
   * The Azure Storage linked service reference.
   */
  linkedServiceName?: LinkedServiceReference;
  /**
   * A reference to the Azure SQL linked service that points to the HCatalog database.
   */
  hcatalogLinkedServiceName?: LinkedServiceReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
  /**
   * Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean.
   */
  isEspEnabled?: any;
  /**
   * Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string).
   */
  fileSystem?: any;
};

/**
 * File system linked service.
 */
export type FileServerLinkedService = LinkedService & {
  /**
   * Host name of the server. Type: string (or Expression with resultType string).
   */
  host: any;
  /**
   * User ID to logon the server. Type: string (or Expression with resultType string).
   */
  userId?: any;
  /**
   * Password to logon the server.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Azure File Storage linked service.
 */
export type AzureFileStorageLinkedService = LinkedService & {
  /**
   * Host name of the server. Type: string (or Expression with resultType string).
   */
  host: any;
  /**
   * User ID to logon the server. Type: string (or Expression with resultType string).
   */
  userId?: any;
  /**
   * Password to logon the server.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for Google Cloud Storage.
 */
export type GoogleCloudStorageLinkedService = LinkedService & {
  /**
   * The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
   */
  accessKeyId?: any;
  /**
   * The secret access key of the Google Cloud Storage Identity and Access Management (IAM) user.
   */
  secretAccessKey?: SecretBaseUnion;
  /**
   * This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
   */
  serviceUrl?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Oracle database.
 */
export type OracleLinkedService = LinkedService & {
  /**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  password?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Azure MySQL database linked service.
 */
export type AzureMySqlLinkedService = LinkedService & {
  /**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  password?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for MySQL data source.
 */
export type MySqlLinkedService = LinkedService & {
  /**
   * The connection string.
   */
  connectionString: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  password?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for PostgreSQL data source.
 */
export type PostgreSqlLinkedService = LinkedService & {
  /**
   * The connection string.
   */
  connectionString: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  password?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for Sybase data source.
 */
export type SybaseLinkedService = LinkedService & {
  /**
   * Server name for connection. Type: string (or Expression with resultType string).
   */
  server: any;
  /**
   * Database name for connection. Type: string (or Expression with resultType string).
   */
  database: any;
  /**
   * Schema name for connection. Type: string (or Expression with resultType string).
   */
  schema?: any;
  /**
   * AuthenticationType to be used for connection.
   */
  authenticationType?: SybaseAuthenticationType;
  /**
   * Username for authentication. Type: string (or Expression with resultType string).
   */
  username?: any;
  /**
   * Password for authentication.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for DB2 data source.
 */
export type Db2LinkedService = LinkedService & {
  /**
   * Server name for connection. Type: string (or Expression with resultType string).
   */
  server: any;
  /**
   * Database name for connection. Type: string (or Expression with resultType string).
   */
  database: any;
  /**
   * AuthenticationType to be used for connection.
   */
  authenticationType?: Db2AuthenticationType;
  /**
   * Username for authentication. Type: string (or Expression with resultType string).
   */
  username?: any;
  /**
   * Password for authentication.
   */
  password?: SecretBaseUnion;
  /**
   * Under where packages are created when querying database. Type: string (or Expression with resultType string).
   */
  packageCollection?: any;
  /**
   * Certificate Common Name when TLS is enabled. Type: string (or Expression with resultType string).
   */
  certificateCommonName?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for Teradata data source.
 */
export type TeradataLinkedService = LinkedService & {
  /**
   * Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * Server name for connection. Type: string (or Expression with resultType string).
   */
  server?: any;
  /**
   * AuthenticationType to be used for connection.
   */
  authenticationType?: TeradataAuthenticationType;
  /**
   * Username for authentication. Type: string (or Expression with resultType string).
   */
  username?: any;
  /**
   * Password for authentication.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Azure ML Studio Web Service linked service.
 */
export type AzureMLLinkedService = LinkedService & {
  /**
   * The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).
   */
  mlEndpoint: any;
  /**
   * The API key for accessing the Azure ML model endpoint.
   */
  apiKey: SecretBaseUnion;
  /**
   * The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).
   */
  updateResourceEndpoint?: any;
  /**
   * The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The key of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service.
   */
  servicePrincipalKey?: SecretBaseUnion;
  /**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
  tenant?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Azure ML Service linked service.
 */
export type AzureMLServiceLinkedService = LinkedService & {
  /**
   * Azure ML Service workspace subscription ID. Type: string (or Expression with resultType string).
   */
  subscriptionId: any;
  /**
   * Azure ML Service workspace resource group name. Type: string (or Expression with resultType string).
   */
  resourceGroupName: any;
  /**
   * Azure ML Service workspace name. Type: string (or Expression with resultType string).
   */
  mlWorkspaceName: any;
  /**
   * The ID of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The key of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline.
   */
  servicePrincipalKey?: SecretBaseUnion;
  /**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
  tenant?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Open Database Connectivity (ODBC) linked service.
 */
export type OdbcLinkedService = LinkedService & {
  /**
   * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString: any;
  /**
   * Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
   */
  authenticationType?: any;
  /**
   * The access credential portion of the connection string specified in driver-specific property-value format.
   */
  credential?: SecretBaseUnion;
  /**
   * User name for Basic authentication. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * Password for Basic authentication.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Informix linked service.
 */
export type InformixLinkedService = LinkedService & {
  /**
   * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString: any;
  /**
   * Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
   */
  authenticationType?: any;
  /**
   * The access credential portion of the connection string specified in driver-specific property-value format.
   */
  credential?: SecretBaseUnion;
  /**
   * User name for Basic authentication. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * Password for Basic authentication.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Microsoft Access linked service.
 */
export type MicrosoftAccessLinkedService = LinkedService & {
  /**
   * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString: any;
  /**
   * Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
   */
  authenticationType?: any;
  /**
   * The access credential portion of the connection string specified in driver-specific property-value format.
   */
  credential?: SecretBaseUnion;
  /**
   * User name for Basic authentication. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * Password for Basic authentication.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Hadoop Distributed File System (HDFS) linked service.
 */
export type HdfsLinkedService = LinkedService & {
  /**
   * The URL of the HDFS service endpoint, e.g. http://myhostname:50070/webhdfs/v1 . Type: string (or Expression with resultType string).
   */
  url: any;
  /**
   * Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string).
   */
  authenticationType?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
  /**
   * User name for Windows authentication. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * Password for Windows authentication.
   */
  password?: SecretBaseUnion;
};

/**
 * Open Data Protocol (OData) linked service.
 */
export type ODataLinkedService = LinkedService & {
  /**
   * The URL of the OData service endpoint. Type: string (or Expression with resultType string).
   */
  url: any;
  /**
   * Type of authentication used to connect to the OData service.
   */
  authenticationType?: ODataAuthenticationType;
  /**
   * User name of the OData service. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * Password of the OData service.
   */
  password?: SecretBaseUnion;
  /**
   * Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string).
   */
  tenant?: any;
  /**
   * Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string).
   */
  aadResourceId?: any;
  /**
   * Specify the credential type (key or cert) is used for service principal.
   */
  aadServicePrincipalCredentialType?: ODataAadServicePrincipalCredentialType;
  /**
   * Specify the secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
   */
  servicePrincipalKey?: SecretBaseUnion;
  /**
   * Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
   */
  servicePrincipalEmbeddedCert?: SecretBaseUnion;
  /**
   * Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
   */
  servicePrincipalEmbeddedCertPassword?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Web linked service.
 */
export type WebLinkedService = LinkedService & {
  /**
   * Web linked service properties.
   */
  typeProperties: WebLinkedServiceTypePropertiesUnion;
};

/**
 * Linked service for Cassandra data source.
 */
export type CassandraLinkedService = LinkedService & {
  /**
   * Host name for connection. Type: string (or Expression with resultType string).
   */
  host: any;
  /**
   * AuthenticationType to be used for connection. Type: string (or Expression with resultType string).
   */
  authenticationType?: any;
  /**
   * The port for the connection. Type: integer (or Expression with resultType integer).
   */
  port?: any;
  /**
   * Username for authentication. Type: string (or Expression with resultType string).
   */
  username?: any;
  /**
   * Password for authentication.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for MongoDb data source.
 */
export type MongoDbLinkedService = LinkedService & {
  /**
   * The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string).
   */
  server: any;
  /**
   * The authentication type to be used to connect to the MongoDB database.
   */
  authenticationType?: MongoDbAuthenticationType;
  /**
   * The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
   */
  databaseName: any;
  /**
   * Username for authentication. Type: string (or Expression with resultType string).
   */
  username?: any;
  /**
   * Password for authentication.
   */
  password?: SecretBaseUnion;
  /**
   * Database to verify the username and password. Type: string (or Expression with resultType string).
   */
  authSource?: any;
  /**
   * The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  port?: any;
  /**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean).
   */
  enableSsl?: any;
  /**
   * Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean).
   */
  allowSelfSignedServerCert?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for MongoDB data source.
 */
export type MongoDbV2LinkedService = LinkedService & {
  /**
   * The MongoDB connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString: any;
  /**
   * The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
   */
  database: any;
};

/**
 * Linked service for CosmosDB (MongoDB API) data source.
 */
export type CosmosDbMongoDbApiLinkedService = LinkedService & {
  /**
   * The CosmosDB (MongoDB API) connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString: any;
  /**
   * The name of the CosmosDB (MongoDB API) database that you want to access. Type: string (or Expression with resultType string).
   */
  database: any;
};

/**
 * Azure Data Lake Store linked service.
 */
export type AzureDataLakeStoreLinkedService = LinkedService & {
  /**
   * Data Lake Store service URI. Type: string (or Expression with resultType string).
   */
  dataLakeStoreUri: any;
  /**
   * The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The Key of the application used to authenticate against the Azure Data Lake Store account.
   */
  servicePrincipalKey?: SecretBaseUnion;
  /**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
  tenant?: any;
  /**
   * Data Lake Store account name. Type: string (or Expression with resultType string).
   */
  accountName?: any;
  /**
   * Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
   */
  subscriptionId?: any;
  /**
   * Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
   */
  resourceGroupName?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Azure Data Lake Storage Gen2 linked service.
 */
export type AzureBlobFSLinkedService = LinkedService & {
  /**
   * Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
   */
  url: any;
  /**
   * Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
   */
  accountKey?: any;
  /**
   * The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The Key of the application used to authenticate against the Azure Data Lake Storage Gen2 account.
   */
  servicePrincipalKey?: SecretBaseUnion;
  /**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
  tenant?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Office365 linked service.
 */
export type Office365LinkedService = LinkedService & {
  /**
   * Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string).
   */
  office365TenantId: any;
  /**
   * Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string).
   */
  servicePrincipalTenantId: any;
  /**
   * Specify the application's client ID. Type: string (or Expression with resultType string).
   */
  servicePrincipalId: any;
  /**
   * Specify the application's key.
   */
  servicePrincipalKey: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for Salesforce.
 */
export type SalesforceLinkedService = LinkedService & {
  /**
   * The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
   */
  environmentUrl?: any;
  /**
   * The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).
   */
  username?: any;
  /**
   * The password for Basic authentication of the Salesforce instance.
   */
  password?: SecretBaseUnion;
  /**
   * The security token is required to remotely access Salesforce instance.
   */
  securityToken?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for Salesforce Service Cloud.
 */
export type SalesforceServiceCloudLinkedService = LinkedService & {
  /**
   * The URL of Salesforce Service Cloud instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
   */
  environmentUrl?: any;
  /**
   * The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).
   */
  username?: any;
  /**
   * The password for Basic authentication of the Salesforce instance.
   */
  password?: SecretBaseUnion;
  /**
   * The security token is required to remotely access Salesforce instance.
   */
  securityToken?: SecretBaseUnion;
  /**
   * Extended properties appended to the connection string. Type: string (or Expression with resultType string).
   */
  extendedProperties?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for SAP Cloud for Customer.
 */
export type SapCloudForCustomerLinkedService = LinkedService & {
  /**
   * The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string).
   */
  url: any;
  /**
   * The username for Basic authentication. Type: string (or Expression with resultType string).
   */
  username?: any;
  /**
   * The password for Basic authentication.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for SAP ERP Central Component(SAP ECC).
 */
export type SapEccLinkedService = LinkedService & {
  /**
   * The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string).
   */
  url: string;
  /**
   * The username for Basic authentication. Type: string (or Expression with resultType string).
   */
  username?: string;
  /**
   * The password for Basic authentication.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: string;
};

/**
 * SAP Business Warehouse Open Hub Destination Linked Service.
 */
export type SapOpenHubLinkedService = LinkedService & {
  /**
   * Host name of the SAP BW instance where the open hub destination is located. Type: string (or Expression with resultType string).
   */
  server: any;
  /**
   * System number of the BW system where the open hub destination is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
   */
  systemNumber: any;
  /**
   * Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
   */
  clientId: any;
  /**
   * Language of the BW system where the open hub destination is located. The default value is EN. Type: string (or Expression with resultType string).
   */
  language?: any;
  /**
   * Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * Password to access the SAP BW server where the open hub destination is located.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Rest Service linked service.
 */
export type RestServiceLinkedService = LinkedService & {
  /**
   * The base URL of the REST service.
   */
  url: any;
  /**
   * Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  enableServerCertificateValidation?: any;
  /**
   * Type of authentication used to connect to the REST service.
   */
  authenticationType: RestServiceAuthenticationType;
  /**
   * The user name used in Basic authentication type.
   */
  userName?: any;
  /**
   * The password used in Basic authentication type.
   */
  password?: SecretBaseUnion;
  /**
   * The application's client ID used in AadServicePrincipal authentication type.
   */
  servicePrincipalId?: any;
  /**
   * The application's key used in AadServicePrincipal authentication type.
   */
  servicePrincipalKey?: SecretBaseUnion;
  /**
   * The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides.
   */
  tenant?: any;
  /**
   * The resource you are requesting authorization to use.
   */
  aadResourceId?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for Amazon S3.
 */
export type AmazonS3LinkedService = LinkedService & {
  /**
   * The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
   */
  accessKeyId?: any;
  /**
   * The secret access key of the Amazon S3 Identity and Access Management (IAM) user.
   */
  secretAccessKey?: SecretBaseUnion;
  /**
   * This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
   */
  serviceUrl?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for Amazon Redshift.
 */
export type AmazonRedshiftLinkedService = LinkedService & {
  /**
   * The name of the Amazon Redshift server. Type: string (or Expression with resultType string).
   */
  server: any;
  /**
   * The username of the Amazon Redshift source. Type: string (or Expression with resultType string).
   */
  username?: any;
  /**
   * The password of the Amazon Redshift source.
   */
  password?: SecretBaseUnion;
  /**
   * The database name of the Amazon Redshift source. Type: string (or Expression with resultType string).
   */
  database: any;
  /**
   * The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer).
   */
  port?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Custom linked service.
 */
export type CustomDataSourceLinkedService = LinkedService & {
  /**
   * Custom linked service properties.
   */
  typeProperties: any;
};

/**
 * Linked service for Windows Azure Search Service.
 */
export type AzureSearchLinkedService = LinkedService & {
  /**
   * URL for Azure Search service. Type: string (or Expression with resultType string).
   */
  url: any;
  /**
   * Admin Key for Azure Search service
   */
  key?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Linked service for an HTTP source.
 */
export type HttpLinkedService = LinkedService & {
  /**
   * The base URL of the HTTP endpoint, e.g. http://www.microsoft.com. Type: string (or Expression with resultType string).
   */
  url: any;
  /**
   * The authentication type to be used to connect to the HTTP server.
   */
  authenticationType?: HttpAuthenticationType;
  /**
   * User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * Password for Basic, Digest, Windows, or ClientCertificate with EmbeddedCertData authentication.
   */
  password?: SecretBaseUnion;
  /**
   * Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
   */
  embeddedCertData?: any;
  /**
   * Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
   */
  certThumbprint?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
  /**
   * If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean).
   */
  enableServerCertificateValidation?: any;
};

/**
 * A FTP server Linked Service.
 */
export type FtpServerLinkedService = LinkedService & {
  /**
   * Host name of the FTP server. Type: string (or Expression with resultType string).
   */
  host: any;
  /**
   * The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  port?: any;
  /**
   * The authentication type to be used to connect to the FTP server.
   */
  authenticationType?: FtpAuthenticationType;
  /**
   * Username to logon the FTP server. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * Password to logon the FTP server.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
  /**
   * If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
   */
  enableSsl?: any;
  /**
   * If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
   */
  enableServerCertificateValidation?: any;
};

/**
 * A linked service for an SSH File Transfer Protocol (SFTP) server.
 */
export type SftpServerLinkedService = LinkedService & {
  /**
   * The SFTP server host name. Type: string (or Expression with resultType string).
   */
  host: any;
  /**
   * The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  port?: any;
  /**
   * The authentication type to be used to connect to the FTP server.
   */
  authenticationType?: SftpAuthenticationType;
  /**
   * The username used to log on to the SFTP server. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * Password to logon the SFTP server for Basic authentication.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
  /**
   * The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string).
   */
  privateKeyPath?: any;
  /**
   * Base64 encoded SSH private key content for SshPublicKey authentication. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format.
   */
  privateKeyContent?: SecretBaseUnion;
  /**
   * The password to decrypt the SSH private key if the SSH private key is encrypted.
   */
  passPhrase?: SecretBaseUnion;
  /**
   * If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean).
   */
  skipHostKeyValidation?: any;
  /**
   * The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string).
   */
  hostKeyFingerprint?: any;
};

/**
 * SAP Business Warehouse Linked Service.
 */
export type SapBWLinkedService = LinkedService & {
  /**
   * Host name of the SAP BW instance. Type: string (or Expression with resultType string).
   */
  server: any;
  /**
   * System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
   */
  systemNumber: any;
  /**
   * Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
   */
  clientId: any;
  /**
   * Username to access the SAP BW server. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * Password to access the SAP BW server.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * SAP HANA Linked Service.
 */
export type SapHanaLinkedService = LinkedService & {
  /**
   * SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * Host name of the SAP HANA server. Type: string (or Expression with resultType string).
   */
  server: any;
  /**
   * The authentication type to be used to connect to the SAP HANA server.
   */
  authenticationType?: SapHanaAuthenticationType;
  /**
   * Username to access the SAP HANA server. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * Password to access the SAP HANA server.
   */
  password?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Amazon Marketplace Web Service linked service.
 */
export type AmazonMWSLinkedService = LinkedService & {
  /**
   * The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com)
   */
  endpoint: any;
  /**
   * The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2)
   */
  marketplaceID: any;
  /**
   * The Amazon seller ID.
   */
  sellerID: any;
  /**
   * The Amazon MWS authentication token.
   */
  mwsAuthToken?: SecretBaseUnion;
  /**
   * The access key id used to access data.
   */
  accessKeyId: any;
  /**
   * The secret key used to access data.
   */
  secretKey?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Azure PostgreSQL linked service.
 */
export type AzurePostgreSqlLinkedService = LinkedService & {
  /**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  password?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Concur Service linked service.
 */
export type ConcurLinkedService = LinkedService & {
  /**
   * Application client_id supplied by Concur App Management.
   */
  clientId: any;
  /**
   * The user name that you use to access Concur Service.
   */
  username: any;
  /**
   * The password corresponding to the user name that you provided in the username field.
   */
  password?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Couchbase server linked service.
 */
export type CouchbaseLinkedService = LinkedService & {
  /**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * The Azure key vault secret reference of credString in connection string.
   */
  credString?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Drill server linked service.
 */
export type DrillLinkedService = LinkedService & {
  /**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  pwd?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Eloqua server linked service.
 */
export type EloquaLinkedService = LinkedService & {
  /**
   * The endpoint of the Eloqua server. (i.e. eloqua.example.com)
   */
  endpoint: any;
  /**
   * The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice)
   */
  username: any;
  /**
   * The password corresponding to the user name.
   */
  password?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Google BigQuery service linked service.
 */
export type GoogleBigQueryLinkedService = LinkedService & {
  /**
   * The default BigQuery project to query against.
   */
  project: any;
  /**
   * A comma-separated list of public BigQuery projects to access.
   */
  additionalProjects?: any;
  /**
   * Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false.
   */
  requestGoogleDriveScope?: any;
  /**
   * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
   */
  authenticationType: GoogleBigQueryAuthenticationType;
  /**
   * The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication.
   */
  refreshToken?: SecretBaseUnion;
  /**
   * The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
   */
  clientId?: any;
  /**
   * The client secret of the google application used to acquire the refresh token.
   */
  clientSecret?: SecretBaseUnion;
  /**
   * The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR.
   */
  email?: any;
  /**
   * The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR.
   */
  keyFilePath?: any;
  /**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
  trustedCertPath?: any;
  /**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
  useSystemTrustStore?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Greenplum Database linked service.
 */
export type GreenplumLinkedService = LinkedService & {
  /**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  pwd?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * HBase server linked service.
 */
export type HBaseLinkedService = LinkedService & {
  /**
   * The IP address or host name of the HBase server. (i.e. 192.168.222.160)
   */
  host: any;
  /**
   * The TCP port that the HBase instance uses to listen for client connections. The default value is 9090.
   */
  port?: any;
  /**
   * The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version)
   */
  httpPath?: any;
  /**
   * The authentication mechanism to use to connect to the HBase server.
   */
  authenticationType: HBaseAuthenticationType;
  /**
   * The user name used to connect to the HBase instance.
   */
  username?: any;
  /**
   * The password corresponding to the user name.
   */
  password?: SecretBaseUnion;
  /**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
   */
  enableSsl?: any;
  /**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
  trustedCertPath?: any;
  /**
   * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
   */
  allowHostNameCNMismatch?: any;
  /**
   * Specifies whether to allow self-signed certificates from the server. The default value is false.
   */
  allowSelfSignedServerCert?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Hive Server linked service.
 */
export type HiveLinkedService = LinkedService & {
  /**
   * IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable).
   */
  host: any;
  /**
   * The TCP port that the Hive server uses to listen for client connections.
   */
  port?: any;
  /**
   * The type of Hive server.
   */
  serverType?: HiveServerType;
  /**
   * The transport protocol to use in the Thrift layer.
   */
  thriftTransportProtocol?: HiveThriftTransportProtocol;
  /**
   * The authentication method used to access the Hive server.
   */
  authenticationType: HiveAuthenticationType;
  /**
   * true to indicate using the ZooKeeper service, false not.
   */
  serviceDiscoveryMode?: any;
  /**
   * The namespace on ZooKeeper under which Hive Server 2 nodes are added.
   */
  zooKeeperNameSpace?: any;
  /**
   * Specifies whether the driver uses native HiveQL queries,or converts them into an equivalent form in HiveQL.
   */
  useNativeQuery?: any;
  /**
   * The user name that you use to access Hive Server.
   */
  username?: any;
  /**
   * The password corresponding to the user name that you provided in the Username field
   */
  password?: SecretBaseUnion;
  /**
   * The partial URL corresponding to the Hive server.
   */
  httpPath?: any;
  /**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
   */
  enableSsl?: any;
  /**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
  trustedCertPath?: any;
  /**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
  useSystemTrustStore?: any;
  /**
   * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
   */
  allowHostNameCNMismatch?: any;
  /**
   * Specifies whether to allow self-signed certificates from the server. The default value is false.
   */
  allowSelfSignedServerCert?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Hubspot Service linked service.
 */
export type HubspotLinkedService = LinkedService & {
  /**
   * The client ID associated with your Hubspot application.
   */
  clientId: any;
  /**
   * The client secret associated with your Hubspot application.
   */
  clientSecret?: SecretBaseUnion;
  /**
   * The access token obtained when initially authenticating your OAuth integration.
   */
  accessToken?: SecretBaseUnion;
  /**
   * The refresh token obtained when initially authenticating your OAuth integration.
   */
  refreshToken?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Impala server linked service.
 */
export type ImpalaLinkedService = LinkedService & {
  /**
   * The IP address or host name of the Impala server. (i.e. 192.168.222.160)
   */
  host: any;
  /**
   * The TCP port that the Impala server uses to listen for client connections. The default value is 21050.
   */
  port?: any;
  /**
   * The authentication type to use.
   */
  authenticationType: ImpalaAuthenticationType;
  /**
   * The user name used to access the Impala server. The default value is anonymous when using SASLUsername.
   */
  username?: any;
  /**
   * The password corresponding to the user name when using UsernameAndPassword.
   */
  password?: SecretBaseUnion;
  /**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
   */
  enableSsl?: any;
  /**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
  trustedCertPath?: any;
  /**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
  useSystemTrustStore?: any;
  /**
   * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
   */
  allowHostNameCNMismatch?: any;
  /**
   * Specifies whether to allow self-signed certificates from the server. The default value is false.
   */
  allowSelfSignedServerCert?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Jira Service linked service.
 */
export type JiraLinkedService = LinkedService & {
  /**
   * The IP address or host name of the Jira service. (e.g. jira.example.com)
   */
  host: any;
  /**
   * The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP.
   */
  port?: any;
  /**
   * The user name that you use to access Jira Service.
   */
  username: any;
  /**
   * The password corresponding to the user name that you provided in the username field.
   */
  password?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Magento server linked service.
 */
export type MagentoLinkedService = LinkedService & {
  /**
   * The URL of the Magento instance. (i.e. 192.168.222.110/magento3)
   */
  host: any;
  /**
   * The access token from Magento.
   */
  accessToken?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * MariaDB server linked service.
 */
export type MariaDBLinkedService = LinkedService & {
  /**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  pwd?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Azure Database for MariaDB linked service.
 */
export type AzureMariaDBLinkedService = LinkedService & {
  /**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  pwd?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Marketo server linked service.
 */
export type MarketoLinkedService = LinkedService & {
  /**
   * The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com)
   */
  endpoint: any;
  /**
   * The client Id of your Marketo service.
   */
  clientId: any;
  /**
   * The client secret of your Marketo service.
   */
  clientSecret?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Paypal Service linked service.
 */
export type PaypalLinkedService = LinkedService & {
  /**
   * The URL of the PayPal instance. (i.e. api.sandbox.paypal.com)
   */
  host: any;
  /**
   * The client ID associated with your PayPal application.
   */
  clientId: any;
  /**
   * The client secret associated with your PayPal application.
   */
  clientSecret?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Phoenix server linked service.
 */
export type PhoenixLinkedService = LinkedService & {
  /**
   * The IP address or host name of the Phoenix server. (i.e. 192.168.222.160)
   */
  host: any;
  /**
   * The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765.
   */
  port?: any;
  /**
   * The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService.
   */
  httpPath?: any;
  /**
   * The authentication mechanism used to connect to the Phoenix server.
   */
  authenticationType: PhoenixAuthenticationType;
  /**
   * The user name used to connect to the Phoenix server.
   */
  username?: any;
  /**
   * The password corresponding to the user name.
   */
  password?: SecretBaseUnion;
  /**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
   */
  enableSsl?: any;
  /**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
  trustedCertPath?: any;
  /**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
  useSystemTrustStore?: any;
  /**
   * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
   */
  allowHostNameCNMismatch?: any;
  /**
   * Specifies whether to allow self-signed certificates from the server. The default value is false.
   */
  allowSelfSignedServerCert?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Presto server linked service.
 */
export type PrestoLinkedService = LinkedService & {
  /**
   * The IP address or host name of the Presto server. (i.e. 192.168.222.160)
   */
  host: any;
  /**
   * The version of the Presto server. (i.e. 0.148-t)
   */
  serverVersion: any;
  /**
   * The catalog context for all request against the server.
   */
  catalog: any;
  /**
   * The TCP port that the Presto server uses to listen for client connections. The default value is 8080.
   */
  port?: any;
  /**
   * The authentication mechanism used to connect to the Presto server.
   */
  authenticationType: PrestoAuthenticationType;
  /**
   * The user name used to connect to the Presto server.
   */
  username?: any;
  /**
   * The password corresponding to the user name.
   */
  password?: SecretBaseUnion;
  /**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
   */
  enableSsl?: any;
  /**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
  trustedCertPath?: any;
  /**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
  useSystemTrustStore?: any;
  /**
   * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
   */
  allowHostNameCNMismatch?: any;
  /**
   * Specifies whether to allow self-signed certificates from the server. The default value is false.
   */
  allowSelfSignedServerCert?: any;
  /**
   * The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value is the system time zone.
   */
  timeZoneID?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * QuickBooks server linked service.
 */
export type QuickBooksLinkedService = LinkedService & {
  /**
   * The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com)
   */
  endpoint: any;
  /**
   * The company ID of the QuickBooks company to authorize.
   */
  companyId: any;
  /**
   * The consumer key for OAuth 1.0 authentication.
   */
  consumerKey: any;
  /**
   * The consumer secret for OAuth 1.0 authentication.
   */
  consumerSecret: SecretBaseUnion;
  /**
   * The access token for OAuth 1.0 authentication.
   */
  accessToken: SecretBaseUnion;
  /**
   * The access token secret for OAuth 1.0 authentication.
   */
  accessTokenSecret: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * ServiceNow server linked service.
 */
export type ServiceNowLinkedService = LinkedService & {
  /**
   * The endpoint of the ServiceNow server. (i.e. <instance>.service-now.com)
   */
  endpoint: any;
  /**
   * The authentication type to use.
   */
  authenticationType: ServiceNowAuthenticationType;
  /**
   * The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication.
   */
  username?: any;
  /**
   * The password corresponding to the user name for Basic and OAuth2 authentication.
   */
  password?: SecretBaseUnion;
  /**
   * The client id for OAuth2 authentication.
   */
  clientId?: any;
  /**
   * The client secret for OAuth2 authentication.
   */
  clientSecret?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Shopify Service linked service.
 */
export type ShopifyLinkedService = LinkedService & {
  /**
   * The endpoint of the Shopify server. (i.e. mystore.myshopify.com)
   */
  host: any;
  /**
   * The API access token that can be used to access Shopify’s data. The token won't expire if it is offline mode.
   */
  accessToken?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Spark Server linked service.
 */
export type SparkLinkedService = LinkedService & {
  /**
   * IP address or host name of the Spark server
   */
  host: any;
  /**
   * The TCP port that the Spark server uses to listen for client connections.
   */
  port: any;
  /**
   * The type of Spark server.
   */
  serverType?: SparkServerType;
  /**
   * The transport protocol to use in the Thrift layer.
   */
  thriftTransportProtocol?: SparkThriftTransportProtocol;
  /**
   * The authentication method used to access the Spark server.
   */
  authenticationType: SparkAuthenticationType;
  /**
   * The user name that you use to access Spark Server.
   */
  username?: any;
  /**
   * The password corresponding to the user name that you provided in the Username field
   */
  password?: SecretBaseUnion;
  /**
   * The partial URL corresponding to the Spark server.
   */
  httpPath?: any;
  /**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
   */
  enableSsl?: any;
  /**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
  trustedCertPath?: any;
  /**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
  useSystemTrustStore?: any;
  /**
   * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
   */
  allowHostNameCNMismatch?: any;
  /**
   * Specifies whether to allow self-signed certificates from the server. The default value is false.
   */
  allowSelfSignedServerCert?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Square Service linked service.
 */
export type SquareLinkedService = LinkedService & {
  /**
   * The URL of the Square instance. (i.e. mystore.mysquare.com)
   */
  host: any;
  /**
   * The client ID associated with your Square application.
   */
  clientId: any;
  /**
   * The client secret associated with your Square application.
   */
  clientSecret?: SecretBaseUnion;
  /**
   * The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500)
   */
  redirectUri: any;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Xero Service linked service.
 */
export type XeroLinkedService = LinkedService & {
  /**
   * The endpoint of the Xero server. (i.e. api.xero.com)
   */
  host: any;
  /**
   * The consumer key associated with the Xero application.
   */
  consumerKey?: SecretBaseUnion;
  /**
   * The private key from the .pem file that was generated for your Xero private application. You must include all the text from the .pem file, including the Unix line endings(
   * ).
   */
  privateKey?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Zoho server linked service.
 */
export type ZohoLinkedService = LinkedService & {
  /**
   * The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private)
   */
  endpoint: any;
  /**
   * The access token for Zoho authentication.
   */
  accessToken?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Vertica linked service.
 */
export type VerticaLinkedService = LinkedService & {
  /**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  pwd?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Netezza linked service.
 */
export type NetezzaLinkedService = LinkedService & {
  /**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
  connectionString?: any;
  /**
   * The Azure key vault secret reference of password in connection string.
   */
  pwd?: AzureKeyVaultSecretReference;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Salesforce Marketing Cloud linked service.
 */
export type SalesforceMarketingCloudLinkedService = LinkedService & {
  /**
   * The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
   */
  clientId: any;
  /**
   * The client secret associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
   */
  clientSecret?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * HDInsight ondemand linked service.
 */
export type HDInsightOnDemandLinkedService = LinkedService & {
  /**
   * Number of worker/data nodes in the cluster. Suggestion value: 4. Type: string (or Expression with resultType string).
   */
  clusterSize: any;
  /**
   * The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string).
   */
  timeToLive: any;
  /**
   * Version of the HDInsight cluster.  Type: string (or Expression with resultType string).
   */
  version: any;
  /**
   * Azure Storage linked service to be used by the on-demand cluster for storing and processing data.
   */
  linkedServiceName: LinkedServiceReference;
  /**
   * The customer’s subscription to host the cluster. Type: string (or Expression with resultType string).
   */
  hostSubscriptionId: any;
  /**
   * The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The key for the service principal id.
   */
  servicePrincipalKey?: SecretBaseUnion;
  /**
   * The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string).
   */
  tenant: any;
  /**
   * The resource group where the cluster belongs. Type: string (or Expression with resultType string).
   */
  clusterResourceGroup: any;
  /**
   * The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string).
   */
  clusterNamePrefix?: any;
  /**
   * The username to access the cluster. Type: string (or Expression with resultType string).
   */
  clusterUserName?: any;
  /**
   * The password to access the cluster.
   */
  clusterPassword?: SecretBaseUnion;
  /**
   * The username to SSH remotely connect to cluster’s node (for Linux). Type: string (or Expression with resultType string).
   */
  clusterSshUserName?: any;
  /**
   * The password to SSH remotely connect cluster’s node (for Linux).
   */
  clusterSshPassword?: SecretBaseUnion;
  /**
   * Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf.
   */
  additionalLinkedServiceNames?: LinkedServiceReference[];
  /**
   * The name of Azure SQL linked service that point to the HCatalog database. The on-demand HDInsight cluster is created by using the Azure SQL database as the metastore.
   */
  hcatalogLinkedServiceName?: LinkedServiceReference;
  /**
   * The cluster type. Type: string (or Expression with resultType string).
   */
  clusterType?: any;
  /**
   * The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string).
   */
  sparkVersion?: any;
  /**
   * Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created.
   */
  coreConfiguration?: any;
  /**
   * Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster.
   */
  hBaseConfiguration?: any;
  /**
   * Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster.
   */
  hdfsConfiguration?: any;
  /**
   * Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster.
   */
  hiveConfiguration?: any;
  /**
   * Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster.
   */
  mapReduceConfiguration?: any;
  /**
   * Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster.
   */
  oozieConfiguration?: any;
  /**
   * Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster.
   */
  stormConfiguration?: any;
  /**
   * Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster.
   */
  yarnConfiguration?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
  /**
   * Specifies the size of the head node for the HDInsight cluster.
   */
  headNodeSize?: any;
  /**
   * Specifies the size of the data node for the HDInsight cluster.
   */
  dataNodeSize?: any;
  /**
   * Specifies the size of the Zoo Keeper node for the HDInsight cluster.
   */
  zookeeperNodeSize?: any;
  /**
   * Custom script actions to run on HDI ondemand cluster once it's up. Please refer to https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions.
   */
  scriptActions?: ScriptAction[];
  /**
   * The ARM resource ID for the vNet to which the cluster should be joined after creation. Type: string (or Expression with resultType string).
   */
  virtualNetworkId?: any;
  /**
   * The ARM resource ID for the subnet in the vNet. If virtualNetworkId was specified, then this property is required. Type: string (or Expression with resultType string).
   */
  subnetName?: any;
};

/**
 * Azure Data Lake Analytics linked service.
 */
export type AzureDataLakeAnalyticsLinkedService = LinkedService & {
  /**
   * The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string).
   */
  accountName: any;
  /**
   * The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string).
   */
  servicePrincipalId?: any;
  /**
   * The Key of the application used to authenticate against the Azure Data Lake Analytics account.
   */
  servicePrincipalKey?: SecretBaseUnion;
  /**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
  tenant: any;
  /**
   * Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
   */
  subscriptionId?: any;
  /**
   * Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
   */
  resourceGroupName?: any;
  /**
   * Azure Data Lake Analytics URI Type: string (or Expression with resultType string).
   */
  dataLakeAnalyticsUri?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Azure Databricks linked service.
 */
export type AzureDatabricksLinkedService = LinkedService & {
  /**
   * <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
   */
  domain: any;
  /**
   * Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string (or Expression with resultType string).
   */
  accessToken: SecretBaseUnion;
  /**
   * The id of an existing interactive cluster that will be used for all runs of this activity. Type: string (or Expression with resultType string).
   */
  existingClusterId?: any;
  /**
   * The id of an existing instance pool that will be used for all runs of this activity. Type: string (or Expression with resultType string).
   */
  instancePoolId?: any;
  /**
   * If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string).
   */
  newClusterVersion?: any;
  /**
   * If not using an existing interactive cluster, this specifies the number of worker nodes to use for the new job cluster or instance pool. For new job clusters, this a string-formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 (min) to 10 (max). For instance pools, this is a string-formatted Int32, and can only specify a fixed number of worker nodes, such as '2'. Required if newClusterVersion is specified. Type: string (or Expression with resultType string).
   */
  newClusterNumOfWorker?: any;
  /**
   * The node type of the new job cluster. This property is required if newClusterVersion is specified and instancePoolId is not specified. If instancePoolId is specified, this property is ignored. Type: string (or Expression with resultType string).
   */
  newClusterNodeType?: any;
  /**
   * A set of optional, user-specified Spark configuration key-value pairs.
   */
  newClusterSparkConf?: { [propertyName: string]: any };
  /**
   * A set of optional, user-specified Spark environment variables key-value pairs.
   */
  newClusterSparkEnvVars?: { [propertyName: string]: any };
  /**
   * Additional tags for cluster resources. This property is ignored in instance pool configurations.
   */
  newClusterCustomTags?: { [propertyName: string]: any };
  /**
   * The driver node type for the new job cluster. This property is ignored in instance pool configurations. Type: string (or Expression with resultType string).
   */
  newClusterDriverNodeType?: any;
  /**
   * User-defined initialization scripts for the new cluster. Type: array of strings (or Expression with resultType array of strings).
   */
  newClusterInitScripts?: any;
  /**
   * Enable the elastic disk on the new cluster. This property is now ignored, and takes the default elastic disk behavior in Databricks (elastic disks are always enabled). Type: boolean (or Expression with resultType boolean).
   */
  newClusterEnableElasticDisk?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Responsys linked service.
 */
export type ResponsysLinkedService = LinkedService & {
  /**
   * The endpoint of the Responsys server.
   */
  endpoint: any;
  /**
   * The client ID associated with the Responsys application. Type: string (or Expression with resultType string).
   */
  clientId: any;
  /**
   * The client secret associated with the Responsys application. Type: string (or Expression with resultType string).
   */
  clientSecret?: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Dynamics AX linked service.
 */
export type DynamicsAXLinkedService = LinkedService & {
  /**
   * The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint.
   */
  url: any;
  /**
   * Specify the application's client ID. Type: string (or Expression with resultType string).
   */
  servicePrincipalId: any;
  /**
   * Specify the application's key. Mark this field as a SecureString to store it securely in Data Factory, or reference a secret stored in Azure Key Vault. Type: string (or Expression with resultType string).
   */
  servicePrincipalKey: SecretBaseUnion;
  /**
   * Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string).
   */
  tenant: any;
  /**
   * Specify the resource you are requesting authorization. Type: string (or Expression with resultType string).
   */
  aadResourceId: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Oracle Service Cloud linked service.
 */
export type OracleServiceCloudLinkedService = LinkedService & {
  /**
   * The URL of the Oracle Service Cloud instance.
   */
  host: any;
  /**
   * The user name that you use to access Oracle Service Cloud server.
   */
  username: any;
  /**
   * The password corresponding to the user name that you provided in the username key.
   */
  password: SecretBaseUnion;
  /**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  useEncryptedEndpoints?: any;
  /**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  useHostVerification?: any;
  /**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  usePeerVerification?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Google AdWords service linked service.
 */
export type GoogleAdWordsLinkedService = LinkedService & {
  /**
   * The Client customer ID of the AdWords account that you want to fetch report data for.
   */
  clientCustomerID: any;
  /**
   * The developer token associated with the manager account that you use to grant access to the AdWords API.
   */
  developerToken: SecretBaseUnion;
  /**
   * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
   */
  authenticationType: GoogleAdWordsAuthenticationType;
  /**
   * The refresh token obtained from Google for authorizing access to AdWords for UserAuthentication.
   */
  refreshToken?: SecretBaseUnion;
  /**
   * The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
   */
  clientId?: any;
  /**
   * The client secret of the google application used to acquire the refresh token.
   */
  clientSecret?: SecretBaseUnion;
  /**
   * The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR.
   */
  email?: any;
  /**
   * The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR.
   */
  keyFilePath?: any;
  /**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
  trustedCertPath?: any;
  /**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
  useSystemTrustStore?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * SAP Table Linked Service.
 */
export type SapTableLinkedService = LinkedService & {
  /**
   * Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string).
   */
  server?: any;
  /**
   * System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
   */
  systemNumber?: any;
  /**
   * Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
   */
  clientId?: any;
  /**
   * Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string).
   */
  language?: any;
  /**
   * SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string).
   */
  systemId?: any;
  /**
   * Username to access the SAP server where the table is located. Type: string (or Expression with resultType string).
   */
  userName?: any;
  /**
   * Password to access the SAP server where the table is located.
   */
  password?: SecretBaseUnion;
  /**
   * The hostname of the SAP Message Server. Type: string (or Expression with resultType string).
   */
  messageServer?: any;
  /**
   * The service name or port number of the Message Server. Type: string (or Expression with resultType string).
   */
  messageServerService?: any;
  /**
   * SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string).
   */
  sncMode?: any;
  /**
   * Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
   */
  sncMyName?: any;
  /**
   * Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
   */
  sncPartnerName?: any;
  /**
   * External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string).
   */
  sncLibraryPath?: any;
  /**
   * SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string).
   */
  sncQop?: any;
  /**
   * The Logon Group for the SAP System. Type: string (or Expression with resultType string).
   */
  logonGroup?: any;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * Azure Data Explorer (Kusto) linked service.
 */
export type AzureDataExplorerLinkedService = LinkedService & {
  /**
   * The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the format https://<clusterName>.<regionName>.kusto.windows.net. Type: string (or Expression with resultType string)
   */
  endpoint: any;
  /**
   * The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string).
   */
  servicePrincipalId: any;
  /**
   * The key of the service principal used to authenticate against Kusto.
   */
  servicePrincipalKey: SecretBaseUnion;
  /**
   * Database name for connection. Type: string (or Expression with resultType string).
   */
  database: any;
  /**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
  tenant: any;
};

/**
 * Azure Function linked service.
 */
export type AzureFunctionLinkedService = LinkedService & {
  /**
   * The endpoint of the Azure Function App. URL will be in the format https://<accountName>.azurewebsites.net.
   */
  functionAppUrl: any;
  /**
   * Function or Host key for Azure Function App.
   */
  functionKey?: SecretBaseUnion;
  /**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
  encryptedCredential?: any;
};

/**
 * The resource model definition for a Azure Resource Manager resource with an etag.
 */
export type AzureEntityResource = Resource & {
  /**
   * Resource Etag.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly etag?: string;
};

/**
 * A private endpoint connection
 */
export type PrivateEndpointConnection = Resource & {
  /**
   * The private endpoint which the connection belongs to.
   */
  privateEndpoint?: PrivateEndpoint;
  /**
   * Connection state of the private endpoint connection.
   */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
  /**
   * Provisioning state of the private endpoint connection.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
};

/**
 * The resource model definition for a ARM tracked top level resource
 */
export type TrackedResource = Resource & {
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * The geo-location where the resource lives
   */
  location: string;
};

/**
 * The resource model definition for a ARM proxy resource. It will have everything other than required location and tags
 */
export type ProxyResource = Resource & {};

/**
 * Avro dataset.
 */
export type AvroDataset = Dataset & {
  /**
   * The location of the avro storage.
   */
  location?: DatasetLocationUnion;
  avroCompressionCodec?: AvroCompressionCodec;
  avroCompressionLevel?: number;
};

/**
 * Parquet dataset.
 */
export type ParquetDataset = Dataset & {
  /**
   * The location of the parquet storage.
   */
  location?: DatasetLocationUnion;
  compressionCodec?: ParquetCompressionCodec;
};

/**
 * Delimited text dataset.
 */
export type DelimitedTextDataset = Dataset & {
  /**
   * The location of the delimited text storage.
   */
  location?: DatasetLocationUnion;
  /**
   * The column delimiter. Type: string (or Expression with resultType string).
   */
  columnDelimiter?: any;
  /**
   * The row delimiter. Type: string (or Expression with resultType string).
   */
  rowDelimiter?: any;
  /**
   * The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
   */
  encodingName?: any;
  compressionCodec?: DelimitedTextCompressionCodec;
  /**
   * The data compression method used for DelimitedText.
   */
  compressionLevel?: DatasetCompressionLevel;
  /**
   * The quote character. Type: string (or Expression with resultType string).
   */
  quoteChar?: any;
  /**
   * The escape character. Type: string (or Expression with resultType string).
   */
  escapeChar?: any;
  /**
   * When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
   */
  firstRowAsHeader?: any;
  /**
   * The null value string. Type: string (or Expression with resultType string).
   */
  nullValue?: any;
};

/**
 * Json dataset.
 */
export type JsonDataset = Dataset & {
  /**
   * The location of the json data storage.
   */
  location?: DatasetLocationUnion;
  /**
   * The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
   */
  encodingName?: any;
  /**
   * The data compression method used for the json dataset.
   */
  compression?: DatasetCompressionUnion;
};

/**
 * ORC dataset.
 */
export type OrcDataset = Dataset & {
  /**
   * The location of the ORC data storage.
   */
  location?: DatasetLocationUnion;
  orcCompressionCodec?: OrcCompressionCodec;
};

/**
 * Binary dataset.
 */
export type BinaryDataset = Dataset & {
  /**
   * The location of the Binary storage.
   */
  location?: DatasetLocationUnion;
  /**
   * The data compression method used for the binary dataset.
   */
  compression?: DatasetCompressionUnion;
};

/**
 * The Azure Table storage dataset.
 */
export type AzureTableDataset = Dataset & {
  /**
   * The table name of the Azure Table storage. Type: string (or Expression with resultType string).
   */
  tableName: any;
};

/**
 * The Azure SQL Server database dataset.
 */
export type AzureSqlTableDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The schema name of the Azure SQL database. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
  /**
   * The table name of the Azure SQL database. Type: string (or Expression with resultType string).
   */
  table?: any;
};

/**
 * The Azure SQL Managed Instance dataset.
 */
export type AzureSqlMITableDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The schema name of the Azure SQL Managed Instance. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
  /**
   * The table name of the Azure SQL Managed Instance dataset. Type: string (or Expression with resultType string).
   */
  table?: any;
};

/**
 * The Azure SQL Data Warehouse dataset.
 */
export type AzureSqlDWTableDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The schema name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
  /**
   * The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
   */
  table?: any;
};

/**
 * The Cassandra database dataset.
 */
export type CassandraTableDataset = Dataset & {
  /**
   * The table name of the Cassandra database. Type: string (or Expression with resultType string).
   */
  tableName?: any;
  /**
   * The keyspace of the Cassandra database. Type: string (or Expression with resultType string).
   */
  keyspace?: any;
};

/**
 * The custom dataset.
 */
export type CustomDataset = Dataset & {
  /**
   * Custom dataset properties.
   */
  typeProperties?: any;
};

/**
 * Microsoft Azure CosmosDB (SQL API) Collection dataset.
 */
export type CosmosDbSqlApiCollectionDataset = Dataset & {
  /**
   * CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string).
   */
  collectionName: any;
};

/**
 * Microsoft Azure Document Database Collection dataset.
 */
export type DocumentDbCollectionDataset = Dataset & {
  /**
   * Document Database collection name. Type: string (or Expression with resultType string).
   */
  collectionName: any;
};

/**
 * The Dynamics entity dataset.
 */
export type DynamicsEntityDataset = Dataset & {
  /**
   * The logical name of the entity. Type: string (or Expression with resultType string).
   */
  entityName?: any;
};

/**
 * The Dynamics CRM entity dataset.
 */
export type DynamicsCrmEntityDataset = Dataset & {
  /**
   * The logical name of the entity. Type: string (or Expression with resultType string).
   */
  entityName?: any;
};

/**
 * The Common Data Service for Apps entity dataset.
 */
export type CommonDataServiceForAppsEntityDataset = Dataset & {
  /**
   * The logical name of the entity. Type: string (or Expression with resultType string).
   */
  entityName?: any;
};

/**
 * The Office365 account.
 */
export type Office365Dataset = Dataset & {
  /**
   * Name of the dataset to extract from Office 365. Type: string (or Expression with resultType string).
   */
  tableName: any;
  /**
   * A predicate expression that can be used to filter the specific rows to extract from Office 365. Type: string (or Expression with resultType string).
   */
  predicate?: any;
};

/**
 * The MongoDB database dataset.
 */
export type MongoDbCollectionDataset = Dataset & {
  /**
   * The table name of the MongoDB database. Type: string (or Expression with resultType string).
   */
  collectionName: any;
};

/**
 * The MongoDB database dataset.
 */
export type MongoDbV2CollectionDataset = Dataset & {
  /**
   * The collection name of the MongoDB database. Type: string (or Expression with resultType string).
   */
  collection: any;
};

/**
 * The CosmosDB (MongoDB API) database dataset.
 */
export type CosmosDbMongoDbApiCollectionDataset = Dataset & {
  /**
   * The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string).
   */
  collection: any;
};

/**
 * The Open Data Protocol (OData) resource dataset.
 */
export type ODataResourceDataset = Dataset & {
  /**
   * The OData resource path. Type: string (or Expression with resultType string).
   */
  path?: any;
};

/**
 * The on-premises Oracle database dataset.
 */
export type OracleTableDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The schema name of the on-premises Oracle database. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
  /**
   * The table name of the on-premises Oracle database. Type: string (or Expression with resultType string).
   */
  table?: any;
};

/**
 * The Teradata database dataset.
 */
export type TeradataTableDataset = Dataset & {
  /**
   * The database name of Teradata. Type: string (or Expression with resultType string).
   */
  database?: any;
  /**
   * The table name of Teradata. Type: string (or Expression with resultType string).
   */
  table?: any;
};

/**
 * The Azure MySQL database dataset.
 */
export type AzureMySqlTableDataset = Dataset & {
  /**
   * The Azure MySQL database table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
  /**
   * The name of Azure MySQL database table. Type: string (or Expression with resultType string).
   */
  table?: any;
};

/**
 * The Amazon Redshift table dataset.
 */
export type AmazonRedshiftTableDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The Amazon Redshift table name. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The Amazon Redshift schema name. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
};

/**
 * The Db2 table dataset.
 */
export type Db2TableDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The Db2 schema name. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
  /**
   * The Db2 table name. Type: string (or Expression with resultType string).
   */
  table?: any;
};

/**
 * The relational table dataset.
 */
export type RelationalTableDataset = Dataset & {
  /**
   * The relational table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * The Informix table dataset.
 */
export type InformixTableDataset = Dataset & {
  /**
   * The Informix table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * The ODBC table dataset.
 */
export type OdbcTableDataset = Dataset & {
  /**
   * The ODBC table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * The MySQL table dataset.
 */
export type MySqlTableDataset = Dataset & {
  /**
   * The MySQL table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * The PostgreSQL table dataset.
 */
export type PostgreSqlTableDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The PostgreSQL table name. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The PostgreSQL schema name. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
};

/**
 * The Microsoft Access table dataset.
 */
export type MicrosoftAccessTableDataset = Dataset & {
  /**
   * The Microsoft Access table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * The Salesforce object dataset.
 */
export type SalesforceObjectDataset = Dataset & {
  /**
   * The Salesforce object API name. Type: string (or Expression with resultType string).
   */
  objectApiName?: any;
};

/**
 * The Salesforce Service Cloud object dataset.
 */
export type SalesforceServiceCloudObjectDataset = Dataset & {
  /**
   * The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string).
   */
  objectApiName?: any;
};

/**
 * The Sybase table dataset.
 */
export type SybaseTableDataset = Dataset & {
  /**
   * The Sybase table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * The SAP BW cube dataset.
 */
export type SapBwCubeDataset = Dataset & {};

/**
 * The path of the SAP Cloud for Customer OData entity.
 */
export type SapCloudForCustomerResourceDataset = Dataset & {
  /**
   * The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string).
   */
  path: any;
};

/**
 * The path of the SAP ECC OData entity.
 */
export type SapEccResourceDataset = Dataset & {
  /**
   * The path of the SAP ECC OData entity. Type: string (or Expression with resultType string).
   */
  path: any;
};

/**
 * SAP HANA Table properties.
 */
export type SapHanaTableDataset = Dataset & {
  /**
   * The schema name of SAP HANA. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
  /**
   * The table name of SAP HANA. Type: string (or Expression with resultType string).
   */
  table?: any;
};

/**
 * Sap Business Warehouse Open Hub Destination Table properties.
 */
export type SapOpenHubTableDataset = Dataset & {
  /**
   * The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string).
   */
  openHubDestinationName: any;
  /**
   * Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  excludeLastRequest?: any;
  /**
   * The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ).
   */
  baseRequestId?: any;
};

/**
 * The on-premises SQL Server dataset.
 */
export type SqlServerTableDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The schema name of the SQL Server dataset. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
  /**
   * The table name of the SQL Server dataset. Type: string (or Expression with resultType string).
   */
  table?: any;
};

/**
 * A Rest service dataset.
 */
export type RestResourceDataset = Dataset & {
  /**
   * The relative URL to the resource that the RESTful API provides. Type: string (or Expression with resultType string).
   */
  relativeUrl?: any;
  /**
   * The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).
   */
  requestMethod?: any;
  /**
   * The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
   */
  requestBody?: any;
  /**
   * The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string).
   */
  additionalHeaders?: any;
  /**
   * The pagination rules to compose next page requests. Type: string (or Expression with resultType string).
   */
  paginationRules?: any;
};

/**
 * SAP Table Resource properties.
 */
export type SapTableResourceDataset = Dataset & {
  /**
   * The name of the SAP Table. Type: string (or Expression with resultType string).
   */
  tableName: any;
};

/**
 * The dataset points to a HTML table in the web page.
 */
export type WebTableDataset = Dataset & {
  /**
   * The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  index: any;
  /**
   * The relative URL to the web page from the linked service URL. Type: string (or Expression with resultType string).
   */
  path?: any;
};

/**
 * The Azure Search Index.
 */
export type AzureSearchIndexDataset = Dataset & {
  /**
   * The name of the Azure Search Index. Type: string (or Expression with resultType string).
   */
  indexName: any;
};

/**
 * Amazon Marketplace Web Service dataset.
 */
export type AmazonMWSObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Azure PostgreSQL dataset.
 */
export type AzurePostgreSqlTableDataset = Dataset & {
  /**
   * The table name of the Azure PostgreSQL database which includes both schema and table. Type: string (or Expression with resultType string).
   */
  tableName?: any;
  /**
   * The table name of the Azure PostgreSQL database. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The schema name of the Azure PostgreSQL database. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
};

/**
 * Concur Service dataset.
 */
export type ConcurObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Couchbase server dataset.
 */
export type CouchbaseTableDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Drill server dataset.
 */
export type DrillTableDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The table name of the Drill. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The schema name of the Drill. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
};

/**
 * Eloqua server dataset.
 */
export type EloquaObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Google BigQuery service dataset.
 */
export type GoogleBigQueryObjectDataset = Dataset & {
  /**
   * This property will be retired. Please consider using database + table properties instead.
   */
  tableName?: any;
  /**
   * The table name of the Google BigQuery. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The database name of the Google BigQuery. Type: string (or Expression with resultType string).
   */
  dataset?: any;
};

/**
 * Greenplum Database dataset.
 */
export type GreenplumTableDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The table name of Greenplum. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The schema name of Greenplum. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
};

/**
 * HBase server dataset.
 */
export type HBaseObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Hive Server dataset.
 */
export type HiveObjectDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The table name of the Hive. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The schema name of the Hive. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
};

/**
 * Hubspot Service dataset.
 */
export type HubspotObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Impala server dataset.
 */
export type ImpalaObjectDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The table name of the Impala. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The schema name of the Impala. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
};

/**
 * Jira Service dataset.
 */
export type JiraObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Magento server dataset.
 */
export type MagentoObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * MariaDB server dataset.
 */
export type MariaDBTableDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Azure Database for MariaDB dataset.
 */
export type AzureMariaDBTableDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Marketo server dataset.
 */
export type MarketoObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Paypal Service dataset.
 */
export type PaypalObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Phoenix server dataset.
 */
export type PhoenixObjectDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The table name of the Phoenix. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The schema name of the Phoenix. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
};

/**
 * Presto server dataset.
 */
export type PrestoObjectDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The table name of the Presto. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The schema name of the Presto. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
};

/**
 * QuickBooks server dataset.
 */
export type QuickBooksObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * ServiceNow server dataset.
 */
export type ServiceNowObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Shopify Service dataset.
 */
export type ShopifyObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Spark Server dataset.
 */
export type SparkObjectDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The table name of the Spark. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The schema name of the Spark. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
};

/**
 * Square Service dataset.
 */
export type SquareObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Xero Service dataset.
 */
export type XeroObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Zoho server dataset.
 */
export type ZohoObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Netezza dataset.
 */
export type NetezzaTableDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The table name of the Netezza. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The schema name of the Netezza. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
};

/**
 * Vertica dataset.
 */
export type VerticaTableDataset = Dataset & {
  /**
   * This property will be retired. Please consider using schema + table properties instead.
   */
  tableName?: any;
  /**
   * The table name of the Vertica. Type: string (or Expression with resultType string).
   */
  table?: any;
  /**
   * The schema name of the Vertica. Type: string (or Expression with resultType string).
   */
  schemaTypePropertiesSchema?: any;
};

/**
 * Salesforce Marketing Cloud dataset.
 */
export type SalesforceMarketingCloudObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Responsys dataset.
 */
export type ResponsysObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * The path of the Dynamics AX OData entity.
 */
export type DynamicsAXResourceDataset = Dataset & {
  /**
   * The path of the Dynamics AX OData entity. Type: string (or Expression with resultType string).
   */
  path: any;
};

/**
 * Oracle Service Cloud dataset.
 */
export type OracleServiceCloudObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * The Azure Data Explorer (Kusto) dataset.
 */
export type AzureDataExplorerTableDataset = Dataset & {
  /**
   * The table name of the Azure Data Explorer database. Type: string (or Expression with resultType string).
   */
  table?: any;
};

/**
 * Google AdWords service dataset.
 */
export type GoogleAdWordsObjectDataset = Dataset & {
  /**
   * The table name. Type: string (or Expression with resultType string).
   */
  tableName?: any;
};

/**
 * Base class for all control activities like IfCondition, ForEach , Until.
 */
export type ControlActivity = Activity & {};

/**
 * Base class for all execution activities.
 */
export type ExecutionActivity = Activity & {
  /**
   * Linked service reference.
   */
  linkedServiceName?: LinkedServiceReference;
  /**
   * Activity policy.
   */
  policy?: ActivityPolicy;
};

/**
 * Execute pipeline activity.
 */
export type ExecutePipelineActivity = Activity & {
  /**
   * Pipeline reference.
   */
  pipeline: PipelineReference;
  /**
   * Pipeline parameters.
   */
  parameters?: { [propertyName: string]: any };
  /**
   * Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false.
   */
  waitOnCompletion?: boolean;
};

/**
 * This activity evaluates a boolean expression and executes either the activities under the ifTrueActivities property or the ifFalseActivities property depending on the result of the expression.
 */
export type IfConditionActivity = Activity & {
  /**
   * An expression that would evaluate to Boolean. This is used to determine the block of activities (ifTrueActivities or ifFalseActivities) that will be executed.
   */
  expression: Expression;
  /**
   * List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action.
   */
  ifTrueActivities?: ActivityUnion[];
  /**
   * List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action.
   */
  ifFalseActivities?: ActivityUnion[];
};

/**
 * This activity evaluates an expression and executes activities under the cases property that correspond to the expression evaluation expected in the equals property.
 */
export type SwitchActivity = Activity & {
  /**
   * An expression that would evaluate to a string or integer. This is used to determine the block of activities in cases that will be executed.
   */
  on: Expression;
  /**
   * List of cases that correspond to expected values of the 'on' property. This is an optional property and if not provided, the activity will execute activities provided in defaultActivities.
   */
  cases?: SwitchCase[];
  /**
   * List of activities to execute if no case condition is satisfied. This is an optional property and if not provided, the activity will exit without any action.
   */
  defaultActivities?: ActivityUnion[];
};

/**
 * This activity is used for iterating over a collection and execute given activities.
 */
export type ForEachActivity = Activity & {
  /**
   * Should the loop be executed in sequence or in parallel (max 50)
   */
  isSequential?: boolean;
  /**
   * Batch count to be used for controlling the number of parallel execution (when isSequential is set to false).
   */
  batchCount?: number;
  /**
   * Collection to iterate.
   */
  items: Expression;
  /**
   * List of activities to execute .
   */
  activities: ActivityUnion[];
};

/**
 * This activity suspends pipeline execution for the specified interval.
 */
export type WaitActivity = Activity & {
  /**
   * Duration in seconds.
   */
  waitTimeInSeconds: number;
};

/**
 * This activity executes inner activities until the specified boolean expression results to true or timeout is reached, whichever is earlier.
 */
export type UntilActivity = Activity & {
  /**
   * An expression that would evaluate to Boolean. The loop will continue until this expression evaluates to true
   */
  expression: Expression;
  /**
   * Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  timeout?: any;
  /**
   * List of activities to execute.
   */
  activities: ActivityUnion[];
};

/**
 * This activity verifies that an external resource exists.
 */
export type ValidationActivity = Activity & {
  /**
   * Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  timeout?: any;
  /**
   * A delay in seconds between validation attempts. If no value is specified, 10 seconds will be used as the default. Type: integer (or Expression with resultType integer).
   */
  sleep?: any;
  /**
   * Can be used if dataset points to a file. The file must be greater than or equal in size to the value specified. Type: integer (or Expression with resultType integer).
   */
  minimumSize?: any;
  /**
   * Can be used if dataset points to a folder. If set to true, the folder must have at least one file. If set to false, the folder must be empty. Type: boolean (or Expression with resultType boolean).
   */
  childItems?: any;
  /**
   * Validation activity dataset reference.
   */
  dataset: DatasetReference;
};

/**
 * Filter and return results from input array based on the conditions.
 */
export type FilterActivity = Activity & {
  /**
   * Input array on which filter should be applied.
   */
  items: Expression;
  /**
   * Condition to be used for filtering the input.
   */
  condition: Expression;
};

/**
 * Set value for a Variable.
 */
export type SetVariableActivity = Activity & {
  /**
   * Name of the variable whose value needs to be set.
   */
  variableName?: string;
  /**
   * Value to be set. Could be a static value or Expression
   */
  value?: any;
};

/**
 * Append value for a Variable of type Array.
 */
export type AppendVariableActivity = Activity & {
  /**
   * Name of the variable whose value needs to be appended to.
   */
  variableName?: string;
  /**
   * Value to be appended. Could be a static value or Expression
   */
  value?: any;
};

/**
 * WebHook activity.
 */
export type WebHookActivity = Activity & {
  /**
   * Rest API method for target endpoint.
   */
  method: WebHookActivityMethod;
  /**
   * WebHook activity target endpoint and path. Type: string (or Expression with resultType string).
   */
  url: any;
  /**
   * The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  timeout?: string;
  /**
   * Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
   */
  headers?: any;
  /**
   * Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
   */
  body?: any;
  /**
   * Authentication method used for calling the endpoint.
   */
  authentication?: WebActivityAuthentication;
  /**
   * When set to true, statusCode, output and error in callback request body will be consumed by activity. The activity can be marked as failed by setting statusCode >= 400 in callback request. Default is false. Type: boolean (or Expression with resultType boolean).
   */
  reportStatusOnCallBack?: any;
};

/**
 * Execute Synapse notebook activity.
 */
export type SynapseNotebookActivity = Activity & {
  /**
   * Synapse notebook reference.
   */
  notebook: SynapseNotebookReference;
  /**
   * Notebook parameters.
   */
  parameters?: { [propertyName: string]: any };
};

/**
 * Execute spark job activity.
 */
export type SynapseSparkJobDefinitionActivity = Activity & {
  /**
   * Synapse spark job reference.
   */
  sparkJob: SynapseSparkJobReference;
};

/**
 * Execute SQL pool stored procedure activity.
 */
export type SqlPoolStoredProcedureActivity = Activity & {
  /**
   * SQL pool stored procedure reference.
   */
  sqlPool: SqlPoolReference;
  /**
   * Stored procedure name. Type: string (or Expression with resultType string).
   */
  storedProcedureName: any;
  /**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
   */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
};

/**
 * Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time.
 */
export type RerunTumblingWindowTrigger = Trigger & {
  /**
   * The parent trigger reference.
   */
  parentTrigger?: any;
  /**
   * The start time for the time period for which restatement is initiated. Only UTC time is currently supported.
   */
  requestedStartTime: Date;
  /**
   * The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
   */
  requestedEndTime: Date;
  /**
   * The max number of parallel time windows (ready for execution) for which a rerun is triggered.
   */
  maxConcurrency: number;
};

/**
 * Base class for all triggers that support one to many model for trigger to pipeline.
 */
export type MultiplePipelineTrigger = Trigger & {
  /**
   * Pipelines that need to be started.
   */
  pipelines?: TriggerPipelineReference[];
};

/**
 * Trigger that schedules pipeline runs for all fixed time interval windows from a start time without gaps and also supports backfill scenarios (when start time is in the past).
 */
export type TumblingWindowTrigger = Trigger & {
  /**
   * Pipeline for which runs are created when an event is fired for trigger window that is ready.
   */
  pipeline: TriggerPipelineReference;
  /**
   * The frequency of the time windows.
   */
  frequency: TumblingWindowFrequency;
  /**
   * The interval of the time windows. The minimum interval allowed is 15 Minutes.
   */
  interval: number;
  /**
   * The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
   */
  startTime: Date;
  /**
   * The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
   */
  endTime?: Date;
  /**
   * Specifies how long the trigger waits past due time before triggering new run. It doesn't alter window start and end time. The default is 0. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  delay?: any;
  /**
   * The max number of parallel time windows (ready for execution) for which a new run is triggered.
   */
  maxConcurrency: number;
  /**
   * Retry policy that will be applied for failed pipeline runs.
   */
  retryPolicy?: RetryPolicy;
  /**
   * Triggers that this trigger depends on. Only tumbling window triggers are supported.
   */
  dependsOn?: DependencyReferenceUnion[];
};

/**
 * Trigger that allows the referenced pipeline to depend on other pipeline runs based on runDimension Name/Value pairs. Upstream pipelines should declare the same runDimension Name and their runs should have the values for those runDimensions. The referenced pipeline run would be triggered if the values for the runDimension match for all upstream pipeline runs.
 */
export type ChainingTrigger = Trigger & {
  /**
   * Pipeline for which runs are created when all upstream pipelines complete successfully.
   */
  pipeline: TriggerPipelineReference;
  /**
   * Upstream Pipelines.
   */
  dependsOn: PipelineReference[];
  /**
   * Run Dimension property that needs to be emitted by upstream pipelines.
   */
  runDimension: string;
};

/**
 * Mapping data flow.
 */
export type MappingDataFlow = DataFlow & {
  /**
   * List of sources in data flow.
   */
  sources?: DataFlowSource[];
  /**
   * List of sinks in data flow.
   */
  sinks?: DataFlowSink[];
  /**
   * List of transformations in data flow.
   */
  transformations?: Transformation[];
  /**
   * DataFlow script.
   */
  script?: string;
};

/**
 * Data flow debug resource.
 */
export type DataFlowDebugResource = SubResourceDebugResource & {
  /**
   * Data flow properties.
   */
  properties: DataFlowUnion;
};

/**
 * Dataset debug resource.
 */
export type DatasetDebugResource = SubResourceDebugResource & {
  /**
   * Dataset properties.
   */
  properties: DatasetUnion;
};

/**
 * Linked service debug resource.
 */
export type LinkedServiceDebugResource = SubResourceDebugResource & {
  /**
   * Properties of linked service.
   */
  properties: LinkedServiceUnion;
};

/**
 * Managed integration runtime, including managed elastic and managed dedicated integration runtimes.
 */
export type ManagedIntegrationRuntime = IntegrationRuntime & {
  /**
   * Integration runtime state, only valid for managed dedicated integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly state?: IntegrationRuntimeState;
  /**
   * The compute resource for managed integration runtime.
   */
  computeProperties?: IntegrationRuntimeComputeProperties;
  /**
   * SSIS properties for managed integration runtime.
   */
  ssisProperties?: IntegrationRuntimeSsisProperties;
};

/**
 * Self-hosted integration runtime.
 */
export type SelfHostedIntegrationRuntime = IntegrationRuntime & {
  /**
   * The base definition of a linked integration runtime.
   */
  linkedInfo?: LinkedIntegrationRuntimeTypeUnion;
};

/**
 * Azure Synapse secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
 */
export type SecureString = SecretBase & {
  /**
   * Value of secure string.
   */
  value: string;
};

/**
 * Azure Key Vault secret reference.
 */
export type AzureKeyVaultSecretReference = SecretBase & {
  /**
   * The Azure Key Vault linked service reference.
   */
  store: LinkedServiceReference;
  /**
   * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
   */
  secretName: any;
  /**
   * The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string).
   */
  secretVersion?: any;
};

/**
 * Transformation for data flow source.
 */
export type DataFlowSource = Transformation & {
  /**
   * Dataset reference.
   */
  dataset?: DatasetReference;
};

/**
 * Transformation for data flow sink.
 */
export type DataFlowSink = Transformation & {
  /**
   * Dataset reference.
   */
  dataset?: DatasetReference;
};

/**
 * The location of azure blob dataset.
 */
export type AzureBlobStorageLocation = DatasetLocation & {
  /**
   * Specify the container of azure blob. Type: string (or Expression with resultType string).
   */
  container?: any;
};

/**
 * The location of azure blobFS dataset.
 */
export type AzureBlobFSLocation = DatasetLocation & {
  /**
   * Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string).
   */
  fileSystem?: any;
};

/**
 * The location of azure data lake store dataset.
 */
export type AzureDataLakeStoreLocation = DatasetLocation & {};

/**
 * The location of amazon S3 dataset.
 */
export type AmazonS3Location = DatasetLocation & {
  /**
   * Specify the bucketName of amazon S3. Type: string (or Expression with resultType string)
   */
  bucketName?: any;
  /**
   * Specify the version of amazon S3. Type: string (or Expression with resultType string).
   */
  version?: any;
};

/**
 * The location of file server dataset.
 */
export type FileServerLocation = DatasetLocation & {};

/**
 * The location of file server dataset.
 */
export type AzureFileStorageLocation = DatasetLocation & {};

/**
 * The location of Google Cloud Storage dataset.
 */
export type GoogleCloudStorageLocation = DatasetLocation & {
  /**
   * Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string)
   */
  bucketName?: any;
  /**
   * Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string).
   */
  version?: any;
};

/**
 * The location of ftp server dataset.
 */
export type FtpServerLocation = DatasetLocation & {};

/**
 * The location of SFTP dataset.
 */
export type SftpLocation = DatasetLocation & {};

/**
 * The location of http server.
 */
export type HttpServerLocation = DatasetLocation & {
  /**
   * Specify the relativeUrl of http server. Type: string (or Expression with resultType string)
   */
  relativeUrl?: any;
};

/**
 * The location of HDFS.
 */
export type HdfsLocation = DatasetLocation & {};

/**
 * The data stored in text format.
 */
export type TextFormat = DatasetStorageFormat & {
  /**
   * The column delimiter. Type: string (or Expression with resultType string).
   */
  columnDelimiter?: any;
  /**
   * The row delimiter. Type: string (or Expression with resultType string).
   */
  rowDelimiter?: any;
  /**
   * The escape character. Type: string (or Expression with resultType string).
   */
  escapeChar?: any;
  /**
   * The quote character. Type: string (or Expression with resultType string).
   */
  quoteChar?: any;
  /**
   * The null value string. Type: string (or Expression with resultType string).
   */
  nullValue?: any;
  /**
   * The code page name of the preferred encoding. If miss, the default value is ΓÇ£utf-8ΓÇ¥, unless BOM denotes another Unicode encoding. Refer to the ΓÇ£NameΓÇ¥ column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
   */
  encodingName?: any;
  /**
   * Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  treatEmptyAsNull?: any;
  /**
   * The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer).
   */
  skipLineCount?: any;
  /**
   * When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
   */
  firstRowAsHeader?: any;
};

/**
 * The data stored in JSON format.
 */
export type JsonFormat = DatasetStorageFormat & {
  /**
   * File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive.
   */
  filePattern?: JsonFormatFilePattern;
  /**
   * The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string).
   */
  nestingSeparator?: any;
  /**
   * The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference: https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string).
   */
  encodingName?: any;
  /**
   * The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string).
   */
  jsonNodeReference?: any;
  /**
   * The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object).
   */
  jsonPathDefinition?: any;
};

/**
 * The data stored in Avro format.
 */
export type AvroFormat = DatasetStorageFormat & {};

/**
 * The data stored in Optimized Row Columnar (ORC) format.
 */
export type OrcFormat = DatasetStorageFormat & {};

/**
 * The data stored in Parquet format.
 */
export type ParquetFormat = DatasetStorageFormat & {};

/**
 * The BZip2 compression method used on a dataset.
 */
export type DatasetBZip2Compression = DatasetCompression & {};

/**
 * The GZip compression method used on a dataset.
 */
export type DatasetGZipCompression = DatasetCompression & {
  /**
   * The GZip compression level.
   */
  level?: DatasetCompressionLevel;
};

/**
 * The Deflate compression method used on a dataset.
 */
export type DatasetDeflateCompression = DatasetCompression & {
  /**
   * The Deflate compression level.
   */
  level?: DatasetCompressionLevel;
};

/**
 * The ZipDeflate compression method used on a dataset.
 */
export type DatasetZipDeflateCompression = DatasetCompression & {
  /**
   * The ZipDeflate compression level.
   */
  level?: DatasetCompressionLevel;
};

/**
 * A WebLinkedService that uses anonymous authentication to communicate with an HTTP endpoint.
 */
export type WebAnonymousAuthentication = WebLinkedServiceTypeProperties & {};

/**
 * A WebLinkedService that uses basic authentication to communicate with an HTTP endpoint.
 */
export type WebBasicAuthentication = WebLinkedServiceTypeProperties & {
  /**
   * User name for Basic authentication. Type: string (or Expression with resultType string).
   */
  username: any;
  /**
   * The password for Basic authentication.
   */
  password: SecretBaseUnion;
};

/**
 * A WebLinkedService that uses client certificate based authentication to communicate with an HTTP endpoint. This scheme follows mutual authentication; the server must also provide valid credentials to the client.
 */
export type WebClientCertificateAuthentication = WebLinkedServiceTypeProperties & {
  /**
   * Base64-encoded contents of a PFX file.
   */
  pfx: SecretBaseUnion;
  /**
   * Password for the PFX file.
   */
  password: SecretBaseUnion;
};

/**
 * Azure blob read settings.
 */
export type AzureBlobStorageReadSettings = StoreReadSettings & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
  /**
   * Azure blob wildcardFolderPath. Type: string (or Expression with resultType string).
   */
  wildcardFolderPath?: any;
  /**
   * Azure blob wildcardFileName. Type: string (or Expression with resultType string).
   */
  wildcardFileName?: any;
  /**
   * The prefix filter for the Azure Blob name. Type: string (or Expression with resultType string).
   */
  prefix?: any;
  /**
   * Indicates whether to enable partition discovery.
   */
  enablePartitionDiscovery?: boolean;
  /**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeStart?: any;
  /**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeEnd?: any;
};

/**
 * Azure blobFS read settings.
 */
export type AzureBlobFSReadSettings = StoreReadSettings & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
  /**
   * Azure blobFS wildcardFolderPath. Type: string (or Expression with resultType string).
   */
  wildcardFolderPath?: any;
  /**
   * Azure blobFS wildcardFileName. Type: string (or Expression with resultType string).
   */
  wildcardFileName?: any;
  /**
   * Indicates whether to enable partition discovery.
   */
  enablePartitionDiscovery?: boolean;
  /**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeStart?: any;
  /**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeEnd?: any;
};

/**
 * Azure data lake store read settings.
 */
export type AzureDataLakeStoreReadSettings = StoreReadSettings & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
  /**
   * ADLS wildcardFolderPath. Type: string (or Expression with resultType string).
   */
  wildcardFolderPath?: any;
  /**
   * ADLS wildcardFileName. Type: string (or Expression with resultType string).
   */
  wildcardFileName?: any;
  /**
   * Indicates whether to enable partition discovery.
   */
  enablePartitionDiscovery?: boolean;
  /**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeStart?: any;
  /**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeEnd?: any;
};

/**
 * Azure data lake store read settings.
 */
export type AmazonS3ReadSettings = StoreReadSettings & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
  /**
   * AmazonS3 wildcardFolderPath. Type: string (or Expression with resultType string).
   */
  wildcardFolderPath?: any;
  /**
   * AmazonS3 wildcardFileName. Type: string (or Expression with resultType string).
   */
  wildcardFileName?: any;
  /**
   * The prefix filter for the S3 object name. Type: string (or Expression with resultType string).
   */
  prefix?: any;
  /**
   * Indicates whether to enable partition discovery.
   */
  enablePartitionDiscovery?: boolean;
  /**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeStart?: any;
  /**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeEnd?: any;
};

/**
 * File server read settings.
 */
export type FileServerReadSettings = StoreReadSettings & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
  /**
   * FileServer wildcardFolderPath. Type: string (or Expression with resultType string).
   */
  wildcardFolderPath?: any;
  /**
   * FileServer wildcardFileName. Type: string (or Expression with resultType string).
   */
  wildcardFileName?: any;
  /**
   * Indicates whether to enable partition discovery.
   */
  enablePartitionDiscovery?: boolean;
  /**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeStart?: any;
  /**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeEnd?: any;
};

/**
 * Azure File Storage read settings.
 */
export type AzureFileStorageReadSettings = StoreReadSettings & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
  /**
   * Azure File Storage wildcardFolderPath. Type: string (or Expression with resultType string).
   */
  wildcardFolderPath?: any;
  /**
   * Azure File Storage wildcardFileName. Type: string (or Expression with resultType string).
   */
  wildcardFileName?: any;
  /**
   * Indicates whether to enable partition discovery.
   */
  enablePartitionDiscovery?: boolean;
  /**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeStart?: any;
  /**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeEnd?: any;
};

/**
 * Google Cloud Storage read settings.
 */
export type GoogleCloudStorageReadSettings = StoreReadSettings & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
  /**
   * Google Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string).
   */
  wildcardFolderPath?: any;
  /**
   * Google Cloud Storage wildcardFileName. Type: string (or Expression with resultType string).
   */
  wildcardFileName?: any;
  /**
   * The prefix filter for the Google Cloud Storage object name. Type: string (or Expression with resultType string).
   */
  prefix?: any;
  /**
   * Indicates whether to enable partition discovery.
   */
  enablePartitionDiscovery?: boolean;
  /**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeStart?: any;
  /**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeEnd?: any;
};

/**
 * Ftp read settings.
 */
export type FtpReadSettings = StoreReadSettings & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
  /**
   * Ftp wildcardFolderPath. Type: string (or Expression with resultType string).
   */
  wildcardFolderPath?: any;
  /**
   * Ftp wildcardFileName. Type: string (or Expression with resultType string).
   */
  wildcardFileName?: any;
  /**
   * Specify whether to use binary transfer mode for FTP stores.
   */
  useBinaryTransfer?: boolean;
};

/**
 * Sftp read settings.
 */
export type SftpReadSettings = StoreReadSettings & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
  /**
   * Sftp wildcardFolderPath. Type: string (or Expression with resultType string).
   */
  wildcardFolderPath?: any;
  /**
   * Sftp wildcardFileName. Type: string (or Expression with resultType string).
   */
  wildcardFileName?: any;
  /**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeStart?: any;
  /**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeEnd?: any;
};

/**
 * Sftp read settings.
 */
export type HttpReadSettings = StoreReadSettings & {
  /**
   * The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).
   */
  requestMethod?: any;
  /**
   * The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
   */
  requestBody?: any;
  /**
   * The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string).
   */
  additionalHeaders?: any;
  /**
   * Specifies the timeout for a HTTP client to get HTTP response from HTTP server.
   */
  requestTimeout?: any;
};

/**
 * HDFS read settings.
 */
export type HdfsReadSettings = StoreReadSettings & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
  /**
   * HDFS wildcardFolderPath. Type: string (or Expression with resultType string).
   */
  wildcardFolderPath?: any;
  /**
   * HDFS wildcardFileName. Type: string (or Expression with resultType string).
   */
  wildcardFileName?: any;
  /**
   * Indicates whether to enable partition discovery.
   */
  enablePartitionDiscovery?: boolean;
  /**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeStart?: any;
  /**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
  modifiedDatetimeEnd?: any;
  /**
   * Specifies Distcp-related settings.
   */
  distcpSettings?: DistcpSettings;
};

/**
 * Sftp write settings.
 */
export type SftpWriteSettings = StoreWriteSettings & {
  /**
   * Specifies the timeout for writing each chunk to SFTP server. Default value: 01:00:00 (one hour). Type: string (or Expression with resultType string).
   */
  operationTimeout?: any;
};

/**
 * Azure blob write settings.
 */
export type AzureBlobStorageWriteSettings = StoreWriteSettings & {
  /**
   * Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer).
   */
  blockSizeInMB?: any;
};

/**
 * Azure blobFS write settings.
 */
export type AzureBlobFSWriteSettings = StoreWriteSettings & {
  /**
   * Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer).
   */
  blockSizeInMB?: any;
};

/**
 * Azure data lake store write settings.
 */
export type AzureDataLakeStoreWriteSettings = StoreWriteSettings & {};

/**
 * File server write settings.
 */
export type FileServerWriteSettings = StoreWriteSettings & {};

/**
 * Delimited text read settings.
 */
export type DelimitedTextReadSettings = FormatReadSettings & {
  /**
   * Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer).
   */
  skipLineCount?: any;
};

/**
 * Avro write settings.
 */
export type AvroWriteSettings = FormatWriteSettings & {
  /**
   * Top level record name in write result, which is required in AVRO spec.
   */
  recordName?: string;
  /**
   * Record namespace in the write result.
   */
  recordNamespace?: string;
};

/**
 * Delimited text write settings.
 */
export type DelimitedTextWriteSettings = FormatWriteSettings & {
  /**
   * Indicates whether string values should always be enclosed with quotes. Type: boolean (or Expression with resultType boolean).
   */
  quoteAllText?: any;
  /**
   * The file extension used to create the files. Type: string (or Expression with resultType string).
   */
  fileExtension: any;
};

/**
 * Json write settings.
 */
export type JsonWriteSettings = FormatWriteSettings & {
  /**
   * File pattern of JSON. This setting controls the way a collection of JSON objects will be treated. The default value is 'setOfObjects'. It is case-sensitive.
   */
  filePattern?: JsonWriteFilePattern;
};

/**
 * A copy activity Avro source.
 */
export type AvroSource = CopySource & {
  /**
   * Avro store settings.
   */
  storeSettings?: StoreReadSettingsUnion;
};

/**
 * A copy activity Parquet source.
 */
export type ParquetSource = CopySource & {
  /**
   * Parquet store settings.
   */
  storeSettings?: StoreReadSettingsUnion;
};

/**
 * A copy activity DelimitedText source.
 */
export type DelimitedTextSource = CopySource & {
  /**
   * DelimitedText store settings.
   */
  storeSettings?: StoreReadSettingsUnion;
  /**
   * DelimitedText format settings.
   */
  formatSettings?: DelimitedTextReadSettings;
};

/**
 * A copy activity Json source.
 */
export type JsonSource = CopySource & {
  /**
   * Json store settings.
   */
  storeSettings?: StoreReadSettingsUnion;
};

/**
 * A copy activity ORC source.
 */
export type OrcSource = CopySource & {
  /**
   * ORC store settings.
   */
  storeSettings?: StoreReadSettingsUnion;
};

/**
 * A copy activity Binary source.
 */
export type BinarySource = CopySource & {
  /**
   * Binary store settings.
   */
  storeSettings?: StoreReadSettingsUnion;
};

/**
 * Copy activity sources of tabular type.
 */
export type TabularSource = CopySource & {
  /**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  queryTimeout?: any;
};

/**
 * A copy activity Azure Blob source.
 */
export type BlobSource = CopySource & {
  /**
   * Treat empty as null. Type: boolean (or Expression with resultType boolean).
   */
  treatEmptyAsNull?: any;
  /**
   * Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer).
   */
  skipHeaderLineCount?: any;
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
};

/**
 * A copy activity Document Database Collection source.
 */
export type DocumentDbCollectionSource = CopySource & {
  /**
   * Documents query. Type: string (or Expression with resultType string).
   */
  query?: any;
  /**
   * Nested properties separator. Type: string (or Expression with resultType string).
   */
  nestingSeparator?: any;
  /**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  queryTimeout?: any;
};

/**
 * A copy activity Azure CosmosDB (SQL API) Collection source.
 */
export type CosmosDbSqlApiSource = CopySource & {
  /**
   * SQL API query. Type: string (or Expression with resultType string).
   */
  query?: any;
  /**
   * Page size of the result. Type: integer (or Expression with resultType integer).
   */
  pageSize?: any;
  /**
   * Preferred regions. Type: array of strings (or Expression with resultType array of strings).
   */
  preferredRegions?: any;
};

/**
 * A copy activity Dynamics source.
 */
export type DynamicsSource = CopySource & {
  /**
   * FetchXML is a proprietary query language that is used in Microsoft Dynamics (online & on-premises). Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Dynamics CRM source.
 */
export type DynamicsCrmSource = CopySource & {
  /**
   * FetchXML is a proprietary query language that is used in Microsoft Dynamics CRM (online & on-premises). Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Common Data Service for Apps source.
 */
export type CommonDataServiceForAppsSource = CopySource & {
  /**
   * FetchXML is a proprietary query language that is used in Microsoft Common Data Service for Apps (online & on-premises). Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for various relational databases.
 */
export type RelationalSource = CopySource & {
  /**
   * Database query. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for Microsoft Access.
 */
export type MicrosoftAccessSource = CopySource & {
  /**
   * Database query. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for OData source.
 */
export type ODataSource = CopySource & {
  /**
   * OData query. For example, "$top=1". Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Salesforce Service Cloud source.
 */
export type SalesforceServiceCloudSource = CopySource & {
  /**
   * Database query. Type: string (or Expression with resultType string).
   */
  query?: any;
  /**
   * The read behavior for the operation. Default is Query.
   */
  readBehavior?: SalesforceSourceReadBehavior;
};

/**
 * A copy activity Rest service source.
 */
export type RestSource = CopySource & {
  /**
   * The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).
   */
  requestMethod?: any;
  /**
   * The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
   */
  requestBody?: any;
  /**
   * The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string).
   */
  additionalHeaders?: any;
  /**
   * The pagination rules to compose next page requests. Type: string (or Expression with resultType string).
   */
  paginationRules?: any;
  /**
   * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  httpRequestTimeout?: any;
  /**
   * The time to await before sending next page request.
   */
  requestInterval?: any;
};

/**
 * A copy activity file system source.
 */
export type FileSystemSource = CopySource & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
};

/**
 * A copy activity HDFS source.
 */
export type HdfsSource = CopySource & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
  /**
   * Specifies Distcp-related settings.
   */
  distcpSettings?: DistcpSettings;
};

/**
 * A copy activity Azure Data Explorer (Kusto) source.
 */
export type AzureDataExplorerSource = CopySource & {
  /**
   * Database query. Should be a Kusto Query Language (KQL) query. Type: string (or Expression with resultType string).
   */
  query: any;
  /**
   * The name of the Boolean option that controls whether truncation is applied to result-sets that go beyond a certain row-count limit.
   */
  noTruncation?: any;
  /**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))..
   */
  queryTimeout?: any;
};

/**
 * A copy activity Oracle source.
 */
export type OracleSource = CopySource & {
  /**
   * Oracle reader query. Type: string (or Expression with resultType string).
   */
  oracleReaderQuery?: any;
  /**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  queryTimeout?: any;
  /**
   * The partition mechanism that will be used for Oracle read in parallel.
   */
  partitionOption?: OraclePartitionOption;
  /**
   * The settings that will be leveraged for Oracle source partitioning.
   */
  partitionSettings?: OraclePartitionSettings;
};

/**
 * A copy activity source for web page table.
 */
export type WebSource = CopySource & {};

/**
 * A copy activity source for a MongoDB database.
 */
export type MongoDbSource = CopySource & {
  /**
   * Database query. Should be a SQL-92 query expression. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for a MongoDB database.
 */
export type MongoDbV2Source = CopySource & {
  /**
   * Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string).
   */
  filter?: any;
  /**
   * Cursor methods for Mongodb query
   */
  cursorMethods?: MongoDbCursorMethodsProperties;
  /**
   * Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer).
   */
  batchSize?: any;
  /**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  queryTimeout?: any;
};

/**
 * A copy activity source for a CosmosDB (MongoDB API) database.
 */
export type CosmosDbMongoDbApiSource = CopySource & {
  /**
   * Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string).
   */
  filter?: any;
  /**
   * Cursor methods for Mongodb query.
   */
  cursorMethods?: MongoDbCursorMethodsProperties;
  /**
   * Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer).
   */
  batchSize?: any;
  /**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  queryTimeout?: any;
};

/**
 * A copy activity source for an Office 365 service.
 */
export type Office365Source = CopySource & {
  /**
   * The groups containing all the users. Type: array of strings (or Expression with resultType array of strings).
   */
  allowedGroups?: any;
  /**
   * The user scope uri. Type: string (or Expression with resultType string).
   */
  userScopeFilterUri?: any;
  /**
   * The Column to apply the <paramref name="StartTime"/> and <paramref name="EndTime"/>. Type: string (or Expression with resultType string).
   */
  dateFilterColumn?: any;
  /**
   * Start time of the requested range for this dataset. Type: string (or Expression with resultType string).
   */
  startTime?: any;
  /**
   * End time of the requested range for this dataset. Type: string (or Expression with resultType string).
   */
  endTime?: any;
  /**
   * The columns to be read out from the Office 365 table. Type: array of objects (or Expression with resultType array of objects). Example: [ { "name": "Id" }, { "name": "CreatedDateTime" } ]
   */
  outputColumns?: any;
};

/**
 * A copy activity Azure Data Lake source.
 */
export type AzureDataLakeStoreSource = CopySource & {
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
};

/**
 * A copy activity Azure BlobFS source.
 */
export type AzureBlobFSSource = CopySource & {
  /**
   * Treat empty as null. Type: boolean (or Expression with resultType boolean).
   */
  treatEmptyAsNull?: any;
  /**
   * Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer).
   */
  skipHeaderLineCount?: any;
  /**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
};

/**
 * A copy activity source for an HTTP file.
 */
export type HttpSource = CopySource & {
  /**
   * Specifies the timeout for a HTTP client to get HTTP response from HTTP server. The default value is equivalent to System.Net.HttpWebRequest.Timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   */
  httpRequestTimeout?: any;
};

/**
 * A copy activity DelimitedText sink.
 */
export type DelimitedTextSink = CopySink & {
  /**
   * DelimitedText store settings.
   */
  storeSettings?: StoreWriteSettingsUnion;
  /**
   * DelimitedText format settings.
   */
  formatSettings?: DelimitedTextWriteSettings;
};

/**
 * A copy activity Json sink.
 */
export type JsonSink = CopySink & {
  /**
   * Json store settings.
   */
  storeSettings?: StoreWriteSettingsUnion;
  /**
   * Json format settings.
   */
  formatSettings?: JsonWriteSettings;
};

/**
 * A copy activity ORC sink.
 */
export type OrcSink = CopySink & {
  /**
   * ORC store settings.
   */
  storeSettings?: StoreWriteSettingsUnion;
};

/**
 * A copy activity Azure PostgreSQL sink.
 */
export type AzurePostgreSqlSink = CopySink & {
  /**
   * A query to execute before starting the copy. Type: string (or Expression with resultType string).
   */
  preCopyScript?: any;
};

/**
 * A copy activity Azure MySql sink.
 */
export type AzureMySqlSink = CopySink & {
  /**
   * A query to execute before starting the copy. Type: string (or Expression with resultType string).
   */
  preCopyScript?: any;
};

/**
 * A copy activity SAP Cloud for Customer sink.
 */
export type SapCloudForCustomerSink = CopySink & {
  /**
   * The write behavior for the operation. Default is 'Insert'.
   */
  writeBehavior?: SapCloudForCustomerSinkWriteBehavior;
};

/**
 * A copy activity Azure Queue sink.
 */
export type AzureQueueSink = CopySink & {};

/**
 * A copy activity Azure Table sink.
 */
export type AzureTableSink = CopySink & {
  /**
   * Azure Table default partition key value. Type: string (or Expression with resultType string).
   */
  azureTableDefaultPartitionKeyValue?: any;
  /**
   * Azure Table partition key name. Type: string (or Expression with resultType string).
   */
  azureTablePartitionKeyName?: any;
  /**
   * Azure Table row key name. Type: string (or Expression with resultType string).
   */
  azureTableRowKeyName?: any;
  /**
   * Azure Table insert type. Type: string (or Expression with resultType string).
   */
  azureTableInsertType?: any;
};

/**
 * A copy activity Avro sink.
 */
export type AvroSink = CopySink & {
  /**
   * Avro store settings.
   */
  storeSettings?: StoreWriteSettingsUnion;
  /**
   * Avro format settings.
   */
  formatSettings?: AvroWriteSettings;
};

/**
 * A copy activity Parquet sink.
 */
export type ParquetSink = CopySink & {
  /**
   * Parquet store settings.
   */
  storeSettings?: StoreWriteSettingsUnion;
};

/**
 * A copy activity Binary sink.
 */
export type BinarySink = CopySink & {
  /**
   * Binary store settings.
   */
  storeSettings?: StoreWriteSettingsUnion;
};

/**
 * A copy activity Azure Blob sink.
 */
export type BlobSink = CopySink & {
  /**
   * Blob writer overwrite files. Type: boolean (or Expression with resultType boolean).
   */
  blobWriterOverwriteFiles?: any;
  /**
   * Blob writer date time format. Type: string (or Expression with resultType string).
   */
  blobWriterDateTimeFormat?: any;
  /**
   * Blob writer add header. Type: boolean (or Expression with resultType boolean).
   */
  blobWriterAddHeader?: any;
  /**
   * The type of copy behavior for copy sink.
   */
  copyBehavior?: any;
};

/**
 * A copy activity file system sink.
 */
export type FileSystemSink = CopySink & {
  /**
   * The type of copy behavior for copy sink.
   */
  copyBehavior?: any;
};

/**
 * A copy activity Document Database Collection sink.
 */
export type DocumentDbCollectionSink = CopySink & {
  /**
   * Nested properties separator. Default is . (dot). Type: string (or Expression with resultType string).
   */
  nestingSeparator?: any;
  /**
   * Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert.
   */
  writeBehavior?: any;
};

/**
 * A copy activity Azure CosmosDB (SQL API) Collection sink.
 */
export type CosmosDbSqlApiSink = CopySink & {
  /**
   * Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert.
   */
  writeBehavior?: any;
};

/**
 * A copy activity SQL sink.
 */
export type SqlSink = CopySink & {
  /**
   * SQL writer stored procedure name. Type: string (or Expression with resultType string).
   */
  sqlWriterStoredProcedureName?: any;
  /**
   * SQL writer table type. Type: string (or Expression with resultType string).
   */
  sqlWriterTableType?: any;
  /**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
  preCopyScript?: any;
  /**
   * SQL stored procedure parameters.
   */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /**
   * The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
   */
  storedProcedureTableTypeParameterName?: any;
  /**
   * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
   */
  tableOption?: any;
};

/**
 * A copy activity SQL server sink.
 */
export type SqlServerSink = CopySink & {
  /**
   * SQL writer stored procedure name. Type: string (or Expression with resultType string).
   */
  sqlWriterStoredProcedureName?: any;
  /**
   * SQL writer table type. Type: string (or Expression with resultType string).
   */
  sqlWriterTableType?: any;
  /**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
  preCopyScript?: any;
  /**
   * SQL stored procedure parameters.
   */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /**
   * The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
   */
  storedProcedureTableTypeParameterName?: any;
  /**
   * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
   */
  tableOption?: any;
};

/**
 * A copy activity Azure SQL sink.
 */
export type AzureSqlSink = CopySink & {
  /**
   * SQL writer stored procedure name. Type: string (or Expression with resultType string).
   */
  sqlWriterStoredProcedureName?: any;
  /**
   * SQL writer table type. Type: string (or Expression with resultType string).
   */
  sqlWriterTableType?: any;
  /**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
  preCopyScript?: any;
  /**
   * SQL stored procedure parameters.
   */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /**
   * The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
   */
  storedProcedureTableTypeParameterName?: any;
  /**
   * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
   */
  tableOption?: any;
};

/**
 * A copy activity Azure SQL Managed Instance sink.
 */
export type SqlMISink = CopySink & {
  /**
   * SQL writer stored procedure name. Type: string (or Expression with resultType string).
   */
  sqlWriterStoredProcedureName?: any;
  /**
   * SQL writer table type. Type: string (or Expression with resultType string).
   */
  sqlWriterTableType?: any;
  /**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
  preCopyScript?: any;
  /**
   * SQL stored procedure parameters.
   */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /**
   * The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
   */
  storedProcedureTableTypeParameterName?: any;
  /**
   * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
   */
  tableOption?: any;
};

/**
 * A copy activity SQL Data Warehouse sink.
 */
export type SqlDWSink = CopySink & {
  /**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
  preCopyScript?: any;
  /**
   * Indicates to use PolyBase to copy data into SQL Data Warehouse when applicable. Type: boolean (or Expression with resultType boolean).
   */
  allowPolyBase?: any;
  /**
   * Specifies PolyBase-related settings when allowPolyBase is true.
   */
  polyBaseSettings?: PolybaseSettings;
  /**
   * Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean).
   */
  allowCopyCommand?: any;
  /**
   * Specifies Copy Command related settings when allowCopyCommand is true.
   */
  copyCommandSettings?: DWCopyCommandSettings;
  /**
   * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
   */
  tableOption?: any;
};

/**
 * A copy activity Oracle sink.
 */
export type OracleSink = CopySink & {
  /**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
  preCopyScript?: any;
};

/**
 * A copy activity Azure Data Lake Store sink.
 */
export type AzureDataLakeStoreSink = CopySink & {
  /**
   * The type of copy behavior for copy sink.
   */
  copyBehavior?: any;
  /**
   * Single File Parallel.
   */
  enableAdlsSingleFileParallel?: any;
};

/**
 * A copy activity Azure Data Lake Storage Gen2 sink.
 */
export type AzureBlobFSSink = CopySink & {
  /**
   * The type of copy behavior for copy sink.
   */
  copyBehavior?: any;
};

/**
 * A copy activity Azure Search Index sink.
 */
export type AzureSearchIndexSink = CopySink & {
  /**
   * Specify the write behavior when upserting documents into Azure Search Index.
   */
  writeBehavior?: AzureSearchIndexWriteBehaviorType;
};

/**
 * A copy activity ODBC sink.
 */
export type OdbcSink = CopySink & {
  /**
   * A query to execute before starting the copy. Type: string (or Expression with resultType string).
   */
  preCopyScript?: any;
};

/**
 * A copy activity Informix sink.
 */
export type InformixSink = CopySink & {
  /**
   * A query to execute before starting the copy. Type: string (or Expression with resultType string).
   */
  preCopyScript?: any;
};

/**
 * A copy activity Microsoft Access sink.
 */
export type MicrosoftAccessSink = CopySink & {
  /**
   * A query to execute before starting the copy. Type: string (or Expression with resultType string).
   */
  preCopyScript?: any;
};

/**
 * A copy activity Dynamics sink.
 */
export type DynamicsSink = CopySink & {
  /**
   * The write behavior for the operation.
   */
  writeBehavior: DynamicsSinkWriteBehavior;
  /**
   * The flag indicating whether ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean).
   */
  ignoreNullValues?: any;
  /**
   * The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string).
   */
  alternateKeyName?: any;
};

/**
 * A copy activity Dynamics CRM sink.
 */
export type DynamicsCrmSink = CopySink & {
  /**
   * The write behavior for the operation.
   */
  writeBehavior: DynamicsSinkWriteBehavior;
  /**
   * The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean).
   */
  ignoreNullValues?: any;
  /**
   * The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string).
   */
  alternateKeyName?: any;
};

/**
 * A copy activity Common Data Service for Apps sink.
 */
export type CommonDataServiceForAppsSink = CopySink & {
  /**
   * The write behavior for the operation.
   */
  writeBehavior: DynamicsSinkWriteBehavior;
  /**
   * The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean).
   */
  ignoreNullValues?: any;
  /**
   * The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string).
   */
  alternateKeyName?: any;
};

/**
 * A copy activity Azure Data Explorer sink.
 */
export type AzureDataExplorerSink = CopySink & {
  /**
   * A name of a pre-created csv mapping that was defined on the target Kusto table. Type: string.
   */
  ingestionMappingName?: any;
  /**
   * An explicit column mapping description provided in a json format. Type: string.
   */
  ingestionMappingAsJson?: any;
  /**
   * If set to true, any aggregation will be skipped. Default is false. Type: boolean.
   */
  flushImmediately?: any;
};

/**
 * A copy activity Salesforce sink.
 */
export type SalesforceSink = CopySink & {
  /**
   * The write behavior for the operation. Default is Insert.
   */
  writeBehavior?: SalesforceSinkWriteBehavior;
  /**
   * The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string).
   */
  externalIdFieldName?: any;
  /**
   * The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean).
   */
  ignoreNullValues?: any;
};

/**
 * A copy activity Salesforce Service Cloud sink.
 */
export type SalesforceServiceCloudSink = CopySink & {
  /**
   * The write behavior for the operation. Default is Insert.
   */
  writeBehavior?: SalesforceSinkWriteBehavior;
  /**
   * The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string).
   */
  externalIdFieldName?: any;
  /**
   * The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean).
   */
  ignoreNullValues?: any;
};

/**
 * A copy activity sink for a CosmosDB (MongoDB API) database.
 */
export type CosmosDbMongoDbApiSink = CopySink & {
  /**
   * Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
   */
  writeBehavior?: any;
};

/**
 * A copy activity tabular translator.
 */
export type TabularTranslator = CopyTranslator & {
  /**
   * Column mappings. Example: "UserId: MyUserId, Group: MyGroup, Name: MyName" Type: string (or Expression with resultType string). This property will be retired. Please use mappings property.
   */
  columnMappings?: any;
  /**
   * The schema mapping to map between tabular data and hierarchical data. Example: {"Column1": "$.Column1", "Column2": "$.Column2.Property1", "Column3": "$.Column2.Property2"}. Type: object (or Expression with resultType object). This property will be retired. Please use mappings property.
   */
  schemaMapping?: any;
  /**
   * The JSON Path of the Nested Array that is going to do cross-apply. Type: object (or Expression with resultType object).
   */
  collectionReference?: any;
  /**
   * Whether to map complex (array and object) values to simple strings in json format. Type: boolean (or Expression with resultType boolean).
   */
  mapComplexValuesToString?: any;
  /**
   * Column mappings with logical types. Tabular->tabular example: [{"source":{"name":"CustomerName","type":"String"},"sink":{"name":"ClientName","type":"String"}},{"source":{"name":"CustomerAddress","type":"String"},"sink":{"name":"ClientAddress","type":"String"}}].  Hierarchical->tabular example: [{"source":{"path":"$.CustomerName","type":"String"},"sink":{"name":"ClientName","type":"String"}},{"source":{"path":"$.CustomerAddress","type":"String"},"sink":{"name":"ClientAddress","type":"String"}}]. Type: object (or Expression with resultType object).
   */
  mappings?: any;
};

/**
 * Trigger referenced dependency.
 */
export type TriggerDependencyReference = DependencyReference & {
  /**
   * Referenced trigger.
   */
  referenceTrigger: TriggerReference;
};

/**
 * Self referenced tumbling window trigger dependency.
 */
export type SelfDependencyTumblingWindowTriggerReference = DependencyReference & {
  /**
   * Timespan applied to the start time of a tumbling window when evaluating dependency.
   */
  offset: string;
  /**
   * The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
   */
  size?: string;
};

/**
 * The key authorization type integration runtime.
 */
export type LinkedIntegrationRuntimeKeyAuthorization = LinkedIntegrationRuntimeType & {
  /**
   * The key used for authorization.
   */
  key: SecureString;
};

/**
 * The role based access control (RBAC) authorization type integration runtime.
 */
export type LinkedIntegrationRuntimeRbacAuthorization = LinkedIntegrationRuntimeType & {
  /**
   * The resource identifier of the integration runtime to be shared.
   */
  resourceId: string;
};

/**
 * Linked service resource type.
 */
export type LinkedServiceResource = AzureEntityResource & {
  /**
   * Properties of linked service.
   */
  properties: LinkedServiceUnion;
};

/**
 * Dataset resource type.
 */
export type DatasetResource = AzureEntityResource & {
  /**
   * Dataset properties.
   */
  properties: DatasetUnion;
};

/**
 * Pipeline resource type.
 */
export type PipelineResource = AzureEntityResource & {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  /**
   * The description of the pipeline.
   */
  description?: string;
  /**
   * List of activities in pipeline.
   */
  activities?: ActivityUnion[];
  /**
   * List of parameters for pipeline.
   */
  parameters?: { [propertyName: string]: ParameterSpecification };
  /**
   * List of variables for pipeline.
   */
  variables?: { [propertyName: string]: VariableSpecification };
  /**
   * The max number of concurrent runs for the pipeline.
   */
  concurrency?: number;
  /**
   * List of tags that can be used for describing the Pipeline.
   */
  annotations?: any[];
  /**
   * Dimensions emitted by Pipeline.
   */
  runDimensions?: { [propertyName: string]: any };
  /**
   * The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
   */
  folder?: PipelineFolder;
};

/**
 * Trigger resource type.
 */
export type TriggerResource = AzureEntityResource & {
  /**
   * Properties of the trigger.
   */
  properties: TriggerUnion;
};

/**
 * Data flow resource type.
 */
export type DataFlowResource = AzureEntityResource & {
  /**
   * Data flow properties.
   */
  properties: DataFlowUnion;
};

/**
 * Sql Script resource type.
 */
export type SqlScriptResource = AzureEntityResource & {
  /**
   * Properties of sql script.
   */
  properties: SqlScript;
};

/**
 * Spark job definition resource type.
 */
export type SparkJobDefinitionResource = AzureEntityResource & {
  /**
   * Properties of spark job definition.
   */
  properties: SparkJobDefinition;
};

/**
 * Notebook resource type.
 */
export type NotebookResource = AzureEntityResource & {
  /**
   * Properties of Notebook.
   */
  properties: Notebook;
};

/**
 * Integration runtime resource type.
 */
export type IntegrationRuntimeResource = AzureEntityResource & {
  /**
   * Integration runtime properties.
   */
  properties: IntegrationRuntimeUnion;
};

/**
 * Azure Synapse nested resource, which belongs to a workspace.
 */
export type SubResource = AzureEntityResource & {};

/**
 * RerunTrigger resource type.
 */
export type RerunTriggerResource = AzureEntityResource & {
  /**
   * Properties of the rerun trigger.
   */
  properties: RerunTumblingWindowTrigger;
};

/**
 * A workspace
 */
export type Workspace = TrackedResource & {
  /**
   * Identity of the workspace
   */
  identity?: ManagedIdentity;
  /**
   * Workspace default data lake storage account details
   */
  defaultDataLakeStorage?: DataLakeStorageAccountDetails;
  /**
   * SQL administrator login password
   */
  sqlAdministratorLoginPassword?: string;
  /**
   * Workspace managed resource group. The resource group name uniquely identifies the resource group within the user subscriptionId. The resource group name must be no longer than 90 characters long, and must be alphanumeric characters (Char.IsLetterOrDigit()) and '-', '_', '(', ')' and'.'. Note that the name cannot end with '.'
   */
  managedResourceGroupName?: string;
  /**
   * Resource provisioning state
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
  /**
   * Login for workspace SQL active directory administrator
   */
  sqlAdministratorLogin?: string;
  /**
   * Virtual Network profile
   */
  virtualNetworkProfile?: VirtualNetworkProfile;
  /**
   * Connectivity endpoints
   */
  connectivityEndpoints?: { [propertyName: string]: string };
  /**
   * Setting this to 'default' will ensure that all compute for this workspace is in a virtual network managed on behalf of the user.
   */
  managedVirtualNetwork?: string;
  /**
   * Private endpoint connections to the workspace
   */
  privateEndpointConnections?: PrivateEndpointConnection[];
  /**
   * Workspace level configs and feature flags
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly extraProperties?: { [propertyName: string]: any };
  /**
   * Managed Virtual Network Settings
   */
  managedVirtualNetworkSettings?: ManagedVirtualNetworkSettings;
};

/**
 * A SQL Analytics pool
 */
export type SqlPool = TrackedResource & {
  /**
   * SQL pool SKU
   */
  sku?: Sku;
  /**
   * Maximum size in bytes
   */
  maxSizeBytes?: number;
  /**
   * Collation mode
   */
  collation?: string;
  /**
   * Source database to create from
   */
  sourceDatabaseId?: string;
  /**
   * Backup database to restore from
   */
  recoverableDatabaseId?: string;
  /**
   * Resource state
   */
  provisioningState?: string;
  /**
   * Resource status
   */
  status?: string;
  /**
   * Snapshot time to restore
   */
  restorePointInTime?: Date;
  /**
   * What is this?
   */
  createMode?: string;
  /**
   * Date the SQL pool was created
   */
  creationDate?: Date;
};

/**
 * A Big Data pool
 */
export type BigDataPoolResourceInfo = TrackedResource & {
  /**
   * The state of the Big Data pool.
   */
  provisioningState?: string;
  /**
   * Auto-scaling properties
   */
  autoScale?: AutoScaleProperties;
  /**
   * The time when the Big Data pool was created.
   */
  creationDate?: Date;
  /**
   * Auto-pausing properties
   */
  autoPause?: AutoPauseProperties;
  /**
   * Whether compute isolation is required or not.
   */
  isComputeIsolationEnabled?: boolean;
  /**
   * The Spark events folder
   */
  sparkEventsFolder?: string;
  /**
   * The number of nodes in the Big Data pool.
   */
  nodeCount?: number;
  /**
   * Library version requirements
   */
  libraryRequirements?: LibraryRequirements;
  /**
   * Spark configuration file to specify additional properties
   */
  sparkConfigProperties?: LibraryRequirements;
  /**
   * The Apache Spark version.
   */
  sparkVersion?: string;
  /**
   * The default folder where Spark logs will be written.
   */
  defaultSparkLogFolder?: string;
  /**
   * The level of compute power that each node in the Big Data pool has.
   */
  nodeSize?: NodeSize;
  /**
   * The kind of nodes that the Big Data pool provides.
   */
  nodeSizeFamily?: NodeSizeFamily;
};

/**
 * Copy activity.
 */
export type CopyActivity = ExecutionActivity & {
  /**
   * List of inputs for the activity.
   */
  inputs?: DatasetReference[];
  /**
   * List of outputs for the activity.
   */
  outputs?: DatasetReference[];
  /**
   * Copy activity source.
   */
  source: CopySourceUnion;
  /**
   * Copy activity sink.
   */
  sink: CopySinkUnion;
  /**
   * Copy activity translator. If not specified, tabular translator is used.
   */
  translator?: any;
  /**
   * Specifies whether to copy data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean).
   */
  enableStaging?: any;
  /**
   * Specifies interim staging settings when EnableStaging is true.
   */
  stagingSettings?: StagingSettings;
  /**
   * Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  parallelCopies?: any;
  /**
   * Maximum number of data integration units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0.
   */
  dataIntegrationUnits?: any;
  /**
   * Whether to skip incompatible row. Default value is false. Type: boolean (or Expression with resultType boolean).
   */
  enableSkipIncompatibleRow?: any;
  /**
   * Redirect incompatible row settings when EnableSkipIncompatibleRow is true.
   */
  redirectIncompatibleRowSettings?: RedirectIncompatibleRowSettings;
  /**
   * Preserve Rules.
   */
  preserveRules?: any[];
  /**
   * Preserve rules.
   */
  preserve?: any[];
};

/**
 * HDInsight Hive activity type.
 */
export type HDInsightHiveActivity = ExecutionActivity & {
  /**
   * Storage linked service references.
   */
  storageLinkedServices?: LinkedServiceReference[];
  /**
   * User specified arguments to HDInsightActivity.
   */
  arguments?: any[];
  /**
   * Debug info option.
   */
  getDebugInfo?: HDInsightActivityDebugInfoOption;
  /**
   * Script path. Type: string (or Expression with resultType string).
   */
  scriptPath?: any;
  /**
   * Script linked service reference.
   */
  scriptLinkedService?: LinkedServiceReference;
  /**
   * Allows user to specify defines for Hive job request.
   */
  defines?: { [propertyName: string]: any };
  /**
   * User specified arguments under hivevar namespace.
   */
  variables?: any[];
  /**
   * Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package)
   */
  queryTimeout?: number;
};

/**
 * HDInsight Pig activity type.
 */
export type HDInsightPigActivity = ExecutionActivity & {
  /**
   * Storage linked service references.
   */
  storageLinkedServices?: LinkedServiceReference[];
  /**
   * User specified arguments to HDInsightActivity. Type: array (or Expression with resultType array).
   */
  arguments?: any;
  /**
   * Debug info option.
   */
  getDebugInfo?: HDInsightActivityDebugInfoOption;
  /**
   * Script path. Type: string (or Expression with resultType string).
   */
  scriptPath?: any;
  /**
   * Script linked service reference.
   */
  scriptLinkedService?: LinkedServiceReference;
  /**
   * Allows user to specify defines for Pig job request.
   */
  defines?: { [propertyName: string]: any };
};

/**
 * HDInsight MapReduce activity type.
 */
export type HDInsightMapReduceActivity = ExecutionActivity & {
  /**
   * Storage linked service references.
   */
  storageLinkedServices?: LinkedServiceReference[];
  /**
   * User specified arguments to HDInsightActivity.
   */
  arguments?: any[];
  /**
   * Debug info option.
   */
  getDebugInfo?: HDInsightActivityDebugInfoOption;
  /**
   * Class name. Type: string (or Expression with resultType string).
   */
  className: any;
  /**
   * Jar path. Type: string (or Expression with resultType string).
   */
  jarFilePath: any;
  /**
   * Jar linked service reference.
   */
  jarLinkedService?: LinkedServiceReference;
  /**
   * Jar libs.
   */
  jarLibs?: any[];
  /**
   * Allows user to specify defines for the MapReduce job request.
   */
  defines?: { [propertyName: string]: any };
};

/**
 * HDInsight streaming activity type.
 */
export type HDInsightStreamingActivity = ExecutionActivity & {
  /**
   * Storage linked service references.
   */
  storageLinkedServices?: LinkedServiceReference[];
  /**
   * User specified arguments to HDInsightActivity.
   */
  arguments?: any[];
  /**
   * Debug info option.
   */
  getDebugInfo?: HDInsightActivityDebugInfoOption;
  /**
   * Mapper executable name. Type: string (or Expression with resultType string).
   */
  mapper: any;
  /**
   * Reducer executable name. Type: string (or Expression with resultType string).
   */
  reducer: any;
  /**
   * Input blob path. Type: string (or Expression with resultType string).
   */
  input: any;
  /**
   * Output blob path. Type: string (or Expression with resultType string).
   */
  output: any;
  /**
   * Paths to streaming job files. Can be directories.
   */
  filePaths: any[];
  /**
   * Linked service reference where the files are located.
   */
  fileLinkedService?: LinkedServiceReference;
  /**
   * Combiner executable name. Type: string (or Expression with resultType string).
   */
  combiner?: any;
  /**
   * Command line environment values.
   */
  commandEnvironment?: any[];
  /**
   * Allows user to specify defines for streaming job request.
   */
  defines?: { [propertyName: string]: any };
};

/**
 * HDInsight Spark activity.
 */
export type HDInsightSparkActivity = ExecutionActivity & {
  /**
   * The root path in 'sparkJobLinkedService' for all the job’s files. Type: string (or Expression with resultType string).
   */
  rootPath: any;
  /**
   * The relative path to the root folder of the code/package to be executed. Type: string (or Expression with resultType string).
   */
  entryFilePath: any;
  /**
   * The user-specified arguments to HDInsightSparkActivity.
   */
  arguments?: any[];
  /**
   * Debug info option.
   */
  getDebugInfo?: HDInsightActivityDebugInfoOption;
  /**
   * The storage linked service for uploading the entry file and dependencies, and for receiving logs.
   */
  sparkJobLinkedService?: LinkedServiceReference;
  /**
   * The application's Java/Spark main class.
   */
  className?: string;
  /**
   * The user to impersonate that will execute the job. Type: string (or Expression with resultType string).
   */
  proxyUser?: any;
  /**
   * Spark configuration property.
   */
  sparkConfig?: { [propertyName: string]: any };
};

/**
 * Execute SSIS package activity.
 */
export type ExecuteSsisPackageActivity = ExecutionActivity & {
  /**
   * SSIS package location.
   */
  packageLocation: SsisPackageLocation;
  /**
   * Specifies the runtime to execute SSIS package. The value should be "x86" or "x64". Type: string (or Expression with resultType string).
   */
  runtime?: any;
  /**
   * The logging level of SSIS package execution. Type: string (or Expression with resultType string).
   */
  loggingLevel?: any;
  /**
   * The environment path to execute the SSIS package. Type: string (or Expression with resultType string).
   */
  environmentPath?: any;
  /**
   * The package execution credential.
   */
  executionCredential?: SsisExecutionCredential;
  /**
   * The integration runtime reference.
   */
  connectVia: IntegrationRuntimeReference;
  /**
   * The project level parameters to execute the SSIS package.
   */
  projectParameters?: { [propertyName: string]: SsisExecutionParameter };
  /**
   * The package level parameters to execute the SSIS package.
   */
  packageParameters?: { [propertyName: string]: SsisExecutionParameter };
  /**
   * The project level connection managers to execute the SSIS package.
   */
  projectConnectionManagers?: { [propertyName: string]: any };
  /**
   * The package level connection managers to execute the SSIS package.
   */
  packageConnectionManagers?: { [propertyName: string]: any };
  /**
   * The property overrides to execute the SSIS package.
   */
  propertyOverrides?: { [propertyName: string]: SsisPropertyOverride };
  /**
   * SSIS package execution log location.
   */
  logLocation?: SsisLogLocation;
};

/**
 * Custom activity type.
 */
export type CustomActivity = ExecutionActivity & {
  /**
   * Command for custom activity Type: string (or Expression with resultType string).
   */
  command: any;
  /**
   * Resource linked service reference.
   */
  resourceLinkedService?: LinkedServiceReference;
  /**
   * Folder path for resource files Type: string (or Expression with resultType string).
   */
  folderPath?: any;
  /**
   * Reference objects
   */
  referenceObjects?: CustomActivityReferenceObject;
  /**
   * User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined.
   */
  extendedProperties?: { [propertyName: string]: any };
  /**
   * The retention time for the files submitted for custom activity. Type: double (or Expression with resultType double).
   */
  retentionTimeInDays?: any;
};

/**
 * SQL stored procedure activity type.
 */
export type SqlServerStoredProcedureActivity = ExecutionActivity & {
  /**
   * Stored procedure name. Type: string (or Expression with resultType string).
   */
  storedProcedureName: any;
  /**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
   */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
};

/**
 * Delete activity.
 */
export type DeleteActivity = ExecutionActivity & {
  /**
   * If true, files or sub-folders under current folder path will be deleted recursively. Default is false. Type: boolean (or Expression with resultType boolean).
   */
  recursive?: any;
  /**
   * The max concurrent connections to connect data source at the same time.
   */
  maxConcurrentConnections?: number;
  /**
   * Whether to record detailed logs of delete-activity execution. Default value is false. Type: boolean (or Expression with resultType boolean).
   */
  enableLogging?: any;
  /**
   * Log storage settings customer need to provide when enableLogging is true.
   */
  logStorageSettings?: LogStorageSettings;
  /**
   * Delete activity dataset reference.
   */
  dataset: DatasetReference;
};

/**
 * Azure Data Explorer command activity.
 */
export type AzureDataExplorerCommandActivity = ExecutionActivity & {
  /**
   * A control command, according to the Azure Data Explorer command syntax. Type: string (or Expression with resultType string).
   */
  command: any;
  /**
   * Control command timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))..)
   */
  commandTimeout?: any;
};

/**
 * Lookup activity.
 */
export type LookupActivity = ExecutionActivity & {
  /**
   * Dataset-specific source properties, same as copy activity source.
   */
  source: CopySourceUnion;
  /**
   * Lookup activity dataset reference.
   */
  dataset: DatasetReference;
  /**
   * Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean).
   */
  firstRowOnly?: any;
};

/**
 * Web activity.
 */
export type WebActivity = ExecutionActivity & {
  /**
   * Rest API method for target endpoint.
   */
  method: WebActivityMethod;
  /**
   * Web activity target endpoint and path. Type: string (or Expression with resultType string).
   */
  url: any;
  /**
   * Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
   */
  headers?: any;
  /**
   * Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
   */
  body?: any;
  /**
   * Authentication method used for calling the endpoint.
   */
  authentication?: WebActivityAuthentication;
  /**
   * List of datasets passed to web endpoint.
   */
  datasets?: DatasetReference[];
  /**
   * List of linked services passed to web endpoint.
   */
  linkedServices?: LinkedServiceReference[];
  /**
   * The integration runtime reference.
   */
  connectVia?: IntegrationRuntimeReference;
};

/**
 * Activity to get metadata of dataset
 */
export type GetMetadataActivity = ExecutionActivity & {
  /**
   * GetMetadata activity dataset reference.
   */
  dataset: DatasetReference;
  /**
   * Fields of metadata to get from dataset.
   */
  fieldList?: any[];
};

/**
 * Azure ML Batch Execution activity.
 */
export type AzureMLBatchExecutionActivity = ExecutionActivity & {
  /**
   * Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request.
   */
  globalParameters?: { [propertyName: string]: any };
  /**
   * Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request.
   */
  webServiceOutputs?: { [propertyName: string]: AzureMLWebServiceFile };
  /**
   * Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request.
   */
  webServiceInputs?: { [propertyName: string]: AzureMLWebServiceFile };
};

/**
 * Azure ML Update Resource management activity.
 */
export type AzureMLUpdateResourceActivity = ExecutionActivity & {
  /**
   * Name of the Trained Model module in the Web Service experiment to be updated. Type: string (or Expression with resultType string).
   */
  trainedModelName: any;
  /**
   * Name of Azure Storage linked service holding the .ilearner file that will be uploaded by the update operation.
   */
  trainedModelLinkedServiceName: LinkedServiceReference;
  /**
   * The relative file path in trainedModelLinkedService to represent the .ilearner file that will be uploaded by the update operation.  Type: string (or Expression with resultType string).
   */
  trainedModelFilePath: any;
};

/**
 * Azure ML Execute Pipeline activity.
 */
export type AzureMLExecutePipelineActivity = ExecutionActivity & {
  /**
   * ID of the published Azure ML pipeline. Type: string (or Expression with resultType string).
   */
  mlPipelineId: any;
  /**
   * Run history experiment name of the pipeline run. This information will be passed in the ExperimentName property of the published pipeline execution request. Type: string (or Expression with resultType string).
   */
  experimentName?: any;
  /**
   * Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object).
   */
  mlPipelineParameters?: any;
  /**
   * The parent Azure ML Service pipeline run id. This information will be passed in the ParentRunId property of the published pipeline execution request. Type: string (or Expression with resultType string).
   */
  mlParentRunId?: any;
  /**
   * Whether to continue execution of other steps in the PipelineRun if a step fails. This information will be passed in the continueOnStepFailure property of the published pipeline execution request. Type: boolean (or Expression with resultType boolean).
   */
  continueOnStepFailure?: any;
};

/**
 * Data Lake Analytics U-SQL activity.
 */
export type DataLakeAnalyticsUsqlActivity = ExecutionActivity & {
  /**
   * Case-sensitive path to folder that contains the U-SQL script. Type: string (or Expression with resultType string).
   */
  scriptPath: any;
  /**
   * Script linked service reference.
   */
  scriptLinkedService: LinkedServiceReference;
  /**
   * The maximum number of nodes simultaneously used to run the job. Default value is 1. Type: integer (or Expression with resultType integer), minimum: 1.
   */
  degreeOfParallelism?: any;
  /**
   * Determines which jobs out of all that are queued should be selected to run first. The lower the number, the higher the priority. Default value is 1000. Type: integer (or Expression with resultType integer), minimum: 1.
   */
  priority?: any;
  /**
   * Parameters for U-SQL job request.
   */
  parameters?: { [propertyName: string]: any };
  /**
   * Runtime version of the U-SQL engine to use. Type: string (or Expression with resultType string).
   */
  runtimeVersion?: any;
  /**
   * Compilation mode of U-SQL. Must be one of these values : Semantic, Full and SingleBox. Type: string (or Expression with resultType string).
   */
  compilationMode?: any;
};

/**
 * DatabricksNotebook activity.
 */
export type DatabricksNotebookActivity = ExecutionActivity & {
  /**
   * The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string).
   */
  notebookPath: any;
  /**
   * Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used.
   */
  baseParameters?: { [propertyName: string]: any };
  /**
   * A list of libraries to be installed on the cluster that will execute the job.
   */
  libraries?: { [propertyName: string]: any }[];
};

/**
 * DatabricksSparkJar activity.
 */
export type DatabricksSparkJarActivity = ExecutionActivity & {
  /**
   * The full name of the class containing the main method to be executed. This class must be contained in a JAR provided as a library. Type: string (or Expression with resultType string).
   */
  mainClassName: any;
  /**
   * Parameters that will be passed to the main method.
   */
  parameters?: any[];
  /**
   * A list of libraries to be installed on the cluster that will execute the job.
   */
  libraries?: { [propertyName: string]: any }[];
};

/**
 * DatabricksSparkPython activity.
 */
export type DatabricksSparkPythonActivity = ExecutionActivity & {
  /**
   * The URI of the Python file to be executed. DBFS paths are supported. Type: string (or Expression with resultType string).
   */
  pythonFile: any;
  /**
   * Command line parameters that will be passed to the Python file.
   */
  parameters?: any[];
  /**
   * A list of libraries to be installed on the cluster that will execute the job.
   */
  libraries?: { [propertyName: string]: any }[];
};

/**
 * Azure Function activity.
 */
export type AzureFunctionActivity = ExecutionActivity & {
  /**
   * Rest API method for target endpoint.
   */
  method: AzureFunctionActivityMethod;
  /**
   * Name of the Function that the Azure Function Activity will call. Type: string (or Expression with resultType string)
   */
  functionName: any;
  /**
   * Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
   */
  headers?: any;
  /**
   * Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
   */
  body?: any;
};

/**
 * Execute data flow activity.
 */
export type ExecuteDataFlowActivity = ExecutionActivity & {
  /**
   * Data flow reference.
   */
  dataFlow: DataFlowReference;
  /**
   * Staging info for execute data flow activity.
   */
  staging?: DataFlowStagingInfo;
  /**
   * The integration runtime reference.
   */
  integrationRuntime?: IntegrationRuntimeReference;
  /**
   * Compute properties for data flow activity.
   */
  compute?: ExecuteDataFlowActivityTypePropertiesCompute;
};

/**
 * Trigger that creates pipeline runs periodically, on schedule.
 */
export type ScheduleTrigger = MultiplePipelineTrigger & {
  /**
   * Recurrence schedule configuration.
   */
  recurrence: ScheduleTriggerRecurrence;
};

/**
 * Trigger that runs every time the selected Blob container changes.
 */
export type BlobTrigger = MultiplePipelineTrigger & {
  /**
   * The path of the container/folder that will trigger the pipeline.
   */
  folderPath: string;
  /**
   * The max number of parallel files to handle when it is triggered.
   */
  maxConcurrency: number;
  /**
   * The Azure Storage linked service reference.
   */
  linkedService: LinkedServiceReference;
};

/**
 * Trigger that runs every time a Blob event occurs.
 */
export type BlobEventsTrigger = MultiplePipelineTrigger & {
  /**
   * The blob path must begin with the pattern provided for trigger to fire. For example, '/records/blobs/december/' will only fire the trigger for blobs in the december folder under the records container. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith.
   */
  blobPathBeginsWith?: string;
  /**
   * The blob path must end with the pattern provided for trigger to fire. For example, 'december/boxes.csv' will only fire the trigger for blobs named boxes in a december folder. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith.
   */
  blobPathEndsWith?: string;
  /**
   * If set to true, blobs with zero bytes will be ignored.
   */
  ignoreEmptyBlobs?: boolean;
  /**
   * The type of events that cause this trigger to fire.
   */
  events: BlobEventTypes[];
  /**
   * The ARM resource ID of the Storage Account.
   */
  scope: string;
};

/**
 * A copy activity Azure Table source.
 */
export type AzureTableSource = TabularSource & {
  /**
   * Azure Table source query. Type: string (or Expression with resultType string).
   */
  azureTableSourceQuery?: any;
  /**
   * Azure Table source ignore table not found. Type: boolean (or Expression with resultType boolean).
   */
  azureTableSourceIgnoreTableNotFound?: any;
};

/**
 * A copy activity source for Informix.
 */
export type InformixSource = TabularSource & {
  /**
   * Database query. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for Db2 databases.
 */
export type Db2Source = TabularSource & {
  /**
   * Database query. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for ODBC databases.
 */
export type OdbcSource = TabularSource & {
  /**
   * Database query. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for MySQL databases.
 */
export type MySqlSource = TabularSource & {
  /**
   * Database query. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for PostgreSQL databases.
 */
export type PostgreSqlSource = TabularSource & {
  /**
   * Database query. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for Sybase databases.
 */
export type SybaseSource = TabularSource & {
  /**
   * Database query. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for SapBW server via MDX.
 */
export type SapBwSource = TabularSource & {
  /**
   * MDX query. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Salesforce source.
 */
export type SalesforceSource = TabularSource & {
  /**
   * Database query. Type: string (or Expression with resultType string).
   */
  query?: any;
  /**
   * The read behavior for the operation. Default is Query.
   */
  readBehavior?: SalesforceSourceReadBehavior;
};

/**
 * A copy activity source for SAP Cloud for Customer source.
 */
export type SapCloudForCustomerSource = TabularSource & {
  /**
   * SAP Cloud for Customer OData query. For example, "$top=1". Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for SAP ECC source.
 */
export type SapEccSource = TabularSource & {
  /**
   * SAP ECC OData query. For example, "$top=1". Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for SAP HANA source.
 */
export type SapHanaSource = TabularSource & {
  /**
   * SAP HANA Sql query. Type: string (or Expression with resultType string).
   */
  query?: any;
  /**
   * The packet size of data read from SAP HANA. Type: integer(or Expression with resultType integer).
   */
  packetSize?: any;
  /**
   * The partition mechanism that will be used for SAP HANA read in parallel.
   */
  partitionOption?: SapHanaPartitionOption;
  /**
   * The settings that will be leveraged for SAP HANA source partitioning.
   */
  partitionSettings?: SapHanaPartitionSettings;
};

/**
 * A copy activity source for SAP Business Warehouse Open Hub Destination source.
 */
export type SapOpenHubSource = TabularSource & {
  /**
   * Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
  excludeLastRequest?: any;
  /**
   * The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ).
   */
  baseRequestId?: any;
};

/**
 * A copy activity source for SAP Table source.
 */
export type SapTableSource = TabularSource & {
  /**
   * The number of rows to be retrieved. Type: integer(or Expression with resultType integer).
   */
  rowCount?: any;
  /**
   * The number of rows that will be skipped. Type: integer (or Expression with resultType integer).
   */
  rowSkips?: any;
  /**
   * The fields of the SAP table that will be retrieved. For example, column0, column1. Type: string (or Expression with resultType string).
   */
  rfcTableFields?: any;
  /**
   * The options for the filtering of the SAP Table. For example, COLUMN0 EQ SOME VALUE. Type: string (or Expression with resultType string).
   */
  rfcTableOptions?: any;
  /**
   * Specifies the maximum number of rows that will be retrieved at a time when retrieving data from SAP Table. Type: integer (or Expression with resultType integer).
   */
  batchSize?: any;
  /**
   * Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string).
   */
  customRfcReadTableFunctionModule?: any;
  /**
   * The partition mechanism that will be used for SAP table read in parallel.
   */
  partitionOption?: SapTablePartitionOption;
  /**
   * The settings that will be leveraged for SAP table source partitioning.
   */
  partitionSettings?: SapTablePartitionSettings;
};

/**
 * A copy activity SQL source.
 */
export type SqlSource = TabularSource & {
  /**
   * SQL reader query. Type: string (or Expression with resultType string).
   */
  sqlReaderQuery?: any;
  /**
   * Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
   */
  sqlReaderStoredProcedureName?: any;
  /**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
   */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
};

/**
 * A copy activity SQL server source.
 */
export type SqlServerSource = TabularSource & {
  /**
   * SQL reader query. Type: string (or Expression with resultType string).
   */
  sqlReaderQuery?: any;
  /**
   * Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
   */
  sqlReaderStoredProcedureName?: any;
  /**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
   */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /**
   * Which additional types to produce.
   */
  produceAdditionalTypes?: any;
};

/**
 * A copy activity Azure SQL source.
 */
export type AzureSqlSource = TabularSource & {
  /**
   * SQL reader query. Type: string (or Expression with resultType string).
   */
  sqlReaderQuery?: any;
  /**
   * Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
   */
  sqlReaderStoredProcedureName?: any;
  /**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
   */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /**
   * Which additional types to produce.
   */
  produceAdditionalTypes?: any;
};

/**
 * A copy activity Azure SQL Managed Instance source.
 */
export type SqlMISource = TabularSource & {
  /**
   * SQL reader query. Type: string (or Expression with resultType string).
   */
  sqlReaderQuery?: any;
  /**
   * Name of the stored procedure for a Azure SQL Managed Instance source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
   */
  sqlReaderStoredProcedureName?: any;
  /**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
   */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /**
   * Which additional types to produce.
   */
  produceAdditionalTypes?: any;
};

/**
 * A copy activity SQL Data Warehouse source.
 */
export type SqlDWSource = TabularSource & {
  /**
   * SQL Data Warehouse reader query. Type: string (or Expression with resultType string).
   */
  sqlReaderQuery?: any;
  /**
   * Name of the stored procedure for a SQL Data Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
   */
  sqlReaderStoredProcedureName?: any;
  /**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter.
   */
  storedProcedureParameters?: any;
};

/**
 * A copy activity Azure MySQL source.
 */
export type AzureMySqlSource = TabularSource & {
  /**
   * Database query. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Teradata source.
 */
export type TeradataSource = TabularSource & {
  /**
   * Teradata query. Type: string (or Expression with resultType string).
   */
  query?: any;
  /**
   * The partition mechanism that will be used for teradata read in parallel.
   */
  partitionOption?: TeradataPartitionOption;
  /**
   * The settings that will be leveraged for teradata source partitioning.
   */
  partitionSettings?: TeradataPartitionSettings;
};

/**
 * A copy activity source for a Cassandra database.
 */
export type CassandraSource = TabularSource & {
  /**
   * Database query. Should be a SQL-92 query expression or Cassandra Query Language (CQL) command. Type: string (or Expression with resultType string).
   */
  query?: any;
  /**
   * The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive.
   */
  consistencyLevel?: CassandraSourceReadConsistencyLevels;
};

/**
 * A copy activity Amazon Marketplace Web Service source.
 */
export type AmazonMWSSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Azure PostgreSQL source.
 */
export type AzurePostgreSqlSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Concur Service source.
 */
export type ConcurSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Couchbase server source.
 */
export type CouchbaseSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Drill server source.
 */
export type DrillSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Eloqua server source.
 */
export type EloquaSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Google BigQuery service source.
 */
export type GoogleBigQuerySource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Greenplum Database source.
 */
export type GreenplumSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity HBase server source.
 */
export type HBaseSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Hive Server source.
 */
export type HiveSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Hubspot Service source.
 */
export type HubspotSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Impala server source.
 */
export type ImpalaSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Jira Service source.
 */
export type JiraSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Magento server source.
 */
export type MagentoSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity MariaDB server source.
 */
export type MariaDBSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Azure MariaDB source.
 */
export type AzureMariaDBSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Marketo server source.
 */
export type MarketoSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Paypal Service source.
 */
export type PaypalSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Phoenix server source.
 */
export type PhoenixSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Presto server source.
 */
export type PrestoSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity QuickBooks server source.
 */
export type QuickBooksSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity ServiceNow server source.
 */
export type ServiceNowSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Shopify Service source.
 */
export type ShopifySource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Spark Server source.
 */
export type SparkSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Square Service source.
 */
export type SquareSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Xero Service source.
 */
export type XeroSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Zoho server source.
 */
export type ZohoSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Netezza source.
 */
export type NetezzaSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
  /**
   * The partition mechanism that will be used for Netezza read in parallel.
   */
  partitionOption?: NetezzaPartitionOption;
  /**
   * The settings that will be leveraged for Netezza source partitioning.
   */
  partitionSettings?: NetezzaPartitionSettings;
};

/**
 * A copy activity Vertica source.
 */
export type VerticaSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Salesforce Marketing Cloud source.
 */
export type SalesforceMarketingCloudSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Responsys source.
 */
export type ResponsysSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Dynamics AX source.
 */
export type DynamicsAXSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Oracle Service Cloud source.
 */
export type OracleServiceCloudSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity Google AdWords service source.
 */
export type GoogleAdWordsSource = TabularSource & {
  /**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
  query?: any;
};

/**
 * A copy activity source for Amazon Redshift Source.
 */
export type AmazonRedshiftSource = TabularSource & {
  /**
   * Database query. Type: string (or Expression with resultType string).
   */
  query?: any;
  /**
   * The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3.
   */
  redshiftUnloadSettings?: RedshiftUnloadSettings;
};

/**
 * Referenced tumbling window trigger dependency.
 */
export type TumblingWindowTriggerDependencyReference = TriggerDependencyReference & {
  /**
   * Timespan applied to the start time of a tumbling window when evaluating dependency.
   */
  offset?: string;
  /**
   * The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
   */
  size?: string;
};

/**
 * Defines headers for DataFlowDebugSession_createDataFlowDebugSession operation.
 */
export interface DataFlowDebugSessionCreateDataFlowDebugSessionHeaders {
  /**
   * URI to poll for asynchronous operation status.
   */
  location?: string;
}

/**
 * Defines headers for DataFlowDebugSession_executeCommand operation.
 */
export interface DataFlowDebugSessionExecuteCommandHeaders {
  /**
   * URI to poll for asynchronous operation status.
   */
  location?: string;
}

/**
 * Defines values for IntegrationRuntimeReferenceType.
 */
export type IntegrationRuntimeReferenceType =
  | "IntegrationRuntimeReference"
  | string;
/**
 * Defines values for ParameterType.
 */
export type ParameterType =
  | "Object"
  | "String"
  | "Int"
  | "Float"
  | "Bool"
  | "Array"
  | "SecureString"
  | string;
/**
 * Defines values for Type.
 */
export type Type = "LinkedServiceReference" | string;
/**
 * Defines values for DependencyCondition.
 */
export type DependencyCondition =
  | "Succeeded"
  | "Failed"
  | "Skipped"
  | "Completed"
  | string;
/**
 * Defines values for VariableType.
 */
export type VariableType = "String" | "Bool" | "Boolean" | "Array" | string;
/**
 * Defines values for RunQueryFilterOperand.
 */
export type RunQueryFilterOperand =
  | "PipelineName"
  | "Status"
  | "RunStart"
  | "RunEnd"
  | "ActivityName"
  | "ActivityRunStart"
  | "ActivityRunEnd"
  | "ActivityType"
  | "TriggerName"
  | "TriggerRunTimestamp"
  | "RunGroupId"
  | "LatestOnly"
  | string;
/**
 * Defines values for RunQueryFilterOperator.
 */
export type RunQueryFilterOperator =
  | "Equals"
  | "NotEquals"
  | "In"
  | "NotIn"
  | string;
/**
 * Defines values for RunQueryOrderByField.
 */
export type RunQueryOrderByField =
  | "RunStart"
  | "RunEnd"
  | "PipelineName"
  | "Status"
  | "ActivityName"
  | "ActivityRunStart"
  | "ActivityRunEnd"
  | "TriggerName"
  | "TriggerRunTimestamp"
  | string;
/**
 * Defines values for RunQueryOrder.
 */
export type RunQueryOrder = "ASC" | "DESC" | string;
/**
 * Defines values for TriggerRuntimeState.
 */
export type TriggerRuntimeState = "Started" | "Stopped" | "Disabled" | string;
/**
 * Defines values for EventSubscriptionStatus.
 */
export type EventSubscriptionStatus =
  | "Enabled"
  | "Provisioning"
  | "Deprovisioning"
  | "Disabled"
  | "Unknown"
  | string;
/**
 * Defines values for TriggerRunStatus.
 */
export type TriggerRunStatus = "Succeeded" | "Failed" | "Inprogress" | string;
/**
 * Defines values for SqlScriptType.
 */
export type SqlScriptType = "SqlQuery" | string;
/**
 * Defines values for SqlConnectionType.
 */
export type SqlConnectionType = "SqlOnDemand" | "SqlPool" | string;
/**
 * Defines values for BigDataPoolReferenceType.
 */
export type BigDataPoolReferenceType = "BigDataPoolReference" | string;
/**
 * Defines values for SparkJobType.
 */
export type SparkJobType = "SparkBatch" | "SparkSession" | string;
/**
 * Defines values for SparkBatchJobResultType.
 */
export type SparkBatchJobResultType =
  | "Uncertain"
  | "Succeeded"
  | "Failed"
  | "Cancelled"
  | string;
/**
 * Defines values for SchedulerCurrentState.
 */
export type SchedulerCurrentState = "Queued" | "Scheduled" | "Ended" | string;
/**
 * Defines values for PluginCurrentState.
 */
export type PluginCurrentState =
  | "Preparation"
  | "ResourceAcquisition"
  | "Queued"
  | "Submission"
  | "Monitoring"
  | "Cleanup"
  | "Ended"
  | string;
/**
 * Defines values for SparkErrorSource.
 */
export type SparkErrorSource =
  | "System"
  | "User"
  | "Unknown"
  | "Dependency"
  | string;
/**
 * Defines values for CellOutputType.
 */
export type CellOutputType =
  | "execute_result"
  | "display_data"
  | "stream"
  | "error"
  | string;
/**
 * Defines values for PrivateLinkServiceConnectionStateStatus.
 */
export type PrivateLinkServiceConnectionStateStatus =
  | "Approved"
  | "Pending"
  | "Rejected"
  | "Disconnected"
  | string;
/**
 * Defines values for NodeSize.
 */
export type NodeSize =
  | "None"
  | "Small"
  | "Medium"
  | "Large"
  | "XLarge"
  | "XXLarge"
  | "XXXLarge"
  | string;
/**
 * Defines values for NodeSizeFamily.
 */
export type NodeSizeFamily = "None" | "MemoryOptimized" | string;
/**
 * Defines values for IntegrationRuntimeType.
 */
export type IntegrationRuntimeType = "Managed" | "SelfHosted" | string;
/**
 * Defines values for ExpressionType.
 */
export type ExpressionType = "Expression" | string;
/**
 * Defines values for PipelineReferenceType.
 */
export type PipelineReferenceType = "PipelineReference" | string;
/**
 * Defines values for DatasetReferenceType.
 */
export type DatasetReferenceType = "DatasetReference" | string;
/**
 * Defines values for DataFlowReferenceType.
 */
export type DataFlowReferenceType = "DataFlowReference" | string;
/**
 * Defines values for NotebookReferenceType.
 */
export type NotebookReferenceType = "NotebookReference" | string;
/**
 * Defines values for SparkJobReferenceType.
 */
export type SparkJobReferenceType = "SparkJobDefinitionReference" | string;
/**
 * Defines values for SqlPoolReferenceType.
 */
export type SqlPoolReferenceType = "SqlPoolReference" | string;
/**
 * Defines values for JsonFormatFilePattern.
 */
export type JsonFormatFilePattern = "setOfObjects" | "arrayOfObjects" | string;
/**
 * Defines values for DatasetCompressionLevel.
 */
export type DatasetCompressionLevel = "Optimal" | "Fastest" | string;
/**
 * Defines values for AvroCompressionCodec.
 */
export type AvroCompressionCodec =
  | "none"
  | "deflate"
  | "snappy"
  | "xz"
  | "bzip2"
  | string;
/**
 * Defines values for ParquetCompressionCodec.
 */
export type ParquetCompressionCodec =
  | "none"
  | "gzip"
  | "snappy"
  | "lzo"
  | string;
/**
 * Defines values for DelimitedTextCompressionCodec.
 */
export type DelimitedTextCompressionCodec =
  | "bzip2"
  | "gzip"
  | "deflate"
  | "zipDeflate"
  | "snappy"
  | "lz4"
  | string;
/**
 * Defines values for OrcCompressionCodec.
 */
export type OrcCompressionCodec = "none" | "zlib" | "snappy" | string;
/**
 * Defines values for DynamicsDeploymentType.
 */
export type DynamicsDeploymentType = "Online" | "OnPremisesWithIfd" | string;
/**
 * Defines values for DynamicsAuthenticationType.
 */
export type DynamicsAuthenticationType =
  | "Office365"
  | "Ifd"
  | "AADServicePrincipal"
  | string;
/**
 * Defines values for DynamicsServicePrincipalCredentialType.
 */
export type DynamicsServicePrincipalCredentialType =
  | "ServicePrincipalKey"
  | "ServicePrincipalCert"
  | string;
/**
 * Defines values for SybaseAuthenticationType.
 */
export type SybaseAuthenticationType = "Basic" | "Windows" | string;
/**
 * Defines values for Db2AuthenticationType.
 */
export type Db2AuthenticationType = "Basic" | string;
/**
 * Defines values for TeradataAuthenticationType.
 */
export type TeradataAuthenticationType = "Basic" | "Windows" | string;
/**
 * Defines values for ODataAuthenticationType.
 */
export type ODataAuthenticationType =
  | "Basic"
  | "Anonymous"
  | "Windows"
  | "AadServicePrincipal"
  | "ManagedServiceIdentity"
  | string;
/**
 * Defines values for ODataAadServicePrincipalCredentialType.
 */
export type ODataAadServicePrincipalCredentialType =
  | "ServicePrincipalKey"
  | "ServicePrincipalCert"
  | string;
/**
 * Defines values for WebAuthenticationType.
 */
export type WebAuthenticationType =
  | "Basic"
  | "Anonymous"
  | "ClientCertificate"
  | string;
/**
 * Defines values for MongoDbAuthenticationType.
 */
export type MongoDbAuthenticationType = "Basic" | "Anonymous" | string;
/**
 * Defines values for RestServiceAuthenticationType.
 */
export type RestServiceAuthenticationType =
  | "Anonymous"
  | "Basic"
  | "AadServicePrincipal"
  | "ManagedServiceIdentity"
  | string;
/**
 * Defines values for HttpAuthenticationType.
 */
export type HttpAuthenticationType =
  | "Basic"
  | "Anonymous"
  | "Digest"
  | "Windows"
  | "ClientCertificate"
  | string;
/**
 * Defines values for FtpAuthenticationType.
 */
export type FtpAuthenticationType = "Basic" | "Anonymous" | string;
/**
 * Defines values for SftpAuthenticationType.
 */
export type SftpAuthenticationType = "Basic" | "SshPublicKey" | string;
/**
 * Defines values for SapHanaAuthenticationType.
 */
export type SapHanaAuthenticationType = "Basic" | "Windows" | string;
/**
 * Defines values for GoogleBigQueryAuthenticationType.
 */
export type GoogleBigQueryAuthenticationType =
  | "ServiceAuthentication"
  | "UserAuthentication"
  | string;
/**
 * Defines values for HBaseAuthenticationType.
 */
export type HBaseAuthenticationType = "Anonymous" | "Basic" | string;
/**
 * Defines values for HiveServerType.
 */
export type HiveServerType =
  | "HiveServer1"
  | "HiveServer2"
  | "HiveThriftServer"
  | string;
/**
 * Defines values for HiveThriftTransportProtocol.
 */
export type HiveThriftTransportProtocol = "Binary" | "SASL" | "HTTP " | string;
/**
 * Defines values for HiveAuthenticationType.
 */
export type HiveAuthenticationType =
  | "Anonymous"
  | "Username"
  | "UsernameAndPassword"
  | "WindowsAzureHDInsightService"
  | string;
/**
 * Defines values for ImpalaAuthenticationType.
 */
export type ImpalaAuthenticationType =
  | "Anonymous"
  | "SASLUsername"
  | "UsernameAndPassword"
  | string;
/**
 * Defines values for PhoenixAuthenticationType.
 */
export type PhoenixAuthenticationType =
  | "Anonymous"
  | "UsernameAndPassword"
  | "WindowsAzureHDInsightService"
  | string;
/**
 * Defines values for PrestoAuthenticationType.
 */
export type PrestoAuthenticationType = "Anonymous" | "LDAP" | string;
/**
 * Defines values for ServiceNowAuthenticationType.
 */
export type ServiceNowAuthenticationType = "Basic" | "OAuth2" | string;
/**
 * Defines values for SparkServerType.
 */
export type SparkServerType =
  | "SharkServer"
  | "SharkServer2"
  | "SparkThriftServer"
  | string;
/**
 * Defines values for SparkThriftTransportProtocol.
 */
export type SparkThriftTransportProtocol = "Binary" | "SASL" | "HTTP " | string;
/**
 * Defines values for SparkAuthenticationType.
 */
export type SparkAuthenticationType =
  | "Anonymous"
  | "Username"
  | "UsernameAndPassword"
  | "WindowsAzureHDInsightService"
  | string;
/**
 * Defines values for HdiNodeTypes.
 */
export type HdiNodeTypes = "Headnode" | "Workernode" | "Zookeeper" | string;
/**
 * Defines values for GoogleAdWordsAuthenticationType.
 */
export type GoogleAdWordsAuthenticationType =
  | "ServiceAuthentication"
  | "UserAuthentication"
  | string;
/**
 * Defines values for JsonWriteFilePattern.
 */
export type JsonWriteFilePattern = "setOfObjects" | "arrayOfObjects" | string;
/**
 * Defines values for SalesforceSourceReadBehavior.
 */
export type SalesforceSourceReadBehavior = "Query" | "QueryAll" | string;
/**
 * Defines values for SapHanaPartitionOption.
 */
export type SapHanaPartitionOption =
  | "None"
  | "PhysicalPartitionsOfTable"
  | "SapHanaDynamicRange"
  | string;
/**
 * Defines values for SapTablePartitionOption.
 */
export type SapTablePartitionOption =
  | "None"
  | "PartitionOnInt"
  | "PartitionOnCalendarYear"
  | "PartitionOnCalendarMonth"
  | "PartitionOnCalendarDate"
  | "PartitionOnTime"
  | string;
/**
 * Defines values for StoredProcedureParameterType.
 */
export type StoredProcedureParameterType =
  | "String"
  | "Int"
  | "Int64"
  | "Decimal"
  | "Guid"
  | "Boolean"
  | "Date"
  | string;
/**
 * Defines values for OraclePartitionOption.
 */
export type OraclePartitionOption =
  | "None"
  | "PhysicalPartitionsOfTable"
  | "DynamicRange"
  | string;
/**
 * Defines values for TeradataPartitionOption.
 */
export type TeradataPartitionOption = "None" | "Hash" | "DynamicRange" | string;
/**
 * Defines values for CassandraSourceReadConsistencyLevels.
 */
export type CassandraSourceReadConsistencyLevels =
  | "ALL"
  | "EACH_QUORUM"
  | "QUORUM"
  | "LOCAL_QUORUM"
  | "ONE"
  | "TWO"
  | "THREE"
  | "LOCAL_ONE"
  | "SERIAL"
  | "LOCAL_SERIAL"
  | string;
/**
 * Defines values for NetezzaPartitionOption.
 */
export type NetezzaPartitionOption =
  | "None"
  | "DataSlice"
  | "DynamicRange"
  | string;
/**
 * Defines values for SapCloudForCustomerSinkWriteBehavior.
 */
export type SapCloudForCustomerSinkWriteBehavior = "Insert" | "Update" | string;
/**
 * Defines values for PolybaseSettingsRejectType.
 */
export type PolybaseSettingsRejectType = "value" | "percentage" | string;
/**
 * Defines values for AzureSearchIndexWriteBehaviorType.
 */
export type AzureSearchIndexWriteBehaviorType = "Merge" | "Upload" | string;
/**
 * Defines values for DynamicsSinkWriteBehavior.
 */
export type DynamicsSinkWriteBehavior = "Upsert" | string;
/**
 * Defines values for SalesforceSinkWriteBehavior.
 */
export type SalesforceSinkWriteBehavior = "Insert" | "Upsert" | string;
/**
 * Defines values for HDInsightActivityDebugInfoOption.
 */
export type HDInsightActivityDebugInfoOption =
  | "None"
  | "Always"
  | "Failure"
  | string;
/**
 * Defines values for SsisPackageLocationType.
 */
export type SsisPackageLocationType =
  | "SSISDB"
  | "File"
  | "InlinePackage"
  | string;
/**
 * Defines values for SsisLogLocationType.
 */
export type SsisLogLocationType = "File" | string;
/**
 * Defines values for WebActivityMethod.
 */
export type WebActivityMethod = "GET" | "POST" | "PUT" | "DELETE" | string;
/**
 * Defines values for AzureFunctionActivityMethod.
 */
export type AzureFunctionActivityMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "OPTIONS"
  | "HEAD"
  | "TRACE"
  | string;
/**
 * Defines values for WebHookActivityMethod.
 */
export type WebHookActivityMethod = "POST" | string;
/**
 * Defines values for DataFlowComputeType.
 */
export type DataFlowComputeType =
  | "General"
  | "MemoryOptimized"
  | "ComputeOptimized"
  | string;
/**
 * Defines values for RecurrenceFrequency.
 */
export type RecurrenceFrequency =
  | "NotSpecified"
  | "Minute"
  | "Hour"
  | "Day"
  | "Week"
  | "Month"
  | "Year"
  | string;
/**
 * Defines values for BlobEventTypes.
 */
export type BlobEventTypes =
  | "Microsoft.Storage.BlobCreated"
  | "Microsoft.Storage.BlobDeleted"
  | string;
/**
 * Defines values for TumblingWindowFrequency.
 */
export type TumblingWindowFrequency = "Minute" | "Hour" | string;
/**
 * Defines values for TriggerReferenceType.
 */
export type TriggerReferenceType = "TriggerReference" | string;
/**
 * Defines values for IntegrationRuntimeState.
 */
export type IntegrationRuntimeState =
  | "Initial"
  | "Stopped"
  | "Started"
  | "Starting"
  | "Stopping"
  | "NeedRegistration"
  | "Online"
  | "Limited"
  | "Offline"
  | "AccessDenied"
  | string;
/**
 * Defines values for IntegrationRuntimeSsisCatalogPricingTier.
 */
export type IntegrationRuntimeSsisCatalogPricingTier =
  | "Basic"
  | "Standard"
  | "Premium"
  | "PremiumRS"
  | string;
/**
 * Defines values for IntegrationRuntimeLicenseType.
 */
export type IntegrationRuntimeLicenseType =
  | "BasePrice"
  | "LicenseIncluded"
  | string;
/**
 * Defines values for IntegrationRuntimeEntityReferenceType.
 */
export type IntegrationRuntimeEntityReferenceType =
  | "IntegrationRuntimeReference"
  | "LinkedServiceReference"
  | string;
/**
 * Defines values for IntegrationRuntimeEdition.
 */
export type IntegrationRuntimeEdition = "Standard" | "Enterprise" | string;
/**
 * Defines values for CopyBehaviorType.
 */
export type CopyBehaviorType =
  | "PreserveHierarchy"
  | "FlattenHierarchy"
  | "MergeFiles"
  | string;
/**
 * Defines values for ResourceIdentityType.
 */
export type ResourceIdentityType = "None" | "SystemAssigned";
/**
 * Defines values for DayOfWeek.
 */
export type DayOfWeek =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

/**
 * Contains response data for the getLinkedServicesByWorkspace operation.
 */
export type LinkedServiceGetLinkedServicesByWorkspaceResponse = LinkedServiceListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: LinkedServiceListResponse;
  };
};

/**
 * Optional parameters.
 */
export interface LinkedServiceCreateOrUpdateLinkedServiceOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the linkedService entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
   */
  ifMatch?: string;
}

/**
 * Contains response data for the createOrUpdateLinkedService operation.
 */
export type LinkedServiceCreateOrUpdateLinkedServiceResponse = LinkedServiceResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: LinkedServiceResource;
    /**
     * The parsed HTTP response headers.
     */
    [LROSYM]: LROResponseInfo;
  };
};

/**
 * Optional parameters.
 */
export interface LinkedServiceGetLinkedServiceOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the linked service entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
   */
  ifNoneMatch?: string;
}

/**
 * Contains response data for the getLinkedService operation.
 */
export type LinkedServiceGetLinkedServiceResponse = LinkedServiceResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: LinkedServiceResource;
  };
};

/**
 * Contains response data for the getLinkedServicesByWorkspaceNext operation.
 */
export type LinkedServiceGetLinkedServicesByWorkspaceNextResponse = LinkedServiceListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: LinkedServiceListResponse;
  };
};

/**
 * Contains response data for the getDatasetsByWorkspace operation.
 */
export type DatasetGetDatasetsByWorkspaceResponse = DatasetListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DatasetListResponse;
  };
};

/**
 * Optional parameters.
 */
export interface DatasetCreateOrUpdateDatasetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the dataset entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
   */
  ifMatch?: string;
}

/**
 * Contains response data for the createOrUpdateDataset operation.
 */
export type DatasetCreateOrUpdateDatasetResponse = DatasetResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DatasetResource;
    /**
     * The parsed HTTP response headers.
     */
    [LROSYM]: LROResponseInfo;
  };
};

/**
 * Optional parameters.
 */
export interface DatasetGetDatasetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the dataset entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
   */
  ifNoneMatch?: string;
}

/**
 * Contains response data for the getDataset operation.
 */
export type DatasetGetDatasetResponse = DatasetResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DatasetResource;
  };
};

/**
 * Contains response data for the getDatasetsByWorkspaceNext operation.
 */
export type DatasetGetDatasetsByWorkspaceNextResponse = DatasetListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DatasetListResponse;
  };
};

/**
 * Contains response data for the getPipelinesByWorkspace operation.
 */
export type PipelineGetPipelinesByWorkspaceResponse = PipelineListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: PipelineListResponse;
  };
};

/**
 * Optional parameters.
 */
export interface PipelineCreateOrUpdatePipelineOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the pipeline entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
   */
  ifMatch?: string;
}

/**
 * Contains response data for the createOrUpdatePipeline operation.
 */
export type PipelineCreateOrUpdatePipelineResponse = PipelineResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: PipelineResource;
    /**
     * The parsed HTTP response headers.
     */
    [LROSYM]: LROResponseInfo;
  };
};

/**
 * Optional parameters.
 */
export interface PipelineGetPipelineOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the pipeline entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
   */
  ifNoneMatch?: string;
}

/**
 * Contains response data for the getPipeline operation.
 */
export type PipelineGetPipelineResponse = PipelineResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: PipelineResource;
  };
};

/**
 * Optional parameters.
 */
export interface PipelineCreatePipelineRunOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Parameters of the pipeline run. These parameters will be used only if the runId is not specified.
   */
  parameters?: { [propertyName: string]: any };
  /**
   * The pipeline run identifier. If run ID is specified the parameters of the specified run will be used to create a new run.
   */
  referencePipelineRunId?: string;
  /**
   * Recovery mode flag. If recovery mode is set to true, the specified referenced pipeline run and the new run will be grouped under the same groupId.
   */
  isRecovery?: boolean;
  /**
   * In recovery mode, the rerun will start from this activity. If not specified, all activities will run.
   */
  startActivityName?: string;
}

/**
 * Contains response data for the createPipelineRun operation.
 */
export type PipelineCreatePipelineRunResponse = CreateRunResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CreateRunResponse;
  };
};

/**
 * Contains response data for the getPipelinesByWorkspaceNext operation.
 */
export type PipelineGetPipelinesByWorkspaceNextResponse = PipelineListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: PipelineListResponse;
  };
};

/**
 * Contains response data for the queryPipelineRunsByWorkspace operation.
 */
export type PipelineRunQueryPipelineRunsByWorkspaceResponse = PipelineRunsQueryResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: PipelineRunsQueryResponse;
  };
};

/**
 * Contains response data for the getPipelineRun operation.
 */
export type PipelineRunGetPipelineRunResponse = PipelineRun & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: PipelineRun;
  };
};

/**
 * Contains response data for the queryActivityRuns operation.
 */
export type PipelineRunQueryActivityRunsResponse = ActivityRunsQueryResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ActivityRunsQueryResponse;
  };
};

/**
 * Optional parameters.
 */
export interface PipelineRunCancelPipelineRunOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * If true, cancel all the Child pipelines that are triggered by the current pipeline.
   */
  isRecursive?: boolean;
}

/**
 * Contains response data for the getTriggersByWorkspace operation.
 */
export type TriggerGetTriggersByWorkspaceResponse = TriggerListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: TriggerListResponse;
  };
};

/**
 * Optional parameters.
 */
export interface TriggerCreateOrUpdateTriggerOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the trigger entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
   */
  ifMatch?: string;
}

/**
 * Contains response data for the createOrUpdateTrigger operation.
 */
export type TriggerCreateOrUpdateTriggerResponse = TriggerResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: TriggerResource;
    /**
     * The parsed HTTP response headers.
     */
    [LROSYM]: LROResponseInfo;
  };
};

/**
 * Optional parameters.
 */
export interface TriggerGetTriggerOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the trigger entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
   */
  ifNoneMatch?: string;
}

/**
 * Contains response data for the getTrigger operation.
 */
export type TriggerGetTriggerResponse = TriggerResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: TriggerResource;
  };
};

/**
 * Contains response data for the subscribeTriggerToEvents operation.
 */
export type TriggerSubscribeTriggerToEventsResponse = TriggerSubscriptionOperationStatus & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: TriggerSubscriptionOperationStatus;
    /**
     * The parsed HTTP response headers.
     */
    [LROSYM]: LROResponseInfo;
  };
};

/**
 * Contains response data for the getEventSubscriptionStatus operation.
 */
export type TriggerGetEventSubscriptionStatusResponse = TriggerSubscriptionOperationStatus & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: TriggerSubscriptionOperationStatus;
  };
};

/**
 * Contains response data for the unsubscribeTriggerFromEvents operation.
 */
export type TriggerUnsubscribeTriggerFromEventsResponse = TriggerSubscriptionOperationStatus & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: TriggerSubscriptionOperationStatus;
    /**
     * The parsed HTTP response headers.
     */
    [LROSYM]: LROResponseInfo;
  };
};

/**
 * Contains response data for the getTriggersByWorkspaceNext operation.
 */
export type TriggerGetTriggersByWorkspaceNextResponse = TriggerListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: TriggerListResponse;
  };
};

/**
 * Contains response data for the queryTriggerRunsByWorkspace operation.
 */
export type TriggerRunQueryTriggerRunsByWorkspaceResponse = TriggerRunsQueryResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: TriggerRunsQueryResponse;
  };
};

/**
 * Optional parameters.
 */
export interface DataFlowCreateOrUpdateDataFlowOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the data flow entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
   */
  ifMatch?: string;
}

/**
 * Contains response data for the createOrUpdateDataFlow operation.
 */
export type DataFlowCreateOrUpdateDataFlowResponse = DataFlowResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DataFlowResource;
    /**
     * The parsed HTTP response headers.
     */
    [LROSYM]: LROResponseInfo;
  };
};

/**
 * Optional parameters.
 */
export interface DataFlowGetDataFlowOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the data flow entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
   */
  ifNoneMatch?: string;
}

/**
 * Contains response data for the getDataFlow operation.
 */
export type DataFlowGetDataFlowResponse = DataFlowResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DataFlowResource;
  };
};

/**
 * Contains response data for the getDataFlowsByWorkspace operation.
 */
export type DataFlowGetDataFlowsByWorkspaceResponse = DataFlowListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DataFlowListResponse;
  };
};

/**
 * Contains response data for the getDataFlowsByWorkspaceNext operation.
 */
export type DataFlowGetDataFlowsByWorkspaceNextResponse = DataFlowListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DataFlowListResponse;
  };
};

/**
 * Contains response data for the createDataFlowDebugSession operation.
 */
export type DataFlowDebugSessionCreateDataFlowDebugSessionResponse = CreateDataFlowDebugSessionResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CreateDataFlowDebugSessionResponse;
    /**
     * The parsed HTTP response headers.
     */
    [LROSYM]: LROResponseInfo;
  };
};

/**
 * Contains response data for the queryDataFlowDebugSessionsByWorkspace operation.
 */
export type DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceResponse = QueryDataFlowDebugSessionsResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: QueryDataFlowDebugSessionsResponse;
  };
};

/**
 * Contains response data for the addDataFlow operation.
 */
export type DataFlowDebugSessionAddDataFlowResponse = AddDataFlowToDebugSessionResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: AddDataFlowToDebugSessionResponse;
  };
};

/**
 * Contains response data for the executeCommand operation.
 */
export type DataFlowDebugSessionExecuteCommandResponse = DataFlowDebugCommandResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DataFlowDebugCommandResponse;
    /**
     * The parsed HTTP response headers.
     */
    [LROSYM]: LROResponseInfo;
  };
};

/**
 * Contains response data for the queryDataFlowDebugSessionsByWorkspaceNext operation.
 */
export type DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceNextResponse = QueryDataFlowDebugSessionsResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: QueryDataFlowDebugSessionsResponse;
  };
};

/**
 * Contains response data for the getSqlScriptsByWorkspace operation.
 */
export type SqlScriptGetSqlScriptsByWorkspaceResponse = SqlScriptsListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SqlScriptsListResponse;
  };
};

/**
 * Optional parameters.
 */
export interface SqlScriptCreateOrUpdateSqlScriptOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the SQL script entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
   */
  ifMatch?: string;
}

/**
 * Contains response data for the createOrUpdateSqlScript operation.
 */
export type SqlScriptCreateOrUpdateSqlScriptResponse = SqlScriptResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SqlScriptResource;
  };
};

/**
 * Optional parameters.
 */
export interface SqlScriptGetSqlScriptOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the sql compute entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
   */
  ifNoneMatch?: string;
}

/**
 * Contains response data for the getSqlScript operation.
 */
export type SqlScriptGetSqlScriptResponse = SqlScriptResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SqlScriptResource;
  };
};

/**
 * Contains response data for the getSqlScriptsByWorkspaceNext operation.
 */
export type SqlScriptGetSqlScriptsByWorkspaceNextResponse = SqlScriptsListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SqlScriptsListResponse;
  };
};

/**
 * Contains response data for the getSparkJobDefinitionsByWorkspace operation.
 */
export type SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceResponse = SparkJobDefinitionsListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SparkJobDefinitionsListResponse;
  };
};

/**
 * Optional parameters.
 */
export interface SparkJobDefinitionCreateOrUpdateSparkJobDefinitionOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the Spark Job Definition entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
   */
  ifMatch?: string;
}

/**
 * Contains response data for the createOrUpdateSparkJobDefinition operation.
 */
export type SparkJobDefinitionCreateOrUpdateSparkJobDefinitionResponse = SparkJobDefinitionResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SparkJobDefinitionResource;
  };
};

/**
 * Optional parameters.
 */
export interface SparkJobDefinitionGetSparkJobDefinitionOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the Spark Job Definition entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
   */
  ifNoneMatch?: string;
}

/**
 * Contains response data for the getSparkJobDefinition operation.
 */
export type SparkJobDefinitionGetSparkJobDefinitionResponse = SparkJobDefinitionResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SparkJobDefinitionResource;
  };
};

/**
 * Contains response data for the executeSparkJobDefinition operation.
 */
export type SparkJobDefinitionExecuteSparkJobDefinitionResponse = SparkBatchJob & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SparkBatchJob;
    /**
     * The parsed HTTP response headers.
     */
    [LROSYM]: LROResponseInfo;
  };
};

/**
 * Contains response data for the debugSparkJobDefinition operation.
 */
export type SparkJobDefinitionDebugSparkJobDefinitionResponse = SparkBatchJob & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SparkBatchJob;
    /**
     * The parsed HTTP response headers.
     */
    [LROSYM]: LROResponseInfo;
  };
};

/**
 * Contains response data for the getSparkJobDefinitionsByWorkspaceNext operation.
 */
export type SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceNextResponse = SparkJobDefinitionsListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SparkJobDefinitionsListResponse;
  };
};

/**
 * Contains response data for the getNotebooksByWorkspace operation.
 */
export type NotebookGetNotebooksByWorkspaceResponse = NotebookListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: NotebookListResponse;
  };
};

/**
 * Contains response data for the getNotebookSummaryByWorkSpace operation.
 */
export type NotebookGetNotebookSummaryByWorkSpaceResponse = NotebookListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: NotebookListResponse;
  };
};

/**
 * Optional parameters.
 */
export interface NotebookCreateOrUpdateNotebookOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the Note book entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
   */
  ifMatch?: string;
}

/**
 * Contains response data for the createOrUpdateNotebook operation.
 */
export type NotebookCreateOrUpdateNotebookResponse = NotebookResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: NotebookResource;
    /**
     * The parsed HTTP response headers.
     */
    [LROSYM]: LROResponseInfo;
  };
};

/**
 * Optional parameters.
 */
export interface NotebookGetNotebookOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * ETag of the Notebook entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
   */
  ifNoneMatch?: string;
}

/**
 * Contains response data for the getNotebook operation.
 */
export type NotebookGetNotebookResponse = NotebookResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: NotebookResource;
  };
};

/**
 * Contains response data for the getNotebooksByWorkspaceNext operation.
 */
export type NotebookGetNotebooksByWorkspaceNextResponse = NotebookListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: NotebookListResponse;
  };
};

/**
 * Contains response data for the getNotebookSummaryByWorkSpaceNext operation.
 */
export type NotebookGetNotebookSummaryByWorkSpaceNextResponse = NotebookListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: NotebookListResponse;
  };
};

/**
 * Contains response data for the get operation.
 */
export type WorkspaceGetResponse = Workspace & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Workspace;
  };
};

/**
 * Contains response data for the list operation.
 */
export type SqlPoolsListResponse = SqlPoolInfoListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SqlPoolInfoListResult;
  };
};

/**
 * Contains response data for the get operation.
 */
export type SqlPoolsGetResponse = SqlPool & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SqlPool;
  };
};

/**
 * Contains response data for the list operation.
 */
export type BigDataPoolsListResponse = BigDataPoolResourceInfoListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: BigDataPoolResourceInfoListResult;
  };
};

/**
 * Contains response data for the get operation.
 */
export type BigDataPoolsGetResponse = BigDataPoolResourceInfo & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: BigDataPoolResourceInfo;
  };
};

/**
 * Contains response data for the list operation.
 */
export type IntegrationRuntimesListResponse = IntegrationRuntimeListResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: IntegrationRuntimeListResponse;
  };
};

/**
 * Contains response data for the get operation.
 */
export type IntegrationRuntimesGetResponse = IntegrationRuntimeResource & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: IntegrationRuntimeResource;
  };
};

/**
 * Optional parameters.
 */
export interface SynapseArtifactsOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * Api Version
   */
  apiVersion?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
