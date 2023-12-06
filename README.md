# okeqa - Automated Tests with Cypress

This repository contains automated tests for Saucedemo Application using the Cypress testing framework.

## Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Setup

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Running Tests

1. Open Cypress Test Runner:

    ```bash
    npx cypress open
    ```

2. In the Cypress Test Runner, click on the test file you want to run, or run all tests.

## Running Tests in Headless Mode

If you prefer to run tests in headless mode (without the Cypress Test Runner GUI), use the following command:

```bash
npx cypress run


## Test Runner
1. This project uses Mocha as the test runner, which is integrated into Cypress by default.

## Test Reporting
## For test reporting, this project uses Mochawesome to generate HTML reports.

## To generate a report after running tests, use the following command:
## npx marge cypress/reports/mochawesome/*.json
