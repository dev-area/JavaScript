'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Toppings = function () {
  function Toppings(toppings) {
    _classCallCheck(this, Toppings);

    this.toppings = Array.isArray(toppings) ? toppings : [];
  }

  _createClass(Toppings, [{
    key: 'outputList',
    value: function outputList() {
      var _this = this;

      this.toppings.forEach(function (topping, i) {
        console.log(topping, i + '/' + _this.toppings.length); // `this` works!
      });
    }
  }]);

  return Toppings;
}();

var myToppings = new Toppings(['cheese', 'lettuce']);

myToppings.outputList();