#!/usr/bin/node

/*   a script that concats 2 files in an other file */

const fs = require('fs');
let content = '';

content = content.concat(fs.readFileSync(process.argv[2]));
content = content.concat(fs.readFileSync(process.argv[3]));
fs.writeFileSync(process.argv[4], content);
