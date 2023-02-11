export interface ActionType {
  type: string
}

export interface BasketReducerAction<T> extends ActionType {
  payload: T
}
