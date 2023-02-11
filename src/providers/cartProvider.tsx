import React from 'react'
import { createContext, useReducer, PropsWithChildren, useState } from 'react'
import { CartContextType, Purchase, User } from './../types'
import { basketReducer, addToBasketAction } from './../reducers'

const CartContext = createContext<CartContextType>({
  basket: [],
  user: null,
})

const CartProvider = ({ children }: PropsWithChildren) => {
  const [basket, basketDispath] = useReducer(basketReducer, null)
  const [user] = useState<User | null>(null)

  const addToBasket = () => {
    const id = Math.random() * 10000
    const item: Purchase = {
      id,
      image: '',
      title: `this is a test product - ${id}`,
      amount: '1000',
      quantity: 1,
    }
    basketDispath(addToBasketAction(item))
  }

  return <CartContext.Provider value={{ basket, user, addToBasket }}>{children}</CartContext.Provider>
}

export { CartContext }
export default CartProvider
