import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, onUpdateQuantity, onRemoveFromCart, onClearCart }) {
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div className="cart-page empty-cart">
                <h2>Your Shopping Cart is Empty 🛒</h2>
                <p>Looks like you haven't added any flowers to your cart yet.</p>
                <Link to="/flowers" className="continue-shopping-btn">Explore Flowers</Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h1 className="cart-title">Your Shopping Cart</h1>
            <p className="cart-subtitle">Items stored in your browser session (LocalStorage).</p>

            <div className="cart-table-container">
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td className="cart-item-info">
                                    <img src={item.image} alt={item.name} className="cart-item-img" />
                                    <span>{item.name}</span>
                                </td>
                                <td>${item.price}</td>
                                <td>
                                    <div className="quantity-controls">
                                        <button 
                                            className="qty-btn"
                                            onClick={() => onUpdateQuantity(item.id, -1)}
                                        >
                                            -
                                        </button>
                                        <span className="qty-value">{item.quantity}</span>
                                        <button 
                                            className="qty-btn"
                                            onClick={() => onUpdateQuantity(item.id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="cart-subtotal">${item.price * item.quantity}</td>
                                <td>
                                    <button 
                                        className="remove-btn"
                                        onClick={() => onRemoveFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="cart-summary">
                <div className="cart-actions">
                    <button className="clear-cart-btn" onClick={onClearCart}>Clear Cart</button>
                    <Link to="/flowers" className="continue-shopping-link">Continue Shopping</Link>
                </div>
                <div className="cart-total-box">
                    <h3>Total: <span className="total-price">${totalAmount}</span></h3>
                </div>
            </div>
        </div>
    );
}

export default Cart;
