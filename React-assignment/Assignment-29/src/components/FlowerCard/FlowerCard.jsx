import { useState } from 'react';
import './FlowerCard.css';

function FlowerCard({ id, image, name, price, onAddToCart }) {
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart({ id, image, name, price });
        }
        setAdded(true);
        setTimeout(() => {
            setAdded(false);
        }, 1500);
    };

    return (
        <div className="flower-card">
            <img src={image} alt={name} className="flower-image" />

            <div className="flower-details">
                <h3>{name}</h3>
                <p>${price}</p>

                <button 
                    className={`add-to-cart-button ${added ? 'added' : ''}`}
                    onClick={handleAddToCart}
                >
                    {added ? 'Added! ✓' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
}

export default FlowerCard;