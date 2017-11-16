import React from 'react'
import PropTypes from 'prop-types'

const ColoredArrow = (props = {}) => {
  const { children, value } = props
  let style = { color: 'white' }
  if (value < 0) {
    style.background = '008000de'
  }
  if (value > 0) {
    style.background = '7719009e'
  }
  return (
    <span style={style}>{children}</span>
  )
}

ColoredArrow.propTypes = {
  value: PropTypes.number.isRequired
}

export default ColoredArrow
