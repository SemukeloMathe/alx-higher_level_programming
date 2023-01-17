#!/usr/bin/node

const param = process.argv;

for (let i = 0; i < param.length; i++) {
	console.log("param == ", param[i]);
}
console.log(param.length);
