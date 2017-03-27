"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSimple = addSimple;
function addSimple(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 99;

  return a + f1(b);
}
function f1(x) {
  return x + 100;
}