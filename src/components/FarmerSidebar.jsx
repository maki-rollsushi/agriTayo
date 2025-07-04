import React from 'react';

function FarmerSidebar({ farmers, selectedFarmer, setSelectedFarmer }) {
  return (
    <div className="farmer-sidebar">
      <h2 className="sidebar-title">Farmers</h2>
      <ul className="farmer-list">
        {farmers.map((farmer) => (
          <li
            key={farmer.name}
            onClick={() => setSelectedFarmer(farmer)}
            className={`farmer-item ${farmer.name === selectedFarmer?.name ? 'selected' : ''}`}
          >
            {farmer.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FarmerSidebar;
