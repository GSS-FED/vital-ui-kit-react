'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: table;\n  width: 100%;\n  border-collapse: separate;\n'], ['\n  position: relative;\n  display: table;\n  width: 100%;\n  border-collapse: separate;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: table-cell;\n  vertical-align: middle;\n\n  > * {\n    width: calc(100% + 2px);\n  }\n\n  &:not(:first-child) > * {\n    margin-left: -1px;\n    margin-right: 0;\n  }\n\n  &:last-child {\n    * {\n      border-top-right-radius: 4px;\n      border-bottom-right-radius: 4px;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n  }\n\n  &:first-child {\n    * {\n      border-right: 0;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px;\n    }\n  }\n\n  &:not(:first-child):not(:last-child) {\n    * {\n      border-radius: 0;\n    }\n  }\n\n  ', ';\n'], ['\n  display: table-cell;\n  vertical-align: middle;\n\n  > * {\n    width: calc(100% + 2px);\n  }\n\n  &:not(:first-child) > * {\n    margin-left: -1px;\n    margin-right: 0;\n  }\n\n  &:last-child {\n    * {\n      border-top-right-radius: 4px;\n      border-bottom-right-radius: 4px;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n  }\n\n  &:first-child {\n    * {\n      border-right: 0;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px;\n    }\n  }\n\n  &:not(:first-child):not(:last-child) {\n    * {\n      border-radius: 0;\n    }\n  }\n\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n      width: 1%;\n      white-space: nowrap;\n    '], ['\n      width: 1%;\n      white-space: nowrap;\n    ']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Addon = require('./components/Addon');

var _Addon2 = _interopRequireDefault(_Addon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/no-array-index-key */


var Root = _styledComponents2.default.div(_templateObject);

var LabelCell = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.addon && (0, _styledComponents.css)(_templateObject3);
});

/**
 * @render react
 * @name MultipleInput
 * @desc Group of multiple inputs
 * @example
 * <MultipleInput>
 *  <Addon>addon</Addon>
 *  ...
 * </MultipleInput>
 */
var MultipleInput = function MultipleInput(_ref) {
  var children = _ref.children;
  return React.createElement(
    Root,
    null,
    children.map(function (child, i) {
      return React.createElement(
        LabelCell,
        { addon: child.type === _Addon2.default, key: i },
        child
      );
    })
  );
};

exports.default = MultipleInput;