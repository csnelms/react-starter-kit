import React from 'react';

class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.activeTab = this.props.location.pathname;
        // console.log(props);
    }

    componentWillUpdate(nextProps, nextState) {
        this.activeTab = nextProps.location.pathname;
        // console.log('NavBar componentWillUpdate', arguments);
    }

    render() {
        return (
            <ul className="section-nav nav nav-tabs nav-tabs-open">
                <li className={ (this.activeTab == '/solicitations') ? 'active' : 'inactive' }>
                    <a href="#/solicitations">Solicitations!!</a>
                </li>
                <li className={ (this.activeTab == '/rules') ? 'active' : 'inactive' }>
                    <a href="#/rules">Rules</a>
                </li>
            </ul>
        );
    }

}

export default Tabs;