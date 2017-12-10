[![Build Status](https://img.shields.io/travis/simlu/lambda-example/master.svg)](https://travis-ci.org/simlu/lambda-example)
[![Test Coverage](https://img.shields.io/coveralls/simlu/lambda-example/master.svg)](https://coveralls.io/github/simlu/lambda-example?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/simlu/lambda-example.svg)](https://greenkeeper.io/)
[![Dependencies](https://david-dm.org/simlu/lambda-example/status.svg)](https://david-dm.org/simlu/lambda-example)
[![NPM](https://img.shields.io/npm/v/lambda-example.svg)](https://www.npmjs.com/package/lambda-example)
[![Downloads](https://img.shields.io/npm/dt/lambda-example.svg)](https://www.npmjs.com/package/lambda-example)
[![Semantic-Release](https://github.com/simlu/js-gardener/blob/master/assets/icons/semver.svg)](https://github.com/semantic-release/semantic-release)
[![Gardener](https://github.com/simlu/js-gardener/blob/master/assets/badge.svg)](https://github.com/simlu/js-gardener)
[![Gitter](https://github.com/simlu/js-gardener/blob/master/assets/icons/gitter.svg)](https://gitter.im/simlu/lambda-example)

# Example Project for Lambda + Tests + Serverless

This is a generic example project for AWS Lambda Development showcasing how to use:
- [js-gardener](https://github.com/simlu/js-gardener)
- [lambda-tdd](https://github.com/simlu/lambda-tdd)
- [lambda-rollbar](https://github.com/simlu/lambda-rollbar)

The project is independent of the [Lambda trigger type](https://aws.amazon.com/lambda/#Data_processing). 

**Important:** The specific use case of building an API using API Gateway and AWS Lambda will be integrated into this project in the future.

## Getting Started

Install serverless with 
```shell
$ npm install -g serverless
```

Then verify tests with 
```shell
$ npm test
```

## Deploy Project to AWS

To deploy run
```shell
$ sls deploy
```

## Execute a Lambda Function on AWS

Log into AWS and trigger the function with an event that you manually create.

## Remove Project from AWS

Run
```shell
$ sls remove
```

# Other Considerations

## Monitoring

Consider using [lambda-monitor](https://github.com/simlu/lambda-monitor) for monitoring your lambda function.
