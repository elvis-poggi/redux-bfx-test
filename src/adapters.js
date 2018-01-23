import { reverse, sortBy, slice, findIndex } from 'lodash'

export function tickerAdapter (rawData = []) {
  let result = {
    bid: rawData[0],
    bidSize: rawData[1],
    ask: rawData[2],
    askSize: rawData[3],
    dailyChange: rawData[4],
    dailyChangeperc: rawData[5],
    lastPrice: rawData[6],
    volume: rawData[7],
    high: rawData[8],
    low: rawData[9]

  }
  return result
}

export function tradeAdapter (rawData = []) {
  let result = {
    tradeId: rawData[0],
    mts: rawData[1],
    amount: rawData[2],
    price: rawData[3]

  }
  return result
}

export function booksAdapter (rawData = []) {
  let result = {
    price: rawData[0],
    count: rawData[1],
    amount: Math.abs(rawData[2]),
    side: (rawData[2] >= 0) ? 'bids' : 'asks'
  }
  return result
}

export function candleAdapter (rawData = []) {
  let result = {
    mts: new Date(rawData[0]).toLocaleDateString(),
    close: rawData[2]
  }
  return result
}

const MAX_LENGTH = 25

export function filterTrades (data) {
  const sortedData = reverse(sortBy(data, 'mts'))
  return slice(sortedData, 0, MAX_LENGTH)
}

export function isUpdate (data = [], msg = {}) {
  return findIndex(data, ['mts', msg.mts])
}
