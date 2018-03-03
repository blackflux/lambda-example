const get = require("lodash.get");
const api = require('lambda-serverless-api')({});


module.exports.sum = api.wrap(process.env.RATE_LIMIT, (event) => {
  const input = JSON.parse(get(event, "queryStringParameters.input", "{}"));
  if (!(input instanceof Array) || input.some(Number.isNaN)) {
    throw new api.ApiError("Please provide input query parameter list of numbers!");
  }
  return new api.JsonResponse({ result: input.reduce((a, b) => a + b, 0) });
});
