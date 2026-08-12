import './About.css';

function About() {
    return (
        <div className="about-page">
            <div className="about-header">
                <h1>About Our Flower Shop</h1>
                <p>Bringing passion, elegance, and beauty into every bouquet since 2024.</p>
            </div>

            <div className="about-content">
                <div className="about-section">
                    <h2>Our Story</h2>
                    <p>
                        Founded with a love for floral design and nature's natural elegance, Flower Shop has grown into a cherished destination for fresh flowers, custom arrangements, and memorable gifts. We believe every flower tells a unique story and brings warmth to any room.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to spread joy and celebrate life's special moments through carefully crafted, high-quality floral arrangements. From birthdays and anniversaries to simple everyday surprises, we strive to deliver perfection in every stem.
                    </p>
                </div>

                <div className="about-values">
                    <h2>Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>🌱 Premium Quality</h3>
                            <p>Handpicked fresh blooms guaranteed to last longer.</p>
                        </div>
                        <div className="value-card">
                            <h3>🎨 Artisanal Craft</h3>
                            <p>Designed by passionate floral artists with care.</p>
                        </div>
                        <div className="value-card">
                            <h3>💚 Sustainable Sourcing</h3>
                            <p>Partnering with eco-friendly local flower farms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
