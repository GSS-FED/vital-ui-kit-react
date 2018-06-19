'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  z-index: 10000;\n  ', ';\n'], ['\n  position: fixed;\n  z-index: 10000;\n  ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactUtils = require('@vital-ui/react-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * 
                                                                                                                                                   * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                   * MIT license
                                                                                                                                                   */

var Root = _styledComponents2.default.div(_templateObject, _reactUtils.transitionBase);

var ModalWrapper = function (_React$Component) {
  _inherits(ModalWrapper, _React$Component);

  function ModalWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ModalWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.getWidth = function () {
      _this.modal.style.top = (_this.props.windowHeight - _this.modal.firstChild.offsetHeight) / 2 + 'px';
      _this.modal.style.left = (_this.props.windowWidth - _this.modal.firstChild.offsetWidth) / 2 + 'px';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ModalWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getWidth();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (snapshot !== null && this.modal) {
        this.modal.style.top = snapshot.modalTop;
        this.modal.style.left = snapshot.modalLeft;
      }
    }
  }, {
    key: 'getSnapshotBeforeUpdate',
    value: function getSnapshotBeforeUpdate(nextProps) {
      return {
        modalTop: (nextProps.windowHeight - this.modal.firstChild.offsetHeight) / 2 + 'px',
        modalLeft: (nextProps.windowWidth - this.modal.firstChild.offsetWidth) / 2 + 'px'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        Root,
        {
          innerRef: function innerRef(s) {
            _this2.modal = s;
          }
        },
        React.Children.only(this.props.children)
      );
    }
  }]);

  return ModalWrapper;
}(React.Component);

exports.default = ModalWrapper;