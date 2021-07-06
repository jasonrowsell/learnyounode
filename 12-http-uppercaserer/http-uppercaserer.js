const http = require('http');

server = http.createServer((req, res) => {
  let body = '';

  if (req.method === 'POST') {
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      res.end(body.toUpperCase());
    });
  }
});

server.listen(Number(process.argv[2]));
