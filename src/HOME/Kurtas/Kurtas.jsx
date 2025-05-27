import React from 'react'
import K1 from "../Kurtas/K1.jpg"
import K2 from "../Kurtas/K2.jpg"
import K3 from "../Kurtas/K3.jpg"
import K4 from "../Kurtas/K4.jpg"
import K5 from "../Kurtas/K5.jpg"
import K6 from "../Kurtas/K6.jpg"
import K7 from "../Kurtas/K7.jpg"
import K8 from "../Kurtas/K8.jpg"
import K9 from "../Kurtas/K9.jpg"
import K10 from "../Kurtas/K10.jpg"
import Footer from '../../log/Footer'
import { Link } from 'react-router-dom'

export const kurtasMen = [
  { id: 1, title: "Classic White Kurta", rating: 4.6, originalPrice: 1499, discountPrice: 849, img: K1, description: "Elegant white kurta for formal occasions." },
  { id: 2, title: "Black Cotton Kurta", rating: 4.7, originalPrice: 1599, discountPrice: 899, img: K2, description: "Comfortable and sleek black cotton kurta." },
  { id: 3, title: "Nehru Collar Kurta", rating: 4.5, originalPrice: 1699, discountPrice: 949, img: K3, description: "Stylish Nehru collar design for a modern look." },
  { id: 4, title: "Printed Festive Kurta", rating: 4.4, originalPrice: 1799, discountPrice: 999, img: K4, description: "Bright and festive prints for celebrations." },
  { id: 5, title: "Beige Linen Kurta", rating: 4.3, originalPrice: 1899, discountPrice: 1049, img: K5, description: "Breathable linen in a subtle beige tone." },
  { id: 6, title: "Blue Embroidered Kurta", rating: 4.6, originalPrice: 1999, discountPrice: 1149, img: K6, description: "Elegant embroidery on deep blue fabric." },
  { id: 7, title: "Short Pathani Kurta", rating: 4.5, originalPrice: 1599, discountPrice: 949, img: K7, description: "Trendy short-length Pathani style kurta." },
  { id: 8, title: "Grey Textured Kurta", rating: 4.4, originalPrice: 1699, discountPrice: 999, img: K8, description: "Modern textured fabric for stylish appeal." },
  { id: 9, title: "Yellow Festival Kurta", rating: 4.2, originalPrice: 1499, discountPrice: 849, img: K9, description: "Bright yellow color perfect for festive days." },
  { id: 10, title: "Green Bandhani Kurta", rating: 4.6, originalPrice: 1799, discountPrice: 1049, img: K10, description: "Traditional Bandhani print in rich green." },
  { id: 11, title: "Red Silk Kurta", rating: 4.3, originalPrice: 2099, discountPrice: 1199, img: K1, description: "Luxurious silk fabric with a festive glow." },
  { id: 12, title: "Pathani Black Kurta", rating: 4.5, originalPrice: 1899, discountPrice: 1099, img: K2, description: "Classic Pathani style in timeless black." },
  { id: 13, title: "Orange Casual Kurta", rating: 4.4, originalPrice: 1499, discountPrice: 849, img: K3, description: "Lightweight and bright for everyday wear." },
  { id: 14, title: "Maroon Velvet Kurta", rating: 4.6, originalPrice: 2299, discountPrice: 1349, img: K4, description: "Premium velvet fabric for special events." },
  { id: 15, title: "White & Blue Printed Kurta", rating: 4.5, originalPrice: 1699, discountPrice: 949, img: K5, description: "White base with striking blue prints." },
  { id: 16, title: "Light Green Casual Kurta", rating: 4.3, originalPrice: 1499, discountPrice: 849, img: K6, description: "Relaxed and airy kurta for daily use." },
  { id: 17, title: "Striped Cotton Kurta", rating: 4.4, originalPrice: 1599, discountPrice: 899, img: K7, description: "Smart stripes on breathable cotton." },
  { id: 18, title: "Asymmetric Hem Kurta", rating: 4.2, originalPrice: 1799, discountPrice: 1049, img: K8, description: "Contemporary design with unique hemline." },
  { id: 19, title: "Kurta with Jacket Set", rating: 4.5, originalPrice: 2499, discountPrice: 1399, img: K9, description: "Traditional kurta paired with printed jacket." },
  { id: 20, title: "Navy Blue Solid Kurta", rating: 4.6, originalPrice: 1699, discountPrice: 999, img: K10, description: "Solid navy color for versatile styling." }
];

const Kurtas = () => {
  return (
     <>
      <div className="bg-gray-50 py-6 px-4">
        <h2 className="text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white text-center font-extrabold py-4 px-6 rounded-lg shadow-xl mb-8">
          Shirts Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {kurtasMen.map((shirt) => (
            <div key={shirt.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src={shirt.img} alt={shirt.title} className="w-full h-60 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{shirt.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{shirt.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 line-through">₹{shirt.originalPrice}</span>
                  <span className="text-lg text-pink-600 font-semibold">₹{shirt.discountPrice}</span>
                </div>
                <span className="text-yellow-500 text-sm font-medium">⭐ {shirt.rating}</span>
              </div>
              <Link to={`/kurtas/${shirt.id}`}>
                <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded hover:bg-pink-700">
                  Shop Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Kurtas
