'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n'], ['\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 50px;\n'], ['\n  height: 50px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n'], ['\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 220px;\n  flex-shrink: 0;\n'], ['\n  width: 220px;\n  flex-shrink: 0;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n'], ['\n  width: 100%;\n  height: 100%;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

var Root = _styledComponents2.default.div(_templateObject);

var Header = _styledComponents2.default.div(_templateObject2);

var Main = _styledComponents2.default.div(_templateObject3);

var Sidebar = _styledComponents2.default.div(_templateObject4);

var Content = _styledComponents2.default.div(_templateObject5);

Header.displayName = 'Header';
Sidebar.displayName = 'Sidebar';
Content.displayName = 'Content';

/**
 * @render react
 * @name Layout
 * @desc Layout component contains Header, Sidebar and Content
 * @example
 * <Layout>
 *  <Layout.Header />
 *  <Layout.Sidebar />
 *  <Layout.Content />
 * </Layout>
 */
var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['children']);

      var childrenArray = React.Children.map(this.props.children, function (child) {
        return child;
      });
      var header = childrenArray.filter(function (child) {
        return child.type.displayName === 'Header';
      });
      var main = childrenArray.filter(function (child) {
        return child.type.displayName !== 'Header';
      });
      return React.createElement(
        Root,
        props,
        header && React.createElement(
          Header,
          null,
          header
        ),
        React.createElement(
          Main,
          null,
          main
        )
      );
    }
  }]);

  return Layout;
}(React.Component);

Layout.Header = Header;
Layout.Sidebar = Sidebar;
Layout.Content = Content;
exports.default = Layout;