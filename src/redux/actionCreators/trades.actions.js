import { tradeAdapter } from '../../adapters'

export function tradeMessage (msg = []) {
  if (msg[1] === 'te' || msg[1] === 'tu') {
    return {
      type: 'TRADE_UPDATE',
      payload: tradeAdapter(msg[2])
    }
  }
  return {
    type: 'TRADE_SNAPSHOT',
    payload: msg[1].map(row => tradeAdapter(row))
  }
}
