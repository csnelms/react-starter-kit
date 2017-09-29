import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProperty} from '../../actions/PropertyActions';

const baseURL = 'https://cfdev1.npe.clearcapital.net/sandbox_csn2/ccfile/root/sites/intranet/';

const mapStateToProps = state => ({
  property: state.property
});

const mapDispatchToProps = dispatch => (bindActionCreators({
  getProperty
}, dispatch));

class Tab2Main extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      transactionId: 22932882
    };

    this.getProperty = this.getProperty.bind(this);
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

  getProperty(se) {
    // se.preventDefault();
    this.props.getProperty(this.state.transactionId);
  }

  render() {
    console.log(this.props.property);
    return (
      <div>
        <form onSubmit={this.getProperty}>
          <input type="text" name="transactionId" value={this.state.transactionId} onChange={this.handleInputChange} />
          <button type="submit">Load Queue</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab2Main);
