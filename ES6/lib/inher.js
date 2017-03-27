'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bird = function () {
  function Bird(weight, height) {
    _classCallCheck(this, Bird);

    this.weight = weight;
    this.height = height;
  }

  _createClass(Bird, [{
    key: 'walk',
    value: function walk() {
      console.log('walk!');
    }
  }]);

  return Bird;
}();

// Subclass


var Penguin = function (_Bird) {
  _inherits(Penguin, _Bird);

  function Penguin(weight, height) {
    _classCallCheck(this, Penguin);

    return _possibleConstructorReturn(this, (Penguin.__proto__ || Object.getPrototypeOf(Penguin)).call(this, weight, height));
  }

  _createClass(Penguin, [{
    key: 'swim',
    value: function swim() {
      console.log('swim!');
    }
  }]);

  return Penguin;
}(Bird);

// Penguin object


var penguin = new Penguin(10, 40);
penguin.walk(); //walk!
penguin.swim(); //swim!