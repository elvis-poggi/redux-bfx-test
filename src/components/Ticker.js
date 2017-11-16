import React from 'react'
import Cell from './Cell'
import ColoredNumber from './ColoredNumber'

const Ticker = (props = {}) => {
  const { data = {} } = props
  return [
    <Cell key={data.symbol + '-Symbol'}>
      {data.symbol.substr(1, 3)}
    </Cell>,
    <Cell key={data.symbol + '-Last'}>
      {data.lastPrice.toFixed(2)} {data.symbol.substr(4, 6)}
    </Cell>,
    <Cell key={data.symbol + '-24HR'}>
      <ColoredNumber value={data.dailyChangeperc}>
        {data.dailyChangeperc.toFixed(2)}%
      </ColoredNumber>
    </Cell>,
    <Cell key={data.symbol + '-Volume'}>
      {data.volume.toFixed(2)}
    </Cell>
  ]
}
export default Ticker
