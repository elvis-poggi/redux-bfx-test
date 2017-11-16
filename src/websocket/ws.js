import { isSubscription, isUnsub, digestSubscription, digestUnsub } from './subscriptions'
import { isValidMessage, messageAction } from '../redux/actionCreators/message.actions'
const url = 'wss://api.bitfinex.com/ws/2'
const wss = new window.WebSocket(url)

export function init (store = {}) {
  wss.onopen = (event) => {

  }
  wss.onmessage = (rawMsg) => {
    const msg = JSON.parse(rawMsg.data)
    if (isValidMessage(msg)) {
      const action = messageAction(msg)
      action && store.dispatch(action)
    }
    if (isSubscription(msg)) {
      digestSubscription(msg)
    }
    if (isUnsub(msg)) {
      digestUnsub(msg)
    }
  }
  wss.onclose = () => {

  }
  wss.onerror = () => {

  }
  wss._send = (msg) => {
    wss.send(JSON.stringify(msg))
  }
  return wss
}
