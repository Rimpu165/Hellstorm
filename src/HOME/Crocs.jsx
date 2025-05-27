import React from 'react';
import { Link } from 'react-router-dom';

import C1 from "../Crocsphoto/C1.webp";
import C2 from "../Crocsphoto/C2.webp";
import C3 from "../Crocsphoto/C3.webp";
import C4 from "../Crocsphoto/C4.webp";
import C5 from "../Crocsphoto/C5.webp";
import C6 from "../Crocsphoto/C6.webp";
import C7 from "../Crocsphoto/C7.webp";
import C8 from "../Crocsphoto/C8.webp";
import C9 from "../Crocsphoto/C9.webp";
import C10 from "../Crocsphoto/C10.webp";
import C11 from "../Crocsphoto/C11.webp";
import C12 from "../Crocsphoto/C12.webp";
import C13 from "../Crocsphoto/C13.webp";
import C14 from "../Crocsphoto/C14.webp";
import C15 from "../Crocsphoto/C15.webp";
import C16 from "../Crocsphoto/C16.webp";
import C17 from "../Crocsphoto/C17.webp";
import C18 from "../Crocsphoto/C18.webp";
import C19 from "../Crocsphoto/C19.webp";
import C20 from "../Crocsphoto/C20.webp";

import Footer from '../log/Footer';

export const crocsProduct = [
  { id: 1, title: "Classic Clog", discountPrice: 349, description: "Comfortable, lightweight clog with a classic design.", img: C1, rating: "4.6 ★★★★½" },
  { id: 2, title: "Bayaband Clog", discountPrice: 359, description: "Sporty and bold, perfect for daily wear.", img: C2, rating: "4.4 ★★★★☆" },
  { id: 3, title: "LiteRide Clog", discountPrice: 389, description: "Next-generation comfort with LiteRide foam.", img: C3, rating: "4.7 ★★★★½" },
  { id: 4, title: "Baya Clog", discountPrice: 319, description: "Ventilated design with enhanced arch support.", img: C4, rating: "4.3 ★★★★☆" },
  { id: 5, title: "Crocband Clog", discountPrice: 329, description: "Athletic-inspired style with the comfort Crocs is known for.", img: C5, rating: "4.5 ★★★★½" },
  { id: 6, title: "Echo Clog", discountPrice: 399, description: "Bold style meets all-day comfort and durability.", img: C6, rating: "4.2 ★★★★☆" },
  { id: 7, title: "All-Terrain Clog", discountPrice: 369, description: "Durable outsole and adjustable strap for adventure-ready performance.", image: C7, rating: "4.6 ★★★★½" },
  { id: 8, title: "Duet Max Clog", discountPrice: 344, description: "Extra rugged outsole and roomy fit.", img: C8, rating: "4.3 ★★★★☆" },
  { id: 9, title: "Off Court Clog", discountPrice: 329, description: "Modern look with sport-inspired style.", img: C9, rating: "4.1 ★★★★☆" },
  { id: 10, title: "Classic Platform", discountPrice: 359, description: "A raised sole with a classic feel.", img: C10, rating: "4.5 ★★★★½" },
  { id: 11, title: "Furever Crush Clog", discountPrice: 384, description: "Cozy fur lining and bold platform design.", img: C11, rating: "4.2 ★★★★☆" },
  { id: 12, title: "Mega Crush Clog", discountPrice: 409, description: "Chunky heel and unique styling.", img: C12, rating: "4.4 ★★★★☆" },
  { id: 13, title: "Crush Boot", discountPrice: 449, description: "Hybrid between boot and clog for cooler weather.", img: C13, rating: "4.0 ★★★★☆" },
  { id: 14, title: "Classic Lined Clog", discountPrice: 374, description: "Warm and fuzzy lining for added comfort.", img: C14, rating: "4.5 ★★★★½" },
  { id: 15, title: "Baya Lined Clog", discountPrice: 359, description: "Lined version of the popular Baya style.", img: C15, rating: "4.3 ★★★★☆" },
  { id: 16, title: "Classic Slide", discountPrice: 309, description: "Minimal design, maximum comfort.", img: C16, rating: "4.1 ★★★★☆" },
  { id: 17, title: "Classic Clog Tie-Dye", discountPrice: 389, description: "Fun, colorful twist on the original.", img: C17, rating: "4.7 ★★★★½" },
  { id: 18, title: "Echo Storm", discountPrice: 419, description: "Sleek futuristic design with durable build.", img: C18, rating: "4.6 ★★★★½" },
  { id: 19, title: "Mega Crush Sandal", discountPrice: 379, description: "Open style with platform sole and bold details.", img: C19, rating: "4.4 ★★★★☆" },
  { id: 20, title: "Classic Clog Fleece", discountPrice: 369, description: "Fleece-lined clog for ultimate coziness.", img: C20, rating: "4.2 ★★★★☆" }
];


const Crocs = () => {
  return (
    <div className="p-6">
     <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 bg-lime-200 mb-8 py-4 px-6 rounded-lg shadow-lg tracking-wide">
  Crocs Collection
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {crocsProduct.map((item) => (
          <Link
            to={`/crocs/${item.id}`}
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
          >
            <img src={item.img} alt={item.title} className="w-full h-56 object-contain" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p>
                {item.rating}
               </p>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              <p className="text-green-600 font-bold text-lg">₹{item.discountPrice.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Crocs;
