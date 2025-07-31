import { useState } from "react";

/**
 * PreOrderCard
 * 
 * Displays a form that allows users to submit a pre-order for a specific product.
 * Includes validation for terms agreement and shows a success overlay after submission.
 * 
 * Props:
 * - productId: ID of the product being ordered
 * - onSubmit: function to handle form submission (receives form data + productId)
 */



function PreOrderCard({ productId, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    quantity: "",
    date: "",
    address: "",
    agree: false,
    signature: "",
  });

  const [showOverlay, setShowOverlay] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    onSubmit({ productId, ...formData });
    setShowOverlay(true);
  };
  const handleOrderAgain = () => {
    setFormData({
      name: "",
      contact: "",
      email: "",
      quantity: "",
      date: "",
      address: "",
      signature: "",
      agree: false,
    });
    setShowOverlay(false);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("success-overlay")) {
      setShowOverlay(false);
    }
  };

  return (
    <form className="preorder-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="form-label">
          Name or Company
        </label>
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
        <label htmlFor="contact" className="form-label">
          Contact Number
        </label>
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
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
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
        <label htmlFor="quantity" className="form-label">
          Quantity (kg)
        </label>
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
        <label htmlFor="date" className="form-label">
          Pick-Up Date
        </label>
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
        <label htmlFor="address" className="form-label">
          Delivery Address or Pickup Location
        </label>
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="preorder-form-full">
        <label htmlFor="signature" className="form-label">
          Type Your Name as Signature
        </label>
        <input
          id="signature"
          name="signature"
          type="text"
          value={formData.signature}
          onChange={handleChange}
          required
        />
      </div>

      <div className="checkbox-container">
        <label
          htmlFor="agree"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I understand this is a pre-order and agree to the estimated delivery
          window.
        </label>
      </div>

      <div className="but-wrap">
        <button type="submit" className="submit-btn preorder-form-full">
          PLACE PRE-ORDER
        </button>
      </div>

      {showOverlay && (
        <div className="success-overlay" onClick={handleOverlayClick}>
          <div className="success-overlay-content">
            <button
              className="success-overlay-close-btn"
              onClick={() => setShowOverlay(false)}
            >
              &times;
            </button>
            <div className="overlay-text">
              <h2 className="overlay-title">
                Seed Planted <i class="fa-solid fa-seedling"></i>
              </h2>
              <p>
                {" "}
                Thank you for supporting local farmers. We've sent your order
                details to your email. You will hear from us 1-2 weeks before
                your delivery date with an update on your order's status.
              </p>
            </div>
            <button
              className="success-overlay-order-again-btn"
              onClick={handleOrderAgain}
            >
              Order Again
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default PreOrderCard;
