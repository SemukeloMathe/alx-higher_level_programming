#!/usr/bin/node
const cmdArgs = process.argv;
let x = 2;
let biggest = cmdArgs[2];
let secondBiggest = 0;

if (cmdArgs.length <= 3) {
  secondBiggest = 0;
} else {
  while (x < cmdArgs.length) {
    if (cmdArgs[x] > biggest) {
      secondBiggest = biggest;
      biggest = cmdArgs[x];
    }
    if (secondBiggest < cmdArgs[x] < biggest) {
      secondBiggest = cmdArgs[x];
    }
    x++;
  }
}
console.log(secondBiggest);
