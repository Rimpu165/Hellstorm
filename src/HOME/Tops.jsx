import React from 'react'
import { Link } from 'react-router-dom';

import T1 from "../Womenphotos/T1.jpg";
import T2 from "../Womenphotos/T2.jpg";
import T3 from "../Womenphotos/T3.jpg";
import T4 from "../Womenphotos/T4.jpg";
import T5 from "../Womenphotos/T5.jpg";
import T6 from "../Womenphotos/T6.jpg";
import T7 from "../Womenphotos/T7.jpg";
import T8 from "../Womenphotos/T8.jpg";
import T9 from "../Womenphotos/T9.jpg";
import T10 from "../Womenphotos/T10.jpg";
import T11 from "../Womenphotos/T11.jpg";
import T12 from "../Womenphotos/T12.jpg";
import T13 from "../Womenphotos/T13.jpg";
import T14 from "../Womenphotos/T14.jpg";
import T15 from "../Womenphotos/T15.jpg";
import T16 from "../Womenphotos/T16.jpg";
import T17 from "../Womenphotos/T17.jpg";
import T18 from "../Womenphotos/T18.jpg";
import T19 from "../Womenphotos/T!9.jpg";
import T20 from "../Womenphotos/T20.jpg";
import Footer from '../log/Footer';

export const trendyTops = [
  {
    id: 1,
    title: "Floral Puff-Sleeve Blouse",
    rating: 4.6,
    originalPrice: 1299,
    discountPrice: 899,
    image: T1,
    description: "A vibrant floral blouse with puff sleeves, perfect for spring outings."
  },
  {
    id: 2,
    title: "Boho Tassel Top",
    rating: 4.5,
    originalPrice: 1499,
    discountPrice: 999,
    image: T2,
    description: "Embrace bohemian vibes with this tassel-accented top."
  },
  {
    id: 3,
    title: "Off-Shoulder Peplum Top",
    rating: 4.7,
    originalPrice: 1199,
    discountPrice: 799,
    image: T3,
    description: "Show off your shoulders with this flattering off-shoulder peplum top."
  },
  {
    id: 4,
    title: "Striped Button-Down Shirt",
    rating: 4.4,
    originalPrice: 999,
    discountPrice: 699,
    image: T4,
    description: "A classic striped shirt with a modern twist."
  },
  {
    id: 5,
    title: "Lace-Trimmed Tunic",
    rating: 4.8,
    originalPrice: 1599,
    discountPrice: 1199,
    image: T5,
    description: "Elegant tunic with delicate lace details."
  },
  {
    id: 6,
    title: "Denim Crop Top",
    rating: 4.3,
    originalPrice: 1099,
    discountPrice: 799,
    image: T6,
    description: "A trendy denim crop top for casual outings."
  },
  {
    id: 7,
    title: "Chiffon Sleeveless Blouse",
    rating: 4.6,
    originalPrice: 1399,
    discountPrice: 999,
    image: T7,
    description: "Lightweight chiffon blouse ideal for warm weather."
  },
  {
    id: 8,
    title: "Peplum Lace Top",
    rating: 4.5,
    originalPrice: 1499,
    discountPrice: 1099,
    image: T8,
    description: "Feminine lace top with a peplum silhouette."
  },
  {
    id: 9,
    title: "Graphic Tee",
    rating: 4.2,
    originalPrice: 799,
    discountPrice: 499,
    image: T9,
    description: "Express yourself with this bold graphic tee."
  },
  {
    id: 10,
    title: "Silk Camisole",
    rating: 4.7,
    originalPrice: 1799,
    discountPrice: 1399,
    image: T10,
    description: "Luxurious silk camisole for a touch of elegance."
  },
  {
    id: 11,
    title: "V-Neck Ruffle Top",
    rating: 4.4,
    originalPrice: 1099,
    discountPrice: 799,
    image: T11,
    description: "Charming ruffle details on a classic v-neck top."
  },
  {
    id: 12,
    title: "Peasant Sleeve Blouse",
    rating: 4.6,
    originalPrice: 1299,
    discountPrice: 999,
    image: T12,
    description: "Boho-inspired blouse with peasant sleeves."
  },
  {
    id: 13,
    title: "Tie-Front Crop Top",
    rating: 4.3,
    originalPrice: 899,
    discountPrice: 599,
    image: T13,
    description: "Flirty tie-front design for a playful look."
  },
  {
    id: 14,
    title: "Halter Neck Top",
    rating: 4.5,
    originalPrice: 1199,
    discountPrice: 899,
    image: T14,
    description: "Sleek halter neck top for a chic appearance."
  },
  {
    id: 15,
    title: "Peplum Blouse with Bow",
    rating: 4.4,
    originalPrice: 1399,
    discountPrice: 999,
    image: T15,
    description: "Add a bow detail to your peplum style."
  },
  {
    id: 16,
    title: "Floral Print Wrap Top",
    rating: 4.6,
    originalPrice: 1499,
    discountPrice: 1099,
    image: T16,
    description: "Flattering wrap design with a floral print."
  },
  {
    id: 17,
    title: "Cold Shoulder Top",
    rating: 4.3,
    originalPrice: 999,
    discountPrice: 699,
    image: T17,
    description: "Show some skin with this cold shoulder top."
  },
  {
    id: 18,
    title: "Peplum Top with Pleats",
    rating: 4.5,
    originalPrice: 1299,
    discountPrice: 999,
    image: T18,
    description: "Elegant pleats add texture to this peplum top."
  },
  {
    id: 19,
    title: "Asymmetrical Hem Blouse",
    rating: 4.4,
    originalPrice: 1099,
    discountPrice: 799,
    image: T19,
    description: "Unique asymmetrical hem for a modern look."
  },
  {
    id: 20,
    title: "Pleated Chiffon Top",
    rating: 4.7,
    originalPrice: 1399,
    discountPrice: 1099,
    image: T20,
    description: "Flowy chiffon top with pleated details."
  }
];


const Tops = () => {
  return (
    <>
    <div  className="bg-gray-50 py-10 px-4 sm:px-10">
    <h2 className="text-4xl font-semibold text-white text-center mb-10 py-4 px-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg shadow-lg">
  Trendy Tops Collection
</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {trendyTops.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
          <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
          <div className="p-4 ">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.description.slice(0,20)}...</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-green-600 font-bold text-lg">₹{item.discountPrice}</span>
              <span className="line-through text-gray-400 text-sm">₹{item.originalPrice}</span>
            </div>
            <p className="text-yellow-500 mt-2">⭐ {item.rating}</p>
             <Link to={`/tops/${item.id}`}> <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded hover:bg-pink-700">
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

export default Tops;
