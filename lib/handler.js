const request = require("request");
const moment = require('moment-timezone');
const rollbar = require('lambda-rollbar')({
  verbose: process.env.ROLLBAR_VERBOSE === "1",
  enabled: process.env.ROLLBAR_ENABLED === "1",
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  environment: process.env.STAGE
});

// Compute a / b. The function will throw an error if parameter is missing. Returns null if b is 0.
module.exports.div = (event, context, cb) => {
  if (event.a === undefined || event.b === undefined) {
    return cb("Parameter a and b are required.");
  }
  return cb(null, event.a / event.b);
};

// Returns the geoip information for the executing function IP. Request is recorded and replayed.
module.exports.geoip = (event, context, cb) => {
  request.get("http://ip-api.com/json", { json: true }, (err, res, body) => cb(err, body));
};

// Returns the current time (UTC).
module.exports.now = (event, context, cb) => {
  cb(null, moment().tz('UTC').format());
};

// Returns null and logs an error to rollbar. When re-recording always be careful not to
// leak information in the recorded cassettes (e.g. the rollbar access token).
// In this case the token was changed after the recording and the cassette truncated to a minimum.
// To catch all errors and log them without having to wrap all your functions, consider using simlu/lambda-monitor
module.exports.logger = rollbar.wrap((event, context, cb, rb) => {
  rb.error(new Error("Some Log Message"));
  cb(null);
});

// Returns the environment variable "STAGE"
module.exports.stage = (event, context, cb) => {
  cb(null, process.env.STAGE);
};
