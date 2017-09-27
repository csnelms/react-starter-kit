'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Actions = require('./Actions.js');

var _Actions2 = _interopRequireDefault(_Actions);

var _Queue = require('./Queue.js');

var _Queue2 = _interopRequireDefault(_Queue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = {
            transactionId: 22311278,
            offers: []
        };
        _this.getQueue = _this.getQueue.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.sendOffers = _this.sendOffers.bind(_this);
        _this.bumpQueueTimes = _this.bumpQueueTimes.bind(_this);
        return _this;
    }

    _createClass(Search, [{
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
        value: function componentDidMount() {
            // document.getElementById("getQueueForm").submit();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // console.log('componentWillUnmount', arguments);
        }
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(evt) {
            // console.log(evt.target);
            var value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
            this.setState(_defineProperty({}, evt.target.name, value));
        }
    }, {
        key: 'sendOffers',
        value: function sendOffers(evt) {
            evt.preventDefault();
            axios.post(this.props.config.baseToolsURL + 'task_solicitations.cfm', {}).then(function (response) {
                console.log("sendOffers response: ", response);
                this.getQueue();
            }.bind(this)).catch(function (error) {
                console.log("sendOffers error: ", error);
            });
        }
    }, {
        key: 'bumpQueueTimes',
        value: function bumpQueueTimes(evt) {
            // evt.preventDefault();
            console.log(evt);
            var data = {
                method: 'bumpQueueTimes',
                transactionId: 9999,
                mins: 10
            };
            console.log(this.props.config.baseURL + 'remote/ajax/solicitations/solicitationsQueue.cfc?method=bumpQueueTimes');
            // axios.post(this.props.config.baseURL+'remote/ajax/solicitations/solicitationsQueue.cfc?method=bumpQueueTimes', {})
            //     .then(function (response) {
            //         console.log("bumpQueueTimes response: ", response);
            //         this.getQueue();
            //     }.bind(this))
            //     .catch(function (error) {
            //         console.log("bumpQueueTimes error: ", error);
            //     });
            axios({
                method: 'post',
                url: this.props.config.baseURL + 'remote/ajax/solicitations/solicitationsQueue.cfc',
                data: {
                    method: 'bumpQueueTimes',
                    transactionId: 9999,
                    mins: 10
                }
            });
        }
    }, {
        key: 'getQueue',
        value: function getQueue(evt) {
            //may be called on user form submit or programmatically
            if (evt) {
                evt.preventDefault();
            }
            var config = {
                params: {
                    method: 'getQueuedOffices',
                    transactionId: this.state.transactionId
                }
            };
            axios.get(this.props.config.baseURL + 'remote/ajax/solicitations/solicitationsQueue.cfc', config).then(function (response) {
                console.log("getQueue response: ", response);
                this.setState({ offers: response.data });
            }.bind(this)).catch(function (error) {
                console.log("getQueue error: ", error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // console.log("re-rendering");
            // console.log(this.state.offers);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'well well-small' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row-fluid' },
                        _react2.default.createElement(
                            'div',
                            { className: 'span12 center' },
                            _react2.default.createElement(
                                'form',
                                { id: 'getQueueForm', onSubmit: this.getQueue },
                                _react2.default.createElement('input', { type: 'text', name: 'transactionId', value: this.state.transactionId, onChange: this.handleInputChange }),
                                _react2.default.createElement(
                                    'button',
                                    { type: 'submit' },
                                    'Load Queue'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row-fluid' },
                        _react2.default.createElement(
                            'div',
                            { className: 'span12 center' },
                            _react2.default.createElement(
                                'a',
                                { onClick: this.sendOffers },
                                'Send Offers'
                            ),
                            ' |',
                            _react2.default.createElement(
                                'a',
                                { onClick: this.bumpQueueTimes },
                                '10'
                            )
                        )
                    )
                ),
                _react2.default.createElement(_Queue2.default, { config: this.props.config, offers: this.state.offers })
            );
        }
    }]);

    return Search;
}(_react2.default.Component);

exports.default = Search;