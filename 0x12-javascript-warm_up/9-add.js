#!/usr/bin/node
const cmdArgs = process.argv;
const arg1 = parseInt(cmdArgs[2]);
const arg2 = parseInt(cmdArgs[3]);

function add (a, b) {
  return a + b;
}
console.log(add(arg1, arg2));
