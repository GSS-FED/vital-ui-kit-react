'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorPaletteGenerator = exports.primaryPaletteGenerator = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _polished = require('polished');

var primaryPaletteGenerator = exports.primaryPaletteGenerator = function primaryPaletteGenerator(color) {
  return {
    primary100: (0, _polished.lighten)(0.4, color),
    primary200: (0, _polished.lighten)(0.3, color),
    primary300: (0, _polished.lighten)(0.2, color),
    primary400: (0, _polished.lighten)(0.1, color),
    primary500: color,
    primary600: (0, _polished.darken)(0.1, color),
    primary700: (0, _polished.darken)(0.2, color),
    primary800: (0, _polished.darken)(0.3, color),
    primary900: (0, _polished.darken)(0.4, color),
    primary: color
  };
};

var secondaryPaletteGenerator = function secondaryPaletteGenerator(hue) {
  return {
    secondary100: (0, _polished.toColorString)({
      hue: hue,
      saturation: 280.0000000000002 / 360,
      lightness: 353.64705882352945 / 360
    }),
    secondary200: (0, _polished.toColorString)({
      hue: hue,
      saturation: 252.0000000000003 / 360,
      lightness: 345.88235294117646 / 360
    }),
    secondary300: (0, _polished.toColorString)({
      hue: hue,
      saturation: 225.0000000000002 / 360,
      lightness: 326.11764705882354 / 360
    }),
    secondary400: (0, _polished.toColorString)({
      hue: hue,
      saturation: 177.72151898734157 / 360,
      lightness: 304.2352941176471 / 360
    }),
    secondary500: (0, _polished.toColorString)({
      hue: hue,
      saturation: 152.2147651006712 / 360,
      lightness: 254.82352941176472 / 360
    }),
    secondary600: (0, _polished.toColorString)({
      hue: hue,
      saturation: 115.53488372093027 / 360,
      lightness: 208.23529411764704 / 360
    }),
    secondary700: (0, _polished.toColorString)({
      hue: hue,
      saturation: 134.1818181818182 / 360,
      lightness: 155.29411764705884 / 360
    }),
    secondary800: (0, _polished.toColorString)({
      hue: hue,
      saturation: 181.0650887573965 / 360,
      lightness: 119.29411764705883 / 360
    }),
    secondary900: (0, _polished.toColorString)({
      hue: hue,
      saturation: 198.8059701492537 / 360,
      lightness: 94.58823529411765 / 360
    }),
    secondary: (0, _polished.toColorString)({
      hue: hue,
      saturation: 152.2147651006712 / 360,
      lightness: 254.82352941176472 / 360
    })
  };
};

var colorPaletteGenerator = exports.colorPaletteGenerator = function colorPaletteGenerator(color) {
  var primary = primaryPaletteGenerator(color);
  var hsl = (0, _polished.parseToHsl)(color);
  var secondary = secondaryPaletteGenerator(hsl.hue);
  return _extends({}, primary, secondary);
};