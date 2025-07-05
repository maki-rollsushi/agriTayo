// ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, farmer }) {
  return (
    <Link
      to={`/pre-order/${product.name}`}
      state={{ product, farmer }}
      className="product-card"
    >
      <div className="product-image-wrapper">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-variety">Variety: {product.variety}</p>
        <p className="product-price">₱{product.pricePerKg}/kg</p>
      </div>
    </Link>
  );
}

export default ProductCard;
