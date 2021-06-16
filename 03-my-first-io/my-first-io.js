const fs = require('fs');

// Buffer object returned from synchronous filesystem
// utf8 second arg to return string
const contents = fs.readFileSync(process.argv[2], 'utf8');
const lineBreaks = contents.split('\n');

console.log(lineBreaks.length - 1);
