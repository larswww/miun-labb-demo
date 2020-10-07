## Getting started

1. Clone this repo and change into its directory `git clone https://github.com/larswww/miun-js-labb-1 && cd miun-js-labb-1`
2. Install dependencies `npm install`


## Running tests
This repo comes with a test-suite, and has jest as a dependency (you installed jest when you typed npm install). Jest is a [testing framework by facebook](https://jestjs.io/). 


1. To run the test suite `npm run test`

Tip! By installing jest as a global npm package, you can run the entire testsuite continously and watch for changes to your code; `npm install jest --global`. Now by running `jest --watchAll` the suite will be re-run each time you modify your code.

To re-run an individual test continously use `jest -t nameMatchingDescribe`. where 'nameMatchingDescribe' somewhat matches to beginning of the description in the test's describe()-block.
