'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 7;\n  float: left;\n  width: 100%;\n  padding: 10px 0;\n  margin: 8px 0 0;\n  font-size: 1rem;\n  text-align: left;\n  list-style: none;\n  background-color: ', ';\n  background-clip: padding-box;\n  border: 1px solid ', ';\n  border-radius: 4px;\n'], ['\n  display: block;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 7;\n  float: left;\n  width: 100%;\n  padding: 10px 0;\n  margin: 8px 0 0;\n  font-size: 1rem;\n  text-align: left;\n  list-style: none;\n  background-color: ', ';\n  background-clip: padding-box;\n  border: 1px solid ', ';\n  border-radius: 4px;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _DroplistItem = require('./DroplistItem');

var _DroplistItem2 = _interopRequireDefault(_DroplistItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.ul(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.form.borderColor;
});

var Droplist = function Droplist(_ref3) {
  var items = _ref3.items,
      onClick = _ref3.onClick;
  return React.createElement(
    Root,
    null,
    items.map(function (item, i) {
      return React.createElement(_DroplistItem2.default, {
        key: item.id || i,
        onClick: onClick,
        item: item
      });
    })
  );
};

exports.default = Droplist;