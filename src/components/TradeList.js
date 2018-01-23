import React from 'react'
import Trade from './Trade'
import Cell from './Cell'

const style = {
  display: 'grid',
  gridTemplateColumns: '70px 100px 100px 100px',
  textAlign: 'center',
  color: 'white'
}

const TradeList = ({data}) => {
  const keys = Object.keys(data)
  return (
    <div>
      <Cell isHeader>TRADES</Cell>
      <div style={style}>
        <Cell />
        <Cell >TIME</Cell>
        <Cell >PRICE</Cell>
        <Cell >AMOUNT</Cell>
        {keys.map(key => (
          <Trade data={data[key]} key={key} />
        ))}
      </div>
    </div>
  )
}
export default TradeList
