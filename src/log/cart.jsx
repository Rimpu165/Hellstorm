import React, { useState, useEffect } from "react";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Cart.css";
import Footer from "./Footer";

const Cart = () => {
  const { id } = useParams(); 
  console.log("ID",id)
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Product not found.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center mt-6 text-lg">Loading...</div>;
  if (error || !product) return <div className="text-center text-red-500 mt-6">{error}</div>;

  return (
    <>
    <div className="ppp flex justify-center items-center min-h-screen p-2">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="md:w-1/2">
          <img src={product.images[0]} alt={product.title} className="hw object-cover"/>
        </div>

        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500 uppercase font-semibold tracking-wide">
              Category: {product.category.name}
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">{product.title}</h2>
            <h3 className="text-xl text-green-600 font-semibold mt-2">${product.price}</h3>

            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-1">Quantity</label>
              <input
                className="w-20 px-2 py-1 border rounded-sm border-gray-300"
                type="number"
                defaultValue="1"
                min="1"
              />
            </div>

            <div className="mt-5">
              <label className="block text-gray-700 font-medium mb-2">Select Size</label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border font-medium ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-400 hover:bg-gray-100"
                    } transition duration-200`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Product Details</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

              <div className="mt-4 text-sm text-gray-700">
                <p><strong>Fit:</strong> Regular Fit – Model (6') wears M</p>
                <p><strong>Material:</strong> 100% Cotton</p>
                <p><strong>Care:</strong> Machine Wash</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button className="flex-1 bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition duration-200 font-semibold">
              Add to Cart
            </button>
            <button className="flex-1 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition duration-200 font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
       
    </div>
     <Footer/>
   </>
  );
};

export default Cart;
