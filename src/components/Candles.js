import React from 'react'
import CustomChart from './CustomChart'

const Candles = (porops = {}) => {
  const { pair, data } = porops
  return (
    <div>
      <h2>Exchange: {pair}</h2>
      <CustomChart data={data} />
    </div>
  )
}

export default Candles
