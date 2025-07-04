// components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/pre-order/${product.name}`} className="product-card border p-2 rounded-md shadow-md hover:shadow-lg transition w-full max-w-xs">
      <div>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-700">Variety: {product.variety}</p>
        <p className="text-sm text-green-700 font-medium">₱{product.pricePerKg}/kg</p>
      </div>
    </Link>
  );
}

export default ProductCard;
