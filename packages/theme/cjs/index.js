'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = exports.defaultComponentsTheme = exports.defaultVariables = exports.colorPaletteGenerator = exports.ThemeProvider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ThemeProvider = require('./ThemeProvider');

Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ThemeProvider).default;
  }
});

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _components = require('./theme/components');

var _components2 = _interopRequireDefault(_components);

var _helper = require('./theme/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.colorPaletteGenerator = _helper.colorPaletteGenerator;


var defaultTheme = _extends({}, _theme2.default, (0, _components2.default)(_theme2.default));

exports.defaultVariables = _theme2.default;
exports.defaultComponentsTheme = _components2.default;
exports.defaultTheme = defaultTheme;