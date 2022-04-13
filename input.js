const readline = require('readline');
const { stdin: input } = require('process');
const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MOVE_DOWN_KEY } = require('./constants');
let connection;

const setupInput = function(conn) {
  connection = conn;
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
    if (key.name === MOVE_UP_KEY) {
      // console.log("Move: up");
      connection.write("Move: up");
    }
    if (key.name === MOVE_LEFT_KEY) {
      connection.write("Move: left");
    }
    if (key.name === MOVE_DOWN_KEY) {
      connection.write("Move: down");
    }
    if (key.name === MOVE_RIGHT_KEY) {
      connection.write("Move: right");
    }
    if (key.name === 'q') {
      connection.write("Say: yeet");
    }
    if (key.name === 'e') {
      connection.write("Say: -snake noises-");
    }
    if (key.name === 'f') {
      connection.write("Say: nooooo");
    }
  });
};


module.exports = { setupInput };