import React from 'react'
import ReactDOM from 'react-dom/client'
import { Counter } from 'react-cart-hook'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default counter</h2>
      <Counter />
    </div>
    <hr />
    <div>
      <h2>Counter with predefined value</h2>
      <Counter value={5} />
    </div>
  </React.StrictMode>,
)
