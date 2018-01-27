var path = require('path');

function batteryPath(battery) {
  return path.resolve('/sys/class/power_supply', battery);
}

module.exports = batteryPath;