import React from 'react';
// import axios from 'axios';
import {getQueue} from '../../actions/PropertyActions'

const baseURL = 'https://cfdev1.npe.clearcapital.net/sandbox_csn2/ccfile/root/sites/intranet/';

class Tab2Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionId: 22817182
        };

        this.getQueue = this.getQueue.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

    }

    componentWillUnmount() {
        // console.log('componentWillUnmount', arguments);
    }

    handleInputChange(se) {
        console.log(se.target);
        const value = se.target.type === 'checkbox' ? se.target.checked : se.target.value;
        this.setState({
           [se.target.name]: [value]
        });
    }

    getQueue(se) {
      se.preventDefault();
      const property = getQueue(this.state.transactionId);
      console.log(property);
    }

    render() {
        return (
           <div>
               <form onSubmit={this.getQueue}>
                   <input type="text" name="transactionId" value={this.state.transactionId} onChange={this.handleInputChange} />
                   <button type="submit">Load Queue</button>
               </form>
           </div>
        );
    }
}

export default Tab2Main;
