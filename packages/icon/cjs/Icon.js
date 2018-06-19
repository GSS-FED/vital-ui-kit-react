'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withIcon = require('./components/withIcon');

var _withIcon2 = _interopRequireDefault(_withIcon);

var _selection = require('./selection.json');

var _selection2 = _interopRequireDefault(_selection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * 
                                                                                                                                                                                                                              * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                                                                                              * MIT license
                                                                                                                                                                                                                              */

function getIcon(iconName, iconPaths) {
  var icon = iconPaths.icons.find(function (i) {
    return i.icon.tags.indexOf(iconName) > -1;
  });
  if (icon) {
    return {
      path: icon.icon.paths.join(' '),
      width: icon.icon.width
    };
  }
  // eslint-disable-next-line
  console.warn('Could not find the name of the Icon: ' + iconName + '. Please check your icons file tags.');
  return null;
}

/**
 * @render react
 * @name Icon
 * @description Icon based on icomoon selection.json, render svg path base on the name of tags.
 * @example
 * <Icon
 *  size={12}
 *  color="#FED"
 *  name="wifi"
 * />
 */

var Icon = function Icon(_ref) {
  var name = _ref.name,
      size = _ref.size,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$icon = _ref.icon,
      icon = _ref$icon === undefined ? _selection2.default : _ref$icon,
      props = _objectWithoutProperties(_ref, ['name', 'size', 'onClick', 'color', 'icon']);

  var iconInfo = getIcon(name, icon);
  if (!iconInfo) {
    return null;
  }
  return _react2.default.createElement(
    'svg',
    _extends({
      width: size,
      height: size,
      viewBox: '0 0 ' + (iconInfo.width || 1024) + ' 1024',
      onClick: onClick
    }, props),
    iconInfo.path && _react2.default.createElement('path', { d: iconInfo.path, fill: color })
  );
};

Icon.defaultProps = {
  size: 16,
  icon: _selection2.default,
  color: 'currentColor',
  onClick: function onClick() {}
};

exports.default = (0, _withIcon2.default)(Icon);