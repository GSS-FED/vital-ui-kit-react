'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  > button:not(:last-child) {\n    margin-right: ', ';\n  }\n\n  > button {\n    display: inline-block;\n  }\n'], ['\n  > button:not(:last-child) {\n    margin-right: ', ';\n  }\n\n  > button {\n    display: inline-block;\n  }\n']);

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

var Root = _styledComponents2.default.div(_templateObject, function (_ref) {
  var vertical = _ref.vertical,
      marginHorizontal = _ref.marginHorizontal;
  return vertical ? 0 : marginHorizontal;
});

var ButtonGroup = function ButtonGroup(_ref2) {
  var children = _ref2.children,
      marginHorizontal = _ref2.marginHorizontal,
      props = _objectWithoutProperties(_ref2, ['children', 'marginHorizontal']);

  return React.createElement(
    Root,
    _extends({ marginHorizontal: marginHorizontal }, props),
    children
  );
};

ButtonGroup.defaultProps = {
  marginHorizontal: '5px',
  style: undefined
};

exports.default = ButtonGroup;