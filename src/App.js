import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { unsubAll, subscription, wsCheck } from './websocket/subscriptions'
import TickerList from './components/TickerList'
import TradeList from './components/TradeList'
import Book from './components/Book'
import Candles from './containers/Candles.container'

class App extends Component {
  state = {
    currentPair: 'tBTCUSD'
  }
  componentDidMount () {
    wsCheck(this.props.ws)
  }
  setPair (pair) {
    this.setState({ currentPair: pair })
    unsubAll(this.props.ws)
    setTimeout(subscription(this.props.ws, pair), 2000)
  }

  render () {
    const {
      tickers,
      trades,
      bids,
      asks
    } = this.props
    const { currentPair } = this.state
    return (
      <div className='App'>
        <header>
          <h1>Change pair subscription to: </h1>
          <button onClick={() => this.setPair('tBTCUSD')}> BTCUSD </button>
          <button onClick={() => this.setPair('tETCUSD')}> ETCUSD </button>
          <button onClick={() => this.setPair('tETHUSD')}> ETHUSD </button>
          <button onClick={() => this.setPair('tLTCUSD')}> LTCUSD </button>          
        </header>
        <div>
          <Candles pair={currentPair} />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <div>
            <TickerList data={tickers} />
          </div>
          <div>
            <TradeList data={trades} />
          </div>
          <div>
            <Book bids={bids} asks={asks} /> 
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    tickers: state.tickers,
    trades: state.trades,
    bids: state.books.bids,
    asks: state.books.asks
  }
}

export default connect(mapStateToProps)(App)
