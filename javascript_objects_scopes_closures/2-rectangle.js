#!/usr/bin/node

/*  Write a class Rectangle that defines a rectangle:  */

class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0) {
      return {}; // Return an empty object if width or height is not positive
    }

    this.width = w;
    this.height = h;
  }
}

module.exports = Rectangle;
