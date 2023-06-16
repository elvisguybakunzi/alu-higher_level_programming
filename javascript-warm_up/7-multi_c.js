#!/usr/bin/node

/* Write a script that prints x times “C is fun”  */

const argemnt = process.argv[2];

if (!argemnt || isNaN(arg)) {
  console.log('Missing number of occurrences');
} else {
  const numberOccurrences = parseInt(arg);

  for (let i = 0; i < numberOccurrences; i++) {
    console.log('C is fun');
  }
}
