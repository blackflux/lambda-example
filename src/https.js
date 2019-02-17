const api = require('lambda-serverless-api').Api({});


module.exports.sum = api.wrap('GET sum', [
  api.Str('input')
], process.env.RATE_LIMIT, ({ input }) => {
  const inputParsed = JSON.parse(input);
  if (!(inputParsed instanceof Array) || inputParsed.some(Number.isNaN)) {
    throw api.ApiError('Please provide input query parameter list of numbers!');
  }
  return api.JsonResponse({ result: inputParsed.reduce((a, b) => a + b, 0) });
});


module.exports.internalApi = api;
