'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/* eslint-disable jsx-a11y/mouse-events-have-key-events  */


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styled = require('./styled');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var defaultCellRenderer = function defaultCellRenderer(data) {
  return function (_ref) {
    var columnIndex = _ref.columnIndex,
        key = _ref.key,
        rowIndex = _ref.rowIndex,
        style = _ref.style,
        columns = _ref.columns,
        onHover = _ref.onHover,
        rowStyleObject = _ref.rowStyleObject,
        rowClass = _ref.rowClass,
        hasHorizontalBorder = _ref.hasHorizontalBorder,
        hasVerticalBorder = _ref.hasVerticalBorder,
        isEven = _ref.isEven,
        hoveredColumn = _ref.hoveredColumn,
        hoveredRow = _ref.hoveredRow;
    return React.createElement(
      _styled.Cell,
      {
        hasHorizontalBorder: hasHorizontalBorder,
        hasVerticalBorder: hasVerticalBorder,
        className: rowClass,
        onMouseOver: function onMouseOver() {
          return onHover({ rowIndex: rowIndex, columnIndex: columnIndex });
        },
        isEven: isEven,
        hoveredColumn: hoveredColumn,
        hoveredRow: hoveredRow,
        key: key,
        style: _extends({}, rowStyleObject, style)
      },
      React.createElement(
        _styled.Span,
        null,
        data[rowIndex][columns[columnIndex].props.dataKey]
      )
    );
  };
};
exports.default = defaultCellRenderer;