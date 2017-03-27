'use strict';

var _mod = require('./mod1');

function add() {
  var sum = 0;

  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }return sum;
}

console.log((0, _mod.addSimple)(3));
console.log(add(3, 2, 4, 5));