'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: 100%;\n  white-space: nowrap;\n'], ['\n  position: relative;\n  width: 100%;\n  white-space: nowrap;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactPriorityNavigation = require('react-priority-navigation');

var _reactPriorityNavigation2 = _interopRequireDefault(_reactPriorityNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var Root = _styledComponents2.default.div(_templateObject);

var PillsGroup = function (_React$Component) {
  _inherits(PillsGroup, _React$Component);

  function PillsGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PillsGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PillsGroup.__proto__ || Object.getPrototypeOf(PillsGroup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      current: _this.props.default
    }, _this.onSelect = function (id) {
      _this.setState({
        current: id
      });
    }, _this.renderChildren = function () {
      return React.Children.map(_this.props.children, function (child) {
        return React.cloneElement(child, {
          current: _this.state.current,
          onSelect: _this.onSelect,
          vertical: _this.props.vertical
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PillsGroup, [{
    key: 'render',
    value: function render() {
      var vertical = this.props.vertical;

      if (vertical) {
        return React.createElement(
          Root,
          null,
          this.renderChildren()
        );
      }
      return React.createElement(
        _reactPriorityNavigation2.default,
        { vertical: vertical, current: this.state.current },
        this.renderChildren()
      );
    }
  }]);

  return PillsGroup;
}(React.Component);

PillsGroup.defaultProps = {
  default: null,
  vertical: false,
  current: null
};
exports.default = PillsGroup;