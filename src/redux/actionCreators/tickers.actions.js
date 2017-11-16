import { tickerAdapter } from '../../adapters'

export function tickerMessage (msg = [], channelInfo = {}) {
  return {
    type: 'TICKER_UPDATE',
    payload: {
      ...tickerAdapter(msg[1]),
      symbol: channelInfo.symbol
    }
  }
}
