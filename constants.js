const IP = "10.0.2.15";
const PORT = 50541;

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

module.exports = {
  IP,
  PORT,
  mappings
};