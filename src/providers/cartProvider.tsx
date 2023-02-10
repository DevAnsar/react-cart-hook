import React from 'react'
import { createContext, useState, PropsWithChildren } from "react";

interface Cart {
    user_id: number,
    name: string,
    avatar: string,
    invonce: Array<Purchase> | null
}

interface Item {
    id: number,
    title: string,
    image: string | null,
}
interface Purchase extends Item {
    quantity: number
}

type CartContext = CartProvider | null;

interface CartProvider {
    cart: Cart | null
};


export const CartContext = createContext<CartProvider | null>(null);



const cartProvider = ({ children }: PropsWithChildren) => {

    const [cart, dispatch] = useState(null);

    return (
        <CartContext.Provider value={{ cart }}>
            {children}
        </CartContext.Provider>
    )
}

export default cartProvider;