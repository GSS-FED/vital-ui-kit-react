'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 0;\n'], ['\n  font-size: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 0.875rem;\n'], ['\n  font-size: 0.875rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 0.875rem;\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 0.875rem;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactIcon = require('@vital-ui/react-icon');

var _reactIcon2 = _interopRequireDefault(_reactIcon);

var _reactButton = require('@vital-ui/react-button');

var _reactButton2 = _interopRequireDefault(_reactButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var Root = _styledComponents2.default.ul(_templateObject);

var Button = (0, _styledComponents2.default)(_reactButton2.default)(_templateObject2);

var ListWrapper = _styledComponents2.default.li(_templateObject3);

function Item(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ['children', 'selected', 'onChange']);

  return React.createElement(
    ListWrapper,
    props,
    React.createElement(
      Button,
      { subtle: true, selected: selected, onChange: onChange },
      children
    )
  );
}

Item.defaultProps = {
  selected: false
};

/**
 * @render react
 * @name Pagination
 * @description display pages
 * @example
 * <Pagination
 *  pageSize={5}
 *  current={3}
 *  onChange={() => {}}
 * />
 */

var Pagination = function Pagination(_ref2) {
  var pageSize = _ref2.pageSize,
      current = _ref2.current,
      onChange = _ref2.onChange;
  return React.createElement(
    Root,
    null,
    React.createElement(
      Item,
      null,
      'First'
    ),
    React.createElement(
      Item,
      null,
      React.createElement(_reactIcon2.default, {
        style: { marginRight: '5px' },
        name: 'chevron-left',
        size: '12'
      }),
      'Prev'
    ),
    [].concat(_toConsumableArray(Array(pageSize).keys())).map(function (size) {
      return React.createElement(
        Item,
        {
          selected: size + 1 === current,
          key: size,
          onClick: onChange
        },
        size + 1
      );
    }),
    React.createElement(
      Item,
      null,
      'Next',
      React.createElement(_reactIcon2.default, {
        style: { marginLeft: '5px' },
        name: 'chevron-right',
        size: '12'
      })
    ),
    React.createElement(
      Item,
      null,
      'Last'
    )
  );
};

exports.default = Pagination;