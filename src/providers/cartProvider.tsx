import React, { useContext } from 'react'
import { createContext, useReducer, PropsWithChildren } from 'react'

interface Cart {
  user_id?: number
  name?: string
  avatar?: string
  invonce: Array<Purchase> | []
}

interface Item {
  id: number
  title: string
  image: string | null
  amount: string
}

interface Purchase extends Item {
  quantity: number
}

interface CartContextType {
  cart: Cart
  addToCart: () => void
}

const initialCart: Cart = {
  user_id: undefined,
  avatar: undefined,
  name: undefined,
  invonce: [],
}

const CartContext = createContext<CartContextType>({
  cart: initialCart,
  addToCart: () => {
    console.log('addToCart')
  },
})

type ActionType<T = any> = {
  type: string
  payload: T
}

function cartReducer(state: any, action: ActionType) {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        invonce: state.invonce.push(action.payload),
      }
    }
  }
  throw Error('Unknown action: ' + action.type)
}

const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, dispatch] = useReducer(cartReducer, null)

  const addToCart = () => {
    const id = Math.random() * 10000
    const item: Item = {
      id,
      image: '',
      title: `this is a test product - ${id}`,
      amount: '1000',
    }
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
}

function useCart(): CartContextType {
  const cartContext = useContext<CartContextType>(CartContext)

  if (!cartContext) {
    throw new Error('CartProvider not providered!')
  }
  return cartContext
}

export { CartContext, useCart }
export default CartProvider
