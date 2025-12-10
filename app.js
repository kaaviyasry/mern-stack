const http = require("http");

http.createServer((req, res) => {
  res.write("Hello Kaavs, Welcome to Node.js");
  res.end();
}).listen(3000);

console.log("Server running on http://localhost:3000");
