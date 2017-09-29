import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.activeTab = this.props.location.pathname;
    }

    componentWillUpdate(nextProps, nextState) {
        this.activeTab = nextProps.location.pathname;
    }

    render() {
        return (
            <ul className="section-nav nav nav-tabs nav-tabs-open">
                <li className={ (this.activeTab == '/tab1') ? 'active' : 'inactive' }>
                    <a href="#/tab1">Tab1</a>
                </li>
                <li className={ (this.activeTab == '/tab2') ? 'active' : 'inactive' }>
                    <a href="#/tab2">Tab2</a>
                </li>
            </ul>
        );
    }
}

export default Tabs;
