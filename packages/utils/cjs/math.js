'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var trunTo = exports.trunTo = function trunTo(value) {
  var number = Number(value);
  if (!Number.isNaN(number)) {
    return number > 99 ? '99+' : number;
  }
  return value;
};