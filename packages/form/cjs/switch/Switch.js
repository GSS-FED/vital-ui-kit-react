'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: none;\n\n  &:checked {\n    & + label {\n      background-color: ', ';\n      box-shadow: 0 0 0 1px\n        ', ';\n\n      div {\n        transform: translate3d(30px, 0, 0);\n        border-color: ', ';\n        box-shadow: 0 0 0 3px rgba(14, 134, 254, 0.3);\n      }\n    }\n  }\n\n  &:disabled {\n    & + label {\n      background-color: ', ';\n      cursor: not-allowed;\n      point-events: none;\n\n      div {\n        background-color: ', ';\n        box-shadow: none;\n      }\n    }\n  }\n'], ['\n  display: none;\n\n  &:checked {\n    & + label {\n      background-color: ', ';\n      box-shadow: 0 0 0 1px\n        ', ';\n\n      div {\n        transform: translate3d(30px, 0, 0);\n        border-color: ', ';\n        box-shadow: 0 0 0 3px rgba(14, 134, 254, 0.3);\n      }\n    }\n  }\n\n  &:disabled {\n    & + label {\n      background-color: ', ';\n      cursor: not-allowed;\n      point-events: none;\n\n      div {\n        background-color: ', ';\n        box-shadow: none;\n      }\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  width: 53px;\n  height: 24px;\n  border-radius: ', ';\n  background-color: ', ';\n  padding: 1px;\n  box-shadow: 0 0 0 1px\n    ', ';\n  cursor: pointer;\n'], ['\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  width: 53px;\n  height: 24px;\n  border-radius: ', ';\n  background-color: ', ';\n  padding: 1px;\n  box-shadow: 0 0 0 1px\n    ', ';\n  cursor: pointer;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 22px;\n  height: 22px;\n  border-radius: ', ';\n  background-color: #ffffff;\n  display: block;\n  box-shadow: 1px 0 0 1px rgba(196, 210, 235, 0.2);\n  transition: all 120ms ease-in;\n  box-sizing: border-box;\n  border: 1px solid ', ';\n\n  ', ';\n'], ['\n  width: 22px;\n  height: 22px;\n  border-radius: ', ';\n  background-color: #ffffff;\n  display: block;\n  box-shadow: 1px 0 0 1px rgba(196, 210, 235, 0.2);\n  transition: all 120ms ease-in;\n  box-sizing: border-box;\n  border: 1px solid ', ';\n\n  ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n      width: 36px;\n      height: 36px;\n      position: absolute;\n      top: -6px;\n      left: -6px;\n      text-align: center;\n      line-height: 36px;\n      font-size: 1.2rem;\n      color: ', ';\n    '], ['\n      width: 36px;\n      height: 36px;\n      position: absolute;\n      top: -6px;\n      left: -6px;\n      text-align: center;\n      line-height: 36px;\n      font-size: 1.2rem;\n      color: ', ';\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 3px;\n  right: 8px;\n  font-size: 13px;\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n  color: ', ';\n  text-align: center;\n  transition: all 300ms ease-in;\n  opacity: 1;\n  pointer-events: none;\n'], ['\n  position: absolute;\n  top: 3px;\n  right: 8px;\n  font-size: 13px;\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n  color: ', ';\n  text-align: center;\n  transition: all 300ms ease-in;\n  opacity: 1;\n  pointer-events: none;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: ', ';\n'], ['\n  display: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  display: ', ';\n  left: -20px;\n'], ['\n  display: ', ';\n  left: -20px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactIcon = require('@vital-ui/react-icon');

var _reactIcon2 = _interopRequireDefault(_reactIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var Root = _styledComponents2.default.div(_templateObject);

var Input = _styledComponents2.default.input(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.form.switch.checked;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.form.switch.checked;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.form.switch.checked;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.form.switch.disabled;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.form.switch.disabled;
});

var Label = _styledComponents2.default.label(_templateObject3, function (props) {
  return props.isRound ? '24px' : '4px';
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.form.switch.label.bg;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.form.switch.label.shadowColor;
});

var Btn = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.isRound ? '50%' : '4px';
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.form.borderColor;
}, function (_ref9) {
  var theme = _ref9.theme,
      icon = _ref9.icon;
  return icon && (0, _styledComponents.css)(_templateObject5, theme.form.switch.icon);
});

var Text = _styledComponents2.default.div(_templateObject6, function (_ref10) {
  var theme = _ref10.theme;
  return theme.form.switch.label.color;
});

var TextOff = (0, _styledComponents2.default)(Text)(_templateObject7, function (props) {
  return props.checked ? 'none' : 'block';
});

var TextOn = (0, _styledComponents2.default)(Text)(_templateObject8, function (props) {
  return props.checked ? 'block' : 'none';
});

/**
 * @render react
 * @name Switch
 * @description Toggle boolean value
 * @example
 * <Switch
 *  isRound
 * />
 */
var Switch = function (_Component) {
  _inherits(Switch, _Component);

  function Switch() {
    var _ref11;

    var _temp, _this, _ret;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref11 = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref11, [this].concat(args))), _this), _this.state = {
      checked: _this.props.defaultChecked || false
    }, _this.onCheck = function () {
      if (_this.props.disabled) return;
      _this.setState(function (prevState) {
        return { checked: !prevState.checked };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Switch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isRound = _props.isRound,
          disabled = _props.disabled,
          iconBtn = _props.iconBtn,
          iconLabelFront = _props.iconLabelFront,
          iconLabelBack = _props.iconLabelBack,
          theme = _props.theme;

      return _react2.default.createElement(
        Root,
        { onClick: this.onCheck },
        _react2.default.createElement(Input, {
          type: 'checkbox',
          checked: this.state.checked,
          disabled: disabled
        }),
        _react2.default.createElement(
          Label,
          { isRound: isRound, disabled: disabled },
          iconLabelFront && _react2.default.createElement(
            TextOn,
            { checked: this.state.checked },
            _react2.default.createElement(_reactIcon2.default, { name: iconLabelFront, color: theme.white })
          ),
          iconLabelBack && _react2.default.createElement(
            TextOff,
            { checked: this.state.checked },
            _react2.default.createElement(_reactIcon2.default, {
              name: iconLabelBack,
              color: theme.form.switch.icon
            })
          ),
          _react2.default.createElement(
            Btn,
            { icon: iconBtn, isRound: isRound, disabled: disabled },
            iconBtn && _react2.default.createElement(_reactIcon2.default, {
              color: this.state.checked ? theme.form.switch.checked : theme.form.switch.icon,
              name: iconBtn,
              size: '17'
            })
          )
        )
      );
    }
  }]);

  return Switch;
}(_react.Component);

Switch.defaultProps = {
  defaultChecked: false,
  isRound: false,
  disabled: false,
  iconBtn: null,
  iconLabelFront: null,
  iconLabelBack: null
};
exports.default = (0, _styledComponents.withTheme)(Switch);