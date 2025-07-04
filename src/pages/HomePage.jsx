import React, { useState } from 'react';
import Header from '../components/Header'; // 👈 import the header
import FarmerSidebar from '../components/FarmerSidebar';
import ProductCard from '../components/ProductCard';
import { farmerData } from '../data/farmerData';

function HomePage() {
  const [selectedFarmer, setSelectedFarmer] = useState(farmerData[0]);

  return (
    <div>
        <section id="about" className="about-section">
            <h1 className="about-title">About</h1>
            <p className="about-description">
                agriTayo connects consumers directly with farmers by enabling 
                pre-orders of fresh produce. Our platform supports local agriculture, 
                reduces waste, and helps build a more sustainable food system for everyone. 
                By working closely with local farmers, we ensure high-quality, seasonal 
                harvests while empowering communities and promoting food transparency.
            </p>

            <div className="about-icons">
                <div className="icon-block">
                    <i className="fa-solid fa-seedling"></i>
                    <p>Pre-order Vegetables</p>
                </div>
                <div className="icon-block">
                    <i className="fa-solid fa-hand-holding-droplet"></i>
                    <p>Support Farmer Capital</p>
                </div>
                <div className="icon-block">
                    <i className="fa-solid fa-hand-holding-dollar"></i>
                    <p>Price Stability</p>
                </div>
            </div>

        </section>


        <section id="marketplace" className="marketplace-section">
        <h2 className="marketplace-title">Marketplace</h2>
        <div className="marketplace-content">
                <div className="sidebar-wrapper">
                    <FarmerSidebar
                    farmers={farmerData}
                    selectedFarmer={selectedFarmer}
                    setSelectedFarmer={setSelectedFarmer}
                    />
                </div>
            <div className="product-grid">
                {selectedFarmer.products.map((product, idx) => (
                    <ProductCard key={idx} product={product} />
                ))}
            </div>
        </div>
        </section>

    </div>
  );
}

export default HomePage;
