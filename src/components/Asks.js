import React from 'react'
import Cell from './Cell'
import Ask from './Ask'

const style = {
  display: 'grid',
  gridTemplateColumns: '90px 90px 120px',
  textAlign: 'center',
  border: '1px solid gray'
}

const Asks = (props = {}) => {
  const {data = {}} = props
  const keys = Object.keys(data)

  return (
    <div>
      <p>ASKS</p>
      <div style={style}>
        <Cell isHeader>PRICE</Cell>
        <Cell isHeader>AMOUNT</Cell>
        <Cell isHeader>COUNT</Cell>
        {keys.map(key => (
          <Ask data={data[key]} key={key} />
    ))}
      </div>
    </div>
  )
}
export default Asks
