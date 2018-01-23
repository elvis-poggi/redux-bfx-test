import React from 'react'
import PropTypes from 'prop-types'

const ColoredNumber = (props = {}) => {
  const { children, value } = props
  let style = {}

  if (value < 0) {
    style.color = '#ff0000c9'
  }
  if (value > 0) {
    style.color = '#008000bd'
  }
  return (
    <span style={style}>{children}</span>
  )
}

ColoredNumber.propTypes = {
  value: PropTypes.number.isRequired
}

export default ColoredNumber
