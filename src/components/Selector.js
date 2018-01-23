import React from 'react'
import Cell from './Cell'
import ETH from '../svg/ETH.svg'
import ETC from '../svg/ETC.svg'
import LTC from '../svg/LTC.svg'
import BTC from '../svg/BTC.svg'

const logos = {
  ETH,
  BTC,
  LTC,
  ETC
}

const baseStyle = {
  width: '100px',
  height: '90px',
  padding: '20px',
  display: 'inline-block',
  margin: '10px',
  cursor: 'pointer'
}

const boxSelected = {
  background: 'radial-gradient(circle, rgb(57, 57, 57), rgba(130, 130, 130, 0.21))'
}

const imgStyle = {
  height: '50px'
}

const Selector = (props = {}) => {
  const { selected, symbol, set } = props
  const boxStyle = (`t${symbol}USD` === selected)
    ? { ...baseStyle, ...boxSelected }
    : baseStyle

  return (
    <div style={boxStyle} onClick={set}>
      <Cell>
        <img src={logos[symbol]} style={imgStyle} alt={logos[symbol]} />
      </Cell>
    </div>
  )
}

export default Selector
