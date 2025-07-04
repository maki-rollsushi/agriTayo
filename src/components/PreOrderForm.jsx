// PreOrderForm.jsx
import { useState } from 'react';

function PreOrderForm({ productId }) {
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pre-ordered ${quantity} of product ${productId}. Notes: ${notes}`);
    // Add backend submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <textarea
        placeholder="Delivery Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Place Order</button>
    </form>
  );
}

export default PreOrderForm;