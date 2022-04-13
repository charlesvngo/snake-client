const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Sssssuccesssssfully connected to game ssssserver');
  });

  conn.on('connect', () => {
    conn.write('Name: CVN');
  });
  
  // Testing movement within the game.
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 50);
  // });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;

};

module.exports = { connect };