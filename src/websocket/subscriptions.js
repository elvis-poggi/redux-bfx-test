
export function isSubscription (msg) {
  return (msg.event === 'subscribed')
}

export function isUnsub (msg) {
  return (msg.event === 'unsubscribed')
}

let subscriptions = {}

export function getSubscriptions () {
  return subscriptions
}

export function getSubscribedChannels () {
  const keys = Object.keys(subscriptions)
  return keys
}

export function getChannelInfo (chanId) {
  return subscriptions[chanId]
}

export function digestSubscription (msg) {
  subscriptions[msg.chanId] = msg
  getSubscribedChannels()
}

export function digestUnsub (msg) {
  subscriptions[msg.chanId] = null
}

export function tickersSub (symbol) {
  const symbols = [
    'tBTCUSD',
    'tETCUSD',
    'tLTCUSD'
  ]
  symbols.map((symbol = 'tBTCUSD') => {
    window.wsSend({
      event: 'subscribe',
      channel: 'ticker',
      symbol: symbol
    })
  })
}

export function tradesSub (symbol = 'tBTCUSD') {
  window.wsSend({
    event: 'subscribe',
    channel: 'trades',
    symbol: symbol
  })
}

export function booksSub (symbol = 'tBTCUSD', precision = 'p0', frequency = 'f0', length = '25') {
  window.wsSend({
    event: 'subscribe',
    channel: 'book',
    symbol: symbol,
    prec: precision,
    freq: frequency,
    len: length
  })
}

export function unSub (chanId) {
  window.wsSend({
    event: 'unsubscribe',
    chanId: chanId
  })
}

export function unsubAll (ws) {
  const keys = getSubscribedChannels()
  for (const key of keys) {
    ws._send({
      event: 'unsubscribe',
      chanId: key
    })
  }
}

export function subscription (ws, pair) {
  ws._send({
    'event': 'subscribe',
    'channel': 'candles',
    'key': 'trade:1D:' + pair
  })
  ws._send({
    'event': 'subscribe',
    'channel': 'ticker',
    'symbol': pair
  })
  ws._send({
    'event': 'subscribe',
    'channel': 'trades',
    'symbol': pair
  })
  ws._send({
    'event': 'subscribe',
    'channel': 'book',
    'symbol': pair,
    'precision': '',
    'freqency': '',
    'length': ''
  })
}

export function wsCheck (ws) {
  if (ws.readyState === 1) {
    subscription(ws, 'tBTCUSD')
  } else {
    setTimeout(() => wsCheck(ws), 1000)
  }
}
