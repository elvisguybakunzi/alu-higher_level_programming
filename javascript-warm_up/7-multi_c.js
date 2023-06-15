#!/usr/bin/node

/* a script that prints x times “C is fun” where x is number of arguments passed to it */

function printC (x) {
	  if (!Number(x)) {
		      console.log('Missing number of occurrences');
		      return;
		    }
	  for (let i = 0; i < x; i++) {
		      console.log('C is fun');
		    }
}

if (process.argv.length > 1) {
	  printC(Number(process.argv[2]));
} else {
	  console.log('Missing number of occurrences');
}
