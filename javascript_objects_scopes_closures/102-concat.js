#!/usr/bin/node

/*   a script that concats 2 files.  */
const fs = require('fs');

function concatFiles (file1, file2, destination) {
  const content1 = fs.readFileSync(file1, 'utf-8');
  const content2 = fs.readFileSync(file2, 'utf-8');
  const concatenatedContent = content1 + '\n' + content2;
  fs.writeFileSync(destination, concatenatedContent);
}

const file1 = process.argv[2];
const file2 = process.argv[3];
const destination = process.argv[4];

concatFiles(file1, file2, destination);
