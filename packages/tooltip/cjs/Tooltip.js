'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  padding: 8px 16px;\n  text-align: center;\n  color: ', ';\n  background: ', ';\n  border-radius: 4px;\n'], ['\n  display: inline-block;\n  padding: 8px 16px;\n  text-align: center;\n  color: ', ';\n  background: ', ';\n  border-radius: 4px;\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rcTrigger = require('rc-trigger');

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

require('rc-trigger/assets/index.css');

require('./tooltip.css');

var _placements = require('./placements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var TooltipContent = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.tooltip.color;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.tooltip.bg;
});

var TooltipArrow = _styledComponents2.default.div(_templateObject2);

var Tooltip = function Tooltip(_ref3) {
  var children = _ref3.children,
      trigger = _ref3.trigger,
      overlay = _ref3.overlay,
      mouseEnterDelay = _ref3.mouseEnterDelay,
      mouseLeaveDelay = _ref3.mouseLeaveDelay,
      popupStyle = _ref3.popupStyle,
      popupTransitionName = _ref3.popupTransitionName,
      zIndex = _ref3.zIndex,
      popupAlign = _ref3.popupAlign,
      popupClassName = _ref3.popupClassName,
      destroyPopupOnHide = _ref3.destroyPopupOnHide,
      placement = _ref3.placement;

  var TooltipBase = function TooltipBase() {
    return [React.createElement(TooltipArrow, { className: 'rc-tooltip-arrow', key: 'arrow' }), React.createElement(
      TooltipContent,
      _extends({ key: 'content' }, popupStyle),
      overlay
    )];
  };

  return React.createElement(
    _rcTrigger2.default,
    {
      popup: TooltipBase,
      action: trigger,
      mouseEnterDelay: mouseEnterDelay,
      mouseLeaveDelay: mouseLeaveDelay,
      popupStyle: popupStyle,
      popupTransitionName: popupTransitionName,
      zIndex: zIndex,
      popupAlign: popupAlign,
      popupClassName: popupClassName,
      destroyPopupOnHide: destroyPopupOnHide,
      popupPlacement: placement,
      builtinPlacements: _placements.placements
    },
    children
  );
};

Tooltip.defaultProps = {
  overlay: null,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0,
  popupStyle: {},
  popupTransitionName: '',
  zIndex: null,
  popupAlign: null,
  popupClassName: 'vital-popup',
  destroyPopupOnHide: false
};

exports.default = Tooltip;