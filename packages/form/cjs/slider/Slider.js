'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _reactIcon = require('@vital-ui/react-icon');

var _reactIcon2 = _interopRequireDefault(_reactIcon);

var _reactTooltip = require('@vital-ui/react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _styled = require('./styled');

var _track = require('./track');

var _track2 = _interopRequireDefault(_track);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @render react
 * @name Slider
 * @description Define the value by dragging the handle or side buttons
 * @example
 * <Slider
 *  size="large"
 *  hasButton
 *  value={50}
 *  max={100}
 *  min={0}
 *  step={5}
 * />
 */
var Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false,
      position: -_constants2.default[_this.props.size].handlerSize / 2,
      // limit of the handle drag
      limit: 0,
      // handle offset
      grab: 0,
      // cache the mouse down postion x
      startX: 0,
      value: _this.props.value || 0
    }, _this.start = 700, _this.timeout = undefined, _this.handleUpdate = function () {
      if (!_this.slider || !_this.track || !_this.handle) {
        return;
      }
      var trackWidth = _this.track.offsetWidth;
      var handleWith = _this.handle.offsetWidth;
      _this.setState(function (prevState) {
        return {
          limit: trackWidth - handleWith,
          grab: -handleWith / 2,
          position: _this.getPositionFromValue(prevState.value)
        };
      });
    }, _this.handleStart = function (e) {
      if (_this.props.disabled) return;
      if (_this.props.onChangeStart) _this.props.onChangeStart(e);
      _this.setState({
        active: true,
        startX: e.clientX
      });
      // $FlowFixMe
      document.addEventListener('mousemove', _this.handleDrag);
      // $FlowFixMe
      document.addEventListener('mouseup', _this.handleEnd);
    }, _this.handleTrack = function (e) {
      if (_this.props.disabled) return;
      e.stopPropagation();
      // $FlowFixMe
      var percentage = e.nativeEvent.offsetX / _this.track.clientWidth;
      var value = _this.props.step * Math.round(percentage * (_this.props.max - _this.props.min) / _this.props.step);
      _this.setState({ value: value });
      if (_this.props.onChange) _this.props.onChange(value, e);
    }, _this.handleDrag = function (e) {
      e.stopPropagation();
      var value = _this.getValueFromPosition(e.clientX);
      _this.setState({ value: value });
      if (_this.props.onChange) _this.props.onChange(value, e);
    }, _this.handleEnd = function (e) {
      if (_this.props.onChangeComplete) _this.props.onChangeComplete(e);
      _this.setState(function (prevState) {
        return {
          active: false,
          position: _this.getPositionFromValue(prevState.value)
        };
      });
      // $FlowFixMe
      document.removeEventListener('mousemove', _this.handleDrag);
      // $FlowFixMe
      document.removeEventListener('mouseup', _this.handleEnd);
    }, _this.handleIncrease = function () {
      if (_this.props.disabled) return;
      _this.increaseByStep();
      _this.timeout = setTimeout(_this.handleIncrease, _this.start);
      _this.start = _this.start / 2;
    }, _this.handleDecrease = function () {
      if (_this.props.disabled) return;
      _this.decreaseByStep();
      _this.timeout = setTimeout(_this.handleDecrease, _this.start);
      _this.start = _this.start / 2;
    }, _this.increaseByStep = function () {
      _this.setState(function (prevState) {
        return {
          value: _this.clamp(prevState.value + _this.props.step, _this.props.max, _this.props.min)
        };
      });
    }, _this.decreaseByStep = function () {
      _this.setState(function (prevState) {
        return {
          value: _this.clamp(prevState.value - _this.props.step, _this.props.max, _this.props.min)
        };
      });
    }, _this.getPositionFromValue = function (value) {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max;
      var limit = _this.state.limit;

      var diffMaxMin = max - min;
      var diffValMin = value - min;
      var percentage = diffValMin / diffMaxMin;
      var pos = Math.round(percentage * limit);
      return pos;
    }, _this.getValueFromPosition = function (pos) {
      var _this$state = _this.state,
          startX = _this$state.startX,
          limit = _this$state.limit,
          grab = _this$state.grab,
          position = _this$state.position;

      var diff = pos - startX;

      var newHandlerLeft = _this.clamp(position + diff, limit, grab);
      var percentage = (newHandlerLeft - grab) / (limit - grab);
      var value = _this.props.step * Math.round(percentage * (_this.props.max - _this.props.min) / _this.props.step);
      return value;
    }, _this.clamp = function (value, max, min) {
      return Math.min(Math.max(value, min), max);
    }, _this.renderDecreaseButton = function () {
      var buttonShow = _this.props.hasButton;
      if (_this.props.decreaseButton) buttonShow = true;
      if (buttonShow) {
        var buttonProps = {
          onMouseDown: _this.handleDecrease,
          onMouseUp: function onMouseUp() {
            clearTimeout(_this.timeout);
            _this.start = 700;
          },
          style: { marginRight: '12px', flex: '0 0 auto' }
        };
        if (_this.props.decreaseButton) {
          return React.cloneElement(_this.props.decreaseButton, _extends({}, buttonProps));
        }
        return React.createElement(
          _styled.Button,
          _extends({}, buttonProps, { circle: true, size: 'xsmall' }),
          React.createElement(_reactIcon2.default, { name: 'chevron-left', size: '13' })
        );
      }
      return null;
    }, _this.renderIncreaseButton = function () {
      var buttonShow = _this.props.hasButton;
      if (_this.props.increaseButton) buttonShow = true;
      if (buttonShow) {
        var buttonProps = {
          onMouseDown: _this.handleIncrease,
          onMouseUp: function onMouseUp() {
            clearTimeout(_this.timeout);
            _this.start = 700;
          },
          style: { marginLeft: '12px', flex: '0 0 auto' }
        };
        if (_this.props.increaseButton) {
          return React.cloneElement(_this.props.increaseButton, _extends({}, buttonProps));
        }
        return React.createElement(
          _styled.Button,
          _extends({}, buttonProps, { circle: true, size: 'xsmall' }),
          React.createElement(_reactIcon2.default, { name: 'chevron-right', size: '13' })
        );
      }
      return null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // delay timeout of the button calling function


  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleUpdate();
      var resizeObserver = new _resizeObserverPolyfill2.default(this.handleUpdate);
      resizeObserver.observe(this.track);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      //
      var position = this.getPositionFromValue(this.state.value);

      return React.createElement(
        _styled.Root,
        {
          innerRef: function innerRef(s) {
            _this2.slider = s;
          },
          disabled: this.props.disabled,
          'aria-valuemin': this.props.min,
          'aria-valuemax': this.props.max,
          'aria-valuenow': this.props.value
        },
        this.renderDecreaseButton(),
        React.createElement(
          _styled.Wrapper,
          {
            size: this.props.size,
            disabled: this.props.disabled
          },
          React.createElement(_track2.default, {
            size: this.props.size,
            onMouseDown: this.handleTrack,
            onMouseUp: function onMouseUp(e) {
              _this2.setState({ startX: e.clientX });
              _this2.handleEnd(e);
            },
            onTouchStart: this.handleStart,
            onTouchEnd: this.handleEnd,
            trackRef: function trackRef(s) {
              _this2.track = s;
            },
            disabled: this.props.disabled,
            selectionWidth: position - this.state.grab
          }),
          React.createElement(
            _reactTooltip2.default,
            {
              placement: 'bottom',
              overlay: this.state.value,
              trigger: ['hover']
            },
            React.createElement(_styled.Handler, {
              size: this.props.size,
              innerRef: function innerRef(s) {
                _this2.handle = s;
              },
              style: {
                left: position + 'px'
              },
              active: this.state.active,
              onMouseDown: this.handleStart
            })
          )
        ),
        this.renderIncreaseButton()
      );
    }
  }]);

  return Slider;
}(React.Component);

Slider.defaultProps = {
  size: 'medium',
  disabled: false,
  hasButton: false,
  decreaseButton: null,
  increaseButton: null,
  trackLabel: false,
  onChangeStart: null,
  onChangeComplete: null
};
exports.default = Slider;