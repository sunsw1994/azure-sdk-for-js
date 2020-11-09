import * as coreHttp from "@azure/core-http";
import {
  LinkedService,
  Dataset,
  Pipeline,
  PipelineRun,
  Trigger,
  TriggerRun,
  DataFlow,
  DataFlowDebugSession,
  SqlScript,
  SparkJobDefinition,
  Notebook,
  Workspace,
  SqlPools,
  BigDataPools,
  IntegrationRuntimes
} from "./generated/operations";
import { SynapseArtifactsContext } from "./synapseArtifactsContext";
import { SynapseArtifactsOptionalParams } from "./models";

export class SynapseArtifacts extends SynapseArtifactsContext {
  /**
   * Initializes a new instance of the SynapseArtifacts class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param endpoint The workspace development endpoint, for example
   *                 https://myworkspace.dev.azuresynapse.net.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    endpoint: string,
    options?: SynapseArtifactsOptionalParams
  ) {
    super(credentials, endpoint, options);
    this.linkedService = new LinkedService(this);
    this.dataset = new Dataset(this);
    this.pipeline = new Pipeline(this);
    this.pipelineRun = new PipelineRun(this);
    this.trigger = new Trigger(this);
    this.triggerRun = new TriggerRun(this);
    this.dataFlow = new DataFlow(this);
    this.dataFlowDebugSession = new DataFlowDebugSession(this);
    this.sqlScript = new SqlScript(this);
    this.sparkJobDefinition = new SparkJobDefinition(this);
    this.notebook = new Notebook(this);
    this.workspace = new Workspace(this);
    this.sqlPools = new SqlPools(this);
    this.bigDataPools = new BigDataPools(this);
    this.integrationRuntimes = new IntegrationRuntimes(this);
  }

  linkedService: LinkedService;
  dataset: Dataset;
  pipeline: Pipeline;
  pipelineRun: PipelineRun;
  trigger: Trigger;
  triggerRun: TriggerRun;
  dataFlow: DataFlow;
  dataFlowDebugSession: DataFlowDebugSession;
  sqlScript: SqlScript;
  sparkJobDefinition: SparkJobDefinition;
  notebook: Notebook;
  workspace: Workspace;
  sqlPools: SqlPools;
  bigDataPools: BigDataPools;
  integrationRuntimes: IntegrationRuntimes;
}
