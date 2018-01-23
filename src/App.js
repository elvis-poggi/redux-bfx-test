import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { unsubAll, subscription, wsCheck } from './websocket/subscriptions'
import Ticker from './components/Ticker'
import TradeList from './components/TradeList'
import Book from './components/Book'
import Candles from './containers/Candles.container'
import Panel from './components/Panel'
import Selector from './components/Selector'
import Cell from './components/Cell'


const bodyStyle = {
  display:'inline-block'
}

const chartStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'right'
}

const upperCointainer = {
  display: 'flex',
  flexDirection: 'row'
}

const lowerContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  aignItems: 'center'
}


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
    const availableSymbols = [
      'BTC',
      'ETH',
      'ETC',
      'LTC'
    ]
    return (
      <div className='App'>
        <header style={bodyStyle}>
          <div style={upperCointainer}>
            <Panel>
              <Cell isHeader>AVAILABLE SYMBOLS: </Cell>
              {
                availableSymbols.map(
                  symbol => <Selector
                    key={symbol}
                    symbol={symbol}
                    selected={currentPair}
                    set={() => this.setPair(`t${symbol}USD`)}
                  />
                )
              }
            </Panel>
            <Ticker data={tickers[currentPair]} />
          </div>
          <div style={chartStyle}>
          </div>
          <div style={chartStyle}>
            <Candles pair={currentPair} />
          </div>
          <div style={lowerContainer}>
              <Panel>
                <TradeList data={trades} />
              </Panel>
              <Panel>
                <Cell isHeader>BOOKS</Cell>
                <Book bids={bids} asks={asks} /> 
              </Panel>
          </div>
        </header>
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
