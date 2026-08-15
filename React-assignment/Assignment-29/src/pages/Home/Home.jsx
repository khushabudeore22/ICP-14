import { Link } from 'react-router-dom';
import flowers from '../../data';
import FlowerCard from '../../components/FlowerCard/FlowerCard';
import './Home.css';

function Home({ onAddToCart }) {
    // Show top 3 featured flowers
    const featuredFlowers = flowers.slice(0, 3);

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Bring Nature's Beauty Home</h1>
                    <p>Fresh, vibrant, and handcrafted floral arrangements for every special occasion.</p>
                    <div className="hero-buttons">
                        <Link to="/flowers" className="btn btn-primary">Browse Collection</Link>
                        <Link to="/about" className="btn btn-secondary">Learn More</Link>
                    </div>
                </div>
            </section>

            {/* Featured Flowers Section */}
            <section className="section featured-section">
                <h2 className="section-title">Featured Flowers</h2>
                <p className="section-subtitle">Handpicked favorites crafted with care and elegance.</p>
                
                <div className="flower-grid">
                    {featuredFlowers.map((flower) => (
                        <FlowerCard
                            key={flower.id}
                            id={flower.id}
                            image={flower.image}
                            name={flower.name}
                            price={flower.price}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>

                <div className="view-more-container">
                    <Link to="/flowers" className="btn btn-outline">View All Flowers ({flowers.length})</Link>
                </div>
            </section>

            {/* Features / Why Choose Us Section */}
            <section className="section features-section">
                <h2 className="section-title">Why Choose Us?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🌸</div>
                        <h3>Always Fresh</h3>
                        <p>Sourced daily from top local growers to ensure premium freshness and longer bouquet life.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🚚</div>
                        <h3>Same-Day Delivery</h3>
                        <p>Fast, reliable delivery straight to your doorstep or directly to your loved ones.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎀</div>
                        <h3>Custom Arrangement</h3>
                        <p>Artisanal florists design each arrangement with attention to detail and personal touch.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
