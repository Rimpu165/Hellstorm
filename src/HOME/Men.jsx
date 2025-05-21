import React, { useEffect, useState } from 'react';
import './Men.css';
import { Link } from "react-router-dom";


import img1 from '../assets/cr.webp';
import img2 from '../assets/lug.webp';
import img3 from '../assets/sho.webp';

import POLO from "../assets/polo.webp"
import Levis from "../assets/levis.webp"
import Puma from "../assets/pumaa.webp"
import Cros from "../assets/crocs.webp"
import Nike from "../assets/nike.webp"
import Tommy from "../assets/tommy.webp"
import Ske from "../assets/skecher.webp"
import UC from "../assets/uc.webp"

import IMA from "../assets/neon-8726714_1280.jpg"
import SH from "../assets/f2.jpg"
import HOM from "../assets/decore.jpg"
import Jak from "../assets/jacket.jpg"
import Jean from "../assets/Jean.jpg"
import Kids from "../assets/kids.jpg"
import Kurtas from "../assets/kurtas.jpg"
import INN from "../assets/inner.jpg"
import TR from "../assets/trouser.jpg"
import Loung from "../assets/lounge.jpg"
import Party from "../assets/party.jpg"
import SPO from "../assets/sports.jpg"
import Sun from "../assets/sunglass.jpg"
import Track from "../assets/track.jpg"
import ACT from "../assets/active.jpg"
import Wal from "../assets/belt.jpg"
import Flip from "../assets/flip.jpg"

import Footer from '../log/Footer';

const images = [img1, img2, img3];

const Men = () => { 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);   

  const goToImage = (index) => {  
    setCurrentIndex(index);
  };
   
  return (
    <div className='mn'>
      <div className="slider-container pt-10">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`} />
          ))}
        </div>

        <div className="dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => goToImage(idx)}
            ></span>
          ))}
        </div>
      </div>

      <div className='hero'>
        <h1 className='h1 mt-16 text-3xl font-mono'>BIGGEST DEALS ON TOP BRANDS</h1>
      </div>

      <div className="qwee p-6 ">
      <div className="w flex justify-around">
         <Link to="/Mens"> <img className='ima12' src={POLO} alt="" /></Link> 
          <Link to="/Levis"> <img className='ima12' src={Levis} alt="" /></Link>
          <Link to="/Puma"> <img className='ima12' src={Puma} alt="" /> </Link>
           <Link to="/Crocs"><img className='ima12' src={Cros} alt="" /> </Link>
           
          </div>
          <div className="wA flex justify-around mt-10">
          <Link to="/Tomy"> <img className='ima12' src={Tommy} alt="" /> </Link>
         <Link to="/Sketcher"> <img className='ima12' src={Ske} alt="" /> </Link> 
          <Link to="/Nike" > <img className='ima12' src={Nike} alt="" />  </Link>
          <Link to="/Ufc"> <img className='ima12' src={UC} alt="" />  </Link>
           
          </div>
      </div>
      <div className="first text-5xl font-semibold tracking-tight text-balance text-blue-900 sm:text-7xl">
          <h1>EXPLORE BY CATEGORY</h1>
        </div >
        <div className=" qw   p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">

           <Link to="/tshirt"> <div className=" qa    bg-white text-center    border-2 border-white rounded-md shadow p-2">
                  <img src={IMA} alt="T-Shirts" className="iam"  />
                  <p className="font-small mt-2">T-Shirts</p>
                  <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
                  <button className="text-sm text-gray-700">Shop Now</button>
                </div> </Link>

            <Link to="/shoes"> <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
                   <img src={SPO} alt="Sports Shoes" className="iam"  />
                   <p className="font-small mt-2">Sports Shoes</p>
                   <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
                   <button className="text-sm text-gray-700">Shop Now</button>
                 </div>  </Link> 

            <Link to="/shirt" > <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
                  <img src={SH} alt="Shirts" className="iam"  />
                  <p className="para">Shirts</p>
                  <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
                  <button className="text-sm text-gray-700">Shop Now</button>
                </div>  </Link>  


            <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={Jean} alt="Jeans" className="iam"  />
              <p className="para">Jeans</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div>


            <div className="qa bg-white text-center border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={Kurtas} alt="Jeans" className="iam"  />
              <p className="para">Kurtas & Sets</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div>


            <div className="qa bg-white text-center border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={TR} alt="Jeans" className="iam"  />
              <p className="para">Trousers</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div>


            <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={Track} alt="Jeans" className="iam"  />
              <p className="para">Track Pants</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div>


            <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={Loung} alt="Jeans" className="iam"  />
              <p className="para">Loungewear</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div>


            <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={INN} alt="Jeans" className="iam"  />
              <p className="para">Innerwear</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div>


            <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={Wal} alt="Jeans" className="iam"  />
              <p className="para">Belts % Wallets</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div> 


            <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={Sun} alt="Jeans" className="iam"  />
              <p className="para">Sunglases % Frames</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <buttonp className="text-sm text-gray-700">Shop Now</buttonp>
            </div> 


            <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={Kids} alt="Jeans" className="iam"  />
              <p className="para">Kids Wear</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div>


              <Link to="/shoes">   <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={SPO} alt="Jeans" className="iam"  />
              <p className="para">Casual Shoes</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div>   </Link>


            <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={Flip} alt="Jeans" className="iam"  />
              <p className="para">Flip-Flops</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div>  


            <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={HOM} alt="Jeans" className="iam"  />
              <p className="para">Home Furnishing</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div>


            <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={ACT} alt="Jeans" className="iam"  />
              <p className="para">Active Wear</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div> 


            <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={Party} alt="Jeans" className="iam"  />
              <p className="para">Part Wear</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div>  


            <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
              <img src={Jak} alt="Jeans" className="iam"  />
              <p className="para">Jakets</p>
              <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
              <button className="text-sm text-gray-700">Shop Now</button>
            </div>

            
          </div>


              <Footer/>
      
     
    </div>
  );
};

export default Men;
