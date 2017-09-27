import React from 'react';

import Actions from './Actions.js';
import Queue from './Queue.js';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transactionId: 22311278,
            offers: []
        };
        this.getQueue = this.getQueue.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendOffers = this.sendOffers.bind(this);
        this.bumpQueueTimes = this.bumpQueueTimes.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log('componentWillUpdate', arguments);
    }

    componentDidUpdate(oldProps, oldState) {
        // console.log('componentDidUpdate', arguments);
    }

    componentWillMount() {
        // console.log('componentWillMount', arguments);

    }

    componentDidMount() {
        // document.getElementById("getQueueForm").submit();
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount', arguments);
    }

    handleInputChange(evt) {
        // console.log(evt.target);
        const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
        this.setState({
            [evt.target.name]: value
        });
    }

    sendOffers(evt) {
        evt.preventDefault();
        axios.post(this.props.config.baseToolsURL+'task_solicitations.cfm', {})
            .then(function (response) {
                console.log("sendOffers response: ", response);
                this.getQueue();
            }.bind(this))
            .catch(function (error) {
                console.log("sendOffers error: ", error);
            });
    }

    bumpQueueTimes(evt) {
        // evt.preventDefault();
        console.log(evt);
        const data = {
            method: 'bumpQueueTimes',
            transactionId: 9999,
            mins: 10
        };
        console.log(this.props.config.baseURL+'remote/ajax/solicitations/solicitationsQueue.cfc?method=bumpQueueTimes');
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
            url: this.props.config.baseURL+'remote/ajax/solicitations/solicitationsQueue.cfc',
            data: {
                method: 'bumpQueueTimes',
                transactionId: 9999,
                mins: 10
            }
        });
    }

    getQueue(evt) {
        //may be called on user form submit or programmatically
        if (evt) { evt.preventDefault(); }
        const config = {
            params: {
                method: 'getQueuedOffices',
                transactionId: this.state.transactionId
            }
        }
        axios.get(this.props.config.baseURL+'remote/ajax/solicitations/solicitationsQueue.cfc', config)
            .then(function (response) {
                console.log("getQueue response: ", response);
                this.setState({offers: response.data});
            }.bind(this))
            .catch(function (error) {
                console.log("getQueue error: ", error);
            });
    }

    render() {
        // console.log("re-rendering");
        // console.log(this.state.offers);
        return (
            <div>
                <div className="well well-small">
                    <div className="row-fluid">
                        <div className="span12 center">
                            <form id="getQueueForm" onSubmit={this.getQueue}>
                                <input type="text" name="transactionId" value={this.state.transactionId} onChange={this.handleInputChange} />
                                <button type="submit">Load Queue</button>
                            </form>
                        </div>
                    </div>
                    <div className="row-fluid">
                        <div className="span12 center">
                            <a onClick={this.sendOffers}>Send Offers</a> |
                            <a onClick={this.bumpQueueTimes}>10</a>
                        </div>
                    </div>
                </div>
                <Queue config={this.props.config} offers={this.state.offers} />
            </div>
        );
    }

}

export default Search;