# CYPRESS BASED QUICK SANITY CHECK FOR ALPS


## Installation

1. Install node.js:
https://nodejs.org/en/

2. Install dependencies:
Run the following command on terminal, in the root directory of the project-

```bash
npm install
```

3. Make a copy of file `test.cypress.env.json` and rename it to `cypress.env.json`.

4. Add the following values to `cypress.env.json`:
- baseUrl : Base URL of the environment where you want to run the tests, for example- http://alpsqa.smallbizvoices.com/
- basicAuthLogin : Basic authentication username
- basicAuthPassword : Basic authentication password
- username : ALPS login username for the environment set above in baseUrl
- password : ALPS login PASSWORD for the environment set above in baseUrl
- tenant : ALPS TENANT that you want to work with.


## How to run tests

1. Run the following command on terminal, in the root directory of the project-
```bash
npm run test
```

2. It will start the tests execution.

3. Once the test execution is completed, view the report at `\cypress\reports\mochareports\report.html`

