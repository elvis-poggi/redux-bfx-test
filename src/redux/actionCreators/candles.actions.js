import { isArray, reverse } from 'lodash'
import { candleAdapter } from '../../adapters'

export function candleMessage (msg = [], channelInfo) {
  const isSnapshot = isArray(msg[1][0])
  const symbol = (channelInfo.key).split(':')[2]
  if (isSnapshot) {
    return {
      type: 'CANDLE_SNAPSHOT',
      payload: {
        data: reverse(msg[1].map(row => candleAdapter(row))),
        symbol
      }
    }
  }

  return {
    type: 'CANDLE_UPDATE',
    payload: {
      data: candleAdapter(msg[1]),
      symbol
    }
  }
}
