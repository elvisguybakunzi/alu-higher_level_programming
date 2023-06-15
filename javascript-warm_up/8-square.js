#!/usr/bin/node

/* Write a script that prints a square where the size of square is the number of argument passed to it */

const arg = process.argv[2];
const size = parseInt(arg);

if (!isNaN(size) && size > 0) {
  const row = 'X'.repeat(size);

  for (let i = 0; i < size; i++) {
    console.log(row);
  }
} else {
  console.log('Missing size');
}
