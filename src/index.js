import request from 'request';
import moment from 'moment-timezone';
import { wrap } from 'lambda-async';
import { logger as l } from 'lambda-monitor-logger';

// Compute a / b. The function will throw an error if parameter is missing. Returns null if b is 0.
export const div = (event, context, cb) => {
  if (event.a === undefined || event.b === undefined) {
    return cb('Parameter a and b are required.');
  }
  return cb(null, event.a / event.b);
};

// Returns the geoip information for the executing function IP. Request is recorded and replayed.
export const geoip = (event, context, cb) => {
  request.get('http://ip-api.com/json', { json: true }, (err, res, body) => cb(err, body));
};

// Returns the current time (UTC).
export const now = (event, context, cb) => {
  cb(null, moment().tz('UTC').format());
};

// To capture logs, use lambda-monitor
export const logger = wrap(() => {
  l.error('Some Log Message');
  return Promise.resolve();
});

// Returns the environment variable "STAGE"
export const stage = (event, context, cb) => {
  cb(null, process.env.STAGE);
};
