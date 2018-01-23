import React from 'react'
import { AreaChart, linearGradient, XAxis, YAxis, Tooltip, Area } from 'recharts'

const CustomChart = (props = {}) => {
  const { data = [] } = props
  if (!data.length) {
    return (
      <div>
        <h2> N/A </h2>
      </div>
    )
  }
  return (
    <AreaChart width={1063} height={250} data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      style={{paddingTop: '10px'}} >
      <defs>
        <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='green' stopOpacity={0.8} />
          <stop offset='95%' stopColor='orange' stopOpacity={0.05} />
        </linearGradient>
      </defs>
      <XAxis dataKey='mts' style={{fill: 'white'}} />
      <YAxis style={{fill: 'white'}} />
      <Tooltip />
      <Area type='monotone' dataKey='close' stroke='rgb(60, 60, 60)' fillOpacity={1} fill='url(#colorUv)' />
    </AreaChart>
  )
}

export default CustomChart
