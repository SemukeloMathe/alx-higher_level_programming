#!/usr/bin/node

const request = require('request');
const requestUrl = process.argv[2];

request(requestUrl, function (error, response) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('code:', response.statusCode);
});
