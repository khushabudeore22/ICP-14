import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ cartCount = 0 }) {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">
                <Link to="/">Flower Shop</Link>
            </h2>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/flowers">Flowers</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <Link to="/cart" className="cart-link">
                        🛒 Cart <span className="cart-badge">{cartCount}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;