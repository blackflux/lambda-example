const request = require("request");
const moment = require('moment-timezone');
const rollbar = require('lambda-rollbar')({
  verbose: process.env.VERBOSE === "1",
  enabled: false
});

module.exports.div = (event, context, cb) => {
  if (event.a === undefined || event.b === undefined) {
    return cb("Parameter a and b are required.");
  }
  return cb(null, event.a / event.b);
};

module.exports.geoip = (event, context, cb) => {
  request.get("http://ip-api.com/json", { json: true }, (err, res, body) => cb(err, body));
};

module.exports.now = (event, context, cb) => {
  cb(null, moment().tz('UTC').format());
};

module.exports.logger = rollbar.wrap((event, context, cb, rb) => {
  rb.error(new Error("Some Log Message"));
  cb(null);
});

module.exports.stage = (event, context, cb) => {
  cb(null, process.env.STAGE_MESSAGE);
};
