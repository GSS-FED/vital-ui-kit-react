'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  z-index: 9999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0.5;\n  backdrop-filter: blur(5px);\n'], ['\n  background-color: ', ';\n  z-index: 9999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0.5;\n  backdrop-filter: blur(5px);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ModalWrapper = require('./ModalWrapper');

var _ModalWrapper2 = _interopRequireDefault(_ModalWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var OverLay = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.grey800;
});

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      windowWidth: 0,
      windowHeight: 0
    }, _this.handleUpdate = function () {
      _this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleUpdate();
      window.addEventListener('resize', this.handleUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.container && this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
      }
      window.removeEventListener('resize', this.handleUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.show) {
        return null;
      }
      return _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: 'VitalModal' },
        _react2.default.createElement(OverLay, null),
        _react2.default.createElement(
          _ModalWrapper2.default,
          {
            windowWidth: this.state.windowWidth,
            windowHeight: this.state.windowHeight
          },
          _react2.default.Children.only(this.props.children)
        )
      ),
      // $FlowFixMe
      document.body);
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.defaultProps = {
  show: false
};
exports.default = Modal;