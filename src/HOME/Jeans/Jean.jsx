import React from 'react'
import J1 from "../Jeans/J1.jpg"
import J2 from "../Jeans/J2.jpg" 
import J3 from "../Jeans/J3.jpg"
import J4 from "../Jeans/J4.jpg"
import J5 from "../Jeans/J5.jpg"
import J6 from "../Jeans/J6.jpg"
import J7 from "../Jeans/J7.jpg"
import J8 from "../Jeans/J8.jpg"
import J9 from "../Jeans/J9.jpg"
import J10 from "../Jeans/J10.jpg"
import Footer from '../../log/Footer'
import { Link } from 'react-router-dom'

export const jeans = [
  { id: 1, title: "Classic Blue Jeans", rating: 4.6, originalPrice: 1999, discountPrice: 1099, img: J1, description: "Timeless blue jeans for everyday wear." },
  { id: 2, title: "Black Slim Fit Jeans", rating: 4.7, originalPrice: 2099, discountPrice: 1199, img: J2, description: "Sleek and stylish slim fit in black." },
  { id: 3, title: "Ripped Denim Jeans", rating: 4.5, originalPrice: 2199, discountPrice: 1299, img: J3, description: "Trendy ripped design for casual look." },
  { id: 4, title: "Grey Tapered Jeans", rating: 4.4, originalPrice: 1899, discountPrice: 1049, img: J4, description: "Modern tapered fit in versatile grey." },
  { id: 5, title: "Straight Fit Jeans", rating: 4.3, originalPrice: 1799, discountPrice: 999, img: J5, description: "Comfortable straight cut for all-day wear." },
  { id: 6, title: "Dark Wash Denim", rating: 4.6, originalPrice: 1999, discountPrice: 1149, img: J6, description: "Dark blue wash for a clean look." },
  { id: 7, title: "Slim Stretch Jeans", rating: 4.5, originalPrice: 2099, discountPrice: 1199, img: J7, description: "Slim fit with added stretch for comfort." },
  { id: 8, title: "Cargo Style Jeans", rating: 4.4, originalPrice: 2299, discountPrice: 1349, img: J8, description: "Functional jeans with utility pockets." },
  { id: 9, title: "White Denim Jeans", rating: 4.2, originalPrice: 1899, discountPrice: 1049, img: J9, description: "Bold and fresh white denim look." },
  { id: 10, title: "Faded Vintage Jeans", rating: 4.6, originalPrice: 2199, discountPrice: 1249, img: J10, description: "Vintage wash for a retro vibe." },
  { id: 11, title: "Bootcut Denim", rating: 4.3, originalPrice: 1899, discountPrice: 1099, img: J1, description: "Bootcut style for a classic look." },
  { id: 12, title: "Skinny Fit Jeans", rating: 4.5, originalPrice: 1999, discountPrice: 1149, img: J2, description: "Snug and modern skinny fit." },
  { id: 13, title: "Ankle Length Jeans", rating: 4.4, originalPrice: 1799, discountPrice: 999, img: J3, description: "Trendy ankle cut for a sleek fit." },
  { id: 14, title: "High Rise Jeans", rating: 4.6, originalPrice: 2099, discountPrice: 1199, img: J4, description: "High-waisted for a flattering shape." },
  { id: 15, title: "Stretch Fit Blue Jeans", rating: 4.5, originalPrice: 1999, discountPrice: 1099, img: J5, description: "Flexible stretch for active days." },
  { id: 16, title: "Light Wash Denim", rating: 4.3, originalPrice: 1899, discountPrice: 999, img: J6, description: "Light blue wash for a casual feel." },
  { id: 17, title: "Distressed Black Jeans", rating: 4.4, originalPrice: 2199, discountPrice: 1249, img: J7, description: "Rugged and edgy distressed style." },
  { id: 18, title: "Torn Knee Jeans", rating: 4.2, originalPrice: 2099, discountPrice: 1199, img: J8, description: "Casual streetwear with torn knees." },
  { id: 19, title: "Patchwork Jeans", rating: 4.5, originalPrice: 2299, discountPrice: 1349, img: J9, description: "Creative design with patchwork elements." },
  { id: 20, title: "Regular Fit Indigo Jeans", rating: 4.6, originalPrice: 1999, discountPrice: 1099, img: J10, description: "Classic indigo color with regular fit." }
];
const Jean = () => {
  return (
     <>
      <div className="bg-gray-50 py-6 px-4">
        <h2 className="text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white text-center font-extrabold py-4 px-6 rounded-lg shadow-xl mb-8">
          Shirts Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {jeans.map((shirt) => (
            <div key={shirt.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src={shirt.img} alt={shirt.title} className="w-full h-60 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{shirt.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{shirt.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 line-through">₹{shirt.originalPrice}</span>
                  <span className="text-lg text-pink-600 font-semibold">₹{shirt.discountPrice}</span>
                </div>
                <span className="text-yellow-500 text-sm font-medium">⭐ {shirt.rating}</span>
              </div>
              <Link to={`/jean/${shirt.id}`}>
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
  )
}

export default Jean
