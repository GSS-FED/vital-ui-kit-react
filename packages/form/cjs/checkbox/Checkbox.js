'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 15px;\n  cursor: pointer;\n  margin-right: 5px;\n  &:hover {\n    > span:first-child {\n      box-shadow: ', ';\n    }\n  }\n'], ['\n  font-size: 15px;\n  cursor: pointer;\n  margin-right: 5px;\n  &:hover {\n    > span:first-child {\n      box-shadow: ', ';\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  width: 1.066rem;\n  height: 1.066rem;\n  border: ', ';\n  border-radius: ', ';\n  background-color: ', ';\n  transition: ', ';\n  margin: -2px 0.6em 0 0;\n  vertical-align: middle;\n\n  border-color: ', ';\n'], ['\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  width: 1.066rem;\n  height: 1.066rem;\n  border: ', ';\n  border-radius: ', ';\n  background-color: ', ';\n  transition: ', ';\n  margin: -2px 0.6em 0 0;\n  vertical-align: middle;\n\n  border-color: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: none;\n'], ['\n  display: none;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  opacity: ', ';\n  transform: ', ';\n  pointer-events: none;\n  transition: all 120ms ease-out;\n'], ['\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  opacity: ', ';\n  transform: ', ';\n  pointer-events: none;\n  transition: all 120ms ease-out;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _reactIcon = require('@vital-ui/react-icon');

var _reactIcon2 = _interopRequireDefault(_reactIcon);

var _CheckboxGroup = require('./CheckboxGroup');

var _CheckboxGroup2 = _interopRequireDefault(_CheckboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var Root = _styledComponents2.default.label(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return '0 0 0 2px ' + (0, _polished.rgba)(theme.primary, 0.2);
});
var Label = _styledComponents2.default.span(_templateObject2, function (_ref2) {
  var theme = _ref2.theme;
  return theme.checkbox.label.color;
});

var Box = _styledComponents2.default.span(_templateObject3, function (_ref3) {
  var theme = _ref3.theme;
  return '1px solid ' + theme.checkbox.borderColor;
}, function (props) {
  return props.round ? '50%' : '2px';
}, function (_ref4) {
  var checked = _ref4.checked,
      round = _ref4.round,
      theme = _ref4.theme;
  return theme.checkbox.bg(checked && round);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.defaultTransition;
}, function (_ref6) {
  var checked = _ref6.checked,
      theme = _ref6.theme;
  return checked ? theme.checkbox.checkedBorderColor : '';
});

var Input = _styledComponents2.default.input(_templateObject4);

var IconWrapper = _styledComponents2.default.div(_templateObject5, function (_ref7) {
  var checked = _ref7.checked;
  return checked ? 1 : 0;
}, function (_ref8) {
  var checked = _ref8.checked;
  return checked ? 'scale(1)' : 'scale(0)';
});

function iconColor(round, disabled, theme) {
  if (disabled) {
    return theme.checkbox.icon.disabledColor;
  }
  if (round) {
    return theme.checkbox.icon.roundColor;
  }
  return theme.checkbox.icon.color;
}

/** @render react
 * @name Checkbox
 * @description Checkbox components with group
 * @example
 * <Checkbox.Group>
 *  <Checkbox
 *    round
 *    label="checkbox 1"
 *  />
 *  <Checkbox
 *    round
 *    label="checkbox 2"
 *  />
 *  <Checkbox
 *    round
 *    label="checkbox 3"
 *  />
 * </Checkbox.Group>
 */

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _ref9;

    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref9 = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref9, [this].concat(args))), _this), _this.state = {
      checked: 'checked' in _this.props ? _this.props.checked : _this.props.defaultChecked || false
    }, _this.handleChange = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          props = _objectWithoutProperties(_this$props, ['disabled']);

      if (disabled) return;
      _this.props.onChange({
        target: _extends({}, props, {
          checked: e.target.checked
        }),
        stopPopagation: function stopPopagation() {
          e.stopPopagation();
        },
        preventDefault: function preventDefault() {
          e.preventDefault();
        },

        nativeEvent: e.nativeEvent
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          defaultChecked = _props.defaultChecked,
          disabled = _props.disabled,
          icon = _props.icon,
          label = _props.label,
          name = _props.name,
          round = _props.round,
          theme = _props.theme,
          value = _props.value;


      var customIcon = icon && typeof icon !== 'string';

      return React.createElement(
        Root,
        this.props,
        React.createElement(
          Box,
          {
            checked: this.state.checked,
            disabled: disabled,
            round: round
          },
          React.createElement(
            IconWrapper,
            {
              checked: this.state.checked,
              disabled: disabled
            },
            customIcon || React.createElement(_reactIcon2.default, {
              name: icon || 'check',
              size: '12',
              color: iconColor(round, disabled, theme)
            })
          )
        ),
        React.createElement(
          Label,
          { checked: this.state.checked, disabled: disabled },
          React.createElement(Input, {
            type: 'checkbox',
            disabled: disabled,
            checked: this.state.checked,
            defaultChecked: defaultChecked,
            name: name,
            value: value,
            onChange: function onChange() {
              return _this2.handleChange;
            }
          }),
          label
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props) {
      if ('checked' in props) {
        return {
          checked: props.checked
        };
      }
      return null;
    }
  }]);

  return Checkbox;
}(React.Component);

Checkbox.defaultProps = {
  defaultChecked: false,
  disabled: false,
  round: false,
  icon: undefined
};
Checkbox.Group = _CheckboxGroup2.default;
exports.default = (0, _styledComponents.withTheme)(Checkbox);