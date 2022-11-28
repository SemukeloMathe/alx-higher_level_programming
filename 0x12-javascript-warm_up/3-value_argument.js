#!/usr/bin/node
const cmdArgs = process.argv;
let count = 0;

cmdArgs.forEach((val) => {
  count += 1
});

if (count <= 2) {
  console.log('No argument');
} else {
  console.log(cmdArgs[2]);
}
