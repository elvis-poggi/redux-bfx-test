import React from 'react'

const Cell = (props = {}) => {
  const {
    children,
    isHeader,
    align = 'center',
    padding = '10px 5px'
  } = props
  const basicStyle = {
    color: 'white',
    display: 'block',
    padding,
    margin: '0',
    textAlign: align,
    fontWeight: '100'
  }
  const style = isHeader
      ? {
        ...basicStyle,
        background: 'linear-gradient(rgba(130, 130, 130, 0.21), rgb(57, 57, 57))',
        fontWeight: '900',
        textAlign: 'left'
      }
      : basicStyle

  return (
    <div style={style}> { children } </div>
  )
}

export default Cell
