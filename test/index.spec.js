import path from 'path';
import fs from 'smart-fs';
import LambdaTdd from 'lambda-tdd';

const lambdaTester = LambdaTdd({
  cwd: path.join(fs.dirname(import.meta.url), '..'),
  verbose: process.argv.slice(2).indexOf('--verbose') !== -1,
  handlerFile: path.join(fs.dirname(import.meta.url), '..', 'src', 'index.js'),
  cassetteFolder: path.join(fs.dirname(import.meta.url), 'lambda', '__cassettes'),
  envVarYml: path.join(fs.dirname(import.meta.url), 'env_lambda.yml'),
  testFolder: path.join(fs.dirname(import.meta.url), 'lambda')
});

lambdaTester.execute((process.argv.slice(2).find((e) => e.startsWith('--filter=')) || '').substring(9));
