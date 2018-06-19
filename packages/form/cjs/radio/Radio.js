'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  margin: 0 5px 10px 0;\n  word-break: break-word;\n  color: ', ';\n  line-height: 1.3333rem;\n  font-size: 1rem;\n  cursor: ', ';\n  pointer-events: ', ';\n\n  :hover {\n    input {\n      box-shadow: 0 0 0 2px rgba(14, 134, 254, 0.2);\n      border-color: ', ';\n    }\n  }\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  margin: 0 5px 10px 0;\n  word-break: break-word;\n  color: ', ';\n  line-height: 1.3333rem;\n  font-size: 1rem;\n  cursor: ', ';\n  pointer-events: ', ';\n\n  :hover {\n    input {\n      box-shadow: 0 0 0 2px rgba(14, 134, 254, 0.2);\n      border-color: ', ';\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  vertical-align: middle;\n  appearance: none;\n  outline: none;\n  position: relative;\n  box-sizing: content-box;\n  margin: -2px 0 0 0;\n  width: 15px;\n  height: 15px;\n  border: 1px solid ', ';\n  border-radius: 50%;\n  background-color: #ffffff;\n  ', ';\n  cursor: pointer;\n\n  &:checked {\n    border-color: ', ';\n\n    &:after {\n      opacity: 1;\n      transform: scale(1);\n      background: ', ';\n    }\n  }\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 9px;\n    height: 9px;\n    top: calc((15px - 9px) / 2);\n    left: calc((15px - 9px) / 2);\n    border-radius: 50%;\n    background: transparent;\n    opacity: 0;\n    pointer-events: none;\n    transform: scale(0);\n    ', ';\n  }\n'], ['\n  vertical-align: middle;\n  appearance: none;\n  outline: none;\n  position: relative;\n  box-sizing: content-box;\n  margin: -2px 0 0 0;\n  width: 15px;\n  height: 15px;\n  border: 1px solid ', ';\n  border-radius: 50%;\n  background-color: #ffffff;\n  ', ';\n  cursor: pointer;\n\n  &:checked {\n    border-color: ', ';\n\n    &:after {\n      opacity: 1;\n      transform: scale(1);\n      background: ', ';\n    }\n  }\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 9px;\n    height: 9px;\n    top: calc((15px - 9px) / 2);\n    left: calc((15px - 9px) / 2);\n    border-radius: 50%;\n    background: transparent;\n    opacity: 0;\n    pointer-events: none;\n    transform: scale(0);\n    ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding-left: 4px;\n'], ['\n  padding-left: 4px;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactUtils = require('@vital-ui/react-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var Root = _styledComponents2.default.label(_templateObject, function (_ref) {
  var isDisabled = _ref.isDisabled,
      theme = _ref.theme;
  return theme.radio.color(isDisabled);
}, function (props) {
  return props.isDisabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.isDisabled ? 'none' : 'auto';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.form.focusBorderColor;
});

var Input = _styledComponents2.default.input(_templateObject2, function (_ref3) {
  var theme = _ref3.theme;
  return theme.form.borderColor;
}, _reactUtils.transitionBase, function (_ref4) {
  var isDisabled = _ref4.isDisabled,
      theme = _ref4.theme;
  return isDisabled ? theme.secondary400 : theme.primary;
}, function (_ref5) {
  var isDisabled = _ref5.isDisabled,
      theme = _ref5.theme;
  return isDisabled ? theme.secondary : theme.primary;
}, _reactUtils.transitionBase);

var Label = _styledComponents2.default.span(_templateObject3);

var Radio = function Radio(_ref6) {
  var isDisabled = _ref6.isDisabled,
      label = _ref6.label,
      value = _ref6.value,
      defaultChecked = _ref6.defaultChecked,
      name = _ref6.name,
      onChange = _ref6.onChange,
      props = _objectWithoutProperties(_ref6, ['isDisabled', 'label', 'value', 'defaultChecked', 'name', 'onChange']);

  return React.createElement(
    Root,
    { isDisabled: isDisabled },
    React.createElement(Input, _extends({
      isDisabled: isDisabled,
      type: 'radio',
      defaultChecked: defaultChecked,
      name: name,
      value: value,
      onChange: onChange
    }, props)),
    React.createElement(
      Label,
      { isDisabled: isDisabled },
      label
    )
  );
};

Radio.defaultProps = {
  defaultChecked: false,
  isDisabled: false
};

exports.default = Radio;