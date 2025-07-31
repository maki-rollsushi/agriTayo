import React, { useState, useEffect } from "react";

/**
 * FarmerSidebar
 *
 * Provides filters for province, municipality, and product to narrow down
 * the list of farmers displayed. Updates the selected farmer when one is clicked.
 * This component is used in the product catalog to help users explore by location or product.
 */

function FarmerSidebar({
  farmers,
  selectedFarmer,
  setSelectedFarmer,
  selectedProductName,
  setSelectedProductName,
}) {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [filteredFarmers, setFilteredFarmers] = useState(farmers);

  // Unique Provinces from farmerData
  const provinces = [...new Set(farmers.map((f) => f.province))];

  // Municipalities based on selected province
  const municipalities = selectedProvince
    ? [
        ...new Set(
          farmers
            .filter((f) => f.province === selectedProvince)
            .map((f) => f.municipality)
        ),
      ]
    : [];

  // Available products from currently location-filtered farmers
  const availableProducts = [
    ...new Set(
      farmers
        .filter((f) => {
          return (
            (!selectedProvince || f.province === selectedProvince) &&
            (!selectedMunicipality || f.municipality === selectedMunicipality)
          );
        })
        .flatMap((f) => f.products.map((p) => p.name))
    ),
  ];

  // Re-filter farmers when a filter (province, municipality, or product) changes.
  useEffect(() => {
    let filtered = farmers;

    if (selectedProvince) {
      filtered = filtered.filter((f) => f.province === selectedProvince);
    }

    if (selectedMunicipality) {
      filtered = filtered.filter(
        (f) => f.municipality === selectedMunicipality
      );
    }

    if (selectedProductName) {
      filtered = filtered.filter((f) =>
        f.products.some((p) => p.name === selectedProductName)
      );
    }

    setFilteredFarmers(filtered);
  }, [selectedProvince, selectedMunicipality, selectedProductName, farmers]);

  /**
   * Render the sidebar UI:
   * - Province, municipality, and product filters
   * - Filtered list of farmers
   */

  return (
    <div className="farmer-sidebar">
      <h2 className="sidebar-title">Filter Farmers</h2>

      <label>Province:</label>
      <select
        value={selectedProvince}
        onChange={(e) => {
          setSelectedProvince(e.target.value);
          setSelectedMunicipality(""); // reset municipality when province changes
        }}
      >
        <option value="">All Provinces</option>
        {provinces.map((province) => (
          <option key={province} value={province}>
            {province}
          </option>
        ))}
      </select>

      <label>Municipality:</label>
      <select
        value={selectedMunicipality}
        onChange={(e) => setSelectedMunicipality(e.target.value)}
        disabled={!selectedProvince}
      >
        <option value="">All Municipalities</option>
        {municipalities.map((muni) => (
          <option key={muni} value={muni}>
            {muni}
          </option>
        ))}
      </select>

      <label>Product:</label>
      <select
        value={selectedProductName}
        onChange={(e) => setSelectedProductName(e.target.value)}
        disabled={availableProducts.length === 0}
      >
        <option value="">All Products</option>
        {availableProducts.map((product) => (
          <option key={product} value={product}>
            {product}
          </option>
        ))}
      </select>

      <h3>Farmers:</h3>
      <div className="farmer-list">
        <ul>
          {filteredFarmers.length > 0 ? (
            filteredFarmers.map((farmer) => (
              <li
                key={farmer.name}
                onClick={() => setSelectedFarmer(farmer)}
                className={`farmer-item ${farmer.name === selectedFarmer?.name ? "selected" : ""}`}
              >
                {farmer.name}
              </li>
            ))
          ) : (
            <li className="farmer-item">No farmers found</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default FarmerSidebar;
