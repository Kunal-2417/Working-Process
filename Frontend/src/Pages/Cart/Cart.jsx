import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css'; // Import the CSS file

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.title} className="cart-item">
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} />
                        <p>Price: ${item.price}</p>
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>No items in cart</p>
            )}
        </div>
    );
};

export default Cart;
