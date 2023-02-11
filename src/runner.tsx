import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider, useCart } from './index'
import { fakePurchaseFactory } from './factories'
import { Purchase } from './types'

const App = () => {
  const { basket, addToBasket, removeToBasket, deleteToBasket } = useCart()
  return (
    <main>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>amout</td>
            <td>quantity</td>
            <td>total amount</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {basket.map((purchase: Purchase) => {
            return (
              <tr key={purchase.id}>
                <td>{purchase.id}</td>
                <td>{purchase.title}</td>
                <td>{purchase.amount}</td>
                <td>{purchase.quantity}</td>
                <td>{purchase.quantity * Number(purchase.amount)}</td>
                <td>
                  <button onClick={() => addToBasket(purchase)}>inc</button>
                  <button onClick={() => removeToBasket(purchase.id)}>dec</button>
                  <button onClick={() => deleteToBasket(purchase.id)}>del</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <button onClick={() => addToBasket(fakePurchaseFactory(), 2)}>add new purchse</button>
    </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
