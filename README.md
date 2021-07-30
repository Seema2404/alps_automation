# CYPRESS BASED ALPS AUTOMATION

Test automation project for UI end-to-end testing of ALPS. It uses [Cypress.io](https://cypress.io) library (that has Mocha test runner and Chai assertions built in)


## Installation

1. Install node.js:
https://nodejs.org/en/

2. Install dependencies:
Run the following command on terminal, in the root directory of the project-

```bash
npm install
```

3. Add valid username and valid password for your ALPS QA account in the following file:
    `cypress/fixtures/userData.json`


## How to run tests

1. Run the following command on terminal, in the root directory of the project-
```bash
npx cypress open
```

2. It will open the cypress dashboard. (wait for few minutes)

3. Either select the individual spec file to run the tests for that module. Or click on "Run <x> integration specs" option to run all module tests.


## Guidelines
- ESLint plugin should be installed and activated on VS Code to follow best coding practices. 

- Please make sure to use the existing `.eslintrc.js` configuration file for ESLint plugin. 

- All test cases should be structured module wise and should be placed under the folder `/cypress/integration`. Example - `/cypress/integration/login.spec.js` 

- All element locators (CSS Selectors preferred) should be structured module wise and should be placed under the folder `/cypress/pages/page-selectors`. Example - `/cypress/pages/page-selectors/LoginPage.js` 

- All commands or actions should be defined module wise and should be placed under the folder `/cypress/pages/commands`. Example - `/cypress/pages/commands/login.js` 

- All test data should be added to the file `userData.json` placed under the folder `/cypress/fixtures`. 

- When creating new test file (spec.js), please make sure to add it to `cypress.json` under the `testFiles` section. 

- Any changes in basic authentication or the base URL of the application should be accommodated in `cypress.json`. 
    

## GitHub Practices
- If you are working on the test cases from any of the active feature from the sprint, please make sure that you fork out a new branch from `cypress_dev` branch with the name of your active feature (e.g. page_simulation). From this feature branch please fork out a new branch with the JIRA ID of the task for which you are developing the test cases.

- If you are working on the test cases from the backlog, please make sure to fork out your feature branch from `cypress_dev` branch before start working on your test cases.

- Once you are ready to commit your changes, please add the Test Case ID (from Zephyr) to the commit message.

- Any new commit/push should go through the PR review process and should be merged to `cypress-dev` branch once PR is approved.


## Contributing
Pull requests are welcome. Always test your changes locally before making a PR
