declare type RepositoryInformation = {
    owner: string;
    repo: string;
};
export declare const getRepositoryInformation: () => RepositoryInformation;
export declare const getGithubToken: () => string;
export declare const filterWorkflowRunsByDate: (workflowRuns: WorkflowRun[], date: Date) => WorkflowRun[];
export {};
