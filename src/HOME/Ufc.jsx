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
      price: 1299,
      description: "Soft cotton T-shirt with a bold logo print.",
      image: U1,
      rating: "4.5 ★★★★½",
    },
    {
      id: 2,
      title: "United Colors of Benetton Women's Dress",
      price: 2999,
      description: "Elegant dress with a flattering cut for special occasions.",
      image: U2,
      rating: "4.6 ★★★★½",
    },
    {
      id: 3,
      title: "United Colors of Benetton Kids Hoodie",
      price: 1799,
      description: "Cozy hoodie with front pocket and embroidered logo.",
      image: U3,
      rating: "4.7 ★★★★½",
    },
    {
      id: 4,
      title: "United Colors of Benetton Men's Chinos",
      price: 2499,
      description: "Slim-fit chinos with a modern look.",
      image: U4,
      rating: "4.4 ★★★★☆",
    },
    {
      id: 5,
      title: "United Colors of Benetton Women's Sweater",
      price: 1999,
      description: "Warm and comfortable knit sweater in vibrant colors.",
      image: U5,
      rating: "4.5 ★★★★½",
    },
    {
      id: 6,
      title: "United Colors of Benetton Men's Casual Shoes",
      price: 3499,
      description: "Stylish and durable shoes for casual outings.",
      image: U6,
      rating: "4.6 ★★★★½",
    },
    {
      id: 7,
      title: "United Colors of Benetton Women's Jeans",
      price: 2599,
      description: "Slim-fit jeans with stretch for added comfort.",
      image: U7,
      rating: "4.4 ★★★★☆",
    },
    {
      id: 8,
      title: "United Colors of Benetton Men's Polo Shirt",
      price: 1799,
      description: "Classic polo shirt with a soft, breathable fabric.",
      image: U8,
      rating: "4.5 ★★★★½",
    },
    {
      id: 9,
      title: "United Colors of Benetton Women's Sneakers",
      price: 3999,
      description: "Trendy sneakers with a comfortable fit and modern style.",
      image: U9,
      rating: "4.6 ★★★★½",
    },
    {
      id: 10,
      title: "United Colors of Benetton Men's Jacket",
      price: 4999,
      description: "Lightweight jacket with a sleek, contemporary design.",
      image: U10,
      rating: "4.7 ★★★★½",
    },
    {
      id: 11,
      title: "United Colors of Benetton Women's Handbag",
      price: 2999,
      description: "Chic handbag made from premium faux leather.",
      image: U11,
      rating: "4.4 ★★★★☆",
    },
    {
      id: 12,
      title: "United Colors of Benetton Kids Sweatshirt",
      price: 1499,
      description: "Soft sweatshirt with a playful graphic print for kids.",
      image: U12,
      rating: "4.5 ★★★★½",
    },
    {
      id: 13,
      title: "United Colors of Benetton Men's Backpack",
      price: 2299,
      description: "Spacious and durable backpack with multiple compartments.",
      image: U13,
      rating: "4.6 ★★★★½",
    },
    {
      id: 14,
      title: "United Colors of Benetton Women's Scarf",
      price: 999,
      description: "Soft, lightweight scarf for cooler days.",
      image: U14,
      rating: "4.4 ★★★★☆",
    },
    {
      id: 15,
      title: "United Colors of Benetton Men's Sweatpants",
      price: 1899,
      description: "Comfortable sweatpants for casual wear or working out.",
      image: U15,
      rating: "4.5 ★★★★½",
    },
    {
      id: 16,
      title: "United Colors of Benetton Women's Blouse",
      price: 2199,
      description: "Stylish blouse with button-down details.",
      image: U16,
      rating: "4.6 ★★★★½",
    },
    {
      id: 17,
      title: "United Colors of Benetton Men's Flip Flops",
      price: 899,
      description: "Casual and comfortable flip-flops for the summer.",
      image: U17,
      rating: "4.3 ★★★★☆",
    },
    {
      id: 18,
      title: "United Colors of Benetton Women's Cardigan",
      price: 2299,
      description: "Cozy cardigan with a relaxed fit and soft knit fabric.",
      image: U18,
      rating: "4.5 ★★★★½",
    },
    {
      id: 19,
      title: "United Colors of Benetton Men's Socks (5 Pairs)",
      price: 799,
      description: "Soft cotton socks with a comfortable fit.",
      image: U19,
      rating: "4.4 ★★★★☆",
    },
    {
      id: 20,
      title: "United Colors of Benetton Women's Leggings",
      price: 1499,
      description: "Stretchy leggings for ultimate comfort and style.",
      image: U20,
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
                     <img src={ufc.image} alt={ufc.title}  className="w-full h-full     object-contain rounded-md" />
                 </div>
                <p className="text-gray-700">{ufc.title}</p>
                <p>{ufc.rating}</p>
                <span className="text-green-600 font-bold ">₹{ufc.price}</span>
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
