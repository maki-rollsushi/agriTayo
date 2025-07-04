// pages/PreOrderFormPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { farmerData } from '../data/farmerData';

function PreOrderFormPage() {
  const { productId } = useParams();

  const product = farmerData
    .flatMap((farmer) => farmer.products)
    .find((p) => p.name === productId);

  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Pre-Order: {product.name}</h1>
      <div className="flex gap-6 mb-4">
        <img src={product.imageUrl} alt={product.name} className="w-40 h-40 object-cover border rounded" />
        <div>
          <p className="mb-2 text-gray-700">{product.description}</p>
          <ul>
            <li><strong>Variety:</strong> {product.variety}</li>
            <li><strong>Price per kg:</strong> ₱{product.pricePerKg}</li>
            <li><strong>Grow time:</strong> {product.growTimeDays} days</li>
            <li><strong>Max Quantity:</strong> {product.maxQuantityKg} kg</li>
          </ul>
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block">Quantity (kg)</label>
          <input type="number" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Delivery Address</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit Order</button>
      </form>
    </div>
  );
}

export default PreOrderFormPage;