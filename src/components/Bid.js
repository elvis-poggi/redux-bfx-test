import React from 'react'
import Cell from './Cell'
import ColoredNumber from './ColoredNumber'

const Bid = (props = {}) => {
  const { data = {} } = props
  return [
    <Cell key={data.symbol + '-Count'}>{data.count}</Cell>,
    <Cell key={data.symbol + '-Amount'}>
      {data.amount}
    </Cell>,
    <Cell key={data.symbol + '-Price'}>
      <ColoredNumber value={data.amount}>
        {data.price}
      </ColoredNumber>
    </Cell>
  ]
}

export default Bid
