#!/usr/bin/node

/* a script that prints x times “C is fun” where x is number of arguments passed to it */

const arg = process.argv[2];
const numOccurrences = parseInt(arg);

if (!isNaN(numOccurrences) && numOccurrences > 0) {
  for (let i = 0; i < numOccurrences; i++) {
    console.log('C is fun');
  }
} else if (!isNaN(numOccurrences) && numOccurrences < 0) {
    
} else {
  console.log('Missing number of occurrences');
}
