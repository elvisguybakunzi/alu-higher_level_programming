#!/usr/bin/node

/* script where a function that increments and calls a function  */

exports.addMeMaybe = function (number, theFunction) {
  number++;
  theFunction(number);
};
