#!/usr/bin/node

/*  a class Rectangle that defines a rectangle:  */

exports.esrever = function (list) {
  const reversed = [];

  for (let i = list.length - 1; i >= 0; i--) {
    reversed.push(list[i]);
  }

  return reversed;
};
