import React from "react";
import T1 from "../Tommyimage/T1.webp";
import T2 from "../Tommyimage/T2.webp";
import T3 from "../Tommyimage/T3.webp";
import T4 from "../Tommyimage/T4.webp";
import T5 from "../Tommyimage/T5.webp";
import T6 from "../Tommyimage/T6.webp";
import T7 from "../Tommyimage/T7.webp";
import T8 from "../Tommyimage/T8.webp";
import T9 from "../Tommyimage/T9.webp";
import T10 from "../Tommyimage/T10.webp";
import T11 from "../Tommyimage/T11.webp";
import T12 from "../Tommyimage/T12.webp";
import T13 from "../Tommyimage/T13.webp";
import T14 from "../Tommyimage/T14.webp";
import T15 from "../Tommyimage/T15.webp";
import T16 from "../Tommyimage/T16.webp";
import T17 from "../Tommyimage/T17.webp";
import T18 from "../Tommyimage/T18.webp";
import T19 from "../Tommyimage/T19.webp";
import T20 from "../Tommyimage/T20.webp";
import { Link } from "react-router-dom";
import Footer from "../log/Footer";

export const tommyProducts = [
  { id: 1, title: "Tommy Hilfiger Men's Polo Shirt", discountPrice: 2499, description: "Classic polo shirt with signature logo.", img: T1, rating: "4.6 ★★★★½" },
  { id: 2, title: "Tommy Hilfiger Women's T-Shirt", discountPrice: 1799, description: "Soft cotton tee with a stylish fit.", img: T2, rating: "4.4 ★★★★☆" },
  { id: 3, title: "Tommy Hilfiger Slim Fit Jeans", discountPrice: 2999, description: "Modern slim fit jeans with a sleek design.", img: T3, rating: "4.3 ★★★★☆" },
  { id: 4, title: "Tommy Hilfiger Quilted Jacket", discountPrice: 4999, description: "Warm and stylish quilted jacket for cold days.", img: T4, rating: "4.7 ★★★★½" },
  { id: 5, title: "Tommy Hilfiger Chino Pants", discountPrice: 2399, description: "Comfortable chinos with a perfect fit.", img: T5, rating: "4.5 ★★★★½" },
  { id: 6, title: "Tommy Hilfiger Hoodie", discountPrice: 2799, description: "Soft fleece hoodie with a relaxed fit.", img: T6, rating: "4.2 ★★★★☆" },
  { id: 7, title: "Tommy Hilfiger Jacket", discountPrice: 4499, description: "Lightweight and versatile jacket for all occasions.", img: T7, rating: "4.6 ★★★★½" },
  { id: 8, title: "Tommy Hilfiger Sneakers", discountPrice: 3999, description: "Stylish sneakers for casual and sporty looks.", img: T8, rating: "4.4 ★★★★☆" },
  { id: 9, title: "Tommy Hilfiger Leather Wallet", discountPrice: 1599, description: "Premium leather wallet with a timeless design.", img: T9, rating: "4.3 ★★★★☆" },
  { id: 10, title: "Tommy Hilfiger Leather Belt", discountPrice: 1299, description: "Classic leather belt with the signature logo.", img: T10, rating: "4.5 ★★★★½" },
  { id: 11, title: "Tommy Hilfiger Sweatshirt", discountPrice: 2299, description: "Cozy sweatshirt with the Hilfiger logo.", img: T11, rating: "4.4 ★★★★☆" },
  { id: 12, title: "Tommy Hilfiger Tracksuit", discountPrice: 3499, description: "Sporty tracksuit for comfort and style.", img: T12, rating: "4.3 ★★★★☆" },
  { id: 13, title: "Tommy Hilfiger Duffel Bag", discountPrice: 2499, description: "Spacious duffel bag with a stylish look.", img: T13, rating: "4.2 ★★★★☆" },
  { id: 14, title: "Tommy Hilfiger Watch", discountPrice: 5999, description: "Sleek and stylish watch for everyday wear.", img: T14, rating: "4.7 ★★★★½" },
  { id: 15, title: "Tommy Hilfiger Sunglasses", discountPrice: 1999, description: "Trendy sunglasses with UV protection.", img: T15, rating: "4.5 ★★★★½" },
  { id: 16, title: "Tommy Hilfiger Sneakers for Women", discountPrice: 3599, description: "Fashionable sneakers with a comfortable fit.", img: T16, rating: "4.3 ★★★★☆" },
  { id: 17, title: "Tommy Hilfiger Men’s Dress Shirt", discountPrice: 2899, description: "Classic dress shirt for formal and business wear.", img: T17, rating: "4.6 ★★★★½" },
  { id: 18, title: "Tommy Hilfiger Backpack", discountPrice: 2799, description: "Spacious and stylish backpack for everyday use.", img: T18, rating: "4.4 ★★★★☆" },
  { id: 19, title: "Tommy Hilfiger Beanie", discountPrice: 999, description: "Warm beanie with a simple logo.", img: T19, rating: "4.2 ★★★★☆" },
  { id: 20, title: "Tommy Hilfiger Women's Dress", discountPrice: 4999, description: "Elegant dress perfect for any occasion.", img: T20, rating: "4.5 ★★★★½" },
];

 const Tomy = () => {
  return (
    <div className="p-6 bg-gray-100">
  <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-6 leading-tight tracking-wide bg-blue-100 py-4 px-6 rounded-lg shadow-md">
  Shop the Latest Tommy Hilfiger Collection
</h2>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {tommyProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
        >
          <Link to={`/tomy/${product.id}`}>
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-56 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.title}
              </h3>
  
              <div className="flex items-center mb-2">
                <p className="text-yellow-500 font-semibold">{product.rating}</p>
              </div>
  
              <p className="text-xl font-bold text-blue-600 mb-2">
                ₹{product.discountPrice}
              </p>
  
              <p className="text-gray-700 text-sm mb-4">
                {product.description.length > 100
                  ? `${product.description.substring(0, 50)}...`
                  : product.description}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  
    <Footer />
  </div>
  

  );
};

export default Tomy;
