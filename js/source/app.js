'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink as Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Header from './components/Header.js';
import Tabs from './components/Tabs.js';
import SolicitationsMain from './components/solicitations/SolicitationsMain.js';
import Rules from './components/Rules.js';

const history = createBrowserHistory();

ReactDOM.render(
    <Router basename="/" hashType="slash" history={history}>
        <div>
            <Header />
            <Route component={Tabs} />
            <Route exact path="/" component={SolicitationsMain} />
            <Route exact path="/solicitations" component={SolicitationsMain} />
            <Route exact path="/rules" component={Rules} />
        </div>
    </Router>,
    document.getElementById('app')
);