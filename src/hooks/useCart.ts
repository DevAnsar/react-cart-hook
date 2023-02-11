import { useContext } from 'react'
import { CartContext } from '../providers/CartProvider'
import { CartContextType } from './../types'

function useCart(): CartContextType {
  const cartContext = useContext<CartContextType>(CartContext)

  if (!cartContext) {
    throw new Error('CartProvider not providered!')
  }
  return cartContext
}
export default useCart
