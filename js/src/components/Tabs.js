import React from 'react'
import PropTypes from 'prop-types'

class Tabs extends React.Component {
  constructor (props) {
    super(props)
    this.activeTab = this.props.location.pathname
  }

  componentWillUpdate (nextProps, nextState) {
    this.activeTab = nextProps.location.pathname
  }

  render () {
    return (
      <ul className='section-nav nav nav-tabs nav-tabs-open'>
        <li className={(this.activeTab === '/solicit-queue') ? 'active' : 'inactive'}>
          <a href='#/solicit-queue'>Solicit Queue</a>
        </li>
        <li className={(this.activeTab === '/tab2') ? 'active' : 'inactive'}>
          <a href='#/tab2'>Tab2</a>
        </li>
      </ul>
    )
  }
}

Tabs.propTypes = {
  location: PropTypes.object.isRequired
}

export default Tabs
