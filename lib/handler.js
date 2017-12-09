const request = require("request");
const dateTime = require('node-datetime');

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
  cb(null, dateTime.create().format('Y-m-d H:M:S'));
};
