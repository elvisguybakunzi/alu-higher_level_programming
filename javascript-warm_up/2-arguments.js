#!/usr/bin/node
/*  a script that prints a message depending of the number of arguments passed  */

const argsNumber = process.argv.slice(2);

if (argsNumber === 0) {
  console.log('No argument');

} else if (argsNumber === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
