import React from 'react'

let style = {
  color: 'white',
  display: 'block',
  margin: '5px',
  background: '#3c3c3c',
  textAlign: 'left',
  fontWeight: '900'
}

const Panel = (props = {}) => {
  const { children } = props

  return (
    <div style={style}> { children } </div>
  )
}

export default Panel
