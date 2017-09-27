'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Header = require('./components/Header.js');

var _Header2 = _interopRequireDefault(_Header);

var _Tabs = require('./components/Tabs.js');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _SolicitationsMain = require('./components/solicitations/SolicitationsMain.js');

var _SolicitationsMain2 = _interopRequireDefault(_SolicitationsMain);

var _Rules = require('./components/Rules.js');

var _Rules2 = _interopRequireDefault(_Rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
    _reactRouterDom.HashRouter,
    { basename: '/', hashType: 'slash', history: history },
    _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_reactRouterDom.Route, { component: _Tabs2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _SolicitationsMain2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/solicitations', component: _SolicitationsMain2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/rules', component: _Rules2.default })
    )
), document.getElementById('app'));