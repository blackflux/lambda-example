const fs = require('smart-fs');
const path = require('path');
const expect = require('chai').expect;
const lambdaTester = require('lambda-tdd')({
  cwd: path.join(__dirname, '..'),
  verbose: process.argv.slice(2).indexOf('--debug') !== -1,
  handlerFile: path.join(__dirname, '..', 'src', 'https.js'),
  cassetteFolder: path.join(__dirname, 'https', '__cassettes'),
  envVarYml: path.join(__dirname, 'env_https.yml'),
  testFolder: path.join(__dirname, 'https')
});
const api = require('./../src/https').internalApi;

lambdaTester.execute((process.argv.slice(2).find((e) => e.startsWith('--filter=')) || '').substring(9));


it('Synchronizing swagger file...', async () => {
  const swaggerFile = path.join(__dirname, '..', 'swagger.yml');
  const swaggerContent = await api.generateSwagger();
  const result = fs.smartWrite(swaggerFile, swaggerContent);
  expect(result, 'Swagger file updated').to.equal(false);
});
