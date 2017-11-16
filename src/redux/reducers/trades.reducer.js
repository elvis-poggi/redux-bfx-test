import { filterTrades } from '../../adapters'

const trades = (state = {}, action = {}) => {
  const { type, payload = {} } = action
  switch (type) {
    case 'TRADE_UPDATE': {
      return filterTrades({
        ...state,
        [payload.tradeId]: payload
      })
    }
    case 'TRADE_SNAPSHOT': {
      let result = {}
      for (const row of payload) {
        result[ row.tradeId ] = row
      }
      return filterTrades(result)
    }
    default:
      return state
  }
}

export default trades
