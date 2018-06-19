'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.TitleWrapper = exports.List = exports.ListWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n      transition: all 0.2s ease;\n      text-decoration: none;\n      cursor: pointer;\n\n      &:hover {\n        background-color: ', ';\n        color: ', ';\n        text-decoration: none;\n      }\n    '], ['\n      transition: all 0.2s ease;\n      text-decoration: none;\n      cursor: pointer;\n\n      &:hover {\n        background-color: ', ';\n        color: ', ';\n        text-decoration: none;\n      }\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      background: ', ';\n      color: ', ';\n    '], ['\n      background: ', ';\n      color: ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    padding-left: calc(0.75rem + ', 'px);\n    color: ', ';\n    background: ', ';\n  '], ['\n    padding-left: calc(0.75rem + ', 'px);\n    color: ', ';\n    background: ', ';\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  list-style: none;\n  word-break: break-word;\n  word-wrap: break-word;\n  overflow: hidden;\n  border-radius: ', ';\n'], ['\n  list-style: none;\n  word-break: break-word;\n  word-wrap: break-word;\n  overflow: hidden;\n  border-radius: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  border-radius: ', ';\n\n  :first-child {\n    ', ';\n  }\n'], ['\n  border-radius: ', ';\n\n  :first-child {\n    ', ';\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  position: relative;\n  display: table;\n  width: 100%;\n  margin-bottom: -1px;\n  padding: 0.75rem 1.3rem;\n  font-size: 1.125rem;\n  word-break: break-word;\n  border: ', ';\n  border-bottom: ', ';\n  border-top: ', ';\n  ', ';\n  ', ';\n'], ['\n  box-sizing: border-box;\n  position: relative;\n  display: table;\n  width: 100%;\n  margin-bottom: -1px;\n  padding: 0.75rem 1.3rem;\n  font-size: 1.125rem;\n  word-break: break-word;\n  border: ', ';\n  border-bottom: ', ';\n  border-top: ', ';\n  ', ';\n  ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: table-cell;\n  vertical-align: middle;\n'], ['\n  display: table-cell;\n  vertical-align: middle;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactUtils = require('@vital-ui/react-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var linkStyle = function linkStyle(_ref) {
  var hasLink = _ref.hasLink,
      hasChildren = _ref.hasChildren,
      theme = _ref.theme;

  if (hasLink || hasChildren) {
    return (0, _styledComponents.css)(_templateObject, theme.list.link.bg, theme.list.link.color);
  }
  return null;
};

var levelStyle = function levelStyle(_ref2) {
  var level = _ref2.level,
      themed = _ref2.themed,
      theme = _ref2.theme;

  if (level < 1) {
    return (0, _styledComponents.css)(_templateObject2, themed === 'dark' ? theme.secondary900 : theme.white, themed === 'dark' ? theme.white : theme.secondary700);
  }
  return (0, _styledComponents.css)(_templateObject3, level * 16, themed === 'dark' ? theme.white : theme.secondary700, themed === 'dark' ? theme['secondary' + (9 - level) + '00'] : theme['secondary' + level + '00']);
};

var ListWrapper = _styledComponents2.default.ul(_templateObject4, function (props) {
  return props.collapse ? '4px' : 0;
});

var List = _styledComponents2.default.li(_templateObject5, function (props) {
  return props.collapse ? '4px' : 0;
}, function (props) {
  return props.collapse ? (0, _reactUtils.borderTopRadius)(4) : 0;
});

var TitleWrapper = _styledComponents2.default.div(_templateObject6, function (_ref3) {
  var border = _ref3.border,
      collapse = _ref3.collapse,
      theme = _ref3.theme;
  return border && collapse ? theme.borderColor : 'none';
}, function (_ref4) {
  var border = _ref4.border,
      theme = _ref4.theme;
  return border ? theme.borderColor : 'none';
}, function (_ref5) {
  var border = _ref5.border,
      theme = _ref5.theme;
  return border ? theme.borderColor : 'none';
}, function (props) {
  return linkStyle(props);
}, function (props) {
  return levelStyle(props);
});

var Title = _styledComponents2.default.div(_templateObject7);

exports.ListWrapper = ListWrapper;
exports.List = List;
exports.TitleWrapper = TitleWrapper;
exports.Title = Title;