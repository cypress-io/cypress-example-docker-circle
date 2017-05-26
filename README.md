# cypress-example-docker-circle

> Cypress + Docker + CircleCI = ❤️

[![CircleCI](https://circleci.com/gh/cypress-io/cypress-example-docker-circle.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-docker-circle)

Running your Cypress E2E tests on Circle CI v2.0 is very simple.
See [circle.yml](circle.yml) for the current build commands.
In general, you can either start with a base image
[cypress/base](https://hub.docker.com/r/cypress/base/)
or with an image that already includes Cypress tool
[cypress/internal](https://hub.docker.com/r/cypress/internal/).

Then check out the code and call `cypress run` command. That is it!
See test runs for this example at
[circleci.com](https://circleci.com/gh/cypress-io/cypress-example-docker-circle)

![CircleCI test run](images/circle.png)

## Artifacts

You can save generated videos and screenshots as CircleCI artifacts

```yaml
steps:
  - checkout
  - run:
      name: Running E2E tests
      command: cypress run
  - store_artifacts:
      path: cypress/videos
  - store_artifacts:
      path: cypress/screenshots
```

## Test summary

CircleCI can [store test results](https://circleci.com/docs/2.0/configuration-reference/#store_test_results)
from a large number of [test reporters](https://circleci.com/docs/1.0/test-metadata/#metadata-collection-in-custom-test-steps).
Cypress can [output test results](https://on.cypress.io/reporters)
with custom reporters, including using built-in `junit` format.
Just add the following options to the CI command to generate and store test
results.

```yaml
- run:
    name: Running E2E tests
    command: cypress run --reporter junit --reporter-options "mochaFile=results/my-test-output.xml"
- store_test_results:
    path: results
```

The generated file will be placed in folder `results` and the folder will be
uploaded to CircleCI storage. This summary will be really helpful when a test
fails. For example, I have introduced a different label into the test, the
word `testing` never appears on the page, yet the test is looking for it.

```js
// a-spec.js
it('has h2', () => {
  cy.contains('h2', 'testing')
})
```

See the failed CI test run at
[https://circleci.com/gh/cypress-io/cypress-example-docker-circle/10](https://circleci.com/gh/cypress-io/cypress-example-docker-circle/10).

The CircleCI test summary shows failed test and user-friendly message.

![Failed test message](images/failed-test-summary.png)

Switching to the artifacts tab, we can find the screenshot PNG image taken
at the failure moment.

![Failed test artifact](images/failed-test-screenshot-artifact.png)

Finally, we can open either the video, or the screenshot artifact

![Failed to find "testing" H2 element](images/failed-screenshot.png)

The failure is now easy to see and fix.

## Happy testing

If you find problems with Cypress and CI, please

- consult the [documentation](https://on.cypress.io)
- ask in our [Gitter channel](https://gitter.im/cypress-io/cypress)
- find an existing [issue](https://github.com/cypress-io/cypress/issues)
  or open a new one
