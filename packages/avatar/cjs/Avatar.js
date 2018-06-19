'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: inline-block;\n'], ['\n  position: relative;\n  display: inline-block;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n  border-radius: ', ';\n  background-color: ', ';\n  box-sizing: border-box;\n'], ['\n  width: ', ';\n  height: ', ';\n  border-radius: ', ';\n  background-color: ', ';\n  box-sizing: border-box;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactTheme = require('@vital-ui/react-theme');

var _AvatarBadge = require('./AvatarBadge');

var _AvatarBadge2 = _interopRequireDefault(_AvatarBadge);

var _constants = require('./constants');

var _defaultAvatar = require('../assets/default-avatar.svg');

var _defaultAvatar2 = _interopRequireDefault(_defaultAvatar);

var _defaultAvatarO = require('../assets/default-avatar-o.svg');

var _defaultAvatarO2 = _interopRequireDefault(_defaultAvatarO);

var _defaultAvatarM = require('../assets/default-avatar-m.svg');

var _defaultAvatarM2 = _interopRequireDefault(_defaultAvatarM);

var _defaultAvatarF = require('../assets/default-avatar-f.svg');

var _defaultAvatarF2 = _interopRequireDefault(_defaultAvatarF);

var _defaultAvatarMO = require('../assets/default-avatar-m-o.svg');

var _defaultAvatarMO2 = _interopRequireDefault(_defaultAvatarMO);

var _defaultAvatarFO = require('../assets/default-avatar-f-o.svg');

var _defaultAvatarFO2 = _interopRequireDefault(_defaultAvatarFO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var Root = _styledComponents2.default.div(_templateObject);

var Image = _styledComponents2.default.img(_templateObject2, function (_ref) {
  var size = _ref.size;
  return _constants.avatarSizes[size].size;
}, function (_ref2) {
  var size = _ref2.size;
  return _constants.avatarSizes[size].size;
}, function (_ref3) {
  var size = _ref3.size,
      round = _ref3.round;
  return round ? '50%' : _constants.avatarSizes[size].borderRadius;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.grey200;
});

Image.defaultProps = {
  theme: _reactTheme.defaultTheme
};

/**
 * @render react
 * @name Avatar
 * @description Vital UI Kit Avatar Component
 * @example
 * <Avatar
 *  badge="99+"
 *  size="large"
 *  gender="male"
 *  round
 * />
 */

var Avatar = function Avatar(_ref5) {
  var src = _ref5.src,
      round = _ref5.round,
      size = _ref5.size,
      badge = _ref5.badge,
      outline = _ref5.outline,
      gender = _ref5.gender,
      containerStyle = _ref5.containerStyle,
      imageStyle = _ref5.imageStyle,
      badgeStyle = _ref5.badgeStyle,
      props = _objectWithoutProperties(_ref5, ['src', 'round', 'size', 'badge', 'outline', 'gender', 'containerStyle', 'imageStyle', 'badgeStyle']);

  var renderBadge = function renderBadge() {
    if (!badge) {
      return null;
    }

    return _react2.default.createElement(_AvatarBadge2.default, {
      label: badge,
      size: size,
      round: round,
      style: badgeStyle
    });
  };

  var renderDefaultAvatar = function renderDefaultAvatar() {
    if (src) {
      return src;
    }
    if (outline && gender) {
      if (gender === 'female') return _defaultAvatarFO2.default;
      if (gender === 'male') return _defaultAvatarMO2.default;
      return _defaultAvatarO2.default;
    }
    if (!outline && gender) {
      if (gender === 'female') return _defaultAvatarF2.default;
      if (gender === 'male') return _defaultAvatarM2.default;
      return _defaultAvatar2.default;
    }
    if (outline && !gender) {
      return _defaultAvatarO2.default;
    }
    return _defaultAvatar2.default;
  };

  return _react2.default.createElement(
    Root,
    _extends({ style: containerStyle }, props),
    _react2.default.createElement(Image, _extends({
      src: renderDefaultAvatar(),
      size: size,
      round: round,
      style: imageStyle
    }, props)),
    renderBadge()
  );
};

Avatar.defaultProps = {
  badge: null,
  src: null,
  gender: undefined,
  round: false,
  size: 'medium',
  outline: false,
  imageStyle: null,
  containerStyle: null,
  badgeStyle: null
};

exports.default = Avatar;