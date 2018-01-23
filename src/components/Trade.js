import React from 'react'
import Cell from './Cell'
import ColoredArrow from './ColoredArrow'
import ColoredNumber from './ColoredNumber'

const Trade = (props = {}) => {
  const { data = {} } = props
  return [
    <Cell key={data.symbol + '-Arrow'}>
      <ColoredArrow value={data.amount}>
        {
          (data.amount > 0)
          ? <i className='fa fa-chevron-up' />
          : <i className='fa fa-chevron-down' />
        }
      </ColoredArrow>
    </Cell>,
    <Cell key={data.symbol + '-Time'}>
      {new Date(data.mts).toLocaleTimeString()}
    </Cell>,
    <Cell key={data.symbol + '-Price'}>
      <ColoredNumber value={data.amount} >
        {data.price.toFixed(1)}
      </ColoredNumber>
    </Cell>,
    <Cell key={data.symbol + '-Amount'}>
      {data.amount.toFixed(4)}
    </Cell>
  ]
}
export default Trade
