const request = require('request');
const moment = require('moment-timezone');
const { wrap } = require('lambda-async');
const { logger } = require('lambda-monitor-logger');

// Compute a / b. The function will throw an error if parameter is missing. Returns null if b is 0.
module.exports.div = (event, context, cb) => {
  if (event.a === undefined || event.b === undefined) {
    return cb('Parameter a and b are required.');
  }
  return cb(null, event.a / event.b);
};

// Returns the geoip information for the executing function IP. Request is recorded and replayed.
module.exports.geoip = (event, context, cb) => {
  request.get('http://ip-api.com/json', { json: true }, (err, res, body) => cb(err, body));
};

// Returns the current time (UTC).
module.exports.now = (event, context, cb) => {
  cb(null, moment().tz('UTC').format());
};

// To capture logs, use lambda-monitor
module.exports.logger = wrap(() => {
  logger.error('Some Log Message');
  return Promise.resolve();
});

// Returns the environment variable "STAGE"
module.exports.stage = (event, context, cb) => {
  cb(null, process.env.STAGE);
};
