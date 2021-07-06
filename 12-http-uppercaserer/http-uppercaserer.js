const http = require('http');

server = http.createServer((req, res) => {});

server.listen(Number(process.argv[2]));
