import React from 'react'
import Ticker from './Ticker'
import Cell from './Cell'

const style = {
  display: 'grid',
  gridTemplateColumns: '90px 90px 120px 100px',
  textAlign: 'left',
  border: '1px solid gray'
}

const TickerList = ({data}) => {
  const keys = Object.keys(data)
  return (
    <div>
      <p>TICKER</p>
      <div style={style}>
        <Cell isHeader>SYMBOL</Cell>
        <Cell isHeader>LAST</Cell>
        <Cell isHeader>24HR</Cell>
        <Cell isHeader>VOLUME</Cell>
        {keys.map(key => (
          <Ticker data={data[key]} key={key} />
        ))}
      </div>
    </div>
  )
}
export default TickerList
