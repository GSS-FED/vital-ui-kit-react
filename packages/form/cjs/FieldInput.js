'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: ', ';\n  margin-bottom: ', ';\n  position: relative;\n  width: 100%;\n\n  ', ';\n'], ['\n  display: ', ';\n  margin-bottom: ', ';\n  position: relative;\n  width: 100%;\n\n  ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Label = require('./components/Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div(_templateObject, function (props) {
  return props.inline ? 'table' : 'block';
}, function (props) {
  return props.inline ? '1.866rem' : '1.333rem';
}, function (props) {
  return props.inline && '\n    > span {\n        display: table-cell;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        width: 1%;\n        min-width: 8rem;\n        padding-right: 1.2rem;\n        line-height: 1;\n        vertical-align: top;\n        padding-top: calc(0.46633rem + 2px);\n      }\n  ';
});

/**
 * @render react
 * @name FieldInput
 * @desc Couple with input and label
 * @example
 * <FieldInput inline required label="email">
 *   ...
 * </FieldInput>
 */

var FieldInput = function FieldInput(_ref) {
  var label = _ref.label,
      align = _ref.align,
      inline = _ref.inline,
      required = _ref.required,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['label', 'align', 'inline', 'required', 'children']);

  return React.createElement(
    Root,
    _extends({ inline: inline }, props),
    React.createElement(_Label2.default, { text: label, required: required, align: align }),
    children
  );
};

FieldInput.defaultProps = {
  inline: false,
  required: false
};

exports.default = FieldInput;