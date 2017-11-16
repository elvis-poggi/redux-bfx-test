const tickers = (state = {}, action = {}) => {
  const { type, payload = {} } = action
  switch (type) {
    case 'TICKER_UPDATE': {
      return {
        ...state,
        [payload.symbol]: payload
      }
    }
    default:
      return state
  }
}

export default tickers
