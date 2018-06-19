'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  color: ', ';\n  font-size: 1rem;\n  position: relative;\n  z-index: 5;\n  display: ', ';\n  padding: 6px 22px 7px;\n  line-height: 1.3;\n  border-radius: 2.16667rem;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: ', ';\n  margin-right: ', ';\n\n  ', ';\n'], ['\n  background-color: ', ';\n  color: ', ';\n  font-size: 1rem;\n  position: relative;\n  z-index: 5;\n  display: ', ';\n  padding: 6px 22px 7px;\n  line-height: 1.3;\n  border-radius: 2.16667rem;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: ', ';\n  margin-right: ', ';\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      &:hover {\n        background-color: ', ';\n        color: ', ';\n      }\n\n      &:active {\n        background-color: ', ';\n        color: ', ';\n      }\n    '], ['\n      &:hover {\n        background-color: ', ';\n        color: ', ';\n      }\n\n      &:active {\n        background-color: ', ';\n        color: ', ';\n      }\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: -1px;\n  margin-bottom: 1px;\n  width: ', ';\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: -1px;\n  margin-bottom: 1px;\n  width: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin: 0 -5px 0 4px;\n  float: right;\n'], ['\n  display: inline-block;\n  margin: 0 -5px 0 4px;\n  float: right;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBadge = require('@vital-ui/react-badge');

var _reactBadge2 = _interopRequireDefault(_reactBadge);

var _PillsGroup = require('./PillsGroup');

var _PillsGroup2 = _interopRequireDefault(_PillsGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var textWidth = function textWidth(props) {
  if (props.vertical && props.badge) {
    return 'calc(100% - 40px)';
  }
  if (props.vertical) {
    return '100%';
  }
  return 'auto';
};

var Root = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme,
      selected = _ref.selected;
  return theme.pill.bg(selected);
}, function (_ref2) {
  var selected = _ref2.selected,
      theme = _ref2.theme;
  return theme.pill.color(selected);
}, function (props) {
  return props.vertical ? 'block' : 'inline-block';
}, function (props) {
  return props.vertical ? '0' : '10px';
}, function (props) {
  return props.vertical ? '0' : '10px';
}, function (_ref3) {
  var selected = _ref3.selected,
      theme = _ref3.theme;
  return !selected && (0, _styledComponents.css)(_templateObject2, theme.pill.hover.bg, theme.pill.hover.color, theme.pill.active.bg, theme.pill.active.color);
});

var Text = _styledComponents2.default.span(_templateObject3, function (props) {
  return textWidth(props);
});

var PillBadge = (0, _styledComponents2.default)(_reactBadge2.default)(_templateObject4);

/**
 * @render react
 * @name Pill
 * @description Group of Pills
 * @example
 *       <Pill.Group default={1}>
 *        <Pill id={1} label="Dashboard" badge="23" />
 *        <Pill id={2} label="Projects" badge="99+" />
 *        <Pill id={3} label="Issues" badge="6" />
 *        <Pill id={4} label="Reports" />
 *        <Pill id={5} label="User Center" />
 *      </Pill.Group>
 */

var Pill = function (_Component) {
  _inherits(Pill, _Component);

  function Pill() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, Pill);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = Pill.__proto__ || Object.getPrototypeOf(Pill)).call.apply(_ref4, [this].concat(args))), _this), _this.handleSelect = function () {
      _this.props.onSelect(_this.props.id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pill, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          vertical = _props.vertical,
          current = _props.current,
          badge = _props.badge,
          id = _props.id,
          label = _props.label,
          props = _objectWithoutProperties(_props, ['vertical', 'current', 'badge', 'id', 'label']);

      return _react2.default.createElement(
        Root,
        _extends({
          vertical: vertical,
          selected: current === id,
          onClick: this.handleSelect
        }, props),
        _react2.default.createElement(
          Text,
          { vertical: vertical, badge: badge },
          label
        ),
        badge && _react2.default.createElement(PillBadge, { label: badge })
      );
    }
  }]);

  return Pill;
}(_react.Component);

Pill.defaultProps = {
  badge: null,
  current: false,
  vertical: false
};
Pill.Group = _PillsGroup2.default;
exports.default = Pill;