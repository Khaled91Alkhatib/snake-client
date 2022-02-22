const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541// PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");  // Will show up once a connection to server is successful,
  });

  conn.on("connect", () => {
    conn.write("Name: KAL")  // Writes a name identifying a character ingame,
  });

  conn.on('data', (data) => {
    console.log(data.toString()); // Will show data written in Lighthouse Labs repository once you disconnect ("you ded cuz you idled");
    conn.end();
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};