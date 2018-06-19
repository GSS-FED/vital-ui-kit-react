'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  height: 50px;\n  display: table-cell;\n  vertical-align: middle;\n\n  &:not(:last-child) {\n    &:after {\n      content: \'\';\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 1px;\n      height: 100%;\n      background: ', ';\n    }\n  }\n'], ['\n  position: relative;\n  height: 50px;\n  display: table-cell;\n  vertical-align: middle;\n\n  &:not(:last-child) {\n    &:after {\n      content: \'\';\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 1px;\n      height: 100%;\n      background: ', ';\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 0 10px;\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n  height: 100%;\n  width: 100%;\n  background-color: ', ';\n  transition: all 120ms ease-in;\n  line-height: 50px;\n  box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 1rem;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  color: ', ';\n\n  &:hover {\n    background-color: ', ';\n  }\n'], ['\n  padding: 0 10px;\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n  height: 100%;\n  width: 100%;\n  background-color: ', ';\n  transition: all 120ms ease-in;\n  line-height: 50px;\n  box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 1rem;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  color: ', ';\n\n  &:hover {\n    background-color: ', ';\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var ButtonWrapper = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.borderColor;
});

var Button = _styledComponents2.default.button(_templateObject2, function (_ref2) {
  var theme = _ref2.theme;
  return theme.button.bg;
}, function (_ref3) {
  var primary = _ref3.primary,
      theme = _ref3.theme;
  return theme.card.button.color(primary);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.card.button.hover;
});

var FooterButton = function FooterButton(_ref5) {
  var children = _ref5.children,
      primary = _ref5.primary,
      onClick = _ref5.onClick,
      props = _objectWithoutProperties(_ref5, ['children', 'primary', 'onClick']);

  return React.createElement(
    ButtonWrapper,
    _extends({}, props, { onClick: onClick }),
    React.createElement(
      Button,
      { primary: primary },
      children
    )
  );
};

FooterButton.defaultProps = {
  primary: false
};

exports.default = FooterButton;