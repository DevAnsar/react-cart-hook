
<div align="center">
        <a href="https://github.com/DevAnsar/react-cart-hook" title="React Cart Hook - Simple React cart provider">
            <img src="./src/react-hook-form.png" alt="React Hook Cart Logo - React hook custom hook for form shopping cart" />
        </a>
</div>
<div align="center">

[![NPM version][npm-image]][npm-url]
![npm-typescript]
[![License][github-license]][github-license-url]

</div>


### Install

    npm install react-cart-hook

### Add provider to top of your component tree

```jsx
import { CartProvider } from 'react-cart-hook';
function App() {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
```

### Simply you can import useCart hook everywere

```jsx
import { useCart } from 'react-cart-hook';
function MyExampleComponent() {

  const { basket , addToBasket } = useCart();

  return (
    <div>
      {basket.map(product=> ...)}
    </div>
  );
}
```
<h2> APIs</h2>

#### 🔗 `CartProvider`

This is a Provider Component to wrapper around your entire app(or a section of it) in order to create context for the cart.


```tsx
import { CartProvider } from "react-cart-hook";
<CartProvider>
  <App />
</CartProvider>
```

#### 🔗 `useCart`

React Hook (Function) to expose cart functionality

```tsx
import { useCart } from "react-cart-hook";

const { basket, user, addToBasket, removeToBasket, deleteToBasket } = useCart();

```

#### 🔗 `basket`

`basket` in an `Purchase` array

```tsx
import { useCart } from "react-cart-hook";
const { basket } = useCart();
const ShowCart = () => {
  return (
    <div>
      <ul>
        {basket.map((purchase) => (
          <li>{purchase.id}</li>
        ))}
      </ul>
    </div>
  );
};
```

#### 🔗 `addToBasket(Pruduct, quantity?)`

Adds the `product` to the `basket` array

- `Pruduct` is an object `{id: number, title: number , amount : number , image ?: string}`

- `quantity` is a number, but optional. Default value is 1

```tsx
const { addToBasket } = useCart();
  return (
    <button onClick={()=>addToBasket({id: 1234, amount: 5 , 'title' : 'product-1' , image : './image.png'}, 3)}>Add 2 bread for 5 USD each</button>
  );
```
#### 🔗 `removeToBasket(product_id,quantity?)`

Reduce the amount of one of the products.

- `product_id` is a number
- `quantity` is a number, but optional. Default value is 1

```tsx
const { removeToBasket } = useCart();
  return (
    <button onClick={()=>removeToBasket(1234 , 2)}>Remove items</button>
  );
```

#### 🔗 `deleteToBasket(product_id)`

Removes all of the products with that id from the basket.

- `product_id` is a number

```tsx
const { removeToBasket } = useCart();
  return (
    <button onClick={()=>deleteToBasket(1234)}>Delete items</button>
  );
```

[npm-url]: https://www.npmjs.com/package/react-cart-hook
[npm-image]: https://img.shields.io/npm/v/react-cart-hook
[github-license]: https://img.shields.io/github/license/DevAnsar/react-cart-hook
[github-license-url]: https://github.com/DevAnsar/react-cart-hook/blob/main/LICENSE
[npm-typescript]: https://img.shields.io/npm/types/react-cart-hook