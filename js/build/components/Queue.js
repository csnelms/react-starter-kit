'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseURL = 'https://cfdev1.npe.clearcapital.net/sandbox_csn2/ccfile/root/sites/intranet/';

var Queue = function (_React$Component) {
    _inherits(Queue, _React$Component);

    function Queue(props) {
        _classCallCheck(this, Queue);

        var _this = _possibleConstructorReturn(this, (Queue.__proto__ || Object.getPrototypeOf(Queue)).call(this, props));

        _this.state = {
            transactionId: 22311278
        };

        _this.getQueue = _this.getQueue.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }

    _createClass(Queue, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            // console.log('componentWillUpdate', arguments);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(oldProps, oldState) {
            // console.log('componentDidUpdate', arguments);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            // console.log('componentWillMount', arguments);

        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // console.log('componentWillUnmount', arguments);
        }
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(evt) {
            console.log(evt.target);
            var value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
            this.setState(_defineProperty({}, evt.target.name, [value]));
        }
    }, {
        key: 'getQueue',
        value: function getQueue(evt) {
            evt.preventDefault();
            var config = {
                params: {
                    method: 'getQueuedOffices',
                    transactionId: this.state.transactionId
                }
            };
            axios.get(baseURL + 'remote/ajax/solicitations/solicitationsQueue.cfc', config).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.getQueue },
                    _react2.default.createElement('input', { type: 'text', name: 'transactionId', value: this.state.transactionId, onChange: this.handleInputChange }),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        'Load Queue'
                    )
                )
            );
        }
    }]);

    return Queue;
}(_react2.default.Component);

exports.default = Queue;