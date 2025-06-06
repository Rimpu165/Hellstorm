import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {products} from "./Mens"

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Footer from "../log/Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice";


const Men2 = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const dispatch = useDispatch()


  const handleAddToCart = () => {
  if (!size) {
    toast.warning("Please Select the Size.");
    return;
  }

  const itemToAdd = {
    id: product.id,
    title: product.title,
    img: product.img,
    price: product.discountPrice,
    quantity: Number(quantity),
    size,
    brandName: product.brandName,
  };

  dispatch(addToCart(itemToAdd));
  toast.success("Product added to cart!");
};

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
      
        <div className="md:w-1/2 bg-gray-200">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg"
          />
        </div>
<div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h2>
          <p>{product.rating}</p> 
          <p className="text-gray-700 mb-2">by {product.brandName}</p>

          <div className="mb-4">
            <span className="text-green-600 text-2xl font-semibold">₹{product.discountPrice}</span>
            <span className="text-gray-500 line-through ml-2 text-lg">₹{product.price}</span>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Select Size:</h3>
            <select
              value={size}
              onChange={handleSizeChange}
              className="border border-gray-300 rounded-lg p-2 mt-2 w-full"
            >
              <option value="">-- Choose Size --</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Quantity:</h3>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max="10"
              className="border border-gray-300 rounded-lg p-2 mt-2 w-24"
            />
          </div>
          <div className="flex gap-4 mb-6">
            <button onClick={handleAddToCart} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
          <Link to="/mens" className="text-blue-600 hover:underline text-sm">
            ← Back to Products
          </Link>
        </div>
      </div>
      <Footer/>
       <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Men2;
