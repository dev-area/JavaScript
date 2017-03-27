"use strict";

var _loop = function _loop(x) {
  //console.log(x);
  setTimeout(function () {
    return console.log(x);
  }, 0);
};

for (var x = 0; x < 5; x++) {
  _loop(x);
}