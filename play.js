const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
connect();

setupInput();
console.log("Exit press ctrl+C");
