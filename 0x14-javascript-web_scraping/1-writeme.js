#!/usr/bin/node

const fs = require('fs');
const param1 = process.argv[2];
const param2 = process.argv[3];

fs.writeFile(param1, param2, 'utf-8', err => {
  if (err) {
    console.error(err);
  }
});
