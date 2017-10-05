import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { bumpQueueTimes } from '../../actions/PropertyActions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => (bindActionCreators({
  bumpQueueTimes
}, dispatch))

class SolicitQueueHeader extends React.Component {
  constructor (props) {
    super(props)
    this.bumpQueueTimes = this.bumpQueueTimes.bind(this)
  }

  bumpQueueTimes (mins) {
    return () => {
      this.props.bumpQueueTimes(this.props.transactionId, mins)
      this.props.refreshQueue()
    }
  }

  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'row', padding: '20px'}}>
        <div style={{flexBasis: '33%'}}>
          <a>Send Offers</a>
        </div>
        <div style={{flexBasis: '33%'}}>
          <a onClick={this.bumpQueueTimes(1000)}>+1000</a>
          {' | '}
          <a onClick={this.bumpQueueTimes(250)}>+250</a>
          {' | '}
          <a onClick={this.bumpQueueTimes(50)}>+50</a>
          {' | '}
          <a onClick={this.bumpQueueTimes(5)}>+5</a>
          {' | '}
          <a onClick={this.bumpQueueTimes(-5)}>-5</a>
          {' | '}
          <a onClick={this.bumpQueueTimes(-50)}>-50</a>
          {' | '}
          <a onClick={this.bumpQueueTimes(-250)}>-250</a>
          {' | '}
          <a onClick={this.bumpQueueTimes(-1000)}>-1000</a>
        </div>
        <div style={{flexBasis: '33%'}}>
          <a>Reset to Queued</a>
        </div>
      </div>
    )
  }
}

SolicitQueueHeader.propTypes = {
  transactionId: PropTypes.number.isRequired,
  bumpQueueTimes: PropTypes.func.isRequired,
  refreshQueue: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SolicitQueueHeader)
