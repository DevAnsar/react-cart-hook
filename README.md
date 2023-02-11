
<div align="center">
        <a href="https://github.com/DevAnsar/react-cart-hook" title="React Cart Hook - Simple React cart provider">
            <img src="./src/react-hook-form.png" alt="React Hook Cart Logo - React hook custom hook for form validation" />
        </a>
</div>
<div align="center">

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
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


  const { cart , addToCart } = useCart();

  return (
    <div>
      {cart.invonce.map(product=> ...)}
    </div>
  );
}
```

[npm-url]: https://www.npmjs.com/package/react-cart-hook
[npm-image]: https://img.shields.io/npm/v/react-cart-hook
[github-license]: https://img.shields.io/github/license/DevAnsar/react-cart-hook
[github-license-url]: https://github.com/DevAnsar/react-cart-hook/blob/main/LICENSE
[github-build]: https://github.com/DevAnsar/react-cart-hook/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/DevAnsar/react-cart-hook/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-cart-hook