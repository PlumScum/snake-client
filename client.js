const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  //Takes in data from the server
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  //gives alert to the user once connection is established
  conn.on("connect", () =>
    console.log("Connected to game server!")
  );
  conn.on("connect", () => {
    conn.write("Name: SNK");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;