import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { configureStore } from './redux/configureStore'
import { Provider } from 'react-redux'
import { init } from './websocket/ws'

const store = configureStore()
const ws = init(store)

window.store = store
window.ws = ws

ReactDOM.render(
  <Provider store={store}>
    <App ws={ws} />
  </Provider>,
document.getElementById('root'))
registerServiceWorker()
