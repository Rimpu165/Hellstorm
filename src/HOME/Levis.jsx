import React from 'react'


import A1 from "../levis/A1.jpg"
import A2 from "../levis/A2.jpg"
import A3 from "../levis/A3.jpg"
import A4 from "../levis/A4.jpg"
import A5 from "../levis/A5.jpg"
import A6 from "../levis/A6.jpg"
import A7 from "../levis/A7.jpg"
import A8 from "../levis/A8a.jpg"
import A9 from "../levis/A9.jpg" 
import A10 from "../levis/A10.jpg"
import A11 from "../levis/A11.jpg"
import A12 from "../levis/A12.jpg"
import A13 from "../levis/A13.jpg"
import A14 from "../levis/A14.jpg"
import A15 from "../levis/A15.jpg"
import A16 from "../levis/A16.jpg"
import A17 from "../levis/A17.webp"
import A18 from "../levis/A18.webp"
import A19 from "../levis/A19.jpg"
import A20 from "../levis/A20.webp"

import { Link } from 'react-router-dom'
import Footer from '../log/Footer'


 export const levisProducts = [
  { id: 1, title: "Levi's 501 Original Fit Jeans", description: "Classic straight-leg jeans with a button fly.",  discountPrice: 89.99, img: A1, rating: "4.5 ★★★★½" },
  { id: 2, title: "Levi's 511 Slim Fit Jeans", description: "Modern slim fit jeans with flexibility and stretch.",  discountPrice: 79.99, img: A2, rating: "4.2 ★★★★☆" },
  { id: 3, title: "Levi's 721 High Rise Skinny Jeans", description: "Flattering high-rise jeans with a tight fit.",  discountPrice: 69.99, img: A3, rating: "4.6 ★★★★½" },
  { id: 4, title: "Levi's Sherpa Trucker Jacket", description: "Warm sherpa-lined version of the classic trucker jacket.",  discountPrice: 98.00, img: A4, rating: "4.7 ★★★★½" },
  { id: 5, title: "Levi's Graphic T-Shirt", description: "Soft cotton tee with the classic Levi’s logo.",  discountPrice: 29.95, img: A5, rating: "4.1 ★★★★☆" },
  { id: 6, title: "Levi's 505 Regular Fit Jeans", description: "Classic regular fit jeans with a zip fly.",  discountPrice: 69.99, img: A6, rating: "4.3 ★★★★☆" },
  { id: 7, title: "Levi's 512 Slim Taper Jeans", description: "Slim through the thigh and tapered below the knee.",  discountPrice: 84.50, img: A7, rating: "4.4 ★★★★☆" },
  { id: 8, title: "Levi's Barstow Western Shirt", description: "Western-style denim shirt with snap buttons.",  discountPrice: 59.99, img: A8, rating: "4.0 ★★★★☆" },
  { id: 9, title: "Levi's Ribcage Straight Ankle Jeans", description: "High-rise jeans with a straight ankle cut.",  discountPrice: 98.00, img: A9, rating: "4.6 ★★★★½" },
  { id: 10, title: "Levi's Trucker Jacket", description: "The timeless original denim jacket.",  discountPrice: 89.99, img: A10, rating: "4.8 ★★★★★" },
  { id: 11, title: "Levi's 711 Skinny Jeans", description: "Mid-rise skinny jeans for everyday comfort.",  discountPrice: 69.50, img: A11, rating: "4.2 ★★★★☆" },
  { id: 12, title: "Levi's Long Sleeve Plaid Shirt", description: "Classic flannel shirt in a soft plaid cotton.",  discountPrice: 49.99, img: A12, rating: "4.3 ★★★★☆" },
  { id: 13, title: "Levi's Relaxed Graphic Hoodie", description: "Comfy pullover hoodie with a Levi's chest logo.",  discountPrice: 64.99, img: A13, rating: "4.4 ★★★★☆" },
  { id: 14, title: "Levi's 502 Taper Fit Jeans", description: "A regular taper fit with a bit of room in the thigh.",  discountPrice: 84.00, img: A14, rating: "4.1 ★★★★☆" },
  { id: 15, title: "Levi's 510 Skinny Jeans", description: "Skinniest fit Levi's for a modern look.",  discountPrice: 79.99, img: A15, rating: "4.0 ★★★★☆" },
  { id: 16, title: "Levi's Batwing Logo Tee", description: "Iconic batwing logo printed on soft cotton.",  discountPrice: 24.99, img: A16, rating: "3.9 ★★★½☆" },
  { id: 17, title: "Levi's Sherpa Hoodie", description: "Cozy fleece-lined hoodie for colder days.",  discountPrice: 74.99, img: A17, rating: "4.3 ★★★★☆" },
  { id: 18, title: "Levi's Western Denim Shirt", description: "Classic snap-front western style shirt.",  discountPrice: 59.99, img: A18, rating: "4.0 ★★★★☆" },
  { id: 19, title: "Levi's 726 High Rise Flare Jeans", description: "Vintage-inspired flared jeans with a high waist.",  discountPrice: 89.99, img: A19, rating: "4.5 ★★★★½" },
  { id: 20, title: "Levi's Perfect Graphic Tee", description: "Everyday tee with a clean Levi’s logo.",  discountPrice: 24.50, img: A20, rating: "4.1 ★★★★☆" }
];

  
  

const Levis = () => {
  return (
    <div className='p-6 bg-gray-100'> 
    <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white bg-gray-800 mb-10 py-4 px-6 rounded-md shadow-md tracking-wider">
  LEVI'S PRODUCTS
</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {levisProducts.map((levis)=>(  
        <div key={levis.id} className='bg-white rounded-lg shadow hover:shadow-lg transition p-4'>
                <Link to={`/levis/${levis.id}`}>
                <div className="w-full h-90 overflow-hidden mb-4 flex items-center justify-center bg-white">
                    <img src={levis.img} alt={levis.title}  className="w-full h-full object-cover rounded-md" />
                </div>
               <p className="text-gray-700">{levis.title}</p>
               <p>
                {levis.rating}
               </p>
               <span className="text-green-600 font-bold ">₹{levis. discountPrice}</span>
               <p className="text-sm text-gray-500 mt-1">{levis.description.slice(0,25)}</p>
                </Link>
        </div>
    ))}
    </div>
      
        <Footer/>

    </div>
  )
}

export default Levis;
