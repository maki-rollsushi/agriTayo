import React, { useState, useEffect } from 'react';
import FarmerSidebar from '../components/FarmerSidebar';
import ProductCard from '../components/ProductCard';
import { farmerData } from '../data/farmerData';
import Hero from '../components/Hero'
import About from '../components/About';


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
    <div className='fullpage-wrapper'>
        <section id='hero'>
          <Hero/>
        </section>

        <section id='about'>
          <About/>
        </section>

      <section id="marketplace" className="marketplace-section">
        <div className="m-title">
          <div className="sidebar-toggle-placeholder">
            {isToggleVisible && !isSidebarOpen ? (
              <button className="toggle-sidebar-btn" onClick={handleShowSidebar}>
                <i className="fa-solid fa-bars"></i>
              </button>
            ) : (
              <div className="toggle-placeholder" /> // empty div to reserve space
            )}
          </div>
          <h1>Product Catalog</h1>
        </div>

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
          <div className='product-scroll-area'>
              <div className="product-grid">
                {selectedFarmer.products.map((product, idx) => (
                <ProductCard key={idx} product={product} farmer={selectedFarmer} />
                ))}
              </div>
          </div>
        </div>
      </section> 
    </div>
  );
}

export default HomePage;
