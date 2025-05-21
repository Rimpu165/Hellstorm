import React from 'react'
import { Link } from 'react-router-dom';
import N1 from "../NIKEPHOTOS/N1.avif";
import N2 from "../NIKEPHOTOS/N2.avif";
import N3 from "../NIKEPHOTOS/N3.avif";
import N4 from "../NIKEPHOTOS/N4.avif";
import N5 from "../NIKEPHOTOS/N5.avif";
import N6 from "../NIKEPHOTOS/N6.avif";
import N7 from "../NIKEPHOTOS/N7.avif";
import N8 from "../NIKEPHOTOS/N8.avif";
import N9 from "../NIKEPHOTOS/N9.avif";
import N10 from "../NIKEPHOTOS/N10.avif";
import N11 from "../NIKEPHOTOS/N11.avif";
import N12 from "../NIKEPHOTOS/N12.avif";
import N13 from "../NIKEPHOTOS/N13.avif";
import N14 from "../NIKEPHOTOS/N14.avif";
import N15 from "../NIKEPHOTOS/N15.avif";
import N16 from "../NIKEPHOTOS/N16.avif";
import N17 from "../NIKEPHOTOS/N17.avif";
import N18 from "../NIKEPHOTOS/N18.avif";
import N19 from "../NIKEPHOTOS/N19.avif";
import N20 from "../NIKEPHOTOS/N20.avif";
import Footer from '../log/Footer';



export const nikeProducts = [
    {
      id: 1,
      title: "Nike Air Zoom Pegasus 39",
      price: 5999,
      description: "Responsive running shoes with lightweight support.",
      image: N1,
      rating: "4.7 ★★★★½"
    },
    {
      id: 2,
      title: "Nike Sportswear Club Fleece Hoodie",
      price: 3299,
      description: "Soft fleece comfort for everyday wear.",
      image: N2,
      rating: "4.6 ★★★★½"
    },
    {
      id: 3,
      title: "Nike Brasilia Training Duffel Bag",
      price: 2499,
      description: "Spacious and durable gym bag with multiple compartments.",
      image: N3,
      rating: "4.5 ★★★★½"
    },
    {
      id: 4,
      title: "Nike Dri-FIT Legend T-Shirt",
      price: 1499,
      description: "Moisture-wicking tee for workouts or casual wear.",
      image: N4,
      rating: "4.4 ★★★★☆"
    },
    {
      id: 5,
      title: "Nike Air Max SC",
      price: 5299,
      description: "Versatile everyday sneakers with classic Air Max style.",
      image: N5,
      rating: "4.6 ★★★★½"
    },
    {
      id: 6,
      title: "Nike Heritage 86 Cap",
      price: 999,
      description: "Classic cap with adjustable strap and embroidered swoosh.",
      image: N6,
      rating: "4.3 ★★★★☆"
    },
    {
      id: 7,
      title: "Nike Pro 3/4 Training Tights",
      price: 2699,
      description: "Compression fit for support during training.",
      image: N7,
      rating: "4.5 ★★★★½"
    },
    {
      id: 8,
      title: "Nike Revolution 6",
      price: 3499,
      description: "Comfortable running shoes with a soft foam midsole.",
      image: N8,
      rating: "4.4 ★★★★☆"
    },
    {
      id: 9,
      title: "Nike Windrunner Jacket",
      price: 4499,
      description: "Lightweight jacket inspired by the classic Windrunner.",
      image: N9,
      rating: "4.6 ★★★★½"
    },
    {
      id: 10,
      title: "Nike Everyday Cushioned Crew Socks (3 Pairs)",
      price: 799,
      description: "Soft, sweat-wicking socks with arch support.",
      image: N10,
      rating: "4.7 ★★★★½"
    },
    {
      id: 11,
      title: "Nike Court Vision Low",
      price: 4299,
      description: "Retro basketball shoes with durable construction.",
      image: N11,
      rating: "4.5 ★★★★½"
    },
    {
      id: 12,
      title: "Nike Sportswear Essentials T-Shirt",
      price: 1699,
      description: "Soft cotton tee with a relaxed fit.",
      image: N12,
      rating: "4.3 ★★★★☆"
    },
    {
      id: 13,
      title: "Nike Brasilia Training Backpack",
      price: 1999,
      description: "Sturdy backpack with padded straps and laptop sleeve.",
      image: N13,
      rating: "4.5 ★★★★½"
    },
    {
      id: 14,
      title: "Nike React Infinity Run Flyknit",
      price: 8999,
      description: "Advanced running shoes with React cushioning.",
      image: N14,
      rating: "4.8 ★★★★★"
    },
    {
      id: 15,
      title: "Nike Swoosh Wristbands (Pair)",
      price: 699,
      description: "Absorbent wristbands for training or play.",
      image: N15,
      rating: "4.4 ★★★★☆"
    },
    {
      id: 16,
      title: "Nike One Luxe Leggings",
      price: 3799,
      description: "Smooth and stretchy leggings for everyday movement.",
      image: N16,
      rating: "4.6 ★★★★½"
    },
    {
      id: 17,
      title: "Nike Air Force 1 '07",
      price: 7499,
      description: "Iconic leather sneakers for timeless style.",
      image: N17,
      rating: "4.9 ★★★★★"
    },
    {
      id: 18,
      title: "Nike Dri-FIT Head Tie",
      price: 799,
      description: "Breathable tie-back headband for athletes.",
      image: N18,
      rating: "4.4 ★★★★☆"
    },
    {
      id: 19,
      title: "Nike Therma-FIT Training Hoodie",
      price: 3999,
      description: "Warm fleece hoodie for training in cold conditions.",
      image: N19,
      rating: "4.7 ★★★★½"
    },
    {
      id: 20,
      title: "Nike Flex Experience Run 11",
      price: 3299,
      description: "Smooth, flexible running shoes for daily wear.",
      image: N20,
      rating: "4.5 ★★★★½"
    }
  ];
  
const Nike = () => {
  return (
    <> 
    <div className='p-6 bg-gray-100'> 
   <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-white mb-8 py-4 px-6 bg-blue-600 rounded-lg shadow-xl tracking-wider hover:shadow-2xl transition-all duration-300 ease-in-out">
  NIKE PRODUCTS
</h1>  
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {nikeProducts.map((nike)=>(
        <div key={nike.id} className='bg-white rounded-lg shadow hover:shadow-lg transition p-4'>
                <Link to={`/nike/${nike.id}`}>
                <div className="w-full h-90 overflow-hidden mb-4 flex items-center justify-center bg-white">
                    <img src={nike.image} alt={nike.title}  className="w-full h-full object-contain rounded-md" />
                </div>
               <p className="text-gray-700">{nike.title}</p>
               <p>{nike.rating}</p>
               <span className="text-green-600 font-bold ">₹{nike.price}</span>
               <p className="text-sm text-gray-500 mt-1">{nike.description.slice(0,25)}</p>
                </Link>
        </div>
    ))}
    </div>
      
     

    </div>
      <Footer/>
      </>
  )
}

export default Nike
