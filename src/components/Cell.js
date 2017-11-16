import React from 'react'

let basicStyle = {
  color: 'white',
  display: 'inline-block',
  padding: '5px'
}

const Cell = (props = {}) => {
  const { children, isHeader, hasColor, value } = props
  const style = isHeader
    ? {...basicStyle, background: 'gray'}
    : hasColor
    ? (value > 0)
      ? {...basicStyle, background: 'rgba(157, 194, 74, 1.73)'}
      : {...basicStyle, background: 'rgba(225, 86, 86, 1.52)'}
    : {...basicStyle, color: 'black'}

  return (
    <div style={style}> { children } </div>
  )
}

export default Cell
