import { BasketReducerAction, Purchase } from '../types'
export const ADD_ITEM = 'ADD_ITEM'

function basketReducer(state: any, action: BasketReducerAction<Purchase>) {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        invonce: state.invonce.push(action.payload),
      }
    }
  }
  throw Error('Unknown action: ' + action.type)
}

export const addToBasketAction = (item: Purchase): BasketReducerAction<Purchase> => {
  return {
    type: ADD_ITEM,
    payload: item,
  }
}
export { basketReducer }
