import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Flowers from './pages/Flowers/Flowers';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';

function App() {
    // Read initial cart state from localStorage
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch {
            return [];
        }
    });

    // Save cart state to localStorage whenever it updates
    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error('Failed to save cart to localStorage', error);
        }
    }, [cart]);

    // Add item to cart without navigating away
    const handleAddToCart = (flower) => {
        setCart((prevCart) => {
            const existingIndex = prevCart.findIndex((item) => item.id === flower.id);
            if (existingIndex > -1) {
                const updated = [...prevCart];
                updated[existingIndex].quantity += 1;
                return updated;
            } else {
                return [...prevCart, { ...flower, quantity: 1 }];
            }
        });
    };

    // Increase or decrease quantity
    const handleUpdateQuantity = (id, delta) => {
        setCart((prevCart) => {
            return prevCart
                .map((item) => {
                    if (item.id === id) {
                        const newQty = item.quantity + delta;
                        return newQty > 0 ? { ...item, quantity: newQty } : null;
                    }
                    return item;
                })
                .filter(Boolean);
        });
    };

    // Remove item from cart
    const handleRemoveFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Clear all items from cart
    const handleClearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    // Total quantity calculation for Navbar badge
    const totalCartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <div className="App">
            <Navbar cartCount={totalCartCount} />
            <Routes>
                <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
                <Route path="/flowers" element={<Flowers onAddToCart={handleAddToCart} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            onUpdateQuantity={handleUpdateQuantity}
                            onRemoveFromCart={handleRemoveFromCart}
                            onClearCart={handleClearCart}
                        />
                    }
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;