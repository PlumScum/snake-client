
// Map key strokes to the write command string
const mappings = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  t: "Say: It's futile!",
  r: "Say: Insatiable...",
  y: "Say: Why are you running?",
  e: "Say: Fe fi fo...",
  q: "Say: Give up!",
  u: "Say: I got all day",
  i: "Say: Run!",
  o: "Say: Hello there",
  p: "Say: Time to eat"
};

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
  });
  return stdin;
};


module.exports = setupInput;
