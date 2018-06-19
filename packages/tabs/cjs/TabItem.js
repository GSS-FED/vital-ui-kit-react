'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding: 2px 8px;\n  font-size: 0.75rem;\n  border-radius: 4.975rem;\n  margin: 0 -5px 0 4px;\n'], ['\n  padding: 2px 8px;\n  font-size: 0.75rem;\n  border-radius: 4.975rem;\n  margin: 0 -5px 0 4px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  padding: 5px 20px 4px;\n  line-height: 1.4;\n  font-size: 1rem;\n  color: ', ';\n  background-color: ', ';\n  border-radius: 4px 4px 0 0;\n  margin-right: 2px;\n  cursor: pointer;\n\n  ', ';\n'], ['\n  display: inline-block;\n  padding: 5px 20px 4px;\n  line-height: 1.4;\n  font-size: 1rem;\n  color: ', ';\n  background-color: ', ';\n  border-radius: 4px 4px 0 0;\n  margin-right: 2px;\n  cursor: pointer;\n\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n      color: ', ';\n      background-color: ', ';\n    '], ['\n      color: ', ';\n      background-color: ', ';\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  vertical-align: middle;\n  display: inline-block;\n'], ['\n  vertical-align: middle;\n  display: inline-block;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: -1px;\n  margin-bottom: 1px;\n'], ['\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: -1px;\n  margin-bottom: 1px;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBadge = require('@vital-ui/react-badge');

var _reactBadge2 = _interopRequireDefault(_reactBadge);

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

var TabBadge = (0, _styledComponents2.default)(_reactBadge2.default)(_templateObject);

var Root = _styledComponents2.default.div(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.tab.item.color;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.tab.item.bg;
}, function (_ref3) {
  var current = _ref3.current,
      theme = _ref3.theme;
  return current && (0, _styledComponents.css)(_templateObject3, theme.tab.item.current.color, theme.tab.item.current.bg);
});

var Span = _styledComponents2.default.span(_templateObject4);

var Label = Span.extend(_templateObject5);

var TabItem = function (_React$Component) {
  _inherits(TabItem, _React$Component);

  function TabItem() {
    _classCallCheck(this, TabItem);

    return _possibleConstructorReturn(this, (TabItem.__proto__ || Object.getPrototypeOf(TabItem)).apply(this, arguments));
  }

  _createClass(TabItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          current = _props.current,
          onTabChange = _props.onTabChange,
          index = _props.index,
          label = _props.label,
          badge = _props.badge,
          panel = _props.panel,
          props = _objectWithoutProperties(_props, ['current', 'onTabChange', 'index', 'label', 'badge', 'panel']);

      return React.createElement(
        Root,
        _extends({
          current: current,
          onClick: function onClick() {
            return onTabChange(panel, index);
          }
        }, props),
        label && React.createElement(
          Label,
          null,
          label
        ),
        badge && React.createElement(TabBadge, { inverse: !current, label: badge })
      );
    }
  }]);

  return TabItem;
}(React.Component);

TabItem.defaultProps = {
  current: false,
  badge: null
};
exports.default = TabItem;