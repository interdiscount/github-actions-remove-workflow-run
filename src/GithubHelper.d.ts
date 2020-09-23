import { Endpoints } from '@octokit/types';
declare type completedWorkflows = Endpoints['GET /repos/:owner/:repo/actions/workflows/:workflow_id/runs']['response'];
declare type deleteWorkflowRun = Endpoints['DELETE /repos/:owner/:repo/actions/runs/:run_id']['response'];
export declare class GitHubHelper {
    private octokit;
    constructor();
    getCurrentWorkflowRuns: (workflowFileName: string) => Promise<completedWorkflows>;
    deleteWorkflowRunById: (runId: number) => Promise<deleteWorkflowRun>;
}
export {};
