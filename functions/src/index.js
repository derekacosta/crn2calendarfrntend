'use strict';

var _preact = require('preact');

require('./App.css');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.__data__) {
    renderApp(window.__data__);
} else {
    (0, _preact.render)((0, _preact.h)(_App2.default, null), document.getElementById('root'));
}

function renderApp(data) {
    (0, _preact.render)((0, _preact.h)(_App2.default, null), document.querySelector('body'), document.getElementById('root'));
}