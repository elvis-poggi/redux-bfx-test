import React from 'react'
import Cell from './Cell'
import ColoredNumber from './ColoredNumber'

const block = {
  display: 'inline-block'
}

const tickerStyle = {
  display: 'block'
}

const Ticker = (props = {}) => {
  const { data = {} } = props
  return [
    <div style={tickerStyle} key={data.symbol + 'ticker'}>
      <div style={block} key={data.symbol + 'head'}>
        <Cell isHeader>SYMBOL</Cell>
        <Cell isHeader>LAST</Cell>
        <Cell isHeader>24HR</Cell>
        <Cell isHeader>VOLUME</Cell>
      </div>
      <div style={block} key={data.symbol + '-body'}>
        <Cell key={data.symbol + '-Symbol'}>
          {data.symbol.substr(1, 3)}
        </Cell>
        <Cell key={data.symbol + '-Last'}>
          {data.lastPrice.toFixed(2)} {data.symbol.substr(4, 6)}
        </Cell>
        <Cell key={data.symbol + '-24HR'}>
          <ColoredNumber value={data.dailyChangeperc}>
            {data.dailyChangeperc.toFixed(2)}%
      </ColoredNumber>
        </Cell>
        <Cell key={data.symbol + '-Volume'}>
          {data.volume.toFixed(2)}
        </Cell>
      </div>
    </div>
  ]
}
export default Ticker
