'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Queue = function (_React$Component) {
    _inherits(Queue, _React$Component);

    function Queue(props) {
        _classCallCheck(this, Queue);

        return _possibleConstructorReturn(this, (Queue.__proto__ || Object.getPrototypeOf(Queue)).call(this, props));
    }

    _createClass(Queue, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'table',
                    { className: 'table table-striped table-condensed' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Row'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Offer'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'CME'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Office'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Vendor'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Name'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Dist'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Interval'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Remaining'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Status'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Offer Type'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Resolicit Dt'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Score'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        this.props.offers.map(function (offer, i) {
                            return _react2.default.createElement(
                                'tr',
                                { key: offer.SOLICITATION_ID },
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    i
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    offer.SOLICITATION_ID
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    offer.IS_CME
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: _this2.props.config.baseURL + 'broker/office_edit.cfm?cid=' + offer.COMPANY_ID + '&oid=' + offer.OFFICE_ID + '&lcontactid=' + offer.VENDOR_ID, target: '_blank' },
                                        offer.OFFICE_ID
                                    )
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: _this2.props.config.baseURL + 'broker/profile.cfm?lcontactid=' + offer.VENDOR_ID, target: '_blank' },
                                        offer.VENDOR_ID
                                    )
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    offer.FIRST_NAME,
                                    ' ',
                                    offer.LAST_NAME
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    offer.DIST
                                ),
                                _react2.default.createElement('td', null),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    offer.DELAY
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    offer.STATUS_NAME
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    offer.SOLICITATION_TYPE_CODE
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    offer.AUTO_RESOLICIT_DTS
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    offer.PERFORMANCE_SCORE
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Queue;
}(_react2.default.Component);

exports.default = Queue;