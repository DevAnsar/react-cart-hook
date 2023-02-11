import { Purchase } from './@purchase'

export interface Cart {
  user_id?: number
  name?: string
  avatar?: string
  invonce: Array<Purchase> | []
}
