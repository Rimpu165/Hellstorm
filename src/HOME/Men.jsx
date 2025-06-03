import React, { useEffect, useState } from 'react';
import './Men.css';
import { Link } from "react-router-dom";

import img1 from '../assets/cr.webp';
import img2 from '../assets/lug.webp';
import img3 from '../assets/sho.webp';

import POLO from "../assets/polo.webp";
import Levis from "../assets/levis.webp";
import Puma from "../assets/pumaa.webp";
import Cros from "../assets/crocs.webp";
import Nike from "../assets/nike.webp";
import Tommy from "../assets/tommy.webp";
import Ske from "../assets/skecher.webp";
import UC from "../assets/uc.webp";

import IMA from "../assets/neon-8726714_1280.jpg";
import SH from "../assets/f2.jpg";
import HOM from "../assets/decore.jpg";
import Jak from "../assets/jacket.jpg";
import Jean from "../assets/Jean.jpg";
import Kids from "../assets/kids.jpg";
import Kurtas from "../assets/kurtas.jpg";
import INN from "../assets/inner.jpg";
import TR from "../assets/trouser.jpg";
import Loung from "../assets/lounge.jpg";
import Party from "../assets/party.jpg";
import SPO from "../assets/sports.jpg";
import Sun from "../assets/sunglass.jpg";
import Track from "../assets/track.jpg";
import ACT from "../assets/active.jpg";
import Wal from "../assets/belt.jpg";
import Flip from "../assets/flip.jpg";

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
    <div className="mn">
      <div className="slider-container pt-10 overflow-hidden relative">
        <div
          className="slider-track flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`} className="w-screen h-64 sm:h-96 object-cover" />
          ))}
        </div>

        <div className="dots flex justify-center mt-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot w-3 h-3 mx-1 rounded-full cursor-pointer ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-400'}`}
              onClick={() => goToImage(idx)}
            ></span>
          ))}
        </div>
      </div>

      <div className="text-center mt-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold">BIGGEST DEALS ON TOP BRANDS</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
        {[{src: POLO, link: '/Mens'}, {src: Levis, link: '/Levis'}, {src: Puma, link: '/Puma'}, {src: Cros, link: '/Crocs'},
          {src: Tommy, link: '/Tomy'}, {src: Ske, link: '/Sketcher'}, {src: Nike, link: '/Nike'}, {src: UC, link: '/Ufc'}]
          .map((brand, idx) => (
            <Link to={brand.link} key={idx}>
              <img src={brand.src} alt="Brand" className="w-full h-28 object-contain hover:scale-105 transition-transform" />
            </Link>
        ))}
      </div>

      <div className="text-center my-10 px-4">
        <h1 className="text-3xl sm:text-5xl font-semibold text-blue-900">EXPLORE BY CATEGORY</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 pb-10">
        {[
          { img: IMA, name: 'T-Shirts', link: '/tshirt' },
          { img: SPO, name: 'Sports Shoes', link: '/shoes' },
          { img: SH, name: 'Shirts', link: '/shirt' },
          { img: Jean, name: 'Jeans' },
          { img: Kurtas, name: 'Kurtas & Sets' },
          { img: TR, name: 'Trousers' },
          { img: Track, name: 'Track Pants' },
          { img: Loung, name: 'Loungewear' },
          { img: INN, name: 'Innerwear' },
          { img: Wal, name: 'Belts & Wallets' },
          { img: Sun, name: 'Sunglasses & Frames' },
          { img: Kids, name: 'Kids Wear' },
          { img: SPO, name: 'Casual Shoes', link: '/shoes' },
          { img: Flip, name: 'Flip-Flops' },
          { img: HOM, name: 'Home Furnishing' },
          { img: ACT, name: 'Active Wear' },
          { img: Party, name: 'Party Wear' },
          { img: Jak, name: 'Jackets' }
        ].map((item, index) => (
          <div key={index} className="bg-white text-center border-2 rounded-md shadow p-2 hover:shadow-md transition-shadow">
            {item.link ? (
              <Link to={item.link}>
                <img src={item.img} alt={item.name} className="w-full h-32 object-contain" />
                <p className="mt-2 font-medium">{item.name}</p>
                <p className="text-blue-700 font-bold text-lg">40–80% OFF</p>
                <button className="text-sm text-gray-700 mt-1">Shop Now</button>
              </Link>
            ) : (
              <>
                <img src={item.img} alt={item.name} className="w-full h-32 object-contain" />
                <p className="mt-2 font-medium">{item.name}</p>
                <p className="text-blue-700 font-bold text-lg">40–80% OFF</p>
                <button className="text-sm text-gray-700 mt-1">Shop Now</button>
              </>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Men;
