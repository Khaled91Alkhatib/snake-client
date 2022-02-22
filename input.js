let connection; // Stores the active TCP connection object

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const keyMapping = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
}

const handleUserInput = function (key) {
  if (key === '\u0003') {  // \u0003 maps to ctrl+c input
    process.exit();
  } if (key in keyMapping) {
    connection.write(keyMapping[key]);
  }
};

module.exports = {setupInput};