import React from 'react';
import { Link } from 'react-router-dom';

import SS1 from "../../HOME/Shoes/SS1.jpg"
import SS2 from "../../HOME/Shoes/SS2.jpg";
import SS3 from "../../HOME/Shoes/SS3.jpg";
import SS4 from "../../HOME/Shoes/SS4.jpg";
import SS5 from "../../HOME/Shoes/SS5.jpg";
import SS6 from "../../HOME/Shoes/SS6.jpg";
import SS7 from "../../HOME/Shoes/SS7.jpg";
import SS8 from "../../HOME/Shoes/SS8.jpg";
import SS9 from "../../HOME/Shoes/SS9.jpg";
import SS10 from "../../HOME/Shoes/SS10.jpg";
import SS11 from "../../HOME/Shoes/SS11.jpg";

import Footer from '../../log/Footer';

export const sportsShoes = [
  {
    id: 1,
    title: "Cricket Spikes Pro",
    rating: 4.7,
    originalPrice: 2999,
    discountPrice: 1999,
    img: SS1,
    description: "Engineered spikes for enhanced grip and performance on turf."
  },
  {
    id: 2,
    title: "Lightweight Running Shoes",
    rating: 4.6,
    originalPrice: 2499,
    discountPrice: 1499,
    img: SS2,
    description: "Cushioned sole for long-distance running and comfort."
  },
  {
    id: 3,
    title: "Badminton Court Shoes",
    rating: 4.5,
    originalPrice: 2199,
    discountPrice: 1399,
    img: SS3,
    description: "Non-marking grip for quick lateral movement on court."
  },
  {
    id: 4,
    title: "Football Cleats",
    rating: 4.8,
    originalPrice: 3499,
    discountPrice: 2299,
    img: SS4,
    description: "Firm ground cleats for excellent traction and power."
  },
  {
    id: 5,
    title: "Kabaddi Pro Grip Shoes",
    rating: 4.6,
    originalPrice: 1999,
    discountPrice: 1299,
    img: SS5,
    description: "Built for grip and agility on dusty kabaddi courts."
  },
  {
    id: 6,
    title: "All-Rounder Training Shoes",
    rating: 4.4,
    originalPrice: 1799,
    discountPrice: 999,
    img: SS6,
    description: "Multipurpose trainer for gym, running and sports drills."
  },
  {
    id: 7,
    title: "Trail Running Shoes",
    rating: 4.5,
    originalPrice: 2699,
    discountPrice: 1699,
    img: SS7,
    description: "Built for off-road adventures with rugged outsoles."
  },
  {
    id: 8,
    title: "Tennis Court Sneakers",
    rating: 4.3,
    originalPrice: 2399,
    discountPrice: 1499,
    img: SS8,
    description: "Optimized for quick pivots and lateral stability."
  },
  {
    id: 9,
    title: "Indoor Football Shoes",
    rating: 4.6,
    originalPrice: 2199,
    discountPrice: 1399,
    img: SS9,
    description: "Flat outsole for indoor turf with superior control."
  },
  {
    id: 10,
    title: "Wrestling Grip Shoes",
    rating: 4.7,
    originalPrice: 2499,
    discountPrice: 1599,
    img: SS10,
    description: "Ankle support and grip for wrestling mats."
  },
  {
    id: 11,
    title: "Basketball High Tops",
    rating: 4.6,
    originalPrice: 3299,
    discountPrice: 1999,
    img: SS11,
    description: "High ankle support and bounce for dunk-ready performance."
  },
  {
    id: 12,
    title: "Skating Inline Shoes",
    rating: 4.5,
    originalPrice: 3599,
    discountPrice: 2499,
    img: SS4,
    description: "Streamlined design for beginners and pros alike."
  },
  {
    id: 13,
    title: "Hiking Trail Boots",
    rating: 4.7,
    originalPrice: 2999,
    discountPrice: 2099,
    img: SS3,
    description: "Water-resistant hiking boots for rocky trails."
  },
  {
    id: 14,
    title: "Yoga Flex Shoes",
    rating: 4.3,
    originalPrice: 1499,
    discountPrice: 899,
    img: SS1,
    description: "Minimal sole, ideal for yoga, pilates, and barefoot feel."
  },
  {
    id: 15,
    title: "Cricket Indoor Shoes",
    rating: 4.4,
    originalPrice: 1999,
    discountPrice: 1199,
    img: SS5,
    description: "Lightweight indoor cricket shoes with strong grip."
  },
  {
    id: 16,
    title: "Athletic CrossFit Shoes",
    rating: 4.6,
    originalPrice: 2499,
    discountPrice: 1499,
    img: SS10,
    description: "Sturdy base and flexibility for intense workouts."
  },
  {
    id: 17,
    title: "Marathon Pro Runners",
    rating: 4.7,
    originalPrice: 2799,
    discountPrice: 1699,
    img: SS7,
    description: "Designed for endurance and long-distance races."
  },
  {
    id: 18,
    title: "Badminton Feather-Lite",
    rating: 4.5,
    originalPrice: 2099,
    discountPrice: 1299,
    img: SS2,
    description: "Ultra-light and shock-absorbing sole for agility."
  },
  {
    id: 19,
    title: "Football Turf Shoes",
    rating: 4.6,
    originalPrice: 2399,
    discountPrice: 1499,
    img: SS7,
    description: "Turf-specific studs for artificial grass surfaces."
  },
  {
    id: 20,
    title: "Kabaddi Power Grippers",
    rating: 4.4,
    originalPrice: 1899,
    discountPrice: 999,
    img: SS2,
    description: "Strong toe grip and side support for aggressive moves."
  }
];

const SportsShoe = () => {
  return (
    <>
      <div className="bg-gray-50 py-6 px-4">
        <h2 className="text-3xl bg-gradient-to-r from-green-500 via-blue-500 to-green-500 text-white font-extrabold text-center mb-8 py-4 rounded-lg shadow-xl">
          Sports Shoes Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sportsShoes.map((shoe) => (
            <div key={shoe.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src={shoe.img} alt={shoe.title} className="w-full h-60 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{shoe.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{shoe.description.slice(0,30)}...</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 line-through">₹{shoe.originalPrice}</span>
                  <span className="text-lg text-pink-600 font-semibold">₹{shoe.discountPrice}</span>
                </div>
                <span className="text-yellow-500 text-sm font-medium">⭐ {shoe.rating}</span>
              </div>
               <Link to={`/shoe/${shoe.id}`}>
                <button className="mt-4 w-full py-2 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 text-white rounded hover:bg-pink-700">
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

export default SportsShoe;
