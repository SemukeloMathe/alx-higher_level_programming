#!/usr/bin/node
const cmdArgs = process.argv;

if (cmdArgs.length <= 2) {
  console.log('No argument');
} else {
  console.log(cmdArgs[2]);
}
