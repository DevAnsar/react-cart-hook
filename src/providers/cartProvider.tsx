import React from 'react'
import { createContext, useReducer, PropsWithChildren, useState } from 'react'
import { CartContextType, Product, User } from './../types'
import {
  basketReducer,
  addToBasketAction,
  removeToBasketAction,
  deleteToBasketAction,
  clearBasketAction,
} from './../reducers'

const CartContext = createContext<CartContextType>({
  basket: [],
  user: null,
  addToBasket: () => undefined,
  removeToBasket: () => undefined,
  deleteToBasket: () => undefined,
  clearBasket: () => undefined,
})

const CartProvider = ({ children }: PropsWithChildren) => {
  const [basket, basketDispath] = useReducer(basketReducer, [])
  const [user] = useState<User | null>(null)

  const addToBasket = (product: Product, quantity = 1) => {
    basketDispath(addToBasketAction(product, quantity))
  }

  const removeToBasket = (product_id: number, quantity = 1) => {
    basketDispath(removeToBasketAction(product_id, quantity))
  }

  const deleteToBasket = (product_id: number) => {
    basketDispath(deleteToBasketAction(product_id))
  }

  const clearBasket = () => {
    basketDispath(clearBasketAction())
  }

  return (
    <CartContext.Provider value={{ basket, user, addToBasket, removeToBasket, deleteToBasket, clearBasket }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext }
export default CartProvider
