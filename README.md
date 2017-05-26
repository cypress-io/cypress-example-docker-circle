# cypress-example-docker-circle

> Cypress + Docker + CircleCI = ❤️

[![CircleCI](https://circleci.com/gh/cypress-io/cypress-example-docker-circle.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-docker-circle)

Running your Cypress E2E tests on Circle CI is very simple.
See [circle.yml](circle.yml) for the current build commands.
In general, you can either start with a base image
[cypress/base](https://hub.docker.com/r/cypress/base/)
or with an image that already includes Cypress tool
[cypress/internal](https://hub.docker.com/r/cypress/internal/).

Then check out the code and call `cypress run` command. That is it!

## Happy testing

If you find problems with Cypress and CI, please

- consult the [documentation](https://on.cypress.io)
- ask in our [Gitter channel](https://gitter.im/cypress-io/cypress)
- find an existing [issue](https://github.com/cypress-io/cypress/issues)
  or open a new one
