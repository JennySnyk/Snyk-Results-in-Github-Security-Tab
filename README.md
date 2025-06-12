# Snyk and GitHub Security Tab Integration Demo

This repository demonstrates how to integrate Snyk security scanning into a GitHub Actions workflow and display the results in GitHub's Security tab.

## How it works

The integration is achieved using a GitHub Actions workflow defined in `.github/workflows/snyk.yml`. The workflow runs on every push and pull request to the `main` branch and performs the following steps:

1.  **Environment Setup**: It checks out the repository, sets up Node.js, and installs project dependencies and the Snyk CLI.
2.  **Authentication**: It authenticates the Snyk CLI using a `SNYK_TOKEN` stored as a GitHub secret.
3.  **Snyk Scans**: It runs Snyk Code (SAST) and Snyk Open Source (SCA) scans to find vulnerabilities.
4.  **Upload Results**: It uploads the scan results (in SARIF format) to the GitHub Security tab.

## Setup

To use this workflow in your own repository, follow these steps:

1.  **Enable GitHub Advanced Security:**
    *   Go to your repository's `Settings` > `Security`> `Advanced Security`.
    *   Under `Code scanning` > `Tools`> `Other Tools` > `Explore Workflow`, click on set up a workflow yourself at the top
    *   Copy the `.github/workflows/snyk.yml` file from this repository

2.  **Get your Snyk API token**:
    *   1. Access Your Snyk Organization: Log in to your Snyk account and navigate to your organization's settings. 
    *   2. Navigate to Service Accounts: Within the organization settings, find and select the "Service Accounts" option. 
    *   3. Create a New Service Account: Click on the "Create service account" button or similar option to begin the process. 
    *   4. Name and Role: Assign a name to the service account and choose the appropriate role from the dropdown. 
    *   5. Generate Credentials: Select the OAuth 2.0 client credentials option and click "Create service account". 
    *   6. Save Credentials: A window will display your Client ID and Client Secret. Important: Copy these credentials immediately as they will not be retrievable later. 

3.  **Add the token as a GitHub secret**:
    *   In your GitHub repository, go to `Settings` > `Secrets and variables` > `Actions`.
    *   Click `New repository secret`.
    *   Name the secret `SNYK_TOKEN` and paste your Snyk API token as the value.

4.  **Add the workflow file**:
    *   Create a PR adding OS and Code vulnerability 
    *   Commit the file and push the changes. The workflow will run automatically and display vulnerabilities in the PR and in the code security tab

![Results in the Code Security Tab](https://github.com/JennySnyk/Snyk-Results-in-Github-Security-Tab/blob/main/Images/github.com_JennySnyk_Snyk-Results-in-Github-Security-Tab_security.png)

[Example of Results in the Pull Request](https://github.com/JennySnyk/Snyk-Results-in-Github-Security-Tab/blob/main/Images/github.com_JennySnyk_Snyk-Results-in-Github-Security-Tab_pull_2.png)

## GitHub Security Tab Availability

Please note that for private repositories, the GitHub Security tab is only available on paid GitHub plans (Team or Enterprise). For public repositories, it is available for free.

*   **Snyk Code:** Scans your code for vulnerabilities and uploads the `snyk-code.sarif` file.
*   **Snyk Open Source:** Scans your dependencies for vulnerabilities and uploads the `snyk-oss.sarif` file.
