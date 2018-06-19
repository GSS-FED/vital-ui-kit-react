'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block !important;\n  padding-top: 0.4rem;\n  font-size: 0.8rem;\n  line-height: 1.42857;\n  padding-left: 1px;\n  white-space: normal;\n  color: ', ';\n'], ['\n  display: block !important;\n  padding-top: 0.4rem;\n  font-size: 0.8rem;\n  line-height: 1.42857;\n  padding-left: 1px;\n  white-space: normal;\n  color: ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactUtils = require('@vital-ui/react-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div(_templateObject, function (props) {
  return (0, _reactUtils.stateColor)(props, props.theme.form.hint.color);
});

var Hint = function Hint(_ref) {
  var text = _ref.text,
      alarm = _ref.alarm,
      warning = _ref.warning,
      success = _ref.success;
  return React.createElement(
    Root,
    { alarm: alarm, warning: warning, success: success },
    text
  );
};

Hint.defaultProps = {
  alarm: false,
  warning: false,
  success: false
};

exports.default = Hint;