import React from 'react'
import { Link } from 'react-router-dom';

import U1 from "../NIKEPHOTOS/U1.webp";
import U2 from "../NIKEPHOTOS/U2.webp";
import U3 from "../NIKEPHOTOS/U3.webp";
import U4 from "../NIKEPHOTOS/U4.webp";
import U5 from "../NIKEPHOTOS/U5.webp";
import U6 from "../NIKEPHOTOS/U6.webp";
import U7 from "../NIKEPHOTOS/U7.webp";
import U8 from "../NIKEPHOTOS/U8.webp";
import U9 from "../NIKEPHOTOS/U9.webp";
import U10 from "../NIKEPHOTOS/U10.webp";
import U11 from "../NIKEPHOTOS/U11.webp";
import U12 from "../NIKEPHOTOS/U12.webp";
import U13 from "../NIKEPHOTOS/U13.webp";
import U14 from "../NIKEPHOTOS/U14.webp";
import U15 from "../NIKEPHOTOS/U15.webp";
import U16 from "../NIKEPHOTOS/U16.webp";
import U17 from "../NIKEPHOTOS/U17.webp";
import U18 from "../NIKEPHOTOS/U18.webp";
import U19 from "../NIKEPHOTOS/U19.webp";
import U20 from "../NIKEPHOTOS/U20.webp";
import Footer from '../log/Footer';


export const UFC = [
    {
      id: 1,
      title: "United Colors of Benetton Men's T-Shirt",
      discountPrice: 1299,
      description: "Soft cotton T-shirt with a bold logo print.",
      img: U1,
      rating: "4.5 ★★★★½",
    },
    {
      id: 2,
      title: "United Colors of Benetton Women's Dress",
      discountPrice: 2999,
      description: "Elegant dress with a flattering cut for special occasions.",
      img: U2,
      rating: "4.6 ★★★★½",
    },
    {
      id: 3,
      title: "United Colors of Benetton Kids Hoodie",
      discountPrice: 1799,
      description: "Cozy hoodie with front pocket and embroidered logo.",
      img: U3,
      rating: "4.7 ★★★★½",
    },
    {
      id: 4,
      title: "United Colors of Benetton Men's Chinos",
      discountPrice: 2499,
      description: "Slim-fit chinos with a modern look.",
      img: U4,
      rating: "4.4 ★★★★☆",
    },
    {
      id: 5,
      title: "United Colors of Benetton Women's Sweater",
      discountPrice: 1999,
      description: "Warm and comfortable knit sweater in vibrant colors.",
      img: U5,
      rating: "4.5 ★★★★½",
    },
    {
      id: 6,
      title: "United Colors of Benetton Men's Casual Shoes",
      discountPrice: 3499,
      description: "Stylish and durable shoes for casual outings.",
      img: U6,
      rating: "4.6 ★★★★½",
    },
    {
      id: 7,
      title: "United Colors of Benetton Women's Jeans",
      discountPrice: 2599,
      description: "Slim-fit jeans with stretch for added comfort.",
      img: U7,
      rating: "4.4 ★★★★☆",
    },
    {
      id: 8,
      title: "United Colors of Benetton Men's Polo Shirt",
      discountPrice: 1799,
      description: "Classic polo shirt with a soft, breathable fabric.",
      img: U8,
      rating: "4.5 ★★★★½",
    },
    {
      id: 9,
      title: "United Colors of Benetton Women's Sneakers",
      discountPrice: 3999,
      description: "Trendy sneakers with a comfortable fit and modern style.",
      img: U9,
      rating: "4.6 ★★★★½",
    },
    {
      id: 10,
      title: "United Colors of Benetton Men's Jacket",
      discountPrice: 4999,
      description: "Lightweight jacket with a sleek, contemporary design.",
      img: U10,
      rating: "4.7 ★★★★½",
    },
    {
      id: 11,
      title: "United Colors of Benetton Women's Handbag",
      discountPrice: 2999,
      description: "Chic handbag made from premium faux leather.",
      img: U11,
      rating: "4.4 ★★★★☆",
    },
    {
      id: 12,
      title: "United Colors of Benetton Kids Sweatshirt",
      discountPrice: 1499,
      description: "Soft sweatshirt with a playful graphic print for kids.",
      img: U12,
      rating: "4.5 ★★★★½",
    },
    {
      id: 13,
      title: "United Colors of Benetton Men's Backpack",
      discountPrice: 2299,
      description: "Spacious and durable backpack with multiple compartments.",
      img: U13,
      rating: "4.6 ★★★★½",
    },
    {
      id: 14,
      title: "United Colors of Benetton Women's Scarf",
      discountPrice: 999,
      description: "Soft, lightweight scarf for cooler days.",
      img: U14,
      rating: "4.4 ★★★★☆",
    },
    {
      id: 15,
      title: "United Colors of Benetton Men's Sweatpants",
      discountPrice: 1899,
      description: "Comfortable sweatpants for casual wear or working out.",
      img: U15,
      rating: "4.5 ★★★★½",
    },
    {
      id: 16,
      title: "United Colors of Benetton Women's Blouse",
      discountPrice: 2199,
      description: "Stylish blouse with button-down details.",
      img: U16,
      rating: "4.6 ★★★★½",
    },
    {
      id: 17,
      title: "United Colors of Benetton Men's Flip Flops",
      discountPrice: 899,
      description: "Casual and comfortable flip-flops for the summer.",
      img: U17,
      rating: "4.3 ★★★★☆",
    },
    {
      id: 18,
      title: "United Colors of Benetton Women's Cardigan",
      discountPrice: 2299,
      description: "Cozy cardigan with a relaxed fit and soft knit fabric.",
      img: U18,
      rating: "4.5 ★★★★½",
    },
    {
      id: 19,
      title: "United Colors of Benetton Men's Socks (5 Pairs)",
      discountPrice: 799,
      description: "Soft cotton socks with a comfortable fit.",
      img: U19,
      rating: "4.4 ★★★★☆",
    },
    {
      id: 20,
      title: "United Colors of Benetton Women's Leggings",
      discountPrice: 1499,
      description: "Stretchy leggings for ultimate comfort and style.",
      img: U20,
      rating: "4.5 ★★★★½",
    },
  ];
const Ufc = () => {
  return (
    <div className='p-6 bg-gray-100'> 
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-white mb-8 py-4 px-6 bg-green-700 rounded-lg shadow-xl tracking-wider hover:shadow-2xl transition-all duration-300 ease-in-out">
  UNITED COLORS OF BENETTON
</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
     {UFC.map((ufc)=>(
         <div key={ufc.id} className='bg-white rounded-lg shadow hover:shadow-lg transition p-4'>
                 <Link to={`/ufc/${ufc.id}`}>
                 <div className="w-full h-90 overflow-hidden mb-4 flex items-center justify-center bg-white">
                     <img src={ufc.img} alt={ufc.title}  className="w-full h-full     object-contain rounded-md" />
                 </div>
                <p className="text-gray-700">{ufc.title}</p>
                <p>{ufc.rating}</p>
                <span className="text-green-600 font-bold ">₹{ufc.discountPrice}</span>
                <p className="text-sm text-gray-500 mt-1">{ufc.description.slice(0,25)}</p>
                 </Link>
         </div>
     ))}
     </div>
       
        <Footer/>
 
     </div>
  )
}

export default Ufc
