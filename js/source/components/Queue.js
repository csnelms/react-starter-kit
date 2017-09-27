import React from 'react';

const baseURL = 'https://cfdev1.npe.clearcapital.net/sandbox_csn2/ccfile/root/sites/intranet/';

class Queue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transactionId: 22311278
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

    handleInputChange(evt) {
        console.log(evt.target);
        const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
        this.setState({
           [evt.target.name]: [value]
        });
    }

    getQueue(evt) {
        evt.preventDefault();
        const config = {
            params: {
                method: 'getQueuedOffices',
                transactionId: this.state.transactionId
            }
        }
        axios.get(baseURL+'remote/ajax/solicitations/solicitationsQueue.cfc', config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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

export default Queue;