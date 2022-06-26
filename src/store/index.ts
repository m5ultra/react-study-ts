import { createContext, useContext } from 'react'
import cartStore from './Cart.store'
import CounterStore from './Counter.store'

class RootStore {
  cart = cartStore

  counter = CounterStore
}

const store = new RootStore()
const Context = createContext(store)
// eslint-disable-next-line import/prefer-default-export
export const useStore = () => useContext(Context)
