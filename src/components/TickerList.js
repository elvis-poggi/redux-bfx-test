import React from 'react'
import Ticker from './Ticker'

const style = {
  display: 'block',
  textAlign: 'left',
  border: '1px solid gray'
}

const TickerList = ({data}) => {
  const keys = Object.keys(data)
  return (
    <div>
      <p>TICKER</p>
      <div style={style}>
        {keys.map(key => (
          <Ticker data={data[key]} key={key} />
        ))}
      </div>
    </div>
  )
}
export default TickerList
