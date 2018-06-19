'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styled = require('./styled');

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListContent = require('./ListContent');

var _ListContent2 = _interopRequireDefault(_ListContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.nodes = new Map(), _this.setNodes = function (i, el) {
      _this.nodes.set(i, el);
    }, _this.dispatchClose = function (level) {
      _this.nodes.forEach(function (node) {
        if (node.props.level === level && node.state.open) {
          node.startAnimation();
        }
      });
    }, _this.renderChildren = function () {
      return React.Children.map(_this.props.children, function (child, i) {
        return React.cloneElement(child, {
          ref: function ref(node) {
            _this.setNodes(i, node);
          },
          themed: _this.props.themed,
          collapse: _this.props.collapse,
          border: _this.props.border,
          dispatchClose: _this.dispatchClose
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          themed = _props.themed,
          border = _props.border,
          collapse = _props.collapse,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['themed', 'border', 'collapse', 'children']);

      return React.createElement(
        _styled.ListWrapper,
        _extends({}, props, {
          themed: themed,
          border: border,
          collapse: collapse
        }),
        this.renderChildren()
      );
    }
  }]);

  return List;
}(React.Component);

List.defaultProps = {
  themed: 'light',
  border: false,
  icon: null,
  collapse: false
};
List.Item = _ListItem2.default;
List.Content = _ListContent2.default;
exports.default = List;