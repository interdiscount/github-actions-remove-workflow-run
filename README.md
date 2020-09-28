# Delete old Workflow runs
Delete old Workflow runs, to keep your Actions Tab clean.

## Inputs

### `github-token`

**Required** The Token to interact with the Github API.

### `workflow-file-name`

**Required** Name of the Workflow.

### `older-than-days`

**Required** Remove workflows older than X days.

## Example usage

```
uses: interdiscount/github-actions-remove-workflow-run@1.0.0
with:
  github-token: ${{ secrets.GITHUB_TOKEN }}
  workflow-file-name: 'cleanup-workflow-runs.yml'
  older-than-days: 7
```
