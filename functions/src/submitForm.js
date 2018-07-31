'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

require('./App.css');

require('./courseList.css');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CRNForm = function (_React$Component) {
    _inherits(CRNForm, _React$Component);

    function CRNForm(props) {
        _classCallCheck(this, CRNForm);

        var _this = _possibleConstructorReturn(this, (CRNForm.__proto__ || Object.getPrototypeOf(CRNForm)).call(this, props));

        _this.state = { value: '' };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(CRNForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return (0, _preact.h)(
                'form',
                { onSubmit: this.handleSubmit },
                (0, _preact.h)(
                    'label',
                    null,
                    'Name:',
                    (0, _preact.h)('input', { type: 'text', value: this.state.value, onChange: this.handleChange })
                ),
                (0, _preact.h)('input', { type: 'submit', value: 'Submit' })
            );
        }
    }]);

    return CRNForm;
}(React.Component);

exports.default = CRNForm;