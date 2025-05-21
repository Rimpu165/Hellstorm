import React from 'react';
import { Link } from 'react-router-dom';

import Sh1 from '../Shirts/Sh1.jpg';
import Sh2 from '../Shirts/Sh2.jpg';
import Sh3 from '../Shirts/Sh3.jpg';
import Sh4 from '../Shirts/Sh4.jpg';
import Sh5 from '../Shirts/Sh5.jpg';
import Sh6 from '../Shirts/Sh6.jpg';
import Sh7 from '../Shirts/Sh7.jpg';
import Sh8 from '../Shirts/Sh8.jpg';
import Sh9 from '../Shirts/Sh9.jpg';
import Sh10 from '../Shirts/Sh10.jpg';

import Footer from '../../log/Footer';

export const shirts = [
  { id: 1, title: "Formal White Shirt", rating: 4.7, originalPrice: 1499, discountPrice: 849, image: Sh1, description: "Classic white shirt for formal occasions." },
  { id: 2, title: "Checked Casual Shirt", rating: 4.5, originalPrice: 1399, discountPrice: 749, image: Sh2, description: "Stylish checked shirt for a relaxed look." },
  { id: 3, title: "Linen Summer Shirt", rating: 4.6, originalPrice: 1599, discountPrice: 899, image: Sh3, description: "Light and breathable linen fabric." },
  { id: 4, title: "Slim Fit Black Shirt", rating: 4.8, originalPrice: 1699, discountPrice: 999, image: Sh4, description: "Trendy slim fit in classic black." },
  { id: 5, title: "Flannel Check Shirt", rating: 4.4, originalPrice: 1299, discountPrice: 699, image: Sh5, description: "Warm and stylish flannel material." },
  { id: 6, title: "Denim Button-Down", rating: 4.5, originalPrice: 1499, discountPrice: 899, image: Sh6, description: "Casual denim shirt for everyday wear." },
  { id: 7, title: "Mandarin Collar Shirt", rating: 4.6, originalPrice: 1399, discountPrice: 799, image: Sh7, description: "Elegant collarless design." },
  { id: 8, title: "Printed Short Sleeve Shirt", rating: 4.3, originalPrice: 1299, discountPrice: 699, image: Sh8, description: "Perfect for holidays or beach days." },
  { id: 9, title: "Cotton Office Shirt", rating: 4.5, originalPrice: 1499, discountPrice: 849, image: Sh9, description: "Soft cotton with professional finish." },
  { id: 10, title: "Striped Shirt", rating: 4.4, originalPrice: 1399, discountPrice: 799, image: Sh10, description: "Modern stripes for any occasion." },
  { id: 11, title: "Half Sleeve Casual Shirt", rating: 4.3, originalPrice: 1199, discountPrice: 649, image: Sh8, description: "Casual and comfy fit for summer." },
  { id: 12, title: "Partywear Shimmer Shirt", rating: 4.7, originalPrice: 1799, discountPrice: 1099, image: Sh1, description: "Shiny fabric perfect for parties." },
  { id: 13, title: "Twill Weave Shirt", rating: 4.6, originalPrice: 1499, discountPrice: 849, image: Sh2, description: "Durable fabric with elegant weave." },
  { id: 14, title: "Grandad Collar Shirt", rating: 4.5, originalPrice: 1399, discountPrice: 799, image: Sh4, description: "Smart and trendy grandad collar style." },
  { id: 15, title: "Solid Navy Blue Shirt", rating: 4.4, originalPrice: 1299, discountPrice: 749, image: Sh5, description: "Versatile navy blue for any event." },
  { id: 16, title: "Digital Print Shirt", rating: 4.3, originalPrice: 1599, discountPrice: 899, image: Sh6, description: "Vibrant digital prints for bold looks." },
  { id: 17, title: "Chambray Cotton Shirt", rating: 4.5, originalPrice: 1399, discountPrice: 799, image: Sh2, description: "Soft and light chambray texture." },
  { id: 18, title: "Contrast Collar Shirt", rating: 4.6, originalPrice: 1499, discountPrice: 849, image: Sh8, description: "Color-block collar for a unique edge." },
  { id: 19, title: "Wrinkle-Free Shirt", rating: 4.7, originalPrice: 1599, discountPrice: 899, image: Sh9, description: "Stay fresh all day with no wrinkles." },
  { id: 20, title: "Casual Floral Shirt", rating: 4.4, originalPrice: 1499, discountPrice: 799, image: Sh10, description: "Floral pattern for vacation mood." }
];

const Shirt = () => {
  return (
    <>
      <div className="bg-gray-50 py-6 px-4">
        <h2 className="text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white text-center font-extrabold py-4 px-6 rounded-lg shadow-xl mb-8">
          Shirts Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shirts.map((shirt) => (
            <div key={shirt.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src={shirt.image} alt={shirt.title} className="w-full h-60 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{shirt.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{shirt.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 line-through">₹{shirt.originalPrice}</span>
                  <span className="text-lg text-pink-600 font-semibold">₹{shirt.discountPrice}</span>
                </div>
                <span className="text-yellow-500 text-sm font-medium">⭐ {shirt.rating}</span>
              </div>
              <Link to={`/shirt/${shirt.id}`}>
                <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded hover:bg-pink-700">
                  Shop Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shirt;
