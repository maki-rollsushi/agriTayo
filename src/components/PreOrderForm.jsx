import { useState } from 'react';

function PreOrderForm({ productId, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    quantity: '',
    date: '',
    address: '',
    agree: false,
    signature: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    onSubmit({ productId, ...formData });
  };

  return (
    <form className="preorder-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="form-label">Name or Company</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="contact" className="form-label">Contact Number</label>
        <input
          id="contact"
          name="contact"
          type="text"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="quantity" className="form-label">Quantity (kg)</label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="date" className="form-label">Pick-Up Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="preorder-form-full">
        <label htmlFor="address" className="form-label">Delivery Address or Pickup Location</label>
        <input
          id="address"
          name="address"
          type='text'
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="preorder-form-full">
        <label htmlFor="signature" className="form-label">Type Your Name as Signature</label>
        <input
          id="signature"
          name="signature"
          type='text'
          value={formData.signature}
          onChange={handleChange}
          required
        />
      </div>

      <div className="checkbox-container preorder-form-full">
        <input
          type="checkbox"
          id="agree"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        <label htmlFor="agree">
          I understand this is a pre-order and agree to the estimated delivery window.
        </label>
      </div>

      <button type="submit" className="submit-btn preorder-form-full">
        Submit Order
      </button>
    </form>
  );
}

export default PreOrderForm;
