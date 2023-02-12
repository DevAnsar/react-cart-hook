import { BasketReducerAction, ActionType, Product, Purchase } from '../types'

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const CLEAR_BASKET = 'CLEAR_BASKET'

import { purchaseFactory } from './../factories'
type BasketAction = BasketReducerAction<{ product: Product; quantity: number }>

function basketReducer(state: any, action: any) {
  switch (action.type) {
    case ADD_ITEM: {
      const hasInBasket = state.filter((pur: Purchase) => pur.id === action.payload.product.id)
      if (hasInBasket.length > 0) {
        return state.map((purchase: Purchase) => {
          if (purchase.id === action.payload.product.id) {
            return { ...purchase, quantity: purchase.quantity + action.payload.quantity }
          } else {
            return { ...purchase }
          }
        })
      }
      const newPurchase: Purchase = purchaseFactory(action.payload.product, action.payload.quantity)
      return [...state, { ...newPurchase }]
    }

    case REMOVE_ITEM: {
      const hasInBasket = state.filter((pur: Purchase) => pur.id === action.payload.product_id)
      if (hasInBasket.length > 0) {
        const newState = state.map((purchase: Purchase) => {
          if (purchase.id === action.payload.product_id) {
            //
            const newQuantity: number = purchase.quantity - action.payload.quantity
            if (newQuantity > 0) {
              return { ...purchase, quantity: purchase.quantity - action.payload.quantity }
            }
            return null
          } else {
            return { ...purchase }
          }
        })
        return newState.filter(Boolean)
      }
      return [...state]
    }

    case DELETE_ITEM: {
      const hasInBasket = state.filter((pur: Purchase) => pur.id === action.payload.product_id)
      if (hasInBasket.length > 0) {
        const newState = state.map((purchase: Purchase) => {
          if (purchase.id === action.payload.product_id) {
            return null
          } else {
            return { ...purchase }
          }
        })
        return newState.filter(Boolean)
      }
      return [...state]
    }

    case CLEAR_BASKET: {
      return []
    }
  }
  throw Error('Unknown action: ' + action.type)
}

export const addToBasketAction = (item: Product | Purchase, quantity = 1): BasketAction => {
  return {
    type: ADD_ITEM,
    payload: {
      quantity,
      product: item,
    },
  }
}

export const removeToBasketAction = (
  product_id: number,
  quantity = 1,
): BasketReducerAction<{ product_id: number; quantity: number }> => {
  return {
    type: REMOVE_ITEM,
    payload: {
      quantity,
      product_id: product_id,
    },
  }
}

export const deleteToBasketAction = (product_id: number): BasketReducerAction<{ product_id: number }> => {
  return {
    type: DELETE_ITEM,
    payload: {
      product_id,
    },
  }
}

export const clearBasketAction = (): ActionType => {
  return {
    type: CLEAR_BASKET,
  }
}
export { basketReducer }
