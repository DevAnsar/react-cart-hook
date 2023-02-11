import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CartProvider, CartContext } from '../src'

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
  const providerProps = {
    cart: { name: 'ansar' },
    addToCart: () => console.log('this is a test'),
  }
  customRender(
    <CartContext.Consumer>
      {(value) => (
        <div>
          <span children={`name: ${value.cart.name}`} />
        </div>
      )}
    </CartContext.Consumer>,
    providerProps,
    {},
  )
  expect(screen.getByText(/^name:/).textContent).toBe('name: ansar')
})
