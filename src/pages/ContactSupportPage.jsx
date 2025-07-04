// pages/ContactSupportPage.jsx
import React from 'react';

function ContactSupportPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Support</h1>
      <p>If you have any issues with your order, feel free to contact us!</p>
      <form className="space-y-4 mt-4">
        <div>
          <label className="block">Your Email</label>
          <input type="email" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Message</label>
          <textarea className="border p-2 w-full" rows="5"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}

export default ContactSupportPage;
