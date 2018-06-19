'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Handler = exports.Wrapper = exports.Root = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  position: relative;\n  min-width: 200px;\n  align-items: center;\n\n  ', ';\n'], ['\n  display: flex;\n  position: relative;\n  min-width: 200px;\n  align-items: center;\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      opacity: 0.6;\n    '], ['\n      opacity: 0.6;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: block;\n  position: relative;\n  width: 100%;\n  height: ', ';\n'], ['\n  display: block;\n  position: relative;\n  width: 100%;\n  height: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  top: 0;\n  position: absolute;\n  border-radius: 100%;\n  border-color: ', ';\n  background-color: ', ';\n  box-shadow: 0 0 0 1px rgba(196, 210, 235, 0.3);\n  text-indent: -3333px;\n  overflow: hidden;\n  text-decoration: none;\n  text-align: center;\n  outline: 0;\n  border-style: solid;\n  border-width: 1px;\n  width: ', ';\n  height: ', ';\n  cursor: pointer;\n\n  &:hover {\n    border-color: ', ';\n    background-color: ', ';\n    box-shadow: 0 0 0 2px rgba(196, 210, 235, 0.3);\n  }\n'], ['\n  top: 0;\n  position: absolute;\n  border-radius: 100%;\n  border-color: ', ';\n  background-color: ', ';\n  box-shadow: 0 0 0 1px rgba(196, 210, 235, 0.3);\n  text-indent: -3333px;\n  overflow: hidden;\n  text-decoration: none;\n  text-align: center;\n  outline: 0;\n  border-style: solid;\n  border-width: 1px;\n  width: ', ';\n  height: ', ';\n  cursor: pointer;\n\n  &:hover {\n    border-color: ', ';\n    background-color: ', ';\n    box-shadow: 0 0 0 2px rgba(196, 210, 235, 0.3);\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  flex: 0 0 auto;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n'], ['\n  flex: 0 0 auto;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactButton = require('@vital-ui/react-button');

var _reactButton2 = _interopRequireDefault(_reactButton);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div(_templateObject, function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject2);
});

var Wrapper = _styledComponents2.default.div(_templateObject3, function (props) {
  return _constants2.default[props.size].handlerSize;
});

var Handler = _styledComponents2.default.div(_templateObject4, function (_ref2) {
  var theme = _ref2.theme;
  return theme.form.borderColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.white;
}, function (props) {
  return _constants2.default[props.size].handlerSize;
}, function (props) {
  return _constants2.default[props.size].handlerSize;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.form.focusBorderColor;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.white;
});

var Button = (0, _styledComponents2.default)(_reactButton2.default)(_templateObject5);

exports.Root = Root;
exports.Wrapper = Wrapper;
exports.Handler = Handler;
exports.Button = Button;