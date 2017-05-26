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

## Happy testing

If you find problems with Cypress and CI, please

- consult the [documentation](https://on.cypress.io)
- ask in our [Gitter channel](https://gitter.im/cypress-io/cypress)
- find an existing [issue](https://github.com/cypress-io/cypress/issues)
  or open a new one
