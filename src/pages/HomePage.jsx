import React, { useState, useEffect } from "react";
import FarmerSidebar from "../components/FarmerSidebar";
import ProductCard from "../components/ProductCard";
import { farmerData } from "../data/farmerData";
import Hero from "../components/Hero";
import About from "../components/About";


/**
 * HomePage
 * 
 * Main landing page that includes:
 * - Hero section
 * - About section
 * - Marketplace section with a sidebar for selecting farmers
 *
 * Users can browse products filtered by farmer and product name.
 */

function HomePage() {
  // State to track currently selected farmer and sidebar visibility
  const [selectedFarmer, setSelectedFarmer] = useState(farmerData[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isToggleVisible, setIsToggleVisible] = useState(true); // Controls "Show Farmers" button
  const [selectedProductName, setSelectedProductName] = useState("");

  // Close the sidebar and re-enable the toggle button after a brief delay
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setTimeout(() => {
      setIsToggleVisible(true);
    }, 120);
  };

  // Open the sidebar and hide the toggle button
  const handleShowSidebar = () => {
    setIsSidebarOpen(true);
    setIsToggleVisible(false);
  };

  // Add or remove a class to the body when the sidebar is toggled (for styling)
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [isSidebarOpen]);

  // Handle when a farmer is selected from the sidebar
  const handleFarmerSelect = (farmer) => {
    setSelectedFarmer(farmer);
    setIsSidebarOpen(false);
    handleCloseSidebar();
  };

  // This returns the fully renderred Home Page of the Website
  return (
    <div className="fullpage-wrapper">
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="marketplace" className="marketplace-section">
        <div className="m-title">
          <div className="sidebar-toggle-placeholder">
            {isToggleVisible && !isSidebarOpen ? (
              <button
                className="toggle-sidebar-btn"
                onClick={handleShowSidebar}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            ) : (
              <div className="toggle-placeholder" />
            )}
          </div>
          <h1>Product Catalog</h1>
        </div>

        {isSidebarOpen && (
          <div className="sidebar-overlay" onClick={handleCloseSidebar} />
        )}

        <div className="marketplace-content">
          <div
            className={`sidebar-wrapper responsive-sidebar ${
              isSidebarOpen ? "open" : ""
            }`}
          >
            {!isToggleVisible && (
              <button className="close-sidebar" onClick={handleCloseSidebar}>
                ×
              </button>
            )}
            <FarmerSidebar
              farmers={farmerData}
              selectedFarmer={selectedFarmer}
              setSelectedFarmer={handleFarmerSelect}
              selectedProductName={selectedProductName}
              setSelectedProductName={setSelectedProductName}
            />
          </div>
          <div className="product-scroll-area">
            <div className="product-grid">
              {selectedFarmer.products
                .filter((product) =>
                  selectedProductName
                    ? product.name === selectedProductName
                    : true
                )
                .map((product, idx) => (
                  <ProductCard
                    key={idx}
                    product={product}
                    farmer={selectedFarmer}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
