'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./App.css');

require('./courseList.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListOfClasses = function (_Component) {
    _inherits(ListOfClasses, _Component);

    function ListOfClasses(props) {
        _classCallCheck(this, ListOfClasses);

        var _this = _possibleConstructorReturn(this, (ListOfClasses.__proto__ || Object.getPrototypeOf(ListOfClasses)).call(this, props));

        _this.state = {
            "CLIENTID": "636385055353-3339e71m1t19ik7jnn6q6afv1coplr24.apps.googleusercontent.com",
            "CLIENTSECRET": "c9jUuSNfZqgEbPQq6awA-zdE",
            "APIKEY": "AIzaSyAUw6SKdNAB_SSK4lmqqkofC07SAalqXPs",
            "DISCOVERY_DOCS": ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
            "SCOPES": "https://www.googleapis.com/auth/calendar.readonly"
        };
        return _this;
    }

    _createClass(ListOfClasses, [{
        key: 'render',
        value: function render() {
            return h(
                'div',
                { className: 'classList' },
                h(
                    'button',
                    { id: 'authorize-button', style: 'display: none;' },
                    'Authorize'
                ),
                h(
                    'button',
                    { id: 'signout-button', style: 'display: none;' },
                    'Sign Out'
                )
            );
        }
    }]);

    return ListOfClasses;
}(_react.Component);

exports.default = ListOfClasses;