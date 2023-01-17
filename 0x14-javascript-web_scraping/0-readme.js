#!/usr/bin/node

const fs = require('fs');
const param = process.argv[2];

fs.readFile(param, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
