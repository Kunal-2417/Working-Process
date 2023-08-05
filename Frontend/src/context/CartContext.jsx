import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (newItem) => {
        const itemExists = cartItems.some((item) => item.title === newItem.title);

        if (itemExists) {
            alert('Item already exists in the cart');
        } else {
            const updatedCartItems = [...cartItems, newItem];
            setCartItems(updatedCartItems);
            alert("Item Added")
        }
    };

    const removeFromCart = (itemToRemove) => {
        const updatedCartItems = cartItems.filter((item) => item.title !== itemToRemove.title);
        setCartItems(updatedCartItems);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
