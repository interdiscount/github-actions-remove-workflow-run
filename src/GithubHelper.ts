import { Octokit } from './OctoClient';
import { getGithubToken, getRepositoryInformation } from './utils';
import { Endpoints } from '@octokit/types';

type completedWorkflows = Endpoints['GET /repos/:owner/:repo/actions/workflows/:workflow_id/runs']['response'];
type deleteWorkflowRun = Endpoints['DELETE /repos/:owner/:repo/actions/runs/:run_id']['response'];

export class GitHubHelper {
  private octokit: InstanceType<typeof Octokit>;

  constructor() {
    this.octokit = new Octokit({ auth: getGithubToken() });
  }

  getCurrentWorkflowRuns = (workflowFileName: string): Promise<completedWorkflows> =>
      this.octokit.actions.listWorkflowRuns({
        ...getRepositoryInformation(),
        // @ts-ignore
        workflow_id: workflowFileName,
        status: "completed"
      });

  deleteWorkflowRunById = (runId: number): Promise<deleteWorkflowRun> =>
    this.octokit.actions.deleteWorkflowRun({
        ...getRepositoryInformation(),
        run_id: runId
    });
}
