'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0.46633rem 0.8rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1;\n  height: 1.93267rem;\n  color: ', ';\n  text-align: center;\n  background-color: ', ';\n  border: ', ';\n  border-radius: 4px;\n  z-index: 5;\n  position: relative;\n  box-sizing: border-box;\n'], ['\n  padding: 0.46633rem 0.8rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1;\n  height: 1.93267rem;\n  color: ', ';\n  text-align: center;\n  background-color: ', ';\n  border: ', ';\n  border-radius: 4px;\n  z-index: 5;\n  position: relative;\n  box-sizing: border-box;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.labelColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.form.addon.bg;
}, function (_ref3) {
  var theme = _ref3.theme;
  return '1px solid ' + theme.form.borderColor;
});

var Addon = function Addon(_ref4) {
  var children = _ref4.children;
  return React.createElement(
    Root,
    null,
    children
  );
};

exports.default = Addon;