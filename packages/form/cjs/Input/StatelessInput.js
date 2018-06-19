'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      left: 0;\n      color: ', ';\n    '], ['\n      left: 0;\n      color: ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    right: 0;\n    cursor: pointer;\n\n    &:hover {\n      color: ', ';\n    }\n  '], ['\n    right: 0;\n    cursor: pointer;\n\n    &:hover {\n      color: ', ';\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  vertical-align: middle;\n  height: 1.93267rem;\n  ', ';\n  ', ';\n'], ['\n  vertical-align: middle;\n  height: 1.93267rem;\n  ', ';\n  ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: calc(50% - 0.5em);\n  width: 2.2em;\n  text-align: center;\n  z-index: 7;\n  color: ', ';\n  ', ';\n'], ['\n  position: absolute;\n  top: calc(50% - 0.5em);\n  width: 2.2em;\n  text-align: center;\n  z-index: 7;\n  color: ', ';\n  ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactIcon = require('@vital-ui/react-icon');

var _reactIcon2 = _interopRequireDefault(_reactIcon);

var _FieldBase = require('../components/FieldBase');

var _FieldBase2 = _interopRequireDefault(_FieldBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var iconPositionStyle = function iconPositionStyle(_ref) {
  var iconPosition = _ref.iconPosition,
      theme = _ref.theme;

  if (iconPosition === 'left') {
    return (0, _styledComponents.css)(_templateObject, theme.form.inputIcon.leftColor);
  }
  return (0, _styledComponents.css)(_templateObject2, theme.form.inputIcon.rightHoverColor);
};

var inputPaddingStyle = function inputPaddingStyle(props) {
  if (props.icon) {
    if (props.iconPosition === 'right') {
      return 'padding-right: 2.2em;';
    }
    return 'padding-left: 2.2em;';
  }
  return null;
};

var Root = _styledComponents2.default.div(_templateObject3);

var InputElement = _styledComponents2.default.input(_templateObject4, _FieldBase2.default, inputPaddingStyle);

var InputIcon = (0, _styledComponents2.default)(_reactIcon2.default)(_templateObject5, function (_ref2) {
  var theme = _ref2.theme;
  return theme.form.inputIcon.color;
}, function (props) {
  return iconPositionStyle(props);
});

var StatelessInput = function (_React$Component) {
  _inherits(StatelessInput, _React$Component);

  function StatelessInput() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, StatelessInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = StatelessInput.__proto__ || Object.getPrototypeOf(StatelessInput)).call.apply(_ref3, [this].concat(args))), _this), _this.focus = function () {
      _this.input.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatelessInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          defaultValue = _props.defaultValue,
          type = _props.type,
          placeholder = _props.placeholder,
          disabled = _props.disabled,
          alarm = _props.alarm,
          warning = _props.warning,
          autoFocus = _props.autoFocus,
          spellCheck = _props.spellCheck,
          icon = _props.icon,
          _props$iconPosition = _props.iconPosition,
          iconPosition = _props$iconPosition === undefined ? 'right' : _props$iconPosition;

      return React.createElement(
        Root,
        null,
        React.createElement(InputElement, _extends({
          defaultValue: defaultValue,
          type: type,
          placeholder: placeholder,
          disabled: disabled,
          alarm: alarm,
          warning: warning,
          autoFocus: autoFocus,
          spellCheck: spellCheck,
          iconPosition: iconPosition,
          innerRef: function innerRef(input) {
            _this2.input = input;
          }
        }, this.props)),
        icon && React.createElement(InputIcon, { iconPosition: iconPosition, name: icon })
      );
    }
  }]);

  return StatelessInput;
}(React.Component);

StatelessInput.defaultProps = {
  type: 'text',
  placeholder: null,
  icon: null,
  iconPosition: 'right',
  defaultValue: '',
  disabled: false,
  alarm: false,
  warning: false,
  autoFocus: false,
  spellCheck: false
};
exports.default = StatelessInput;