exports.Browser = require('airplay').Browser;
exports.createBrowser = function() {
  return new exports.Browser();
};

exports.Device = require('device').Device;
exports.connect = function(host, port, opt_pass) {
  // TODO: connect
  throw 'not yet implemented';
};