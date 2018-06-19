'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var space = exports.space = function space(props) {
  return {
    margin: props.margin || '',
    marginBottom: props.marginBottom || '',
    marginLeft: props.marginLeft || '',
    marginTop: props.marginTop || '',
    marginHorizontal: props.marginHorizontal || '',
    marginVertical: props.marginVertical || '',
    paddingHorizontal: props.paddingHorizontal || '',
    paddingVertical: props.paddingVertical || '',
    padding: props.padding || '',
    paddingTop: props.paddingTop || '',
    paddingLeft: props.paddingLeft || '',
    paddingRight: props.paddingRight || '',
    paddingBottom: props.paddingBottom || ''
  };
};

var stateColor = exports.stateColor = function stateColor(_ref, defaultColor) {
  var alarm = _ref.alarm,
      warning = _ref.warning,
      success = _ref.success,
      theme = _ref.theme;

  if (alarm) return theme.alarm;
  if (warning) return theme.warning;
  if (success) return theme.success;
  return defaultColor || theme.primary;
};

var transitionBase = exports.transitionBase = function transitionBase(_props) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '120ms';
  var timing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ease-out';
  var delay = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  return 'transition: ' + type + ' ' + duration + ' ' + timing + ' ' + delay;
};

var borderBottomRadius = exports.borderBottomRadius = function borderBottomRadius(size) {
  return '\n  border-bottom-left-radius: ' + size + 'px;\n  border-bottom-right-radius: ' + size + 'px;\n';
};

var borderTopRadius = exports.borderTopRadius = function borderTopRadius(size) {
  return '\n  border-top-left-radius: ' + size + 'px;\n  border-top-right-radius: ' + size + 'px;\n';
};

var borderLeftRadius = exports.borderLeftRadius = function borderLeftRadius(size) {
  return '\n  border-top-left-radius: ' + size + 'px;\n  border-bottom-left-radius: ' + size + 'px;\n';
};

var borderRightRadius = exports.borderRightRadius = function borderRightRadius(size) {
  return '\n  border-bottom-right-radius: ' + size + 'px;\n  border-top-right-radius: ' + size + 'px;\n';
};