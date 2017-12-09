const request = require("request");

module.exports.div = (event, context, cb) => {
  if (event.a === undefined || event.b === undefined) {
    return cb("Parameter a and b are required.");
  }
  return cb(null, event.a / event.b);
};

module.exports.geoip = (event, context, cb) => {
  request.get("http://ip-api.com/json", { json: true }, (err, res, body) => cb(err, body));
};
