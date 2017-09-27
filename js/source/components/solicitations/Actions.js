import React from 'react';

class Actions extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // console.log("actions componentWillMount: ", this.props.offers);
    }

    render() {
        return (
            <div className="well well-small">
                <div className="row-fluid">
                    <div className="span6">
                        Property ID: {this.props.transactionId}
                    </div>
                    <div className="span6">
                        ( Reset Order | View Order Prefs | Auto Solicit Order )
                    </div>
                </div>
                <div className="row-fluid">
                    <div className="span4">
                        asdf
                    </div>
                    <div className="span4">
                        asdf
                    </div>
                    <div className="span4">
                        asdf
                    </div>
                </div>
            </div>
        );
    }

}

export default Actions;