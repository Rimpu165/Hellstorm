import React from 'react'


import S1 from "../Sketcherimage/S1.webp"
import S2 from "../Sketcherimage/S2.webp"
import S3 from "../Sketcherimage/S3.webp"
import S4 from "../Sketcherimage/S4.webp"
import S5 from "../Sketcherimage/S5.webp"
import S6 from "../Sketcherimage/S6.webp"
import S7 from "../Sketcherimage/S7.webp"
import S8 from "../Sketcherimage/S8.webp"
import S9 from "../Sketcherimage/S9.webp"
import S10 from "../Sketcherimage/S10.webp"
import S11 from "../Sketcherimage/S11.webp"
import S12 from "../Sketcherimage/S12.webp"
import S13 from "../Sketcherimage/S13.webp"
import S14 from "../Sketcherimage/S14.webp"
import S15 from "../Sketcherimage/S15.webp"
import S16 from "../Sketcherimage/S16.webp"
import S17 from "../Sketcherimage/S17.webp"
import S18 from "../Sketcherimage/S18.webp"
import S19 from "../Sketcherimage/S19.webp"
import S20 from "../Sketcherimage/S20.webp"
import Footer from '../log/Footer'
import { Link } from 'react-router-dom'


export const skecherProducts = [
    {
      id: 1,
      title: "Skechers Men's Go Walk Flex",
      discountPrice: 3299,
      description: "Lightweight and breathable walking shoes.",
      img: S1,
      rating: "4.5 ★★★★½"
    },
    {
      id: 2,
      title: "Skechers Women's Arch Fit",
      discountPrice: 4599,
      description: "Comfortable arch support for all-day wear.",
      img: S2,
      rating: "4.7 ★★★★½"
    },
    {
      id: 3,
      title: "Skechers Men's D'Lites",
      discountPrice: 3899,
      description: "Stylish and durable with a chunky sole.",
      img: S3,
      rating: "4.3 ★★★★☆"
    },
    {
      id: 4,
      title: "Skechers Women's Ultra Flex",
      discountPrice: 3499,
      description: "Slip-on design with high flexibility.",
      img: S4,
      rating: "4.6 ★★★★½"
    },
    {
      id: 5,
      title: "Skechers Men's Max Cushioning Elite",
      discountPrice: 5299,
      description: "Extra cushioning for high-impact activities.",
      img: S5,
      rating: "4.8 ★★★★★"
    },
    {
      id: 6,
      title: "Skechers Women's Bobs Sport",
      discountPrice: 3199,
      description: "Sporty design with memory foam comfort.",
      img: S6,
      rating: "4.4 ★★★★☆"
    },
    {
      id: 7,
      title: "Skechers Men's Relaxed Fit",
      discountPrice: 3699,
      description: "Relaxed fit with air-cooled memory foam.",
      img: S7,
      rating: "4.5 ★★★★½"
    },
    {
      id: 8,
      title: "Skechers Women's Go Walk Joy",
      discountPrice: 2899,
      description: "Joyful walking experience with responsive cushioning.",
      img: S8,
      rating: "4.2 ★★★★☆"
    },
    {
      id: 9,
      title: "Skechers Men's Afterburn",
      discountPrice: 3999,
      description: "Lace-up sneaker with supportive overlays.",
      img: S9,
      rating: "4.3 ★★★★☆"
    },
    {
      id: 10,
      title: "Skechers Women's Uno Stand on Air",
      discountPrice: 4999,
      description: "Air-cushioned heel for trendy style.",
      img: S10,
      rating: "4.6 ★★★★½"
    },
    {
      id: 11,
      title: "Skechers Men's Track Scloric",
      discountPrice: 3199,
      description: "Athletic mesh and supportive midsole.",
      img: S11,
      rating: "4.4 ★★★★☆"
    },
    {
      id: 12,
      title: "Skechers Women's Flex Appeal",
      discountPrice: 3599,
      description: "Soft knit fabric with flexible traction.",
      img: S12,
      rating: "4.5 ★★★★½"
    },
    {
      id: 13,
      title: "Skechers Men's Equalizer 4.0",
      discountPrice: 4299,
      description: "Smooth comfort with stretch fit.",
      img: S13,
      rating: "4.7 ★★★★½"
    },
    {
      id: 14,
      title: "Skechers Women's Glide-Step Sport",
      discountPrice: 3899,
      description: "Responsive comfort with sporty feel.",
      img: S14,
      rating: "4.6 ★★★★½"
    },
    {
      id: 15,
      title: "Skechers Men's Summits",
      discountPrice: 2999,
      description: "Seamless knit comfort for everyday wear.",
      img: S15,
      rating: "4.3 ★★★★☆"
    },
    {
      id: 16,
      title: "Skechers Women's Max Cushioning Premier",
      discountPrice: 4799,
      description: "Maximum support for serious walkers.",
      img: S16,
      rating: "4.8 ★★★★★"
    },
    {
      id: 17,
      title: "Skechers Men's Arch Fit Refine",
      discountPrice: 4399,
      description: "Ergonomic arch support and modern style.",
      img: S17,
      rating: "4.6 ★★★★½"
    },
    {
      id: 18,
      title: "Skechers Women's Go Run Fast",
      discountPrice: 3099,
      description: "Built for performance with breathable mesh.",
      img: S18,
      rating: "4.4 ★★★★☆"
    },
    {
      id: 19,
      title: "Skechers Men's GOrun Consistent",
      discountPrice: 3699,
      description: "Smooth transitions and cushioned ride.",
      img: S19,
      rating: "4.5 ★★★★½"
    },
    {
      id: 20,
      title: "Skechers Women's D'Lites Fresh Start",
      discountPrice: 3799,
      description: "Iconic style with enhanced comfort.",
      img: S20,
      rating: "4.7 ★★★★½"
    }
  ];
  
const Sketcher = () => {
  return (
    <div className="p-6 bg-gray-100">
  <h2 className="text-4xl sm:text-5xl font-bold text-center text-white bg-gray-900 mb-10 py-4 px-6 rounded-lg shadow-lg tracking-wide uppercase">
  Shop the Latest SKETCHERS Collection
</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
    {skecherProducts.map((product) => (
      <div key={product.id} className="bg-white border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
       <Link to={`/sketcher/${product.id}`}> <img src={product.img} alt={product.title} className="w-full h-56 object-contain" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
          <p className="text-yellow-500 font-semibold">{product.rating}</p>
          <p className="text-xl font-bold text-blue-600 mb-2">₹{product.discountPrice}</p>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          
        </div>
        </Link>
      </div>
    ))}
  </div>
  <Footer/>
  </div>
  )
}

export default Sketcher
