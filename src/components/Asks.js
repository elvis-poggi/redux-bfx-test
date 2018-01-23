import React from 'react'
import Cell from './Cell'
import Ask from './Ask'

const style = {
  display: 'grid',
  gridTemplateColumns: '105px 132px 105px',
  textAlign: 'center'
}

const Asks = (props = {}) => {
  const {data = {}} = props
  const keys = Object.keys(data)

  return (
    <div>
      <div style={style}>
        <Cell>PRICE</Cell>
        <Cell>AMOUNT</Cell>
        <Cell>COUNT</Cell>
        {keys.map(key => (
          <Ask data={data[key]} key={key} />
    ))}
      </div>
    </div>
  )
}
export default Asks
