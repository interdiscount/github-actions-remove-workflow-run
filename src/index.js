"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core = tslib_1.__importStar(require("@actions/core"));
const GithubHelper_1 = require("./GithubHelper");
const utils_1 = require("./utils");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const olderThanDays = core.getInput('older-than-days');
const workflowFileName = core.getInput('workflow-file-name');
const githubHelper = new GithubHelper_1.GitHubHelper();
githubHelper
    .getCurrentWorkflowRuns(workflowFileName)
    .then(res => {
    if (res.data.total_count > 1) {
        const workflowRunsToDelete = utils_1.filterWorkflowRunsByDate(res.data.workflow_runs, dayjs_1.default().subtract(Number(olderThanDays), 'day').toDate());
        console.log("WORKFLOW RUNS TO DELETE", workflowRunsToDelete.length);
        workflowRunsToDelete.forEach(workflowRun => {
            githubHelper.deleteWorkflowRunById(workflowRun.id)
                .then(() => console.log(`Deleted Workflow run with ID ${workflowRun.id}.`));
        });
    }
})
    .catch(e => core.setFailed(e.message));
//# sourceMappingURL=index.js.map