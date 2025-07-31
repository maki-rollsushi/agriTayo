import React from "react";
import { Link } from "react-router-dom";

/**
 * ProductCard
 *
 * Displays a clickable product card linking to the pre-order page.
 * Receives a product and its corresponding farmer as props.
 * Passes the data via React Router state.
 *
 * Props:
 * - product: Object containing product details (name, imageUrl, pricePerKg, etc.)
 * - farmer: Object containing the farmer's info related to the product
 */

function ProductCard({ product, farmer }) {
  return (
    <Link
      to={`/pre-order/${product.productId}`}
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
        <p className="product-price">
          <strong>₱{product.pricePerKg}</strong>/kg
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
