import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProperty, getQueuedOffices } from '../../actions/PropertyActions'
import SolicitQueueGrid from './SolicitQueueGrid'
import SolicitQueueHeader from './SolicitQueueHeader'

const mapStateToProps = state => ({
  property: state.property,
  queue: state.property.queue
})

const mapDispatchToProps = dispatch => (bindActionCreators({
  getProperty,
  getQueuedOffices
}, dispatch))

class SolicitQueueContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      transactionId: 22968605, // 22932882,
      queue: []
    }
    this.getProperty = this.getProperty.bind(this)
    this.getQueuedOffices = this.getQueuedOffices.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillMount () {
    // this.getProperty()
    // this.getQueuedOffices()
  }

  handleInputChange (se) {
    const value = se.target.type === 'checkbox' ? se.target.checked : se.target.value
    this.setState({
      [se.target.name]: [value]
    })
  }

  getProperty () {
    this.props.getProperty(this.state.transactionId)
  }

  getQueuedOffices () {
    this.props.getQueuedOffices(this.state.transactionId)
    this.setState({queue: this.props.queue})
  }

  render () {
    // console.log('render', this.props)
    return (
      <div>
        <form>
          <input type='text' name='transactionId' value={this.state.transactionId} onChange={this.handleInputChange} />
          <button type='button' className='btn btn-primary' onClick={this.getQueuedOffices}>Load Queue</button>
          <SolicitQueueHeader transactionId={this.state.transactionId} />
          {this.props.queue ? <SolicitQueueGrid queue={this.props.queue} /> : <p>{/* TODO: loading spinner */}</p>}
        </form>
      </div>
    )
  }
}

SolicitQueueContainer.propTypes = {
  property: PropTypes.shape({
    transactionId: PropTypes.number,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string
    })
  }),
  getProperty: PropTypes.func.isRequired,
  getQueuedOffices: PropTypes.func.isRequired,
  queue: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(SolicitQueueContainer)
