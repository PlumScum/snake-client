// Import our mappings for input
const { mappings } = require("./constants");

const handleUserInput = (key) => {
  // Short circuit if user does the Ctrl-C key
  if (key === "\u0003") {
    return process.exit();
  }
  
  
  // handles all other key strokes
  if (mappings[key]) {
    connection.write(mappings[key]);
  }
};

let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data);
    handleUserInput(data);
  });
  return stdin;
};



module.exports = setupInput;

