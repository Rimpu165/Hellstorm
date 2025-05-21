import React from 'react';
import { Link } from 'react-router-dom';

import TS1 from "../../Tshirt/T1.jpg";
import TS2 from "../../Tshirt/T2.jpg";
import TS3 from "../../Tshirt/T3.jpg";
import TS4 from "../../Tshirt/T4.jpg";
import TS5 from "../../Tshirt/T5.jpg";
import TS6 from "../../Tshirt/T6.jpg";
import TS7 from "../../Tshirt/T7.jpg";
import TS8 from "../../Tshirt/T8.jpg";
import TS9 from "../../Tshirt/T9.jpg";
import TS10 from "../../Tshirt/T10.jpg";
import TS11 from "../../Tshirt/T11.jpg";
import TS12 from "../../Tshirt/T12.jpg";
import TS13 from "../../Tshirt/T13.jpg";
import TS14 from "../../Tshirt/T14.jpg";
import TS15 from "../../Tshirt/T15.jpg";
import TS16 from "../../Tshirt/T16.jpg";
import TS17 from "../../Tshirt/T17.jpg";
import TS18 from "../../Tshirt/T18.jpg";
import Footer from '../../log/Footer';

export const tshirts = [
  {
    id: 1,
    title: "Classic Crew Neck Tee",
    rating: 4.5,
    originalPrice: 999,
    discountPrice: 599, 
    image: TS1,
    description: "Timeless crew neck t-shirt made from soft cotton."
  },
  {
    id: 2,
    title: "Graphic Print Tee",
    rating: 4.6,
    originalPrice: 1099,
    discountPrice: 549, 
    image: TS2,
    description: "Bold graphic design for a trendy casual look."
  },
  {
    id: 3,
    title: "V-Neck Cotton T-Shirt",
    rating: 4.4,
    originalPrice: 899,
    discountPrice: 449, 
    image: TS3,
    description: "Comfortable v-neck tee ideal for everyday wear."
  },
  {
    id: 4,
    title: "Oversized Street Style Tee",
    rating: 4.7,
    originalPrice: 1299,
    discountPrice: 649,
    image: TS4,
    description: "Laid-back oversized fit with urban edge."
  },
  {
    id: 5,
    title: "Tie-Dye Relaxed Tee",
    rating: 4.6,
    originalPrice: 1199,
    discountPrice: 599, 
    image: TS5,
    description: "Trendy tie-dye print on a relaxed fit t-shirt."
  },
  {
    id: 6,
    title: "Henley Neck Tee",
    rating: 4.5,
    originalPrice: 1099,
    discountPrice: 659, 
    image: TS6,
    description: "Buttoned Henley tee for a stylish casual look."
  },
  {
    id: 7,
    title: "Slim Fit Stretch Tee",
    rating: 4.4,
    originalPrice: 999,
    discountPrice: 499, 
    image: TS7,
    description: "Soft stretch fabric for a snug, flattering fit."
  },
  {
    id: 8,
    title: "Pocket Detail T-Shirt",
    rating: 4.3,
    originalPrice: 1099,
    discountPrice: 659, 
    image: TS8,
    description: "Simple design with a utility pocket accent."
  },
  {
    id: 9,
    title: "Striped Cotton Tee",
    rating: 4.5,
    originalPrice: 999,
    discountPrice: 599,
    image: TS9,
    description: "Classic striped tee with a nautical vibe."
  },
  {
    id: 10,
    title: "Colorblock Active T-Shirt",
    rating: 4.7,
    originalPrice: 1199,
    discountPrice: 479,
    image: TS10,
    description: "Sporty colorblock tee designed for movement."
  },
  {
    id: 11,
    title: "Cropped Boxy Tee",
    rating: 4.6,
    originalPrice: 899,
    discountPrice: 449, 
    image: TS11,
    description: "Trendy cropped silhouette for a modern twist."
  },
  {
    id: 12,
    title: "Text Print Casual Tee",
    rating: 4.3,
    originalPrice: 999,
    discountPrice: 499, 
    image: TS12,
    description: "Statement text graphic for bold expression."
  },
  {
    id: 13,
    title: "Longline Slub Tee",
    rating: 4.4,
    originalPrice: 1099,
    discountPrice: 659, 
    image: TS13,
    description: "Longline tee with textured slub knit fabric."
  },
  {
    id: 14,
    title: "Washed Look Vintage Tee",
    rating: 4.6,
    originalPrice: 1199,
    discountPrice: 599, 
    image: TS14,
    description: "Faded vintage wash adds laid-back charm."
  },
  {
    id: 15,
    title: "Sleeveless Muscle Tee",
    rating: 4.5,
    originalPrice: 999,
    discountPrice: 399, 
    image: TS15,
    description: "Ideal for workouts or casual warm weather wear."
  },
  {
    id: 16,
    title: "Eco-Friendly Organic Tee",
    rating: 4.8,
    originalPrice: 1299,
    discountPrice: 779, 
    image: TS16,
    description: "Sustainable cotton tee with a soft, breathable feel."
  },
  {
    id: 17,
    title: "All-Over Print T-Shirt",
    rating: 4.4,
    originalPrice: 1099,
    discountPrice: 549, 
    image: TS17,
    description: "Bold patterns cover this head-turning tee."
  },
  {
    id: 18,
    title: "Knotted Front Tee",
    rating: 4.5,
    originalPrice: 999,
    discountPrice: 599, 
    image: TS18,
    description: "Knotted design adds shape and interest to this basic."
  },
  {
    id: 19,
    title: "Split Hem Asymmetric Tee",
    rating: 4.6,
    originalPrice: 1199,
    discountPrice: 719, 
    image: TS1,
    description: "Asymmetrical hem for a modern, edgy twist."
  },
  {
    id: 20,
    title: "Contrast Stitch Tee",
    rating: 4.5,
    originalPrice: 1099,
    discountPrice: 659, 
    image: TS2,
    description: "Subtle contrast stitching elevates a basic tee."
  }
];

const TShirt = () => {
  return (
    <>
    <div className="bg-gray-50 py-6 px-4">
      <h2 className="text-3xl  bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 h-15text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-white mb-8 py-4 px-6 bg-green-700 rounded-lg shadow-xl tracking-wider hover:shadow-2xl transition-all duration-300 ease-in-out">T-Shirts Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tshirts.map((shirt) => (
          <div key={shirt.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img src={shirt.image} alt={shirt.title} className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{shirt.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{shirt.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 line-through">₹{shirt.originalPrice}</span>
                <span className="text-lg text-pink-600 font-semibold">₹{shirt.discountPrice}</span>
              </div>
              <span className="text-yellow-500 text-sm font-medium">⭐⭐⭐⭐ {shirt.rating}</span>
             
            </div>
             <Link to={`/Tshirt/${shirt.id}`}> <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded hover:bg-pink-700">
              Shop Now
            </button></Link>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TShirt;
