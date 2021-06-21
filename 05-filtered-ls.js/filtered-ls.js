const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(folder, function (err, list) {
  if (err) {
    return console.log(err);
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i].includes(ext)) {
      console.log(list[i]);
    }
  }
});
