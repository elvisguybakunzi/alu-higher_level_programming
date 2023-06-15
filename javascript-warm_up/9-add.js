#!/usr/bin/node

/* Write a script that prints the addition of 2 integers from arguments passed  */

function add (a, b) {
  return parseInt(a) + parseInt(b);
}

const arg1 = process.argv[2];
const arg2 = process.argv[3];

console.log(add(arg1, arg2));
