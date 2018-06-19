'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 15px;\n  top: calc(50% - ', 'px);\n  pointer-events: none;\n  color: ', ';\n  transform: ', ';\n  transition: all 0.05s ease-in;\n  transform-origin: center center;\n'], ['\n  position: absolute;\n  right: 15px;\n  top: calc(50% - ', 'px);\n  pointer-events: none;\n  color: ', ';\n  transform: ', ';\n  transition: all 0.05s ease-in;\n  transform-origin: center center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  will-change: height;\n  background-color: ', ';\n  overflow: hidden;\n'], ['\n  will-change: height;\n  background-color: ', ';\n  overflow: hidden;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  text-align: right;\n  padding-right: ', ';\n'], ['\n  text-align: right;\n  padding-right: ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _popmotion = require('popmotion');

var _reactIcon = require('@vital-ui/react-icon');

var _reactIcon2 = _interopRequireDefault(_reactIcon);

var _styled = require('./styled');

var _reactBadge = require('@vital-ui/react-badge');

var _reactBadge2 = _interopRequireDefault(_reactBadge);

var _SubListItem = require('./SubListItem');

var _SubListItem2 = _interopRequireDefault(_SubListItem);

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

var ICON_SIZE = 10;

var Icon = (0, _styledComponents2.default)(_reactIcon2.default)(_templateObject, ICON_SIZE / 2, function (_ref) {
  var open = _ref.open,
      theme = _ref.theme;
  return open ? '' + theme.info : 'inherit';
}, function (props) {
  return props.open ? 'rotateZ(-180deg)' : 'rotateZ(0deg)';
});

var InnerWrapper = _styledComponents2.default.ul(_templateObject2, function (_ref2) {
  var theme = _ref2.theme;
  return theme.list.item.bg;
});

var BadgeWrapper = (0, _styledComponents2.default)(_styled.Title)(_templateObject3, function (props) {
  return props.hasIconRight ? '20px' : '0';
});

var ListItem = function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
      open: _this.props.open || false
    }, _this.onItemClick = function () {
      if (_this.child) {
        if (!!_this.props.collapse && !_this.state.open) {
          _this.props.dispatchClose(_this.props.level || 0);
        }
        _this.startAnimation();
        if (_this.props.onClick) {
          _this.props.onClick();
        }
      }
    }, _this.startAnimation = function () {
      var stylerBall = (0, _popmotion.styler)(_this.child);
      // Animation after state change
      if (!_this.state.open) {
        _this.child.style.display = '';
      }
      (0, _popmotion.tween)({
        from: { height: _this.state.open ? _this.child.clientHeight : 0 },
        to: { height: _this.state.open ? 0 : _this.child.clientHeight },
        duration: 200,
        ease: _this.state.open ? _popmotion.easing.easeIn : _popmotion.easing.easeOut
      }).start({
        update: stylerBall.set,
        complete: function complete() {
          _this.setState(function (prevState) {
            return {
              open: !prevState.open
            };
          }, function () {
            setTimeout(function () {
              if (!_this.state.open) {
                _this.child.style.display = 'none';
              }
              _this.child.style.height = '';
            }, 50);
          });
        }
      });
    }, _this.iconHandler = function () {
      return _this.props.children ? 'chevron-down' : 'chevron-right';
    }, _this.renderBadge = function () {
      return React.createElement(
        BadgeWrapper,
        {
          hasIconRight: _this.props.children || _this.props.hasLink
        },
        React.createElement(_reactBadge2.default, { label: _this.props.badge })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.child) {
        this.child.style.display = this.state.open ? '' : 'none';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          children = _props.children,
          hasLink = _props.hasLink,
          level = _props.level,
          themed = _props.themed,
          badge = _props.badge,
          border = _props.border;


      return React.createElement(
        _styled.List,
        null,
        React.createElement(
          _styled.TitleWrapper,
          {
            hasChildren: !!children,
            hasLink: hasLink,
            onClick: this.onItemClick,
            level: level,
            border: border,
            themed: themed
          },
          React.createElement(
            _styled.Title,
            null,
            title
          ),
          badge && this.renderBadge(),
          (children || hasLink) && React.createElement(Icon, {
            open: this.state.open,
            name: this.iconHandler(),
            size: ICON_SIZE
          })
        ),
        children && React.createElement(
          InnerWrapper,
          {
            innerRef: function innerRef(s) {
              _this2.child = s;
            }
          },
          React.createElement(
            _SubListItem2.default,
            {
              isChildren: !!children,
              level: level + 1,
              themed: themed
            },
            children
          )
        )
      );
    }
  }]);

  return ListItem;
}(React.Component);

ListItem.defaultProps = {
  children: null,
  level: 0,
  isChildren: false,
  open: false,
  badge: null,
  onClick: null
};
exports.default = ListItem;