import React from 'react'
import Cell from './Cell'
import ColoredNumber from './ColoredNumber'
import BTC from '../svg/BTC.svg'
import ETH from '../svg/ETH.svg'
import ETC from '../svg/ETC.svg'
import LTC from '../svg/LTC.svg'
import Panel from './Panel'

const logos = {
  ETH,
  BTC,
  LTC,
  ETC
}

const grid = {
  display: 'grid',
  gridTemplateColumns: '106px 306px ',
  alignItems: 'center',
  color: 'white'
}

export function isSelected (symbol, selected) {
  return symbol === selected
}

const Ticker = (props = {}) => {
  const { data = {} } = props
  const {
    symbol = '',
    lastPrice = 0,
    dailyChangeperc = 0,
    volume = 0
  } = data

  const pair = symbol.slice(1, 4)
  const url = logos[pair]

  return (
    <Panel>
      <Cell isHeader>TICKER</Cell>
      <div style={grid}>
        <Cell align='right'>SYMBOL</Cell>
        <Cell key={symbol + '-Symbol'}>
          <img src={url} style={{height: '24px'}} alt={url} />
        </Cell>
      </div>
      <div style={grid}>
        <Cell align='right'>LAST</Cell>
        <Cell key={symbol + '-Last'}>
          {lastPrice.toFixed(2)} {symbol.substr(4, 6)}
        </Cell>
      </div>
      <div style={grid}>
        <Cell align='right'>24HR</Cell>
        <Cell key={symbol + '-24HR'}>
          <ColoredNumber value={dailyChangeperc}>
            {dailyChangeperc.toFixed(2)}%
        </ColoredNumber>
        </Cell>
      </div>
      <div style={grid}>
        <Cell align='right'>VOLUME</Cell>
        <Cell key={symbol + '-Volume'}>
          {volume.toFixed(2)}
        </Cell>
      </div>
    </Panel>
  )
}
export default Ticker
