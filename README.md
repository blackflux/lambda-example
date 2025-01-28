# AWS Lambda Example Project

[![Build Status](https://circleci.com/gh/blackflux/lambda-example.png?style=shield)](https://circleci.com/gh/blackflux/lambda-example)
[![Test Coverage](https://img.shields.io/coveralls/blackflux/lambda-example/master.svg)](https://coveralls.io/github/blackflux/lambda-example?branch=master)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=blackflux/lambda-example)](https://dependabot.com)
[![Dependencies](https://david-dm.org/blackflux/lambda-example/status.svg)](https://david-dm.org/blackflux/lambda-example)
[![NPM](https://img.shields.io/npm/v/lambda-example.svg)](https://www.npmjs.com/package/lambda-example)
[![Downloads](https://img.shields.io/npm/dt/lambda-example.svg)](https://www.npmjs.com/package/lambda-example)
[![Semantic-Release](https://github.com/blackflux/js-gardener/blob/master/assets/icons/semver.svg)](https://github.com/semantic-release/semantic-release)
[![Gardener](https://github.com/blackflux/js-gardener/blob/master/assets/badge.svg)](https://github.com/blackflux/js-gardener)

## Pure Lambda: Lambda + Tests + Serverless

This is an example for AWS Lambda Development showcasing how to use:
- [js-gardener](https://github.com/blackflux/js-gardener)
- [lambda-tdd](https://github.com/blackflux/lambda-tdd)
- [lambda-rollbar](https://github.com/blackflux/lambda-rollbar)

A list of all the example handlers with description can be found [here](lib/lambda.js). Each handler has [tests files](test/lambda) associated.

*Note*: Independent of the [Lambda trigger type](https://aws.amazon.com/lambda/#Data_processing).

## HTTPS Endpoint: Lambda + Tests + Serverless + Api Gateway

This is an example for AWS Lambda Development showcasing how to use:
- [js-gardener](https://github.com/blackflux/js-gardener)
- [lambda-tdd](https://github.com/blackflux/lambda-tdd)
- [lambda-serverless-api](https://github.com/blackflux/lambda-rollbar)

A list of all the example handlers with description can be found [here](lib/https.js). Each handler has [tests files](test/https) associated.

*Note*: Lambda functions defined this way are expected to be used with API Gateway.

## Getting Started

Install serverless with
```
$ npm install -g serverless
```

Then verify tests with
```
$ npm test
```

## Deploy Project to AWS

To deploy run
```
$ sls deploy
```

## Things to try after deploy

### Simple Functions

Test a geoip function

    $ sls invoke -f geoip

Test div function

    $ sls invoke -f div -d '{ "a": 32, "b": 5 }'

Mode detail on the `invoke` option can be found [here](https://serverless.com/framework/docs/providers/aws/cli-reference/invoke/).

You can also log into AWS and trigger the function with an event that you manually create.

### Https Endpoint

The deploy message will give you a public url to use of the form `https://##########.execute-api.us-east-1.amazonaws.com/example/sum`. Experiment with different input, e.g.

    $ URL
    $ URL?input=[1,4,2,45,6]
    $ URL?input=[1,4,2,45,]

#### Swagger Documentation

Swagger documentation is automatically synchronized using the API definition, but also manually enriched. For an example on how this is accomplished see [test_https.js](test/test_https.js). The generated swagger file can be found [here](swagger.json).

The file also contains a test example that ensures that the swagger documentation is synchronized with the `serverless.yml` file.

#### Rate Limit

If you hit the endpoint many times quickly you will trigger the rate limit.

#### Rollbar Monitoring

Set up your rollbar account and fill the details into the [example.yml](config/example.yml). Then deploy again
and check that information is logged to rollbar as you hit warning / error conditions!

## Remove Project from AWS

Run
```
$ sls remove
```

# Other Considerations

## Monitoring

Consider using [lambda-monitor](https://github.com/blackflux/lambda-monitor) for monitoring your lambda function.
