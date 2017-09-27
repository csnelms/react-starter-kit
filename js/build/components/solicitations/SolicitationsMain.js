'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Search = require('./Search.js');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = {
    baseURL: 'https://cfdev1.npe.clearcapital.net/sandbox_csn2/ccfile/root/sites/intranet/',
    baseToolsURL: 'https://cfdev1.npe.clearcapital.net/sandbox_csn2/ccfile/root/sites/tools/'
};

var SolicitationsMain = function (_React$Component) {
    _inherits(SolicitationsMain, _React$Component);

    function SolicitationsMain(props) {
        _classCallCheck(this, SolicitationsMain);

        return _possibleConstructorReturn(this, (SolicitationsMain.__proto__ || Object.getPrototypeOf(SolicitationsMain)).call(this, props));
    }

    _createClass(SolicitationsMain, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Search2.default, { config: config })
            );
        }
    }]);

    return SolicitationsMain;
}(_react2.default.Component);

exports.default = SolicitationsMain;