import React from "react";

function DetailCard({ product, farmer, onClose }) {
  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
    // implement your add to cart logic here
  };

  const handlePreOrder = () => {
    console.log(`Pre-ordered ${product.name}`);
    // implement your pre-order logic here
  };

  return (
    <div>
      <div
        className="continue-shopping"
        onClick={onClose}
        style={{
          color: "#fbb533",
          cursor: "pointer",
          marginBottom: "1rem",
          textAlign: "left",
          fontWeight: "500",
        }}
      >
        ← Continue Shopping
      </div>

      <div className="product-card-large-horizontal">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image-side"
        />

        <div className="product-info-block">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-farmer">
            <strong>Farmer:</strong> {farmer.name}
          </p>
          <p className="product-description">{product.description}</p>

          <div className="product-details">
            <div>
              <strong>Variety:</strong> {product.variety}
            </div>
            <div>
              <strong>Max Quantity:</strong> {product.maxQuantityKg} kg
            </div>
            <div>
              <strong>Grow Time:</strong> {product.growTimeDays} days
            </div>
            <div>
              <strong>Price per KG:</strong> ₱{product.pricePerKg}
            </div>
          </div>

          <a href="/">Farmer Profile</a>

          <div className="button-group">
            <button onClick={handleAddToCart} className="button-first">
              <strong>ADD TO CART</strong>
            </button>

            <button onClick={handlePreOrder} className="button-second">
              <strong>PRE-ORDER NOW</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
