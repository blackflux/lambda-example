const fs = require("fs");
const path = require('path');
const expect = require('chai').expect;
const yaml = require('js-yaml');
const appRoot = require('app-root-path');
const api = require("./../lib/https").internalApi;
const lambdaTester = require("lambda-tdd")({
  cwd: path.join(__dirname, ".."),
  verbose: process.argv.slice(2).indexOf("--debug") !== -1,
  handlerFile: path.join(__dirname, "..", "lib", "https.js"),
  cassetteFolder: path.join(__dirname, "https", "__cassettes"),
  envVarYml: path.join(__dirname, "env_https.yml"),
  testFolder: path.join(__dirname, "https")
});

lambdaTester.execute((process.argv.slice(2).find(e => e.startsWith("--filter=")) || "").substring(9));


describe("Testing Swagger", () => {
  it("Updating Swagger File with API definitions.", (done) => {
    const file = path.join(appRoot.path, "swagger.yml");
    Promise.resolve(fs.readFileSync(file))
      .then(yaml.safeLoad)
      .then(api.generateSwagger)
      .then(yaml.dump)
      .then(swagger => fs.writeFileSync(file, swagger))
      .then(done);
  });

  it("Testing serverless.yml", () => {
    expect(api.generateDifference(
      path.join(appRoot.path, `swagger.yml`),
      path.join(appRoot.path, `serverless.yml`)
    )).to.deep.equal([]);
  });
});
