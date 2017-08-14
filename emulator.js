const robot = require("robotjs");
const serial = require('serialport');

module.exports = (portName, baudRate) => {
  var port = new serial(portName, {
    baudRate: baudRate
  });

  console.log('Listening to ' + portName + ' (baud rate ' + baudRate + ')');
  console.log('Please go to your presentation before clicking your MicroBit.');

  port.on('data', function (data) {
    var key = data.toString('UTF8');

    if (key == 'A') {
      console.log(key + ' (<<)');
      robot.keyTap('left');
    } else if (key == 'B') {
      console.log(key + ' (>>)');
      robot.keyTap('right');
    }
  });
};
