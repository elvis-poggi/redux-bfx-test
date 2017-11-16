import React from 'react'
import Cell from './Cell'
import Bid from './Bid'

const style = {
  display: 'grid',
  gridTemplateColumns: '90px 90px 120px',
  textAlign: 'center',
  border: '1px solid gray'
}

const Bids = (props = {}) => {
  const {data = {}} = props
  const keys = Object.keys(data)

  return (
    <div>
      <p>BIDS</p>
      <div style={style}>
        <Cell isHeader>COUNT</Cell>
        <Cell isHeader>AMOUNT</Cell>
        <Cell isHeader>PRICE</Cell>
        {keys.map(key => (
          <Bid data={data[key]} key={key} />
    ))}
      </div>
    </div>
  )
}
export default Bids
