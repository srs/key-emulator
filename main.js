const help = require('./help');
const emulator = require('./emulator');

if (process.argv.length <= 2) {
  help();
} else {
  emulator(process.argv[2], process.argv[3] || 115200);
}
