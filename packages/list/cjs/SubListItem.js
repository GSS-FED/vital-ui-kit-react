'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SubListItem = function SubListItem(_ref) {
  var children = _ref.children,
      level = _ref.level,
      isChildren = _ref.isChildren,
      themed = _ref.themed;

  var renderChildren = function renderChildren() {
    return React.Children.map(children, function (child) {
      return React.cloneElement(child, {
        level: level,
        isChildren: isChildren,
        themed: themed
      });
    });
  };
  return React.createElement(
    React.Fragment,
    null,
    renderChildren()
  );
}; /**
    * 
    * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
    * MIT license
    */

exports.default = SubListItem;