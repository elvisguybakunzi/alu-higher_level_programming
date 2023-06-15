#!/usr/bin/node

/* a script that imports a dictionary of occurrences by user id and computes a dictionary of user ids by occurrence.a script that imports a dictionary of occurrences by user id and computes a dictionary of user ids by occurrence.  */

const { dict } = require('./101-data');

const result = {};

for (const userId in dict) {
  const occurrence = dict[userId];

  if (occurrence in result) {
    result[occurrence].push(userId.toString());
  } else {
    result[occurrence] = [userId.toString()];
  }
}

console.log(result);
