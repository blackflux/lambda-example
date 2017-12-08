module.exports.div = (event, context, cb) => {
  if (event.a === undefined || event.b === undefined) {
    return cb("Parameter a and b are required.");
  }
  return cb(null, event.a / event.b);
};
