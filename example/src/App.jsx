import React from 'react'
import { useCart } from 'react-cart-hook'
const App = () => {
  const { basket, addToBasket } = useCart()

  return (
    <main>
      <ol>
        {basket?.map((purchase) => (
          <span key={purchase.id}>{purchase.title}</span>
        ))}
      </ol>
      <button onClick={addToBasket}>add product</button>
    </main>
  )
}

export default App
