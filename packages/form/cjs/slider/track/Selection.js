'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  border-radius: 5px;\n  left: 0;\n  height: ', ';\n  top: 0;\n  width: ', ';\n  pointer-events: none;\n  background-color: ', '\n    ', ';\n'], ['\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  border-radius: 5px;\n  left: 0;\n  height: ', ';\n  top: 0;\n  width: ', ';\n  pointer-events: none;\n  background-color: ', '\n    ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactUtils = require('@vital-ui/react-utils');

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div(_templateObject, function (props) {
  return _constants2.default[props.size].trackHeight;
}, function (props) {
  return props.width + 'px';
}, function (props) {
  return (0, _reactUtils.stateColor)(props, props.disabled ? props.theme.disabledBackground : props.theme.background);
}, (0, _reactUtils.borderRightRadius)(0));

var Selection = function Selection(_ref) {
  var size = _ref.size,
      disabled = _ref.disabled,
      width = _ref.width,
      alarm = _ref.alarm,
      warning = _ref.warning,
      success = _ref.success;
  return React.createElement(Root, {
    size: size,
    disabled: disabled,
    width: width,
    alarm: alarm,
    warning: warning,
    success: success
  });
};

Selection.defaultProps = {
  size: 'medium',
  disabled: false,
  alarm: false,
  warning: false,
  success: false
};

exports.default = Selection;