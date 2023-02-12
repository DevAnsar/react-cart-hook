import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CartProvider, CartContext } from '../src'
import { CartContextType, Product, Purchase, User } from '../src/types'
import { basketReducer, addToBasketAction } from '../src/reducers'

import { idCreator, purchaseFactory, productFactory, fakeUserFactory } from '../src/factories'

describe('CartProvider render', () => {
  it('renders without crashing', () => {
    render(
      <CartProvider>
        <div>test</div>
      </CartProvider>,
    )
  })
})

const customRender = (ui: React.ReactNode, providerProps: any, renderOptions: any) => {
  return render(<CartContext.Provider value={...providerProps}>{ui}</CartContext.Provider>, renderOptions)
}

test('CartContext composes full name from first, last', () => {
  const productId = idCreator()
  const testProduct: Product = {
    id: productId,
    amount: 1000,
    title: `test product 1 - [${productId}]`,
    image: undefined,
  }

  const userTest: User = fakeUserFactory()
  const providerProps: CartContextType = {
    basket: [{ ...testProduct, quantity: 1 } as Purchase],
    user: userTest,
    addToBasket: () => undefined,
    removeToBasket: () => undefined,
    deleteToBasket: () => undefined,
    clearBasket: () => undefined,
  }

  customRender(
    <CartContext.Consumer>
      {(value) => (
        <div>
          <span>name: {value.user?.name}</span>
          {value.basket?.map((p: Purchase) => (
            <span key={p.id}>{p.title}</span>
          ))}
        </div>
      )}
    </CartContext.Consumer>,
    providerProps,
    {},
  )
  expect(screen.getByText(/^name:/).textContent).toBe('name: Jon Doe')
})

test('test basket reducer', () => {
  const product1: Product = productFactory({})
  const product2: Product = productFactory({ id: 1234, title: 'product-test' })

  const testPurchase1: Purchase = purchaseFactory(product1)
  const testPurchase2: Purchase = purchaseFactory(product2, 3)

  let newState = basketReducer([], addToBasketAction(testPurchase1))
  newState = basketReducer(newState, addToBasketAction(testPurchase1))
  newState = basketReducer(newState, addToBasketAction(testPurchase2))

  expect(newState.length).toBe(2)
})
