'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxCell = exports.Span = exports.Cell = exports.HeaderCell = exports.HeaderLabel = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n'], ['\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: #456297;\n  font-weight: 500;\n  align-items: center;\n  display: flex;\n\n  ', ';\n\n  ', ';\n'], ['\n  color: #456297;\n  font-weight: 500;\n  align-items: center;\n  display: flex;\n\n  ', ';\n\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n      border-bottom: 1px solid #d8e3f6;\n    '], ['\n      border-bottom: 1px solid #d8e3f6;\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      border-right: 1px solid #d8e3f6;\n    '], ['\n      border-right: 1px solid #d8e3f6;\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  color: #456296;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  align-items: center;\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n'], ['\n  color: #456296;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  align-items: center;\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n      background-color: #f7f9fd;\n    '], ['\n      background-color: #f7f9fd;\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n      background-color: #eef2fc;\n    '], ['\n      background-color: #eef2fc;\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n'], ['\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  padding-right: 0;\n'], ['\n  padding-right: 0;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// ----- Header ----- //
var HeaderLabel = exports.HeaderLabel = _styledComponents2.default.span(_templateObject);

var HeaderCell = exports.HeaderCell = _styledComponents2.default.div(_templateObject2, function (_ref) {
  var hasHorizontalBorder = _ref.hasHorizontalBorder;
  return hasHorizontalBorder && (0, _styledComponents.css)(_templateObject3);
}, function (_ref2) {
  var hasVerticalBorder = _ref2.hasVerticalBorder;
  return hasVerticalBorder && (0, _styledComponents.css)(_templateObject4);
});

// ----- Body ----- //
var Cell = exports.Cell = _styledComponents2.default.div(_templateObject5, function (_ref3) {
  var hasHorizontalBorder = _ref3.hasHorizontalBorder;
  return hasHorizontalBorder && (0, _styledComponents.css)(_templateObject3);
}, function (_ref4) {
  var hasVerticalBorder = _ref4.hasVerticalBorder;
  return hasVerticalBorder && (0, _styledComponents.css)(_templateObject4);
}, function (_ref5) {
  var isEven = _ref5.isEven;
  return isEven && (0, _styledComponents.css)(_templateObject6);
}, function (_ref6) {
  var hoveredRow = _ref6.hoveredRow;
  return hoveredRow && (0, _styledComponents.css)(_templateObject7);
});

var Span = exports.Span = _styledComponents2.default.span(_templateObject8);

var CheckboxCell = exports.CheckboxCell = (0, _styledComponents2.default)(Cell)(_templateObject9);