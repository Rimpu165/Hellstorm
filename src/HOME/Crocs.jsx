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
  { id: 1, title: "Classic Clog", price: 349.99, description: "Comfortable, lightweight clog with a classic design.", image: C1, rating: "4.6 ★★★★½" },
  { id: 2, title: "Bayaband Clog", price: 359.99, description: "Sporty and bold, perfect for daily wear.", image: C2, rating: "4.4 ★★★★☆" },
  { id: 3, title: "LiteRide Clog", price: 389.99, description: "Next-generation comfort with LiteRide foam.", image: C3, rating: "4.7 ★★★★½" },
  { id: 4, title: "Baya Clog", price: 319.99, description: "Ventilated design with enhanced arch support.", image: C4, rating: "4.3 ★★★★☆" },
  { id: 5, title: "Crocband Clog", price: 329.99, description: "Athletic-inspired style with the comfort Crocs is known for.", image: C5, rating: "4.5 ★★★★½" },
  { id: 6, title: "Echo Clog", price: 399.99, description: "Bold style meets all-day comfort and durability.", image: C6, rating: "4.2 ★★★★☆" },
  { id: 7, title: "All-Terrain Clog", price: 369.99, description: "Durable outsole and adjustable strap for adventure-ready performance.", image: C7, rating: "4.6 ★★★★½" },
  { id: 8, title: "Duet Max Clog", price: 344.99, description: "Extra rugged outsole and roomy fit.", image: C8, rating: "4.3 ★★★★☆" },
  { id: 9, title: "Off Court Clog", price: 329.99, description: "Modern look with sport-inspired style.", image: C9, rating: "4.1 ★★★★☆" },
  { id: 10, title: "Classic Platform", price: 359.99, description: "A raised sole with a classic feel.", image: C10, rating: "4.5 ★★★★½" },
  { id: 11, title: "Furever Crush Clog", price: 384.99, description: "Cozy fur lining and bold platform design.", image: C11, rating: "4.2 ★★★★☆" },
  { id: 12, title: "Mega Crush Clog", price: 409.99, description: "Chunky heel and unique styling.", image: C12, rating: "4.4 ★★★★☆" },
  { id: 13, title: "Crush Boot", price: 449.99, description: "Hybrid between boot and clog for cooler weather.", image: C13, rating: "4.0 ★★★★☆" },
  { id: 14, title: "Classic Lined Clog", price: 374.99, description: "Warm and fuzzy lining for added comfort.", image: C14, rating: "4.5 ★★★★½" },
  { id: 15, title: "Baya Lined Clog", price: 359.99, description: "Lined version of the popular Baya style.", image: C15, rating: "4.3 ★★★★☆" },
  { id: 16, title: "Classic Slide", price: 309.99, description: "Minimal design, maximum comfort.", image: C16, rating: "4.1 ★★★★☆" },
  { id: 17, title: "Classic Clog Tie-Dye", price: 389.99, description: "Fun, colorful twist on the original.", image: C17, rating: "4.7 ★★★★½" },
  { id: 18, title: "Echo Storm", price: 419.99, description: "Sleek futuristic design with durable build.", image: C18, rating: "4.6 ★★★★½" },
  { id: 19, title: "Mega Crush Sandal", price: 379.99, description: "Open style with platform sole and bold details.", image: C19, rating: "4.4 ★★★★☆" },
  { id: 20, title: "Classic Clog Fleece", price: 369.99, description: "Fleece-lined clog for ultimate coziness.", image: C20, rating: "4.2 ★★★★☆" }
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
            <img src={item.image} alt={item.title} className="w-full h-56 object-contain" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p>
                {item.rating}
               </p>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              <p className="text-green-600 font-bold text-lg">₹{item.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Crocs;
