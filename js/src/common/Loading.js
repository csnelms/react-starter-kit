import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({baseURL}) => (
  <div className='loading-container'>
    <img className='loading-img' src={`${baseURL}images/loading_pano.gif`} />
  </div>
)

Loading.propTypes = { baseURL: PropTypes.string.isRequired }

export default Loading
