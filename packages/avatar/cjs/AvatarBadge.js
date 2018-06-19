'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n      padding: 0 5px;\n      border-radius: 0.75rem;\n      font-size: 0.725rem;\n      left: ', ';\n      right: ', ';\n      top: ', ';\n    '], ['\n      padding: 0 5px;\n      border-radius: 0.75rem;\n      font-size: 0.725rem;\n      left: ', ';\n      right: ', ';\n      top: ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding: 0;\n    border-radius: 50%;\n    font-size: 0;\n    width: ', ';\n    height: ', ';\n    right: calc(', ' / -2);\n    top: ', ';\n    left: ', ';\n    right: ', ';\n\n    &:before {\n      content: \'\';\n      position: absolute;\n      top: calc(50% - (3px / 2));\n      left: calc(50% - (3px / 2));\n      background: ', ';\n      border-radius: 50%;\n      width: 3px;\n      height: 3px;\n    }\n  '], ['\n    padding: 0;\n    border-radius: 50%;\n    font-size: 0;\n    width: ', ';\n    height: ', ';\n    right: calc(', ' / -2);\n    top: ', ';\n    left: ', ';\n    right: ', ';\n\n    &:before {\n      content: \'\';\n      position: absolute;\n      top: calc(50% - (3px / 2));\n      left: calc(50% - (3px / 2));\n      background: ', ';\n      border-radius: 50%;\n      width: 3px;\n      height: 3px;\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  background-color: ', ';\n  color: ', ';\n  vertical-align: middle;\n  height: ', ';\n  line-height: ', ';\n  ', ';\n'], ['\n  position: absolute;\n  background-color: ', ';\n  color: ', ';\n  vertical-align: middle;\n  height: ', ';\n  line-height: ', ';\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactUtils = require('@vital-ui/react-utils');

var _reactTheme = require('@vital-ui/react-theme');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var badgeTransformStyle = function badgeTransformStyle(_ref) {
  var size = _ref.size,
      round = _ref.round,
      label = _ref.label;

  if (size === 'xlarge') {
    return (0, _styledComponents.css)(_templateObject, round ? '70%' : 'auto', round ? 'auto' : '-12%', round ? 0 : 'calc(' + _constants.badgeSizes[size].height + ' / -2)');
  }
  // circle badge style
  return (0, _styledComponents.css)(_templateObject2, _constants.badgeSizes[size].height, _constants.badgeSizes[size].height, _constants.badgeSizes[size].height, round ? 0 : 'calc(' + _constants.badgeSizes[size].height + ' / -2)', round ? '70%' : 'auto', round ? 'auto' : _constants.badgeSizes[size].height / -2, label ? '#fff' : 'transparent');
};

var Root = _styledComponents2.default.span(_templateObject3, function (_ref2) {
  var theme = _ref2.theme;
  return theme.avatar.badgeBg;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.white;
}, function (_ref4) {
  var size = _ref4.size;
  return _constants.badgeSizes[size].height;
}, function (_ref5) {
  var size = _ref5.size;
  return _constants.badgeSizes[size].height;
}, function (props) {
  return badgeTransformStyle(props);
});

Root.defaultProps = {
  theme: _reactTheme.defaultTheme
};

var AvatarBadge = function AvatarBadge(_ref6) {
  var label = _ref6.label,
      size = _ref6.size,
      round = _ref6.round,
      style = _ref6.style;
  return _react2.default.createElement(
    Root,
    { label: label, size: size, round: round, style: style },
    size === 'xlarge' ? (0, _reactUtils.trunTo)(label) : null
  );
};

AvatarBadge.defaultProps = {
  round: false,
  size: 'medium',
  style: null
};

exports.default = AvatarBadge;