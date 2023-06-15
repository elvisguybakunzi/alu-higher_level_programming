#!/usr/bin/node

/*  a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:  */

const arg = process.argv[2];
const parsedInt = parseInt(arg);

if (!isNaN(parsedInt)) {
  console.log(`My number: ${parsedInt}`);
} else {
  console.log('Not a number');
}
