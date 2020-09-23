import * as core from '@actions/core';
import { GitHubHelper } from './GithubHelper';
import {filterWorkflowRunsByDate} from "./utils";
import dayjs from "dayjs";

const olderThanDays: string = core.getInput('older-than-days');
const workFlowFileName: string = core.getInput('workflow-file-name');

const githubHelper = new GitHubHelper();

githubHelper
    .getCurrentWorkflowRuns(workFlowFileName)
        .then(res => {
            if(res.data.total_count > 1) {
                const workflowRunsToDelete = filterWorkflowRunsByDate(
                    res.data.workflow_runs,
                    dayjs().subtract(Number(olderThanDays), 'day').toDate()
                );

                workflowRunsToDelete.forEach(workflowRun => {
                    githubHelper.deleteWorkflowRunById(workflowRun.id)
                        .then(() => console.log(`Deleted Workflow run with ID ${workflowRun.id}.`))
                });
            }
        })
        .catch(e => core.setFailed(e.message));
