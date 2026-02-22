// Explain HTTP request–response lifecycle

// Client sends request
// Node server receives it
// Event loop registers callback
// Request handled
// Response sent
// Connection closed or reused

const http = require("http");
http.createServer((req, res) => {
  console.log("Request received");
  res.write("Hello Client");
  res.end();
}).listen(3000);