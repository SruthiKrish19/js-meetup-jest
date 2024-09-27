# js-meetup-jest
This repository contains the content for a tech talk focused on writing test cases using Jest in JavaScript projects. It includes step-by-step instructions, sample code, and best practices for testing various types of functions.

## Contents 
In this example I have covered the basics of writing test cases with jest.
1. Writing test cases for functions test() and grouping using describe().
2. Writing Postive and Negative testcases example.
3. Mocking function calls and validating invocation.
4. Snapshot testing example.
5. Generating Code Coverage reports.

## How to execute the Test Cases
Follow the steps below to clone the repository, install the required dependencies, and run the test cases.
#### Step 1: Clone the Repository
To start, clone the repository to your local machine using the following command:
```bash
git clone https://github.com/SruthiKrish19/js-meetup-jest.git
```
#### Step 2: Change to the Project Directory
Navigate to the project folder using the below command
```bash
cd jest
```
#### Install Dependencies
Install the project dependencies using npm:
```bash
npm install
```
This command will install all necessary packages listed in the package.json file, including Jest for running the tests.
#### Step 4: Run the Tests
Once the dependencies are installed, you can run the test cases with the following command:
```bash
npm test
```
This will execute all the test cases in the project. Jest will automatically detect and run any test files (typically files with the .test.js or .spec.js extension) and provide a report of the results.

### Additional Commands
#### Verbose Mode
To see more detailed information about each test, use the --verbose flag:
```bash
npm test -- --verbose
```
#### Watch Mode
To re-run the tests automatically whenever you make changes, use Jest's watch mode:
```bash
npm test -- --watch
```
#### Run a Specific Test File
You can also run a specific test file by providing the file path:
```bash
npm test -- <file-path>
```

## Refrence URL's
1. https://jestjs.io/
2. https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/
3. https://dev.to/dvddpl/jest-testing-like-a-pro-tips-and-tricks-4o6f
4. https://dev.to/itminds/writing-good-tests-part-1-what-makes-a-test-bad-4gfd
