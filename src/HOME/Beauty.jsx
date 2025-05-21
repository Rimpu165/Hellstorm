import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../log/Footer';

const Beauty = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('API error:', error));
  }, []);

  return (
    <>
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-6">Beauty Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((product) => product.image_link) 
          .slice(0, 20) 
          .map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={product.image_link}
                alt={product.name}
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <h2 className="font-semibold text-lg mb-2 text-pink-600">
                {product.name?.slice(0, 25) || 'No Name'}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-2">
                {product.description
                  ? product.description.slice(0, 60)
                  : 'No description available'}
              </p>
              <p className="text-pink-600 font-bold mb-2">
                ${parseFloat(product.price).toFixed(2)}
              </p>
              <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Beauty;
