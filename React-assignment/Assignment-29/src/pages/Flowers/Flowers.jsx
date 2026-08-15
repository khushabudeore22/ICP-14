import { useState } from 'react';
import flowers from '../../data';
import SearchBar from '../../components/SearchBar/SearchBar';
import FlowerCard from '../../components/FlowerCard/FlowerCard';
import './Flowers.css';

function Flowers({ onAddToCart }) {
    const [search, setsearch] = useState('');

    const filteredFlowers = flowers.filter((flower) =>
        flower.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flowers-page">
            <div className="flowers-header">
                <h1>Our Flower Collection</h1>
                <p>Browse through our fresh selection of beautiful blooms.</p>
            </div>

            <SearchBar search={search} setsearch={setsearch} />

            <div className="flower-grid">
                {filteredFlowers.length > 0 ? (
                    filteredFlowers.map((flower) => (
                        <FlowerCard
                            key={flower.id}
                            id={flower.id}
                            image={flower.image}
                            name={flower.name}
                            price={flower.price}
                            onAddToCart={onAddToCart}
                        />
                    ))
                ) : (
                    <div className="no-results">
                        <h3>No flowers found matching "{search}"</h3>
                        <p>Try searching for another flower name like Rose, Tulip, or Lavender.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Flowers;
