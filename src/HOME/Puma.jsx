import React from 'react'
import { Link } from 'react-router-dom'

import B1 from "../Pumaphoto/B1.webp"
import B2 from "../Pumaphoto/B2.jpg"
import B3 from "../Pumaphoto/B3.jpg"
import B4 from "../Pumaphoto/B4.webp"
import B5 from "../Pumaphoto/B5.webp"
import B6 from "../Pumaphoto/B6.webp"
import B7 from "../Pumaphoto/B7.webp"
import B8 from "../Pumaphoto/B8.webp"
import B9 from "../Pumaphoto/B9.webp"
import B10 from "../Pumaphoto/B10.webp"
import B11 from "../Pumaphoto/B11.webp"
import B12 from "../Pumaphoto/B12.webp"
import B13 from "../Pumaphoto/B13.webp"
import B14 from "../Pumaphoto/B14.webp"
import B15 from "../Pumaphoto/B15.webp"
import B16 from "../Pumaphoto/B16.webp"
import B17 from "../Pumaphoto/B17.webp"
import B18 from "../Pumaphoto/B18.webp"
import B19 from "../Pumaphoto/B19.webp"
import B20 from "../Pumaphoto/20.webp"

import Footer from '../log/Footer'
export const pumaProducts = [
  { id: 1, title: "PUMA Men's Running Shoes", discountPrice: 3499, description: "Lightweight and breathable for everyday runs.", img: B1, rating: "4.5 ★★★★½" },
  { id: 2, title: "PUMA Sports T-shirt", discountPrice: 1499, description: "DryCELL technology for sweat-free workouts.", img: B2, rating: "4.4 ★★★★☆" },
  { id: 3, title: "PUMA Training Pants", discountPrice: 1999, description: "Stretchable fabric for maximum movement.", img: B3, rating: "4.3 ★★★★☆" },
  { id: 4, title: "PUMA Slide Sandals", discountPrice: 999, description: "Comfortable sandals for everyday wear.", img: B4, rating: "4.2 ★★★★☆" },
  { id: 5, title: "PUMA Backpack", discountPrice: 2299, description: "Spacious and stylish backpack for gym or travel.", img: B5, rating: "4.6 ★★★★½" },
  { id: 6, title: "PUMA Men's Hoodie", discountPrice: 2799, description: "Soft fleece lining and adjustable hood.", img: B6, rating: "4.4 ★★★★☆" },
  { id: 7, title: "PUMA Ankle Socks (Pack of 3)", discountPrice: 499, description: "Breathable and cushioned socks.", img: B7, rating: "4.1 ★★★★☆" },
  { id: 8, title: "PUMA Sports Watch", discountPrice: 4499, description: "Water-resistant digital sports watch.", img: B8, rating: "4.7 ★★★★½" },
  { id: 9, title: "PUMA Gym Bag", discountPrice: 1899, description: "Compact and durable bag for workout essentials.", img: B9, rating: "4.3 ★★★★☆" },
  { id: 10, title: "PUMA Training Cap", discountPrice: 799, description: "Adjustable fit with sweat-wicking band.", img: B10, rating: "4.2 ★★★★☆" },
  { id: 11, title: "PUMA Women's Leggings", discountPrice: 1699, description: "Comfort fit with stretchable waistband.", img: B11, rating: "4.4 ★★★★☆" },
  { id: 12, title: "PUMA Tank Top", discountPrice: 1299, description: "Lightweight tank for active workouts.", img: B12, rating: "4.3 ★★★★☆" },
  { id: 13, title: "PUMA Gym Gloves", discountPrice: 899, description: "Grip-enhanced gloves for heavy lifting.", img: B13, rating: "4.1 ★★★★☆" },
  { id: 14, title: "PUMA Yoga Mat", discountPrice: 1399, description: "Non-slip surface and easy to roll.", img: B14, rating: "4.5 ★★★★½" },
  { id: 15, title: "PUMA Flip Flops", discountPrice: 599, description: "Lightweight summer wear for comfort.", img: B15, rating: "4.2 ★★★★☆" },
  { id: 16, title: "PUMA Performance Shorts", discountPrice: 1599, description: "Quick-dry shorts for training sessions.", img: B16, rating: "4.3 ★★★★☆" },
  { id: 17, title: "PUMA Tracksuit", discountPrice: 3499, description: "Two-piece suit perfect for warm-ups.", img: B17, rating: "4.6 ★★★★½" },
  { id: 18, title: "PUMA Windbreaker Jacket", discountPrice: 2899, description: "Lightweight protection against wind.", img: B18, rating: "4.4 ★★★★☆" },
  { id: 19, title: "PUMA Performance Men Breathable Sando", discountPrice: 1899, description: "Supportive sports bra with breathable mesh.", img: B19, rating: "4.2 ★★★★☆" },
  { id: 20, title: "PUMA Kids Sneakers", discountPrice: 2099, description: "Durable and stylish for young athletes.", img: B20, rating: "4.3 ★★★★☆" }
];

  
const Puma = () => {
  return (
    <div className='p-6 bg-gray-100'> 
    <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-8 py-4 px-6 bg-red-600 rounded-lg shadow-lg tracking-wide">
  PUMA PRODUCTS
</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {pumaProducts.map((puma)=>(
        <div key={puma.id} className='bg-white rounded-lg shadow hover:shadow-lg transition p-4'>
                <Link to={`/puma/${puma.id}`}>
                <div className="w-full h-90 overflow-hidden mb-4 flex items-center justify-center bg-white">
                    <img src={puma.img} alt={puma.title}  className="w-full h-full object-contain rounded-md" />
                </div> 
               <p className="text-gray-700">{puma.title}</p>
               <p>{puma.rating}</p>
               <span className="text-green-600 font-bold ">₹{puma.discountPrice}</span>
               <p className="text-sm text-gray-500 mt-1">{puma.description.slice(0,25)}</p>
                </Link>
        </div>
    ))}
    </div>
      
       <Footer/>

    </div>
  )
}

export default Puma;
