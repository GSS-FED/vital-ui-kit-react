'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  width: auto;\n  border-radius: 4px 4px 0 0;\n  padding: 8px 0 0 12px;\n'], ['\n  background: ', ';\n  width: auto;\n  border-radius: 4px 4px 0 0;\n  padding: 8px 0 0 12px;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TabItem = require('./TabItem');

var _TabItem2 = _interopRequireDefault(_TabItem);

var _TabList = require('./TabList');

var _TabList2 = _interopRequireDefault(_TabList);

var _TabPanel = require('./TabPanel');

var _TabPanel2 = _interopRequireDefault(_TabPanel);

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

var Root = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.tab.bg;
});

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      activeIndex: _this.props.defaultActiveIndex || 0
    }, _this.onTabChange = function (panel, index) {
      var _this$props = _this.props,
          beforeTabChange = _this$props.beforeTabChange,
          afterTabChange = _this$props.afterTabChange;

      if (beforeTabChange) beforeTabChange(index);

      _this.setState({
        activeIndex: index
      }, function () {
        if (afterTabChange) afterTabChange(index);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          defaultActiveIndex = _props.defaultActiveIndex,
          props = _objectWithoutProperties(_props, ['children', 'defaultActiveIndex']);

      var activePanel = null;
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          Root,
          props,
          React.createElement(
            _TabList2.default,
            null,
            React.Children.map(this.props.children, function (child, i) {
              if (child.type === _TabItem2.default) {
                if (_this2.state.activeIndex === i) {
                  activePanel = child.props.panel;
                }
                return React.cloneElement(child, {
                  index: i,
                  current: _this2.state.activeIndex === i,
                  onTabChange: _this2.onTabChange
                });
              }
              return null;
            })
          )
        ),
        activePanel && React.createElement(
          'div',
          null,
          activePanel
        )
      );
    }
  }]);

  return Tabs;
}(React.Component);

Tabs.defaultProps = {
  defaultActiveIndex: 0,
  beforeTabChange: function beforeTabChange() {},
  afterTabChange: function afterTabChange() {}
};
Tabs.Tab = _TabItem2.default;
Tabs.Panel = _TabPanel2.default;
exports.default = Tabs;