import React from 'react'
import { createContext, useReducer, PropsWithChildren, useState } from 'react'
import { CartContextType, Product, User } from './../types'
import { basketReducer, addToBasketAction, removeToBasketAction, deleteToBasketAction } from './../reducers'

const CartContext = createContext<CartContextType>({
  basket: [],
  user: null,
  addToBasket: () => undefined,
  removeToBasket: () => undefined,
  deleteToBasket: () => undefined,
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

  return (
    <CartContext.Provider value={{ basket, user, addToBasket, removeToBasket, deleteToBasket }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext }
export default CartProvider
