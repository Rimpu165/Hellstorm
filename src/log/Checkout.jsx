import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import A from "../assets/checkoutimg/visa.png";
import B from "../assets/checkoutimg/card.png";
import C from "../assets/checkoutimg/Rupay.png";
import Footer from './Footer';

const Checkout = () => {
  const products = useSelector((state) => state.cart.items);

  const subtotal = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 2000 ? 0 : 0;
  const total = subtotal + shipping;

  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    const { email, firstName, lastName, address, city, postalCode, paymentMethod } = form;
    if (!email || !firstName || !lastName || !address || !city || !postalCode || !paymentMethod) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setShowPopup(true);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-100 min-h-screen relative">
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
          <input
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full h-12 px-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Email or Mobile Number"
          />

          <h3 className="text-xl font-semibold mb-4 text-gray-700">Shipping Address</h3>
          <div className="space-y-4">
            {[
              { name: "firstName", placeholder: "First Name" },
              { name: "lastName", placeholder: "Last Name" },
              { name: "address", placeholder: "Address" },
              { name: "city", placeholder: "City" },
              { name: "postalCode", placeholder: "Postal Code", type: "number" },
            ].map((field, i) => (
              <input
                key={i}
                name={field.name}
                value={form[field.name]}
                onChange={handleInputChange}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type={field.type || "text"}
                placeholder={field.placeholder}
              />
            ))}
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-700">Shipping Method</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="radio" name="shipping" className="accent-blue-600" />
              <span className="text-gray-700">Free Shipping <span className="text-sm text-gray-500">(Free)</span></span>
            </label>
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Method</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                onChange={handleInputChange}
                className="accent-blue-600"
              />
              <span className="text-gray-700">Credit Card</span>
            </label>
            <div className="flex gap-3 mb-4">
              <img className="w-12 h-9 object-contain" src={A} alt="Visa" />
              <img className="w-12 h-9 object-contain" src={B} alt="Card" />
              <img className="w-12 h-9 object-contain" src={C} alt="Rupay" />
            </div>
            <input className="w-full h-12 px-4 border border-gray-300 rounded-lg" type="text" placeholder="Card Number" />
            <input className="w-full h-12 px-4 border border-gray-300 rounded-lg" type="text" placeholder="Name on Card" />
            <div className="flex gap-4">
              <input className="w-1/2 h-12 px-4 border border-gray-300 rounded-lg" type="date" />
              <input className="w-1/2 h-12 px-4 border border-gray-300 rounded-lg" type="number" placeholder="CVV" />
            </div>
            <label className="flex items-center gap-3 mt-4">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                onChange={handleInputChange}
                className="accent-blue-600"
              />
              <span className="text-gray-700">Cash on Delivery</span>
            </label>
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
          <div className="space-y-2 mb-4 text-sm text-gray-700">
            {products.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between border-b pb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Place Order
          </button>
        </div>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-96">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Order Confirmed!</h2>
              <p className="text-gray-700">Thank you for your purchase. Your order has been placed successfully.</p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
