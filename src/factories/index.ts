import { Product, Purchase } from '../types'

export const idCreator = () => Math.random() * 100000
export const titleCratorr = () => `anonymous product`
export const imageCrator = () => ``

export const fakeProductFactory = (): Product => {
  const productId = idCreator()
  const testProduct: Product = {
    id: productId,
    amount: productId,
    title: `test product 1 - [${productId}]`,
    image: `/${productId}.png`,
  }
  return testProduct
}

export const fakePurchaseFactory = (): Purchase => {
  const product: Product = fakeProductFactory()
  const testPurchase: Purchase = { ...product, quantity: 1 }
  return testPurchase
}

export const productFactory = (item: any): Product => {
  const product: Product = {
    id: Object.hasOwnProperty.call(item, 'id') ? item.id : idCreator(),
    title: Object.hasOwnProperty.call(item, 'title') ? item.title : titleCratorr(),
    image: Object.hasOwnProperty.call(item, 'image') ? item.title : imageCrator(),
    amount: Object.hasOwnProperty.call(item, 'amount') ? item.amout : 0,
  }
  return { ...product, ...item } as Product
}

export const purchaseFactory = (product: Product, quantity = 1): Purchase => {
  return { ...product, quantity } as Purchase
}
