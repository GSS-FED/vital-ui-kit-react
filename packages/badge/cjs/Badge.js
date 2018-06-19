'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0.25rem 0.75rem;\n  border-radius: 0.75rem;\n  font-size: 0.725rem;\n\n  ', ';\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0.25rem 0.75rem;\n  border-radius: 0.75rem;\n  font-size: 0.725rem;\n\n  ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactTheme = require('@vital-ui/react-theme');

var _reactUtils = require('@vital-ui/react-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var inverseOrNot = function inverseOrNot(_ref) {
  var inverse = _ref.inverse,
      theme = _ref.theme;
  return '\n  background-color: ' + (inverse ? theme.badge.inverseBg : theme.badge.bg) + ';\n  color: ' + (inverse ? theme.badge.inverseColor : theme.badge.color) + ';\n';
};

var Root = _styledComponents2.default.span(_templateObject, inverseOrNot);

Root.defaultProps = {
  theme: _reactTheme.defaultTheme
};

/**
 * @render react
 * @name Badge
 * @description Vital UI Kit Badge Label
 * @example
 * <Badge label="99+" />
 */

var Badge = function Badge(_ref2) {
  var label = _ref2.label,
      trunc = _ref2.trunc,
      inverse = _ref2.inverse,
      props = _objectWithoutProperties(_ref2, ['label', 'trunc', 'inverse']);

  return React.createElement(
    Root,
    _extends({ inverse: inverse }, props),
    trunc ? (0, _reactUtils.trunTo)(label) : label
  );
};

Badge.defaultProps = {
  trunc: true,
  inverse: false
};

exports.default = Badge;