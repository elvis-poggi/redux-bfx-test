import React from 'react'
import Cell from './Cell'
import Bid from './Bid'

const style = {
  display: 'grid',
  gridTemplateColumns: '105px 132px 105px',
  textAlign: 'center'
}

const Bids = (props = {}) => {
  const {data = {}} = props
  const keys = Object.keys(data)

  return (
    <div>
      <div style={style}>
        <Cell>COUNT</Cell>
        <Cell>AMOUNT</Cell>
        <Cell>PRICE</Cell>
        {keys.map(key => (
          <Bid data={data[key]} key={key} />
    ))}
      </div>
    </div>
  )
}
export default Bids
