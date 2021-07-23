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
cypress/fixtures/userData.json


## How to run tests

1. Run the following command on terminal, in the root directory of the project-
```bash
npx cypress open
```

2. It will open the cypress dashboard. (wait for few minutes)

3. Either select the individual spec file to run the tests for that module. Or click on "Run <x> integration specs" option to run all module tests.


## Contributing
Pull requests are welcome. Always test your changes locally before making a PR