import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getProperty} from '../../actions/PropertyActions'

const mapStateToProps = state => ({
  property: state.property
})

const mapDispatchToProps = dispatch => (bindActionCreators({
  getProperty
}, dispatch))

class Tab2Main extends React.Component {
  constructor (props, context) {
    super(props)
    this.state = {
      transactionId: 22932882
    }

    this.getProperty = this.getProperty.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillMount () {
    // this.props.getProperty(this.state.transactionId)
  }

  handleInputChange (se) {
    const value = se.target.type === 'checkbox' ? se.target.checked : se.target.value
    this.setState({
      [se.target.name]: [value]
    })
  }

  getProperty (se) {
    // console.log(se)
    this.props.getProperty(this.state.transactionId)
  }

  render () {
    console.log('render', this.props.property)
    return (
      <div>
        <form>
          <input type='text' name='transactionId' value={this.state.transactionId} onChange={this.handleInputChange} />
          <button type='button' onClick={this.getProperty}>Load Queue</button>
        </form>
      </div>
    )
  }
}

Tab2Main.propTypes = {
  property: PropTypes.shape({
    transactionId: PropTypes.number,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string
    })
  }),
  getProperty: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab2Main)
