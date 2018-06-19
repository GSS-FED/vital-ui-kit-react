'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  color: #456296;\n  border-bottom: 1px solid #d8e3f6;\n\n  :hover {\n    background-color: #eef2fc;\n  }\n\n  div[role=\'gridcell\'] {\n    padding-left: 20px;\n  }\n\n  ', ';\n'], ['\n  color: #456296;\n  border-bottom: 1px solid #d8e3f6;\n\n  :hover {\n    background-color: #eef2fc;\n  }\n\n  div[role=\'gridcell\'] {\n    padding-left: 20px;\n  }\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      background-color: #f7f9fd;\n    '], ['\n      background-color: #f7f9fd;\n    ']);

exports.default = defaultRowRenderer;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Row = _styledComponents2.default.div(_templateObject, function (_ref) {
  var isOdd = _ref.isOdd;
  return isOdd && (0, _styledComponents.css)(_templateObject2);
});

/**
 * Default row renderer for Table.
 */
function defaultRowRenderer(_ref2) {
  var className = _ref2.className,
      columns = _ref2.columns,
      index = _ref2.index,
      key = _ref2.key,
      onRowClick = _ref2.onRowClick,
      onRowDoubleClick = _ref2.onRowDoubleClick,
      onRowMouseOut = _ref2.onRowMouseOut,
      onRowMouseOver = _ref2.onRowMouseOver,
      onRowRightClick = _ref2.onRowRightClick,
      rowData = _ref2.rowData,
      style = _ref2.style;

  var a11yProps = {};
  var rowStyle = function rowStyle() {
    if (index < 0) {
      return { isHeader: true };
    }
    return index % 2 === 0 ? { isEven: true } : { isOdd: true };
  };

  if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = function (event) {
        return onRowClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function (event) {
        return onRowDoubleClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = function (event) {
        return onRowMouseOut({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = function (event) {
        return onRowMouseOver({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowRightClick) {
      a11yProps.onContextMenu = function (event) {
        return onRowRightClick({ event: event, index: index, rowData: rowData });
      };
    }
  }

  return React.createElement(
    Row,
    _extends({}, rowStyle(), a11yProps, {
      className: className,
      key: key,
      role: 'row',
      style: style
    }),
    columns
  );
}