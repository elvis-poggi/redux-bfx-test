import React from 'react'
import PropTypes from 'prop-types'

const ColoredNumber = (props = {}) => {
  const { children, value } = props
  let style = {}

  if (value < 0) {
    style.color = 'red'
  }
  if (value > 0) {
    style.color = 'green'
  }
  return (
    <span style={style}>{children}</span>
  )
}

ColoredNumber.propTypes = {
  value: PropTypes.number.isRequired
}

export default ColoredNumber
