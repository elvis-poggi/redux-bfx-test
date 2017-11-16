import { createStore, combineReducers } from 'redux'
import tickers from './reducers/tickers.reducer'
import trades from './reducers/trades.reducer'
import books from './reducers/books.reducer'
import candles from './reducers/candles.reducer'

export function configureStore () {
  const reducers = combineReducers({
    tickers, trades, books, candles
  })
  return createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
