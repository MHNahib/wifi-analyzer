const wifi = require("node-wifi");

wifi.init({
  iface: null,
});

module.exports = wifi;
