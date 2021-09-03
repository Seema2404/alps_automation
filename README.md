# CYPRESS BASED QUICK SANITY CHECK FOR ALPS


## Installation

1. Install node.js:
https://nodejs.org/en/

2. Install dependencies:
Run the following command on terminal, in the root directory of the project-

```bash
npm install
```

3. Add the following values to `cypress.env.json`:
- username : ALPS login username for the ALPS Prod
- password : ALPS login username for the ALPS Prod


## How to run tests

1. Run the following command on terminal, in the root directory of the project-
```bash
npm run test
```

2. It will start the tests execution.

3. Once the test execution is completed, view the report at `\cypress\reports\mochareports\report.html`

