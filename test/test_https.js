const path = require("path");
const lambdaTester = require("lambda-tdd")({
  cwd: path.join(__dirname, ".."),
  verbose: process.argv.slice(2).indexOf("--debug") !== -1,
  handlerFile: path.join(__dirname, "..", "lib", "https.js"),
  cassetteFolder: path.join(__dirname, "https", "__cassettes"),
  envVarYml: path.join(__dirname, "env_https.yml"),
  testFolder: path.join(__dirname, "https")
});

lambdaTester.execute((process.argv.slice(2).find(e => e.startsWith("--filter=")) || "").substring(9));
