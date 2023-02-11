import { User, Purchase, Product } from './../index'

interface CartContextType {
  user: User | null
  basket: Array<Purchase> | []
  addToBasket: (product: Product, quantity?: number) => void
  removeToBasket: (product_id: number, quantity?: number) => void
  deleteToBasket: (product_id: number) => void
}

export { CartContextType }
