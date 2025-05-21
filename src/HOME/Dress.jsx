import React from 'react'
import { Link } from 'react-router-dom'
import K1 from "../Womenphotos/K1.jpg"
import K2 from "../Womenphotos/K2.jpg"
import K3 from "../Womenphotos/K3.jpg"
import K4 from "../Womenphotos/K4.jpg"
import K5 from "../Womenphotos/K5.jpg"
import K6 from "../Womenphotos/K6.jpg"
import K7 from "../Womenphotos/K7.jpg"
import K8 from "../Womenphotos/K8.jpg"
import K9 from "../Womenphotos/K9.jpg"
import K10 from "../Womenphotos/K10.jpg"
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
import Footer from '../log/Footer'

export const dress = [
    {
      id: 1,
      title: "Floral Maxi Dress",
      rating: 4.8,
      originalPrice: 2299,
      discountPrice: 1699,
      image: K1,
      description: "A flowy floral maxi dress perfect for summer days."
    },
    {
      id: 2,
      title: "Bodycon Midi Dress",
      rating: 4.6,
      originalPrice: 1999,
      discountPrice: 1499,
      image: K2,
      description: "Chic and figure-hugging, ideal for evening outings."
    },
    {
      id: 3,
      title: "A-Line Sundress",
      rating: 4.5,
      originalPrice: 1899,
      discountPrice: 1399,
      image: K3,
      description: "Classic A-line sundress for a breezy daytime look."
    },
    {
      id: 4,
      title: "Wrap Midi Dress",
      rating: 4.7,
      originalPrice: 2099,
      discountPrice: 1599,
      image: K4,
      description: "Flattering wrap-style dress with a stylish silhouette."
    },
    {
      id: 5,
      title: "Tiered Ruffle Dress",
      rating: 4.4,
      originalPrice: 2399,
      discountPrice: 1799,
      image: K5,
      description: "Elegant ruffles add charm to this flowy dress."
    },
    {
      id: 6,
      title: "Lace Fit & Flare Dress",
      rating: 4.8,
      originalPrice: 2499,
      discountPrice: 1899,
      image: K6,
      description: "Feminine fit and flare silhouette with lace overlay."
    },
    {
      id: 7,
      title: "Off-Shoulder Cocktail Dress",
      rating: 4.5,
      originalPrice: 2199,
      discountPrice: 1599,
      image: K7,
      description: "Make a statement with this off-shoulder cocktail look."
    },
    {
      id: 8,
      title: "Smocked Boho Dress",
      rating: 4.6,
      originalPrice: 1999,
      discountPrice: 1499,
      image: K8,
      description: "Bohemian smocked dress with relaxed fit and flair."
    },
    {
      id: 9,
      title: "Slip Satin Dress",
      rating: 4.7,
      originalPrice: 2599,
      discountPrice: 1999,
      image: K9,
      description: "Sleek satin slip dress for an effortlessly glam look."
    },
    {
      id: 10,
      title: "Shirt Dress with Belt",
      rating: 4.3,
      originalPrice: 1799,
      discountPrice: 1299,
      image: K10,
      description: "Casual yet polished shirt dress with waist tie."
    },
    {
      id: 11,
      title: "Balloon Sleeve Mini Dress",
      rating: 4.4,
      originalPrice: 1899,
      discountPrice: 1399,
      image: T11,
      description: "Statement sleeves elevate this trendy mini dress."
    },
    {
      id: 12,
      title: "Empire Waist Dress",
      rating: 4.6,
      originalPrice: 2099,
      discountPrice: 1599,
      image: T12,
      description: "Flattering empire waist dress for all-day comfort."
    },
    {
      id: 13,
      title: "Camisole Slip Dress",
      rating: 4.5,
      originalPrice: 1999,
      discountPrice: 1499,
      image: T13,
      description: "Minimalist slip dress with delicate straps."
    },
    {
      id: 14,
      title: "One-Shoulder Asymmetrical Dress",
      rating: 4.7,
      originalPrice: 2499,
      discountPrice: 1899,
      image: T14,
      description: "Edgy one-shoulder design with asymmetrical hem."
    },
    {
      id: 15,
      title: "Printed Boho Maxi Dress",
      rating: 4.6,
      originalPrice: 2399,
      discountPrice: 1799,
      image: T15,
      description: "Boho-inspired prints in a flowy maxi silhouette."
    },
    {
      id: 16,
      title: "Sequin Party Dress",
      rating: 4.8,
      originalPrice: 2699,
      discountPrice: 2099,
      image: T16,
      description: "Sparkling sequins make this dress party-ready."
    },
    {
      id: 17,
      title: "Wrap Tie Mini Dress",
      rating: 4.3,
      originalPrice: 1899,
      discountPrice: 1399,
      image: T17,
      description: "Cute mini wrap dress with an adjustable tie."
    },
    {
      id: 18,
      title: "High-Low Hem Dress",
      rating: 4.5,
      originalPrice: 2199,
      discountPrice: 1599,
      image: T18,
      description: "Dramatic high-low hem adds flair to any event."
    },
    {
      id: 19,
      title: "Backless Halter Dress",
      rating: 4.6,
      originalPrice: 2499,
      discountPrice: 1899,
      image: T19,
      description: "Alluring backless halter design with sleek finish."
    },
    {
      id: 20,
      title: "Ruched Bodycon Dress",
      rating: 4.4,
      originalPrice: 1999,
      discountPrice: 1499,
      image: T20,
      description: "Curve-enhancing ruched fabric in a bodycon fit."
    }
  ];
  

const Dress = () => {
  return (
    <>
    <div  className="bg-gray-50 py-10 px-4 sm:px-10">
    <h2 className="text-4xl font-semibold text-white text-center mb-10 py-4 px-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg shadow-lg">
  Trending Women  Collection
</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {dress.map((item) => (
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
             <Link to={`/dress/${item.id}`}> <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded hover:bg-pink-700">
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

export default Dress
