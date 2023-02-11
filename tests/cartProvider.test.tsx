import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CartProvider, CartContext } from '../src'
import { CartContextType, Product, Purchase, User } from '../src/types'

const idCreator = () => Math.random() * 100000

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
    amount: '1000',
    title: `test product 1 - [${productId}]`,
    image: null,
  }

  const userTest: User = {
    name: 'Ansar Mirzayi',
    avatar: '/ansar.png',
    id: idCreator(),
  }
  const providerProps: CartContextType = {
    basket: [{ ...testProduct, quantity: 1 } as Purchase],
    user: userTest,
    addToCart: () => console.log('this is a test'),
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
  expect(screen.getByText(/^name:/).textContent).toBe('name: Ansar Mirzayi')
})
