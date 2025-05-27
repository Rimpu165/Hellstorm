import React from 'react';
import { useSelector } from 'react-redux';
import A from "../assets/checkoutimg/visa.png";
import B from "../assets/checkoutimg/card.png";
import C from "../assets/checkoutimg/Rupay.png";
import Footer from './Footer';

const Checkout = () => {
  const products = useSelector((state) => state.cart.items);

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 2000 ? 0 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-100 min-h-screen">
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
          <input
            className="w-full h-12 px-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Email or Mobile Number"
          />

          <h3 className="text-xl font-semibold mb-4 text-gray-700">Shipping Address</h3>
          <div className="space-y-4">
            {["First Name", "Last Name", "Address", "City", "Postal Code"].map((placeholder, i) => (
              <input
                key={i}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type={placeholder === "Postal Code" ? "number" : "text"}
                placeholder={placeholder}
              />
            ))}
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-700">Shipping Method</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="radio" name="shipping" className="accent-blue-600" />
              <span className="text-gray-700">Free Shipping <span className="text-sm text-gray-500">(Free)</span></span>
            </label>
            <label className="flex items-center gap-3">
              <input type="radio" name="shipping" className="accent-blue-600" />
              <span className="text-gray-700">Standard Shipping <span className="text-sm text-gray-500">(₹50.00)</span></span>
            </label>
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Method</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input type="radio" name="payment" className="accent-blue-600" />
              <span className="text-gray-700">Credit Card</span>
            </label>
            <div className="flex gap-3 mb-4">
              <img className="w-12 h-9 object-contain" src={A} alt="Visa" />
              <img className="w-12 h-9 object-contain" src={B} alt="Card" />
              <img className="w-12 h-9 object-contain" src={C} alt="Rupay" />
            </div>
            {["Card Number", "Name on Card"].map((placeholder, i) => (
              <input
                key={i}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder={placeholder}
              />
            ))}
            <div className="flex gap-4">
              <input
                className="w-1/2 h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="date"
              />
              <input
                className="w-1/2 h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                placeholder="CVV"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-center gap-3 mb-4">
              <input type="radio" name="payment" className="accent-blue-600" />
              <span className="text-gray-700">Cash on Delivery</span>
            </label>

            <h3 className="text-xl font-semibold mb-4 text-gray-700">Billing Address</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="radio" name="billing" className="accent-blue-600" />
                <span className="text-gray-700">Same as Shipping Address</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" name="billing" className="accent-blue-600" />
                <span className="text-gray-700">Use a Different Billing Address</span>
              </label>
            </div>
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

          <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200">
            Place Order
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
