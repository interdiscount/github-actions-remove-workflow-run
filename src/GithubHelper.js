"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubHelper = void 0;
const OctoClient_1 = require("./OctoClient");
const utils_1 = require("./utils");
class GitHubHelper {
    constructor() {
        this.getCurrentWorkflowRuns = (workflowFileName) => this.octokit.actions.listWorkflowRuns(Object.assign(Object.assign({}, utils_1.getRepositoryInformation()), { 
            // @ts-ignore
            workflow_id: workflowFileName, per_page: 100 }));
        this.deleteWorkflowRunById = (runId) => this.octokit.actions.deleteWorkflowRun(Object.assign(Object.assign({}, utils_1.getRepositoryInformation()), { run_id: runId }));
        this.octokit = new OctoClient_1.Octokit({ auth: utils_1.getGithubToken() });
    }
}
exports.GitHubHelper = GitHubHelper;
//# sourceMappingURL=GithubHelper.js.map