'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  margin: 0;\n  padding: 0;\n  top: 50%;\n  left: 0;\n  height: ', ';\n  margin-top: -4px;\n  background-repeat: repeat-x;\n  border-radius: 5px;\n  border-color: ', ';\n  width: 100%;\n  background-color: ', ';\n  ', ';\n'], ['\n  position: relative;\n  margin: 0;\n  padding: 0;\n  top: 50%;\n  left: 0;\n  height: ', ';\n  margin-top: -4px;\n  background-repeat: repeat-x;\n  border-radius: 5px;\n  border-color: ', ';\n  width: 100%;\n  background-color: ', ';\n  ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Selection = require('./Selection');

var _Selection2 = _interopRequireDefault(_Selection);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var Root = _styledComponents2.default.div(_templateObject, function (props) {
  return _constants2.default[props.size].trackHeight;
}, function (_ref) {
  var theme = _ref.theme;
  return theme.track.borderColor;
}, function (_ref2) {
  var theme = _ref2.theme,
      alarm = _ref2.alarm;
  return alarm ? theme.track.alarmbg : theme.track.bg;
}, function (props) {
  return props.onMouseDown && 'cursor: pointer';
});

var Track = function Track(_ref3) {
  var disabled = _ref3.disabled,
      selectionWidth = _ref3.selectionWidth,
      size = _ref3.size,
      onMouseDown = _ref3.onMouseDown,
      onMouseUp = _ref3.onMouseUp,
      onTouchEnd = _ref3.onTouchEnd,
      onTouchStart = _ref3.onTouchStart,
      trackRef = _ref3.trackRef,
      alarm = _ref3.alarm,
      warning = _ref3.warning,
      success = _ref3.success;
  return React.createElement(
    Root,
    {
      alarm: alarm,
      size: size,
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onTouchStart: onTouchStart,
      onTouchEnd: onTouchEnd,
      innerRef: trackRef
    },
    React.createElement(_Selection2.default, {
      alarm: alarm,
      warning: warning,
      success: success,
      disabled: disabled,
      width: selectionWidth,
      size: size
    })
  );
};

Track.defaultProps = {
  size: 'medium',
  alarm: false,
  warning: false,
  success: false,
  onMouseDown: function onMouseDown() {},
  onMouseUp: function onMouseUp() {},
  onTouchEnd: function onTouchEnd() {},
  onTouchStart: function onTouchStart() {},
  trackRef: function trackRef() {}
};

Track.Selection = _Selection2.default;

exports.default = Track;