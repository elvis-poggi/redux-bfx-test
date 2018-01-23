import React from 'react'
import CustomChart from './CustomChart'
import Panel from './Panel'
import Cell from './Cell'

const Candles = (porops = {}) => {
  const { data } = porops
  return (
    <Panel>
      <Cell isHeader>CANDLES</Cell>
      <CustomChart data={data} />
    </Panel>
  )
}

export default Candles
