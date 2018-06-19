'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  padding: 0.5em 1em 0.5em;\n  clear: both;\n  line-height: 1;\n  color: ', ';\n  white-space: nowrap;\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: none;\n    background-color: ', ';\n  }\n'], ['\n  display: block;\n  padding: 0.5em 1em 0.5em;\n  clear: both;\n  line-height: 1;\n  color: ', ';\n  white-space: nowrap;\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: none;\n    background-color: ', ';\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.li(_templateObject);

var Item = _styledComponents2.default.div(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.select.item.color;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.select.item.hoverBg;
});

var DroplistItem = function DroplistItem(_ref3) {
  var item = _ref3.item,
      onClick = _ref3.onClick;
  return React.createElement(
    Root,
    null,
    React.createElement(
      Item,
      { value: item.value, onClick: function (_onClick) {
          function onClick() {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function () {
          return onClick(item);
        }) },
      item.content
    )
  );
};

exports.default = DroplistItem;