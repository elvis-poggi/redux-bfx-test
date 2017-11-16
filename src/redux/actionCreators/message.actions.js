import { isArray, isObject } from 'lodash'
import { getChannelInfo } from '../../websocket/subscriptions'
import { tickerMessage } from './tickers.actions'
import { tradeMessage } from './trades.actions'
import { bookMessage } from './books.actions'
import { candleMessage } from './candles.actions'

export function isValidMessage (msg) {
  const channelInfo = getChannelInfo(msg[0])
  return (isArray(msg) && isObject(channelInfo))
}

export function messageAction (msg) {
  if (msg[1] === 'hb') {
    return false
  }
  const channelInfo = getChannelInfo(msg[0])
  switch (channelInfo.channel) {
    case 'ticker':
      return tickerMessage(msg, channelInfo)
    case 'trades':
      return tradeMessage(msg, channelInfo)
    case 'book':
      return bookMessage(msg)
    case 'candles':
      return candleMessage(msg, channelInfo)
    default:
      return {
        type: 'UNKNOWN_DATA_MESSAGE',
        payload: msg
      }
  }
}
