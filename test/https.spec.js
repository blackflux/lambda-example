import path from 'path';
import fs from 'smart-fs';
import { expect } from 'chai';
import LambdaTdd from 'lambda-tdd';
import { internalApi as api } from '../src/https.js';

const lambdaTester = LambdaTdd({
  cwd: path.join(fs.dirname(import.meta.url), '..'),
  verbose: process.argv.slice(2).indexOf('--debug') !== -1,
  testHeal: process.argv.slice(2).indexOf('--test-heal') !== -1,
  handlerFile: path.join(fs.dirname(import.meta.url), '..', 'src', 'https.js'),
  cassetteFolder: path.join(fs.dirname(import.meta.url), 'https', '__cassettes'),
  envVarYml: path.join(fs.dirname(import.meta.url), 'env_https.yml'),
  testFolder: path.join(fs.dirname(import.meta.url), 'https')
});

lambdaTester.execute((process.argv.slice(2).find((e) => e.startsWith('--filter=')) || '').substring(9));

describe('Testing handler.spec.js', () => {
  it('Synchronizing swagger file...', async () => {
    const swaggerFile = path.join(fs.dirname(import.meta.url), '..', 'swagger.yml');
    const swaggerContent = await api.generateSwagger();
    const result = fs.smartWrite(swaggerFile, swaggerContent);
    expect(result, 'Swagger file updated').to.equal(false);
  });
});
