import React from 'react'
import Trade from './Trade'
import Cell from './Cell'

const style = {
  display: 'grid',
  gridTemplateColumns: '50px 80px 80px 80px',
  textAlign: 'center',
  border: '1px solid gray'
}

const TradeList = ({data}) => {
  const keys = Object.keys(data)
  return (
    <div>
      <p>TRADE</p>
      <div style={style}>
        <Cell isHeader />
        <Cell isHeader>TIME</Cell>
        <Cell isHeader>PRICE</Cell>
        <Cell isHeader>AMOUNT</Cell>
        {keys.map(key => (
          <Trade data={data[key]} key={key} />
        ))}
      </div>
    </div>
  )
}
export default TradeList
