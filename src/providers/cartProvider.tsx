import React from 'react'
import { createContext, useState, PropsWithChildren } from 'react'

interface Cart {
  user_id: number
  name: string
  avatar: string
  invonce: Array<Purchase> | null
}

interface Item {
  id: number
  title: string
  image: string | null
}
interface Purchase extends Item {
  quantity: number
}

type CartContext = CartProviderType | null

interface CartProviderType {
  cart: Cart | null
}

export const CartContext = createContext<CartProviderType | null>(null)

const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart] = useState(null)

  return <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
}

export default CartProvider
