'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0.46633rem 0.8rem;\n  font-size: 1rem;\n  line-height: 1;\n  box-sizing: border-box;\n  background-color: ', ';\n  border: 1px solid ', ';\n  border-radius: 4px;\n  color: ', ';\n  transition: border-color ease-in-out 0.15s,\n    box-shadow ease-in-out 0.15s;\n  outline: 0;\n  z-index: 5;\n\n  &::placeholder {\n    color: ', ';\n  }\n\n  &:focus {\n    outline: 0;\n    border: 1px solid ', ';\n    box-shadow: 0 0 0 2px rgba(14, 134, 254, 0.2);\n    z-index: 7;\n  }\n\n  &:disabled {\n    pointer-events: none;\n    border-color: ', ';\n    background-color: ', ';\n\n    ', ';\n  }\n\n  ', ';\n\n  ', ';\n'], ['\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0.46633rem 0.8rem;\n  font-size: 1rem;\n  line-height: 1;\n  box-sizing: border-box;\n  background-color: ', ';\n  border: 1px solid ', ';\n  border-radius: 4px;\n  color: ', ';\n  transition: border-color ease-in-out 0.15s,\n    box-shadow ease-in-out 0.15s;\n  outline: 0;\n  z-index: 5;\n\n  &::placeholder {\n    color: ', ';\n  }\n\n  &:focus {\n    outline: 0;\n    border: 1px solid ', ';\n    box-shadow: 0 0 0 2px rgba(14, 134, 254, 0.2);\n    z-index: 7;\n  }\n\n  &:disabled {\n    pointer-events: none;\n    border-color: ', ';\n    background-color: ', ';\n\n    ', ';\n  }\n\n  ', ';\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        pointer-events: none;\n        background-color: ', ';\n        border-color: ', ';\n\n        &::placeholder {\n          color: ', ';\n        }\n      '], ['\n        pointer-events: none;\n        background-color: ', ';\n        border-color: ', ';\n\n        &::placeholder {\n          color: ', ';\n        }\n      ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      border-color: ', ';\n    '], ['\n      border-color: ', ';\n    ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fieldBase = function fieldBase(_ref) {
  var theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject, theme.white, theme.form.borderColor, theme.form.color, theme.form.placeholder.color, theme.form.focusBorderColor, theme.form.borderColor, theme.form.disabled.bg, function (_ref2) {
    var alarm = _ref2.alarm;
    return alarm && (0, _styledComponents.css)(_templateObject2, theme.form.disabled.alarmBg, theme.alarm, theme.alarm);
  }, function (_ref3) {
    var alarm = _ref3.alarm;
    return alarm && (0, _styledComponents.css)(_templateObject3, theme.alarm);
  }, function (_ref4) {
    var warning = _ref4.warning;
    return warning && (0, _styledComponents.css)(_templateObject3, theme.warning);
  });
};

exports.default = fieldBase;