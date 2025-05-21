
import React from 'react';
import { Link } from 'react-router-dom';


import A from "../assets/mensphoto/A1.webp";
import B from "../assets/mensphoto/A2.webp";
import C from "../assets/mensphoto/A3.webp";
import D from "../assets/mensphoto/A4.webp";
import E from "../assets/mensphoto/A5.webp";
import F from "../assets/mensphoto/A6.webp";
import G from "../assets/mensphoto/A7.webp";
import H from "../assets/mensphoto/A8.webp";
import I from "../assets/mensphoto/A9.webp";
import J from "../assets/mensphoto/A10.webp";
import K from "../assets/mensphoto/A11.webp";
import L from "../assets/mensphoto/A12.webp";
import M from "../assets/mensphoto/A13.webp";
import N from "../assets/mensphoto/A21.jpg"; 
import O from "../assets/mensphoto/A15.jpg";
import P from "../assets/mensphoto/A16.jpg";
import Q from "../assets/mensphoto/A4.webp";
import R from "../assets/mensphoto/A18.jpg";
import S from "../assets/mensphoto/A19.jpg";
import T from "../assets/mensphoto/A20.jpg";
import Footer from '../log/Footer';

export const products = [
  {
    id: 1, brandName: "U.S. Polo Assn.", title: "Men Solid Polo T-Shirt", img: A, price: 1499, discountPrice: 899, category: "T-Shirts", rating: "4.2 ★★★★☆"
  },
  {
    id: 2, brandName: "U.S. Polo Assn.", title: "Men Slim Fit Shirt", img: B, price: 2299, discountPrice: 1379, category: "Shirts", rating: "4.5 ★★★★½"
  },
  {
    id: 3, brandName: "U.S. Polo Assn.", title: "Men Tapered Fit Jeans", img: C, price: 2599, discountPrice: 1499, category: "Jeans", rating: "4.3 ★★★★☆"
  },
  {
    id: 4, brandName: "U.S. Polo Assn.", title: "Printed Round Neck T-Shirt", img: D, price: 1399, discountPrice: 849, category: "T-Shirts", rating: "4.0 ★★★★☆"
  },
  {
    id: 5, brandName: "U.S. Polo Assn.", title: "Cotton Dobby Shirt", img: E, price: 3999, discountPrice: 2799, category: "Shirts", rating: "4.6 ★★★★½"
  },
  {
    id: 6, brandName: "U.S. Polo Assn.", title: "Men Slim Fit Trousers", img: F, price: 1999, discountPrice: 1299, category: "Trousers", rating: "4.1 ★★★★☆"
  },
  {
    id: 7, brandName: "U.S. Polo Assn.", title: "Men Striped Polo T-Shirt", img: G, price: 1699, discountPrice: 1019, category: "T-Shirts", rating: "4.4 ★★★★☆"
  },
  {
    id: 8, brandName: "U.S. Polo Assn.", title: "Men Checked Shirt", img: H, price: 2399, discountPrice: 1439, category: "Shirts", rating: "4.2 ★★★★☆"
  },
  {
    id: 9, brandName: "U.S. Polo Assn.", title: "Men Slim Fit Jeans", img: I, price: 2799, discountPrice: 1679, category: "Jeans", rating: "4.3 ★★★★☆"
  },
  {
    id: 10, brandName: "U.S. Polo Assn.", title: "Men Solid Casual Shirt", img: J, price: 1999, discountPrice: 1299, category: "Shirts", rating: "4.0 ★★★★☆"
  },
  {
    id: 11, brandName: "U.S. Polo Assn.", title: "Men Hooded Sweatshirt", img: K, price: 2499, discountPrice: 1699, category: "Sweatshirts", rating: "4.5 ★★★★½"
  },
  {
    id: 12, brandName: "U.S. Polo Assn.", title: "Men Zip-Front Jacket", img: L, price: 3299, discountPrice: 2199, category: "Jackets", rating: "4.4 ★★★★☆"
  },
  {
    id: 13, brandName: "U.S. Polo Assn.", title: "Men Casual Loafers", img: M, price: 2799, discountPrice: 1999, category: "Footwear", rating: "4.1 ★★★★☆"
  },
  {
    id: 14, brandName: "U.S. Polo Assn.", title: "Men Lace-Up Sneakers", img: N, price: 2999, discountPrice: 2099, category: "Footwear", rating: "4.6 ★★★★½"
  },
  {
    id: 15, brandName: "U.S. Polo Assn.", title: "Men Solid Track Pants", img: O, price: 1699, discountPrice: 1049, category: "Track Pants", rating: "4.2 ★★★★☆"
  },
  {
    id: 16, brandName: "U.S. Polo Assn.", title: "Men Knit Joggers", img: P, price: 1899, discountPrice: 1149, category: "Joggers", rating: "4.3 ★★★★☆"
  },
  {
    id: 17, brandName: "U.S. Polo Assn.", title: "Men Logo Print Tee", img: Q, price: 1499, discountPrice: 949, category: "T-Shirts", rating: "4.1 ★★★★☆"
  },
  {
    id: 18, brandName: "U.S. Polo Assn.", title: "Men Quilted Jacket", img: R, price: 3499, discountPrice: 2499, category: "Jackets", rating: "4.7 ★★★★½"
  },
  {
    id: 19, brandName: "U.S. Polo Assn.", title: "Men Full Sleeve T-Shirt", img: S, price: 1599, discountPrice: 999, category: "T-Shirts", rating: "4.0 ★★★★☆"
  },
  {
    id: 20, brandName: "U.S. Polo Assn.", title: "Men Logo Embroidered Shirt", img: T, price: 2199, discountPrice: 1399, category: "Shirts", rating: "4.5 ★★★★½"
  }
];

const Mens = () => {
  return (
    <div className="p-6 bg-gray-100">
     <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white bg-blue-900 mb-10 py-4 px-6 rounded-md shadow-md tracking-wide">
  U.S. Polo Assn. Collection
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <Link to={`/men/${product.id}`}>
              <div className="w-full overflow-hidden mb-4">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-auto object-contain rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold">{product.brandName}</h3>
              <p className="text-gray-700">{product.title}</p>
              <p>{product.rating}</p>
              <div className="mt-2">
                <span className="text-green-600 font-bold">₹{product.discountPrice}</span>
                <span className="text-gray-500 line-through ml-2">₹{product.price}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{product.category}</p>
            </Link>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};
export default Mens;
