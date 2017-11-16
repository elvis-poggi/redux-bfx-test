import React from 'react'
import Cell from './Cell'

const Ask = (props = {}) => {
  const { data = {} } = props
  return [
    <Cell key={data.symbol + '--Price'}>{data.price}</Cell>,
    <Cell key={data.symbol + '--Amount'}>{data.amount}</Cell>,
    <Cell key={data.symbol + '--Count'}>{data.count}</Cell>
  ]
}

export default Ask
