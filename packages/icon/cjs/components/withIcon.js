'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconContext = require('./IconContext');

var _IconContext2 = _interopRequireDefault(_IconContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withIcon(Component) {
  return function IconComponent(props) {
    return _react2.default.createElement(
      _IconContext2.default.Consumer,
      null,
      function (icon) {
        return _react2.default.createElement(Component, _extends({}, props, { icon: icon }));
      }
    );
  };
}

exports.default = withIcon;