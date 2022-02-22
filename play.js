const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541// PORT number here,
  });

  conn.on("connect", () => {
    console.log("Connected to server!");  // Will show up once a connection to server is successful,
  });

  conn.on('data', (data) => {
    console.log(data.toString()); // Will show data written in Lighthouse Labs repository ("you ded cuz you idled");
    conn.end();
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();