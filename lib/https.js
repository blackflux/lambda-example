const api = require('lambda-serverless-api')({});


module.exports.sum = api.wrap("GET sum", [
  api.Str("input")
], process.env.RATE_LIMIT, ([inputString]) => {
  const input = JSON.parse(inputString);
  if (!(input instanceof Array) || input.some(Number.isNaN)) {
    throw api.ApiError("Please provide input query parameter list of numbers!");
  }
  return api.JsonResponse({ result: input.reduce((a, b) => a + b, 0) });
});
