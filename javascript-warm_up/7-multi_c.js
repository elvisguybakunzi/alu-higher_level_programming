#!/usr/bin/node

/* Write a script that prints x times “C is fun”  */

const arg = process.argv[2];
const numOccurrences = parseInt(arg);

if (!isNaN(numOccurrences) && numOccurrences > 0) {
	  for (let i = 0; i < numOccurrences; i++) {
		      console.log('C is fun');
		    }
} else {
	  console.log('Missing number of occurrences');
}
