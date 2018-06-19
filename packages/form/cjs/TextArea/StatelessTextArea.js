'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  height: auto;\n  resize: ', ';\n'], ['\n  ', ';\n  height: auto;\n  resize: ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FieldBase = require('../components/FieldBase');

var _FieldBase2 = _interopRequireDefault(_FieldBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Area = _styledComponents2.default.textarea(_templateObject, _FieldBase2.default, function (props) {
  return props.resize ? 'auto' : 'none';
});

// TODO: Auto expand

var StatelessTextArea = function (_React$Component) {
  _inherits(StatelessTextArea, _React$Component);

  function StatelessTextArea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatelessTextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatelessTextArea.__proto__ || Object.getPrototypeOf(StatelessTextArea)).call.apply(_ref, [this].concat(args))), _this), _this.focus = function () {
      _this.input.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatelessTextArea, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          minRows = _props.minRows,
          resize = _props.resize,
          disabled = _props.disabled,
          spellCheck = _props.spellCheck,
          autoFocus = _props.autoFocus,
          maxLength = _props.maxLength,
          placeholder = _props.placeholder,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          id = _props.id;

      return React.createElement(Area, _extends({
        rows: minRows,
        resize: resize,
        disabled: disabled,
        spellCheck: spellCheck,
        autoFocus: autoFocus,
        maxLength: maxLength,
        placeholder: placeholder,
        defaultValue: defaultValue,
        onChange: onChange,
        id: id,
        ref: function ref(input) {
          _this2.input = input;
        }
      }, this.props));
    }
  }]);

  return StatelessTextArea;
}(React.Component);

StatelessTextArea.defaultProps = {
  minRows: 3,
  resize: false,
  disabled: false,
  placeholder: null,
  defaultValue: '',
  id: null,
  spellCheck: false,
  autoFocus: false,
  maxLength: null,
  alarm: false,
  warning: false,
  onChange: null
};
exports.default = StatelessTextArea;