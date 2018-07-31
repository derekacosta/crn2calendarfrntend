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

var crn = require('./crn.js');

var CourseRow = function (_Component) {
    _inherits(CourseRow, _Component);

    function CourseRow() {
        _classCallCheck(this, CourseRow);

        return _possibleConstructorReturn(this, (CourseRow.__proto__ || Object.getPrototypeOf(CourseRow)).apply(this, arguments));
    }

    _createClass(CourseRow, [{
        key: 'render',
        value: function render() {
            return (0, _preact.h)(
                'tr',
                null,
                (0, _preact.h)(
                    'td',
                    null,
                    this.props.subject,
                    ' - ',
                    this.props.courseSection
                ),
                (0, _preact.h)(
                    'td',
                    null,
                    this.props.professor
                ),
                (0, _preact.h)(
                    'td',
                    null,
                    this.props.timings[0].dayName
                ),
                (0, _preact.h)(
                    'td',
                    null,
                    this.props.timings[0].courseStartTime.toTimeString(),
                    ' to ',
                    this.props.timings[0].courseEndTime.toTimeString()
                )
            );
        }
    }]);

    return CourseRow;
}(_preact.Component);

var ListOfClasses = function (_Component2) {
    _inherits(ListOfClasses, _Component2);

    function ListOfClasses(props) {
        _classCallCheck(this, ListOfClasses);

        var _this2 = _possibleConstructorReturn(this, (ListOfClasses.__proto__ || Object.getPrototypeOf(ListOfClasses)).call(this, props));

        _this2.addRow = _this2.addRow.bind(_this2);
        _this2.removeRow = _this2.removeRow.bind(_this2);
        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        _this2.state = {
            rows: [],
            value: ""
        };
        return _this2;
    }

    _createClass(ListOfClasses, [{
        key: 'render',
        value: function render() {
            return (0, _preact.h)(
                'div',
                { className: 'classList' },
                (0, _preact.h)(
                    'h1',
                    null,
                    'I don\'t know what to call this',
                    (0, _preact.h)('br', null)
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)(
                        'h2',
                        null,
                        'Classes Selected',
                        (0, _preact.h)('br', null)
                    ),
                    (0, _preact.h)(
                        'table',
                        null,
                        (0, _preact.h)(
                            'thead',
                            null,
                            (0, _preact.h)(
                                'th',
                                null,
                                'Subject'
                            ),
                            (0, _preact.h)(
                                'th',
                                null,
                                'Professor'
                            ),
                            (0, _preact.h)(
                                'th',
                                null,
                                'Day'
                            ),
                            (0, _preact.h)(
                                'th',
                                null,
                                'Timings'
                            )
                        ),
                        (0, _preact.h)(
                            'tbody',
                            null,
                            this.state.rows.map(function (row) {
                                return (0, _preact.h)(CourseRow, row[0]);
                            })
                        )
                    )
                ),
                (0, _preact.h)(
                    'form',
                    { onSubmit: this.handleSubmit },
                    (0, _preact.h)('input', { type: 'text', value: this.state.value, onChange: this.handleChange }),
                    (0, _preact.h)('input', { type: 'submit', value: 'Submit' })
                ),
                (0, _preact.h)(
                    'button',
                    { onClick: this.removeRow },
                    'Click to remove'
                )
            );
        }
    }, {
        key: 'addRow',
        value: function addRow(result) {
            var nextState = this.state;
            result.subject = this.state.value;
            nextState.rows.push(result);
            this.state.value = "";
            console.log(nextState);
            this.setState(nextState);
        }
    }, {
        key: 'removeRow',
        value: function removeRow() {
            var nextState = this.state;
            nextState.rows.pop();
            this.setState(nextState);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var nextState = this.state;
            nextState.value = event.target.value;
            this.setState(nextState);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var _this3 = this;

            event.preventDefault();
            crn.getData(this.state.value).then(function (result) {
                console.log(JSON.stringify(result));
                _this3.addRow(result);
            });
        }
    }]);

    return ListOfClasses;
}(_preact.Component);

exports.default = ListOfClasses;