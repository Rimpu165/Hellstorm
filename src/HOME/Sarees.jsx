import React from 'react'
import Footer from '../log/Footer';
import { Link } from 'react-router-dom';

import S1 from "../Saresimg/S1.jpg"
import S2 from "../Saresimg/S2.jpg"
import S3 from "../Saresimg/S3.jpg"
import S4 from "../Saresimg/S4.jpg"
import S5 from "../Saresimg/S5.jpg"
import S6 from "../Saresimg/S6.jpg"
import S7 from "../Saresimg/S7.jpg"
import S8 from "../Saresimg/S8.jpg"
import S9 from "../Saresimg/S9.jpg"
import S10 from "../Saresimg/S10.jpg"
import S11 from "../Saresimg/S11.jpg"
import S12 from "../Saresimg/S12.jpg"
import S13 from "../Saresimg/S13.jpg"
import S14 from "../Saresimg/S14.jpg"
import S15 from "../Saresimg/S15.jpg"


export const trendySarees = [
    {
      id: 1,
      title: "Kanjivaram Silk Saree",
      rating: 4.9,
      originalPrice: 4999,
      discountPrice: 3999,
      img: S1,
      description: "Traditional Kanjivaram silk with rich zari work and vibrant hues."
    },
    {
      id: 2,
      title: "Georgette Sequin Saree",
      rating: 4.7,
      originalPrice: 3299,
      discountPrice: 2499,
      img: S2,
      description: "Glamorous georgette saree adorned with delicate sequins."
    },
    {
      id: 3,
      title: "Cotton Printed Saree",
      rating: 4.5,
      originalPrice: 1899,
      discountPrice: 1399,
      img: S3,
      description: "Comfortable and elegant cotton saree with ethnic prints."
    },
    {
      id: 4,
      title: "Chiffon Ombre Saree",
      rating: 4.6,
      originalPrice: 2599,
      discountPrice: 1999,
      img: S4,
      description: "Lightweight chiffon saree with stunning ombre shades."
    },
    {
      id: 5,
      title: "Banarasi Brocade Saree",
      rating: 4.8,
      originalPrice: 4499,
      discountPrice: 3499,
      img: S5,
      description: "Regal Banarasi saree featuring intricate brocade patterns."
    },
    {
      id: 6,
      title: "Linen Handloom Saree",
      rating: 4.4,
      originalPrice: 2799,
      discountPrice: 2099,
      img: S6,
      description: "Breathable linen handloom saree with artisanal touch."
    },
    {
      id: 7,
      title: "Organza Embroidered Saree",
      rating: 4.6,
      originalPrice: 3899,
      discountPrice: 2999,
      img: S7,
      description: "Sheer organza fabric highlighted with elegant embroidery."
    },
    {
      id: 8,
      title: "Net Stone Work Saree",
      rating: 4.5,
      originalPrice: 3599,
      discountPrice: 2699,
      img: S8,
      description: "Contemporary net saree embellished with stone details."
    },
    {
      id: 9,
      title: "Paithani Silk Saree",
      rating: 4.9,
      originalPrice: 5599,
      discountPrice: 4499,
      img: S9,
      description: "Iconic Paithani weave with a luxurious silk finish."
    },
    {
      id: 10,
      title: "Crepe Printed Saree",
      rating: 4.3,
      originalPrice: 2199,
      discountPrice: 1699,
      img: S10,
      description: "Stylish crepe fabric with contemporary prints."
    },
    {
      id: 11,
      title: "Tussar Silk Saree",
      rating: 4.7,
      originalPrice: 4099,
      discountPrice: 3199,
      img: S11,
      description: "Natural Tussar silk known for its rich texture and sheen."
    },
    {
      id: 12,
      title: "Satin Ruffle Saree",
      rating: 4.4,
      originalPrice: 2899,
      discountPrice: 2199,
      img: S12,
      description: "Trendy satin saree with stylish ruffle borders."
    },
    {
      id: 13,
      title: "Silk Blend Party Saree",
      rating: 4.5,
      originalPrice: 3399,
      discountPrice: 2499,
      img: S13,
      description: "Perfect blend of silk and shimmer for party wear."
    },
    {
      id: 14,
      title: "Patola Printed Saree",
      rating: 4.6,
      originalPrice: 2999,
      discountPrice: 2299,
      img: S14,
      description: "Vibrant Patola-inspired digital prints on soft fabric."
    },
    {
      id: 15,
      title: "Velvet Embellished Saree",
      rating: 4.7,
      originalPrice: 4999,
      discountPrice: 3899,
      img: S15,
      description: "Luxurious velvet saree with intricate embellishments."
    },
    {
      id: 16,
      title: "Chikankari Work Saree",
      rating: 4.8,
      originalPrice: 3499,
      discountPrice: 2799,
      img: S1,
      description: "Elegant hand-embroidered Chikankari work on pastel hues."
    },
    {
      id: 17,
      title: "Kota Doria Saree",
      rating: 4.4,
      originalPrice: 2499,
      discountPrice: 1899,
      img: S2,
      description: "Lightweight and breezy Kota Doria with traditional charm."
    },
    {
      id: 18,
      title: "Designer Ruffle Saree",
      rating: 4.5,
      originalPrice: 3899,
      discountPrice: 2999,
      img: S3,
      description: "Designer saree with cascading ruffles and glam appeal."
    },
    {
      id: 19,
      title: "Silk Organza Saree",
      rating: 4.6,
      originalPrice: 4199,
      discountPrice: 3299,
      img: S4,
      description: "Elegant organza paired with luxurious silk lining."
    },
    {
      id: 20,
      title: "Printed Fusion Saree",
      rating: 4.3,
      originalPrice: 1999,
      discountPrice: 1499,
      img: S5,
      description: "Modern printed saree blending Indo-western aesthetics."
    }
  ];
  

const Sarees = () => {
  return (
    <>
    <div  className="bg-gray-50 py-10 px-4 sm:px-10">
    <h2 className="text-4xl font-semibold text-white text-center mb-10 py-4 px-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg shadow-lg">
  Trending Sarees   Collection
</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {trendySarees.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
          <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
          <div className="p-4 ">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.description.slice(0,20)}...</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-green-600 font-bold text-lg">₹{item.discountPrice}</span>
              <span className="line-through text-gray-400 text-sm">₹{item.originalPrice}</span>
            </div>
            <p className="text-yellow-500 mt-2">⭐ {item.rating}</p>
             <Link to={`/sarees/${item.id}`}> <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded hover:bg-pink-700">
              Shop Now
            </button></Link>
          </div>
        </div>
      ))}
    </div>
    
  </div>
  <Footer/>
 </>
  )
}

export default Sarees;
