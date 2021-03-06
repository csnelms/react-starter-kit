import React from 'react'
import PropTypes from 'prop-types'

const Header = ({label}) => <h2>{label}</h2>

Header.propTypes = { label: PropTypes.string.isRequired }

export default Header
