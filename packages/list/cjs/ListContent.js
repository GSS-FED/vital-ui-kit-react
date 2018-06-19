'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  font-size: 1.2rem;\n  border-left: ', ';\n  border-right: ', ';\n  padding: 0.928rem 2.856rem 0.928rem 1.428rem;\n  line-height: 1.866rem;\n'], ['\n  display: block;\n  font-size: 1.2rem;\n  border-left: ', ';\n  border-right: ', ';\n  padding: 0.928rem 2.856rem 0.928rem 1.428rem;\n  line-height: 1.866rem;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var ListContent = _styledComponents2.default.div(_templateObject, function (_ref) {
  var border = _ref.border,
      theme = _ref.theme;
  return border ? theme.border : 'none';
}, function (_ref2) {
  var border = _ref2.border,
      theme = _ref2.theme;
  return border ? theme.border : 'none';
});

exports.default = ListContent;