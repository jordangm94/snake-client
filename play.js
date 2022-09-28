//This file is going to serve as the client to connect to snake game server. 
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.on("connect", () => {
    if ("connect") { 
      console.log("You have now connected to snake")
    }
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();