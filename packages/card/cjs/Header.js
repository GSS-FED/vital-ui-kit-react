'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  box-sizing: border-box;\n  padding: 0.75rem 1.25rem;\n  border-bottom: ', ';\n  color: ', ';\n  font-size: 1.25rem;\n  min-height: 50px;\n  display: table;\n  width: 100%;\n'], ['\n  position: relative;\n  box-sizing: border-box;\n  padding: 0.75rem 1.25rem;\n  border-bottom: ', ';\n  color: ', ';\n  font-size: 1.25rem;\n  min-height: 50px;\n  display: table;\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  min-height: 183px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: ', ';\n  background-size: cover;\n  border-bottom: ', ';\n  color: ', ';\n  background-image: url(', ');\n\n  > h4 {\n    position: absolute;\n    bottom: 0;\n    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);\n    font-size: 1.424rem;\n    font-weight: normal;\n    margin-top: 1.424em;\n    margin-bottom: 1.424em;\n  }\n'], ['\n  min-height: 183px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: ', ';\n  background-size: cover;\n  border-bottom: ', ';\n  color: ', ';\n  background-image: url(', ');\n\n  > h4 {\n    position: absolute;\n    bottom: 0;\n    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);\n    font-size: 1.424rem;\n    font-weight: normal;\n    margin-top: 1.424em;\n    margin-bottom: 1.424em;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: table-cell;\n  vertical-align: middle;\n'], ['\n  display: table-cell;\n  vertical-align: middle;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 60px;\n  text-align: right;\n'], ['\n  width: 60px;\n  text-align: right;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBadge = require('@vital-ui/react-badge');

var _reactBadge2 = _interopRequireDefault(_reactBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.border;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.card.color;
});

var RootWithImage = (0, _styledComponents2.default)(Root)(_templateObject2, function (_ref3) {
  var theme = _ref3.theme;
  return theme.grey300;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.border;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.white;
}, function (_ref6) {
  var image = _ref6.image;
  return image;
});

var Cell = _styledComponents2.default.div(_templateObject3);

var BadgeCell = (0, _styledComponents2.default)(Cell)(_templateObject4);

var Header = function Header(_ref7) {
  var children = _ref7.children,
      image = _ref7.image,
      title = _ref7.title,
      badge = _ref7.badge,
      titleStyle = _ref7.titleStyle,
      props = _objectWithoutProperties(_ref7, ['children', 'image', 'title', 'badge', 'titleStyle']);

  if (image) {
    return React.createElement(
      RootWithImage,
      _extends({ image: image }, props),
      React.createElement(
        'h4',
        { style: titleStyle },
        title
      ),
      children
    );
  }

  return React.createElement(
    Root,
    props,
    title && React.createElement(
      Cell,
      { style: titleStyle },
      title
    ),
    badge && React.createElement(
      BadgeCell,
      null,
      React.createElement(_reactBadge2.default, { label: badge })
    ),
    children
  );
};

Header.defaultProps = {
  title: null,
  image: null,
  badge: null,
  titleStyle: null
};

exports.default = Header;