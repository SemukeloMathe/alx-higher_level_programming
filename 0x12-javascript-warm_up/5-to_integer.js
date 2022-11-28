#!/usr/bin/node
const cmdArgs = process.argv;
const arg1 = parseInt(cmdArgs[2]);

if (arg1 === Number.NaN) {
  console.log('Not a number');
} else if (cmdArgs.length <= 2) {
  console.log('Not a number');
} else if (typeof arg1 !== 'number') {
  console.log('Not a number');
} else {
  console.log('My number: ' + arg1);
}
