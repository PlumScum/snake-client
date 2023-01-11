const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  
  conn.on("connect", () =>
    console.log("Connected to game server!")
  );
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};

console.log("Connecting ...");
connect();

