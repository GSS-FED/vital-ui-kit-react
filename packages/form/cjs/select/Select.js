'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  user-select: none;\n  position: relative;\n'], ['\n  user-select: none;\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  position: relative;\n  display: ', ';\n  margin: 0;\n  padding: calc(0.533rem - 1px) 1.066rem;\n  border-radius: 4px;\n  font-size: 1rem;\n  line-height: 1;\n  height: 1.93267rem;\n  box-sizing: border-box;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  color: ', ';\n  border: 1px solid ', ';\n  z-index: 5;\n  outline: 0;\n  text-align: left;\n'], ['\n  width: 100%;\n  position: relative;\n  display: ', ';\n  margin: 0;\n  padding: calc(0.533rem - 1px) 1.066rem;\n  border-radius: 4px;\n  font-size: 1rem;\n  line-height: 1;\n  height: 1.93267rem;\n  box-sizing: border-box;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  color: ', ';\n  border: 1px solid ', ';\n  z-index: 5;\n  outline: 0;\n  text-align: left;\n']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: ', ';\n'], ['\n  color: ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactClickOutside = require('react-click-outside');

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

var _reactIcon = require('@vital-ui/react-icon');

var _reactIcon2 = _interopRequireDefault(_reactIcon);

var _Droplist = require('./Droplist');

var _Droplist2 = _interopRequireDefault(_Droplist);

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
var SelectButton = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.fillToContainer ? 'block' : 'inline-block';
}, function (_ref) {
  var theme = _ref.theme;
  return theme.select.button.color;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.form.borderColor;
});

var Selector = _styledComponents2.default.span(_templateObject3);

var Placeholder = (0, _styledComponents2.default)(Selector)(_templateObject4, function (_ref3) {
  var theme = _ref3.theme;
  return theme.form.placeholder;
});

/**
 * @render react
 * @name Select
 * @description select element
 */
var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
      isOpen: false,
      selectedItem: null
    }, _this.onSelect = function (item) {
      _this.setState({ selectedItem: item });
      _this.onToggle(false);
    }, _this.onToggle = function (value) {
      _this.setState({ isOpen: value });
    }, _this.renderSelect = function () {
      if (!_this.state.selectedItem) {
        return React.createElement(
          Placeholder,
          null,
          _this.props.placeholder
        );
      }
      return React.createElement(
        Selector,
        null,
        _this.state.selectedItem.label || _this.state.selectedItem.content
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'handleClickOutside',
    value: function handleClickOutside() {
      this.onToggle(false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        Root,
        {
          innerRef: function innerRef(ref) {
            _this2.wrapperNode = ref;
          }
        },
        React.createElement(
          SelectButton,
          _extends({
            onClick: function onClick() {
              return _this2.onToggle(!_this2.state.isOpen);
            },
            fillToContainer: this.props.fillToContainer
          }, this.props),
          this.renderSelect(),
          React.createElement(_reactIcon2.default, {
            style: { float: 'right' },
            name: 'caret-down',
            size: '15'
          })
        ),
        this.state.isOpen && React.createElement(_Droplist2.default, {
          onClick: this.onSelect,
          items: this.props.items
        })
      );
    }
  }]);

  return Select;
}(React.Component);

Select.defaultProps = {
  fillToContainer: true,
  placeholder: ''
};
exports.default = (0, _reactClickOutside2.default)(Select);