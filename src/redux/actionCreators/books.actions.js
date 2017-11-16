import { isArray } from 'lodash'
import { booksAdapter } from '../../adapters'

export function bookMessage (msg = []) {
  const isSnapshot = isArray(msg[1][0])
  if (isSnapshot) {
    return {
      type: 'BOOK_SNAPSHOT',
      payload: msg[1].map(row => booksAdapter(row))
    }
  }
  const row = booksAdapter(msg[1])
  const isRemove = !row.count
  if (isRemove) {
    return {
      type: 'BOOK_REMOVE',
      payload: {
        price: row.price,
        side: row.side
      }
    }
  }
  return {
    type: 'BOOK_UPDATE',
    payload: booksAdapter(msg[1])
  }
}
