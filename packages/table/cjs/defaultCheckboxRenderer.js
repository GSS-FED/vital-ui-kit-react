'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactForm = require('@vital-ui/react-form');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var defaultCheckboxRenderer = function defaultCheckboxRenderer(_ref) {
  var handleCheckboxChange = _ref.handleCheckboxChange,
      rowIndex = _ref.rowIndex,
      selectedIndex = _ref.selectedIndex;

  var checked = selectedIndex.indexOf(rowIndex) >= 0;
  return React.createElement(_reactForm.Checkbox, {
    onChange: function onChange() {
      return handleCheckboxChange({ rowIndex: rowIndex, checked: checked });
    },
    checked: checked
  });
};

exports.default = defaultCheckboxRenderer;