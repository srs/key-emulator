const serial = require('serialport');

module.exports = () => {
  console.log('Please specify the port name.');
  console.log('Here is a list of available ports:');

  serial.list(function (err, ports) {
    ports.forEach(function(port) {
      console.log('* ' + port.comName);
    });
  });
};
