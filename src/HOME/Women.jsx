import React from 'react';
import './Women.css';
import WO from "../kidsimage/wome.webp";
import WOM from "../kidsimage/wedding.webp";
import IMA from "../kidsimage/fwd.webp";
import IMA1 from "../kidsimage/fwd2.webp";
import IMA3 from "../kidsimage/taavi.webp";
import IMA4 from "../kidsimage/livas.webp";
import IMA5 from "../kidsimage/aura.webp";
import W1 from "../Womenphotos/W1.jpg"
import W2 from "../Womenphotos/W2.jpg"
import W3 from "../Womenphotos/W3.jpg"
import Footer from '../log/Footer';
import { Link } from 'react-router-dom';

const Women = () => {
  return (
    <div className="wommm">
      
      <div>
        <img className="w-full h-auto" src={WO} alt="Women's Hero" />
      </div>

     
      <div className="text-center mt-8 px-4">
        <h1 className="text-3xl font-bold text-pink-700">Explore Women's Collection</h1>
        <p className="text-gray-600 mt-2">
          Trendy fashion pieces curated just for you — shop by category below!
        </p>
      </div>

     
      <div className="mt-8">
        <img className="w-full h-auto" src={WOM} alt="Wedding Collection" />
      </div>

    
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-4">
        <img className="w-40 sm:w-48 md:w-52 rounded shadow" src={IMA} alt="Style 1" />
        <img className="w-40 sm:w-48 md:w-52 rounded shadow" src={IMA1} alt="Style 2" />
        <img className="w-40 sm:w-48 md:w-52 rounded shadow" src={IMA3} alt="Style 3" />
        <img className="w-40 sm:w-48 md:w-52 rounded shadow" src={IMA4} alt="Style 4" />
        <img className="w-40 sm:w-48 md:w-52 rounded shadow" src={IMA5} alt="Style 5" />
      </div>

     
      <div className="text-center mt-12 px-4">
        <h2 className="text-3xl font-bold text-pink-700">Find Your Style</h2>
        <p className="text-gray-600 mt-2">
          Elegant, casual, or festive — explore all styles in one place, curated just for women.
        </p>
      </div>

     
      <div className="mt-10 px-6">
        <h3 className="text-2xl font-bold text-pink-700 text-center mb-6">Recommended for You</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
       <Link to="/Kurti">   <div className="bg-white text-center border-2 border-cyan-300 rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <img src={W1} alt="Kurtis" className="w-full h-45 object-cover rounded" />
            <p className="mt-3 font-medium text-gray-800">Stylish Kurtis</p>
            <p className="text-blue-700 font-bold text-lg">Up to 60% OFF</p>
            <button className="mt-2 text-sm text-gray-600 hover:text-pink-600">Shop Now</button>
          </div>  </Link>

         
          <Link to="/Tops">  <div className="bg-white text-center border-2 border-cyan-300 rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <img src={W2} alt="Tops" className="w-full h-48 object-cover rounded" />
            <p className="mt-3 font-medium text-gray-800">Trendy Tops</p>
            <p className="text-blue-700 font-bold text-lg">Starting at ₹299</p>
            <button className="mt-2 text-sm text-gray-600 hover:text-pink-600">Shop Now</button>
          </div></Link>

          
          <Link to="/Dress"> <div className="bg-white text-center border-2 border-cyan-300 rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <img src={IMA3} alt="Dresses" className="w-full h-48 object-cover rounded" />
            <p className="mt-3 font-medium text-gray-800">Dresses</p>
            <p className="text-blue-700 font-bold text-lg">Buy 1 Get 1 Free</p>
            <button className="mt-2 text-sm text-gray-600 hover:text-pink-600">Shop Now</button>
          </div>
          </Link>

          
          <Link to="/Sarees"><div className="bg-white text-center border-2 border-cyan-300 rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <img src={W3} alt="Sarees" className="w-full h-48 object-cover rounded" />
            <p className="mt-3 font-medium text-gray-800">Elegant Sarees</p>
            <p className="text-blue-700 font-bold text-lg">Flat 50% OFF</p>
            <button className="mt-2 text-sm text-gray-600 hover:text-pink-600">Shop Now</button>
          </div> </Link> 
        </div>
      </div>

      
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Women;
