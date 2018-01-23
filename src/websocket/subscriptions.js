import crypto from 'crypto-js'

export function isSubscription (msg) {
  return (msg.event === 'subscribed')
}

export function isUnsub (msg) {
  return (msg.event === 'unsubscribed')
}

export function isAuth (msg) {
  return (msg.event === 'auth')
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

// export function digestAuth (msg) {
//   console.log('msg', msg)
// }

export function tickersSub (symbol = 'tBTCUSD') {
  // const symbols = [
  //   'tBTCUSD',
  //   'tETCUSD',
  //   'tLTCUSD'
  // ]
  // symbols.map((symbol) => {
  window.wsSend({
    event: 'subscribe',
    channel: 'ticker',
    symbol: symbol
  })
  // })
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
  // const symbols = [
  //   'tBTCUSD',
  //   'tETCUSD',
  //   'tLTCUSD'
  // ]
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
  // symbols.map((symbol) => {
  //   ws._send({
  //     event: 'subscribe',
  //     channel: 'ticker',
  //     symbol: symbol
  //   })
  // })
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

export function digestAuth (ws) {
  const apiKey = 'rVyRnatmcKbcLfoZw22Y5hGvxcaddGVWsFb6sZBKnDq'
  const apiSecret = '2UyW6H9euEEWPKQMD1VC1rllTf5Cw4o3d0u1AKipLZx'

  const authNonce = Date.now() * 1000
  const authPayload = 'AUTH' + authNonce
  const authSig = crypto
  .HmacSHA384(authPayload, apiSecret)
  .toString(crypto.enc.Hex)

  const payload = {
    apiKey,
    authSig,
    authNonce,
    authPayload,
    event: 'auth'
  }

  ws._send(JSON.stringify(payload))
}
