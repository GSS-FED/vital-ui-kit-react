'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var Root = _styledComponents2.default.div(_templateObject);

/**
 * @render react
 * @name Radio
 * @description Group of radio buttons
 * @example
 * <RadioGroup items={[{name: 'color', value: 'red', label: 'Red'}, {name: 'color', value: 'blue', label: 'Blue', defaultChecked: true}, {name: 'color', value:'yello', label: 'Yellow'}]} />
 */
var RadioGroup = function RadioGroup(_ref) {
  var isDisabled = _ref.isDisabled,
      items = _ref.items,
      onRadioChange = _ref.onRadioChange,
      props = _objectWithoutProperties(_ref, ['isDisabled', 'items', 'onRadioChange']);

  return React.createElement(
    Root,
    null,
    items.map(function (item) {
      return React.createElement(_Radio2.default, _extends({
        isDisabled: isDisabled
      }, item, {
        key: item.value
      }, props, {
        onChange: onRadioChange
      }));
    })
  );
};

RadioGroup.defaultProps = {
  isDisabled: false
};

exports.default = RadioGroup;