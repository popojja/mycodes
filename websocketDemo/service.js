const http = require('http');
const { hostname, port } = require('./config.js');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
})
