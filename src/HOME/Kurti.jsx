import React from 'react'


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
import K11 from "../Womenphotos/K11.jpg"
import K12 from "../Womenphotos/K12.jpg"
import K13 from "../Womenphotos/K13.jpg"
import K14 from "../Womenphotos/K14.jpg"
import K15 from "../Womenphotos/K15.jpg"
import K16 from "../Womenphotos/K16.jpg"
import K17 from "../Womenphotos/K17.jpg"
import K18 from "../Womenphotos/K18.jpg"
import K19 from "../Womenphotos/K19.jpg"
import K20 from "../Womenphotos/K20.jpg"
import Footer from '../log/Footer'
import { Link } from 'react-router-dom'

export const kurtis = [
    {
      id: 1,
      title: "Floral A-Line Kurti",
      rating: 4.5,
      originalPrice: 1299,
      discountPrice: 899,
      img: K1,
      description: "A vibrant floral A-line kurti perfect for casual outings."
    },
    {
      id: 2,
      title: "Embroidered Straight Kurti",
      rating: 4.7,
      originalPrice: 1499,
      discountPrice: 999,
      img: K2,
      description: "Elegant straight-cut kurti with intricate embroidery."
    },
    {
      id: 3,
      title: "Cotton Printed Kurti",
      rating: 4.3,
      originalPrice: 999,
      discountPrice: 699,
      img: K3,
      description: "Comfortable cotton kurti with traditional prints."
    },
    {
      id: 4,
      title: "Georgette Anarkali Kurti",
      rating: 4.6,
      originalPrice: 1799,
      discountPrice: 1299,
      img: K4,
      description: "Flowy georgette Anarkali kurti with delicate lacework."
    },
    {
      id: 5,
      title: "Chikan Kari Kurti",
      rating: 4.8,
      originalPrice: 1599,
      discountPrice: 1199,
      img: K5,
      description: "Traditional Lucknowi Chikan Kari kurti in soft fabric."
    },
    {
      id: 6,
      title: "Rayon Printed Kurti",
      rating: 4.2,
      originalPrice: 1099,
      discountPrice: 799,
      img: K6,
      description: "Lightweight rayon kurti with vibrant prints."
    },
    {
      id: 7,
      title: "Silk Blend Kurti",
      rating: 4.4,
      originalPrice: 1999,
      discountPrice: 1499,
      img: K7,
      description: "Luxurious silk blend kurti with a glossy finish."
    },
    {
      id: 8,
      title: "Cotton Slub Kurti",
      rating: 4.1,
      originalPrice: 899,
      discountPrice: 599,
      img: K8,
      description: "Breathable cotton slub kurti for everyday wear."
    },
    {
      id: 9,
      title: "Kalamkari Print Kurti",
      rating: 4.5,
      originalPrice: 1399,
      discountPrice: 999,
      img: K9,
      description: "Artistic Kalamkari print kurti with rich colors."
    },
    {
      id: 10,
      title: "Peplum Style Kurti",
      rating: 4.3,
      originalPrice: 1299,
      discountPrice: 899,
      img: K10,
      description: "Trendy peplum style kurti with a flared bottom."
    },
    {
      id: 11,
      title: "Bandhani Print Kurti",
      rating: 4.6,
      originalPrice: 1499,
      discountPrice: 1099,
      img: K11,
      description: "Traditional Bandhani print kurti in bright hues."
    },
    {
      id: 12,
      title: "Chanderi Silk Kurti",
      rating: 4.7,
      originalPrice: 1799,
      discountPrice: 1399,
      img: K12,
      description: "Elegant Chanderi silk kurti with a subtle sheen."
    },
    {
      id: 13,
      title: "Palazzo Set Kurti",
      rating: 4.4,
      originalPrice: 1899,
      discountPrice: 1499,
      img: K13,
      description: "Coordinated kurti and palazzo set for a complete look."
    },
    {
      id: 14,
      title: "Anarkali Kurti with Dupatta",
      rating: 4.8,
      originalPrice: 2199,
      discountPrice: 1699,
      img: K14,
      description: "Flowing Anarkali kurti paired with a matching dupatta."
    },
    {
      id: 15,
      title: "Straight Fit Kurti",
      rating: 4.2,
      originalPrice: 999,
      discountPrice: 749,
      img: K15,
      description: "Simple and elegant straight-fit kurti for daily wear."
    },
    {
      id: 16,
      title: "A-Line Kurti with Pockets",
      rating: 4.5,
      originalPrice: 1399,
      discountPrice: 999,
      img: K16,
      description: "Functional A-line kurti featuring convenient pockets."
    },
    {
      id: 17,
      title: "Peasant Sleeve Kurti",
      rating: 4.3,
      originalPrice: 1199,
      discountPrice: 899,
      img: K17,
      description: "Stylish kurti with peasant sleeves and floral embroidery."
    },
    {
      id: 18,
      title: "Tunic Style Kurti",
      rating: 4.4,
      originalPrice: 1099,
      discountPrice: 799,
      img: K18,
      description: "Modern tunic-style kurti with a relaxed fit."
    },
    {
      id: 19,
      title: "Layered Kurti",
      rating: 4.6,
      originalPrice: 1599,
      discountPrice: 1199,
      img: K19,
      description: "Trendy layered kurti with contrasting panels."
    },
    {
      id: 20,
      title: "Asymmetrical Hem Kurti",
      rating: 4.7,
      originalPrice: 1699,
      discountPrice: 1299,
      img: K20,
      description: "Fashion-forward kurti with an asymmetrical hemline."
    }
  ];
  

const Kurti = () => {
  return (
    <>
    <div className="bg-gray-50 py-10 px-4 sm:px-10">
    <h2 className="text-4xl font-semibold text-white text-center mb-10 py-4 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg shadow-lg">
  Kurtis Collection
</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {kurtis.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
          <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.description.slice(0,20)}...</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-pink-600 font-bold text-lg">₹{item.discountPrice}</span>
              <span className="line-through text-gray-400 text-sm">₹{item.originalPrice}</span>
            </div>
            <p className="text-yellow-500 mt-2">⭐ {item.rating}</p>
             <Link to={`/kurti/${item.id}`}> <button className="mt-4 w-full py-2 bg-pink-600 text-white rounded hover:bg-pink-700">
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

export default Kurti
