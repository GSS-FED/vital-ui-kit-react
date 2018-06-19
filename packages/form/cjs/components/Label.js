'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  font-size: 0.866rem;\n  color: ', ';\n  line-height: 1.8;\n  display: inline-block;\n  text-align: ', ';\n\n  ', ';\n\n  ', ';\n'], ['\n  position: relative;\n  font-size: 0.866rem;\n  color: ', ';\n  line-height: 1.8;\n  display: inline-block;\n  text-align: ', ';\n\n  ', ';\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      :before {\n        content: \'\';\n        display: inline-block;\n        background-color: ', ';\n        margin: -0.133rem 0.533rem 0 0;\n        vertical-align: middle;\n        height: 0.266rem;\n        width: 0.266rem;\n        border-radius: 50%;\n        position: absolute;\n        left: -0.666rem;\n        top: 0.666rem;\n      }\n    '], ['\n      :before {\n        content: \'\';\n        display: inline-block;\n        background-color: ', ';\n        margin: -0.133rem 0.533rem 0 0;\n        vertical-align: middle;\n        height: 0.266rem;\n        width: 0.266rem;\n        border-radius: 50%;\n        position: absolute;\n        left: -0.666rem;\n        top: 0.666rem;\n      }\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      width: 1%;\n      min-width: 8rem;\n      padding-right: 1.2rem;\n      line-height: 1;\n      vertical-align: top;\n      padding-top: calc(0.46633rem + 2px);\n    '], ['\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      width: 1%;\n      min-width: 8rem;\n      padding-right: 1.2rem;\n      line-height: 1;\n      vertical-align: top;\n      padding-top: calc(0.46633rem + 2px);\n    ']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LabelElement = _styledComponents2.default.span(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.labelColor;
}, function (props) {
  return props.align;
}, function (_ref2) {
  var required = _ref2.required,
      theme = _ref2.theme;
  return required && (0, _styledComponents.css)(_templateObject2, theme.alarm);
}, function (props) {
  return props.inline && (0, _styledComponents.css)(_templateObject3);
});

var Label = function Label(_ref3) {
  var text = _ref3.text,
      required = _ref3.required,
      inline = _ref3.inline,
      align = _ref3.align;
  return React.createElement(
    LabelElement,
    { inline: inline, align: align, required: required },
    text
  );
};

Label.defaultProps = {
  required: false,
  align: 'left',
  inline: false
};

exports.default = Label;