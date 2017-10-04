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
    return () => this.props.bumpQueueTimes(this.props.transactionId, mins)
  }

  render () {
    return (
      <div>
        <a onClick={this.bumpQueueTimes(-50)}>-50</a>
      </div>
    )
  }
}

SolicitQueueHeader.propTypes = {
  transactionId: PropTypes.number.isRequired,
  bumpQueueTimes: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SolicitQueueHeader)
