const readline = require('readline');
const { stdin: input } = require('process');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput();
  return stdin;
};

const handleUserInput = function() {
  readline.emitKeypressEvents(input);
  input.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
      console.log('Thanks for using me, ciao!');
      process.exit();
    }
  });
};


module.exports = { setupInput };