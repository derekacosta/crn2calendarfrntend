'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preact = require('preact');

require('./App.css');

var _courseList = require('./courseList.js');

var _courseList2 = _interopRequireDefault(_courseList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
  return (0, _preact.h)(_courseList2.default, null);
}

exports.default = App;