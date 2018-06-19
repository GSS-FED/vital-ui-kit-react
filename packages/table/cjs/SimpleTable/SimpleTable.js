'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactVirtualized = require('react-virtualized');

require('../style.css');

var _defaultRowRenderer = require('./defaultRowRenderer');

var _defaultRowRenderer2 = _interopRequireDefault(_defaultRowRenderer);

var _defaultHeaderRowRenderer = require('./defaultHeaderRowRenderer');

var _defaultHeaderRowRenderer2 = _interopRequireDefault(_defaultHeaderRowRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

_reactVirtualized.Table.propTypes.children = function () {};

var StyledTable = (0, _styledComponents2.default)(_reactVirtualized.Table)(_templateObject);

var SimpleTable = function (_React$Component) {
  _inherits(SimpleTable, _React$Component);

  function SimpleTable() {
    _classCallCheck(this, SimpleTable);

    return _possibleConstructorReturn(this, (SimpleTable.__proto__ || Object.getPrototypeOf(SimpleTable)).apply(this, arguments));
  }

  _createClass(SimpleTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hasHorizontalBorder = _props.hasHorizontalBorder,
          hasVerticalBorder = _props.hasVerticalBorder,
          striped = _props.striped,
          props = _objectWithoutProperties(_props, ['hasHorizontalBorder', 'hasVerticalBorder', 'striped']);

      return React.createElement(
        StyledTable,
        props,
        this.props.children
      );
    }
  }]);

  return SimpleTable;
}(React.Component);

SimpleTable.defaultProps = _extends({}, _reactVirtualized.Table.defaultProps, {
  rowRenderer: _defaultRowRenderer2.default,
  headerRowRenderer: _defaultHeaderRowRenderer2.default,
  hasHorizontalBorder: false,
  rowHeight: 40,
  striped: true,
  headerHeight: 40
});
SimpleTable.HeaderRowRenderer = _defaultHeaderRowRenderer2.default;
SimpleTable.RowRenderer = _defaultRowRenderer2.default;
exports.default = SimpleTable;