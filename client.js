const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.on("connect", () => { //.on specifies to console.log ONCE event connect has happened
    console.log("You have now connected to the server for Snake")
    conn.write("Name: JGM");
    // conn.write("Move: up"); //This code is hard coding the up command
    // setInterval(() => { // Set interval allows us to move up
    //   conn.write("Move: up"); // in intervals of 200 miliseconds. 
    // }, 200);
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;