import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Product.css";
import { Link } from 'react-router-dom';
import Footer from '../log/Footer';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center mt-6 text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-6">Error: {error}</div>;

  const filteredProducts = products.filter(product => {
    const matchesTitle = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMin = minPrice === '' || product.price >= parseFloat(minPrice);
    const matchesMax = maxPrice === '' || product.price <= parseFloat(maxPrice);
    return matchesTitle && matchesMin && matchesMax;
  });

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <>
      <div className="p-6">
        <h1 className="text-center font-bold text-3xl mb-6">Product List</h1>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="px-4 py-2 border rounded w-full sm:w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="px-4 py-2 border rounded w-full sm:w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <Link to={`/Products/${product.id}`} key={product.id}>
              <div className="border p-4 rounded shadow bg-white hover:shadow-lg transition cursor-pointer h-full flex flex-col justify-between">
                <h3 className="font-semibold mb-2 text-lg truncate">{product.title}</h3>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="object-cover w-full h-40 mb-2 rounded"
                />
                <p className="text-sm text-gray-700 mb-2">{product.description.slice(0, 60)}...</p>
                <p className="mt-auto font-bold text-green-700">Price: ${product.price}</p>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Buy
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length > 8 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              {showAll ? 'See Less' : 'See All'}
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Products;
