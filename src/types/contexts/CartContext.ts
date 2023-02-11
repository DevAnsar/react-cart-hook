import { User, Purchase, Product } from './../index'

interface CartContextType {
  user: User | null
  basket: Array<Purchase> | []
  addToBasket?: (product: Product) => void
}

export { CartContextType }
