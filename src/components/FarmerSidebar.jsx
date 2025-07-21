import React, { useState, useEffect } from "react";

function FarmerSidebar({ farmers, selectedFarmer, setSelectedFarmer }) {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [filteredFarmers, setFilteredFarmers] = useState(farmers);

  // Unique Provinces
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

  // Update filtered farmers based on selection
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

    setFilteredFarmers(filtered);
  }, [selectedProvince, selectedMunicipality, farmers]);

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

      <h3 style={{ marginTop: "1rem" }}>Farmers:</h3>
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
