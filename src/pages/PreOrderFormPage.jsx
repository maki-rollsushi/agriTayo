// pages/PreOrderFormPage.jsx
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PreOrderForm from '../components/PreOrderForm';

function PreOrderFormPage() {
  const { productId } = useParams();
  const location = useLocation();

  const { product, farmer } = location.state || {};

  if (!product || !farmer) {
    return <div className="form-container">Product not found or missing data.</div>;
  }

  const handleOrderSubmit = (data) => {
    console.log('Order submitted:', data);
    alert(`Order placed for ${data.quantity}kg of ${data.productId}.`);
  };

  return (
    <div className="form-container">
      <h2>PRE-ORDER FORM</h2>
      <div className="product-card-large-horizontal">
        <img src={product.imageUrl} alt={product.name} className="product-image-side" />
        <div className="product-info-block">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-farmer"><strong>Farmer:</strong> {farmer.name}</p>
          <p className="product-description">{product.description}</p>
          <ul className="product-details">
            <li><strong>Variety:</strong> {product.variety}</li>
            <li><strong>Max Quantity:</strong> {product.maxQuantityKg} kg</li>
            <li><strong>Grow Time:</strong> {product.growTimeDays} days</li>
            <li><strong>Price per KG:</strong> ₱{product.pricePerKg}</li>
          </ul>
          <a href="/">Farmer Profile</a>
        </div>
      </div>

      <PreOrderForm productId={product.name} onSubmit={handleOrderSubmit} />
    </div>
  );
}

export default PreOrderFormPage;
