'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  flex-grow: 1;\n  color: ', ';\n  font-size: 0.93333rem;\n  overflow-x: hidden;\n'], ['\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  flex-grow: 1;\n  color: ', ';\n  font-size: 0.93333rem;\n  overflow-x: hidden;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.card.color;
});

var Container = function Container(_ref2) {
  var children = _ref2.children,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ['children', 'style']);

  return React.createElement(
    Root,
    _extends({ style: style }, props),
    children
  );
};

exports.default = Container;