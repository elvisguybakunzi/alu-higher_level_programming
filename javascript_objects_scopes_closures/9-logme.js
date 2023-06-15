#!/usr/bin/node

/*  a class Rectangle that defines a rectangle:  */

let count = 0;

exports.logMe = function (item) {
  console.log(count + ': ' + item);
  count++;
};
