'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: flex;\n  margin: auto;\n  box-sizing: border-box;\n  flex-direction: column;\n  word-break: break-word;\n  border-radius: 0.25rem;\n  overflow: hidden;\n  background-color: ', ';\n  box-shadow: ', ';\n  width: ', ';\n  height ', ';\n  border: ', ';\n'], ['\n  position: relative;\n  display: flex;\n  margin: auto;\n  box-sizing: border-box;\n  flex-direction: column;\n  word-break: break-word;\n  border-radius: 0.25rem;\n  overflow: hidden;\n  background-color: ', ';\n  box-shadow: ', ';\n  width: ', ';\n  height ', ';\n  border: ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _FooterButton = require('./FooterButton');

var _FooterButton2 = _interopRequireDefault(_FooterButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var Root = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.card.bg;
}, function (_ref2) {
  var shadow = _ref2.shadow;
  return shadow ? '2px 2px 4px 0px #cfd8dc' : 'none';
}, function (_ref3) {
  var width = _ref3.width;
  return width;
}, function (_ref4) {
  var height = _ref4.height;
  return height;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.border;
});

/**
 * @render react
 * @name Card
 * @description Card Component with header, footer, buttons
 * @example
 * <Card width="300px" height="420px">
 *   <Card.Header image={"http://react.vitaluikit.com/static/media/card-header-pic.0080a766.png"} title="Title" />
 *   <Card.Container>Lorem ipsum dolor sit amet, sea oblique aliquam oportere ea, id dico interesset eam. Eu eum quem velit verterem, amet dicat quaeque ad est.</Card.Container>
 *    <Card.Footer>
 *      <Card.FooterButton>Cancel</Card.FooterButton>
 *      <Card.FooterButton primary>Confirm</Card.FooterButton>
 *    </Card.Footer>
 * </Card>
 */

var Card = function Card(_ref6) {
  var children = _ref6.children,
      width = _ref6.width,
      height = _ref6.height,
      shadow = _ref6.shadow,
      props = _objectWithoutProperties(_ref6, ['children', 'width', 'height', 'shadow']);

  return React.createElement(
    Root,
    _extends({ width: width, height: height, shadow: shadow }, props),
    children
  );
};

Card.defaultProps = {
  width: 'auto',
  height: 'auto',
  shadow: false
};

Card.Header = _Header2.default;
Card.Container = _Container2.default;
Card.Footer = _Footer2.default;
Card.FooterButton = _FooterButton2.default;

exports.default = Card;