#!/usr/bin/node

/* Write a script that prints x times “C is fun”  */

const arg = process.argv[2];

if (!arg || isNaN(arg)) {
  console.log('Missing number of occurrences');
} else {
  const x = parseInt(arg);

  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
