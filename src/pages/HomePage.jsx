import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FarmerSidebar from '../components/FarmerSidebar';
import ProductCard from '../components/ProductCard';
import { farmerData } from '../data/farmerData';

function HomePage() {
  const [selectedFarmer, setSelectedFarmer] = useState(farmerData[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isToggleVisible, setIsToggleVisible] = useState(true); // Controls "Show Farmers" button

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setTimeout(() => {
      setIsToggleVisible(true);
    }, 120);
  };

  const handleShowSidebar = () => {
    setIsSidebarOpen(true);
    setIsToggleVisible(false);
  };


  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  }, [isSidebarOpen]);


  const handleFarmerSelect = (farmer) => {
    setSelectedFarmer(farmer);
    setIsSidebarOpen(false);
    handleCloseSidebar();
  };

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
        <div className="market-title">
          <button
            onClick={() =>
              document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="scroll-btn"
          >
            <h2 className="marketplace-title">Pre-Order Now</h2>
          </button>
        </div>

        {/* Toggle button */}
        {isToggleVisible && !isSidebarOpen && (
          <button className="toggle-sidebar-btn" onClick={handleShowSidebar}>
            Show Farmers
          </button>
        )}

        {/* Overlay */}
        {isSidebarOpen && <div className="sidebar-overlay" onClick={handleCloseSidebar} />}

        <div className="marketplace-content">
          <div className={`sidebar-wrapper responsive-sidebar ${isSidebarOpen ? 'open' : ''}`}>
            {!isToggleVisible && <button className="close-sidebar" onClick={handleCloseSidebar}>×</button>}
            <FarmerSidebar
              farmers={farmerData}
              selectedFarmer={selectedFarmer}
              setSelectedFarmer={handleFarmerSelect}
            />
          </div>

          <div className="product-grid">
            {selectedFarmer.products.map((product, idx) => (
              <ProductCard key={idx} product={product} farmer={selectedFarmer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
