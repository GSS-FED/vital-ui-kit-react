'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  background: ', ';\n  color: ', ';\n  cursor: pointer;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ', ';\n  font-size: ', ';\n  border-radius: ', ';\n  padding: ', ';\n  line-height: 1;\n  font-weight: normal;\n  margin: 0;\n  outline: none;\n  padding: ', ';\n  box-sizing: border-box;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n\n  &:hover {\n    background: ', ';\n  }\n\n  &:active {\n    background: ', ';\n  }\n\n  ', ';\n\n  ', ';\n\n  ', '\n\n  ', '\n\n   ', '\n\n   ', '\n\n   ', '\n\n  &[disabled] {\n    color: ', ';\n    border-color: ', ';\n    background-color: ', ';\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n'], ['\n  position: relative;\n  background: ', ';\n  color: ', ';\n  cursor: pointer;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ', ';\n  font-size: ', ';\n  border-radius: ', ';\n  padding: ', ';\n  line-height: 1;\n  font-weight: normal;\n  margin: 0;\n  outline: none;\n  padding: ', ';\n  box-sizing: border-box;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n\n  &:hover {\n    background: ', ';\n  }\n\n  &:active {\n    background: ', ';\n  }\n\n  ', ';\n\n  ', ';\n\n  ', '\n\n  ', '\n\n   ', '\n\n   ', '\n\n   ', '\n\n  &[disabled] {\n    color: ', ';\n    border-color: ', ';\n    background-color: ', ';\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      background: ', ';\n      color: ', ';\n      border: 1px solid transparent;\n\n      &:hover {\n        background: ', ';\n      }\n    '], ['\n      background: ', ';\n      color: ', ';\n      border: 1px solid transparent;\n\n      &:hover {\n        background: ', ';\n      }\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      background: ', ';\n      color: ', ';\n      border-color: ', ';\n\n      &:hover {\n        background: ', ';\n        border-color: ', ';\n      }\n      &:active {\n        background: ', ';\n        border-color: ', ';\n      }\n    '], ['\n      background: ', ';\n      color: ', ';\n      border-color: ', ';\n\n      &:hover {\n        background: ', ';\n        border-color: ', ';\n      }\n      &:active {\n        background: ', ';\n        border-color: ', ';\n      }\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      background: ', ';\n      color: ', ';\n\n      &:hover {\n        background: ', ';\n      }\n    '], ['\n      background: ', ';\n      color: ', ';\n\n      &:hover {\n        background: ', ';\n      }\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n      background: ', ';\n      color: ', ';\n      border: 1px solid transparent;\n\n      &:hover {\n        background: ', ';\n        color: ', ';\n      }\n    '], ['\n      background: ', ';\n      color: ', ';\n      border: 1px solid transparent;\n\n      &:hover {\n        background: ', ';\n        color: ', ';\n      }\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n       color: ', ';\n\n       &:hover {\n         color: ', ';\n       }\n     '], ['\n       color: ', ';\n\n       &:hover {\n         color: ', ';\n       }\n     ']),
    _templateObject7 = _taggedTemplateLiteral(['\n       &:hover {\n         text-decoration: underline;\n       }\n     '], ['\n       &:hover {\n         text-decoration: underline;\n       }\n     ']),
    _templateObject8 = _taggedTemplateLiteral(['\n       display: flex;\n       justify-content: center;\n       align-items: center;\n       padding: 0;\n       border-radius: 100%;\n       width: 2.066rem;\n       line-height: 2.066rem;\n       height: 2.066rem;\n     '], ['\n       display: flex;\n       justify-content: center;\n       align-items: center;\n       padding: 0;\n       border-radius: 100%;\n       width: 2.066rem;\n       line-height: 2.066rem;\n       height: 2.066rem;\n     ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _reactTheme = require('@vital-ui/react-theme');

var _constant = require('./constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonElement = _styledComponents2.default.button(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.button.default.bg;
}, function (_ref2) {
  var theme = _ref2.theme,
      nature = _ref2.nature;
  return (0, _constant.natureColor)(theme)[nature];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderColor;
}, function (_ref4) {
  var size = _ref4.size;
  return _constant.size[size].fontSize;
}, function (_ref5) {
  var size = _ref5.size;
  return _constant.size[size].borderRadius;
}, function (_ref6) {
  var size = _ref6.size;
  return _constant.size[size].padding;
}, function (_ref7) {
  var size = _ref7.size;
  return _constant.size[size].padding;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.button.default.hoverBg;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.button.default.activeBg;
}, function (_ref10) {
  var subtle = _ref10.subtle,
      selected = _ref10.selected,
      theme = _ref10.theme,
      nature = _ref10.nature;
  return subtle && (0, _styledComponents.css)(_templateObject2, selected ? theme.button.subtle.bg : 'transparent', nature === 'default' ? theme.button.subtle.color : (0, _constant.natureColor)(theme)[nature], theme.button.subtle.hoverBg);
}, function (_ref11) {
  var flat = _ref11.flat,
      nature = _ref11.nature,
      theme = _ref11.theme;
  return flat && (0, _styledComponents.css)(_templateObject3, nature === 'default' ? theme.button.flat.bg : (0, _constant.natureColor)(theme)[nature], nature === 'default' ? (0, _constant.natureColor)(theme).default : theme.button.flat.color, nature === 'default' ? theme.button.flat.bg : (0, _constant.natureColor)(theme)[nature], nature === 'default' ? theme.button.flat.hoverBg : (0, _polished.lighten)(0.1, (0, _constant.natureColor)(theme)[nature]), nature === 'default' ? theme.borderColor : (0, _polished.lighten)(0.1, (0, _constant.natureColor)(theme)[nature]), nature === 'default' ? theme.button.flat.activeBg : (0, _polished.darken)(0.12, (0, _constant.natureColor)(theme)[nature]), nature === 'default' ? theme.button.flat.activeBorderColor : (0, _polished.darken)(0.12, (0, _constant.natureColor)(theme)[nature]));
}, function (_ref12) {
  var light = _ref12.light,
      theme = _ref12.theme,
      nature = _ref12.nature;
  return light && (0, _styledComponents.css)(_templateObject4, theme.button.light.bg, (0, _constant.natureColor)(theme)[nature], theme.button.light.hoverBg);
}, function (_ref13) {
  var link = _ref13.link,
      theme = _ref13.theme;
  return link && (0, _styledComponents.css)(_templateObject5, theme.button.link.bg, theme.button.link.color, theme.button.link.hoverBg, theme.button.link.hoverColor);
}, function (_ref14) {
  var link = _ref14.link,
      dark = _ref14.dark,
      theme = _ref14.theme;
  return link && dark && (0, _styledComponents.css)(_templateObject6, theme.button.link.darkColor, theme.button.link.hoverDarkColor);
}, function (_ref15) {
  var underline = _ref15.underline;
  return underline && (0, _styledComponents.css)(_templateObject7);
}, function (_ref16) {
  var circle = _ref16.circle;
  return circle && (0, _styledComponents.css)(_templateObject8);
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.button.disabled.color;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.button.disabled.borderColor;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.button.disabled.bg;
});

ButtonElement.defaultProps = {
  theme: _reactTheme.defaultTheme
};

exports.default = ButtonElement;