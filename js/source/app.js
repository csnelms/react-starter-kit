import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Header from './components/Header.js';
import Tabs from './components/Tabs.js';
import Tab1Main from './components/Tab1/Tab1Main.js';
import Tab2Main from './components/Tab2/Tab2Main.js';

const history = createBrowserHistory();

ReactDOM.render(
    <Router basename="/" hashType="slash" history={history}>
        <div>
            <Header label="My App" />
            <Route component={Tabs} />
            <Route exact path="/" component={Tab1Main} />
            <Route exact path="/tab1" component={Tab1Main} />
            <Route exact path="/tab2" component={Tab2Main} />
        </div>
    </Router>,
    document.getElementById('app')
);