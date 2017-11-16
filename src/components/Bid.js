import React from 'react'
import Cell from './Cell'

const Bid = (props = {}) => {
  const { data = {} } = props
  return [
    <Cell key={data.symbol + '-Count'}>{data.count}</Cell>,
    <Cell key={data.symbol + '-Amount'}>{data.amount}</Cell>,
    <Cell key={data.symbol + '-Price'}>{data.price}</Cell>
  ]
}

export default Bid
