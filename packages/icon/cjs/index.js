'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = require('./Icon');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Icon).default;
  }
});

var _withIcon = require('./components/withIcon');

Object.defineProperty(exports, 'withIcon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withIcon).default;
  }
});

var _IconContext = require('./components/IconContext');

Object.defineProperty(exports, 'IconContext', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_IconContext).default;
  }
});

var _selection = require('./selection.json');

Object.defineProperty(exports, 'defaultIcon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selection).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }