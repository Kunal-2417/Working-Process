import React, { useContext } from 'react';
import { CompareContext } from '../../context/CompareContext';
import { CartContext } from '../../context/CartContext';
import './compare.css'; // Import the compare.css file
import { useNavigate } from 'react-router-dom';

const Compare = () => {
    const { compareItems, removeFromCompare } = useContext(CompareContext);
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    const handleGoToCart = () => {
        navigate('/Cart');
    };

    return (
        <div className="compare-container">
            <h1>Compare Page</h1>
            {compareItems.length > 0 ? (
                compareItems.map((item) => (
                    <div key={item.title} className="compare-item">
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} />
                        <p>Total Likes: {item.totalLike}</p>
                        <p>Category: {item.category}</p>
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                        <button onClick={() => removeFromCompare(item)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>No items to compare</p>
            )}

            {compareItems.length > 0 && (
                <button className="go-to-cart-button" onClick={handleGoToCart}>
                    Go to Cart
                </button>
            )}
        </div>
    );
};

export default Compare;
