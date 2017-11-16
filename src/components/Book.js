import React from 'react'
import Bids from './Bids'
import Asks from './Asks'

const style = {
  display: 'flex',
  flexDirection: 'row'
}

const Book = ({asks = {}, bids = {}}) => {
  return (
    <div style={style}>
      <Bids data={bids} />
      <Asks data={asks} />
    </div>
  )
}
export default Book
