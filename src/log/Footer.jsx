import React from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-white px-8 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
          <div>
              <h6 className="text-lg font-bold mb-4 border-b border-gray-600 pb-1">Services</h6>
            <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white hover:underline transition duration-200 ease-in-out">Branding</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition duration-200 ease-in-out">Design</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition duration-200 ease-in-out">Marketing</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition duration-200 ease-in-out">Advertisement</a></li>
            </ul>
          </div>


          
          <div>
            <h6 className="text-lg font-bold mb-4 border-b border-gray-600 pb-1">Company</h6>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white hover:underline transition duration-200 ease-in-out">About us</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition duration-200 ease-in-out">Contact</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition duration-200 ease-in-out">Jobs</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition duration-200 ease-in-out">Press kit</a></li>
            </ul>
          </div>


        
            <div>
              <h6 className="text-lg font-bold mb-4 border-b border-gray-600 pb-1">Legal</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white hover:underline transition duration-200 ease-in-out">Terms of use</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition duration-200 ease-in-out">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition duration-200 ease-in-out">Cookie policy</a></li>
              </ul>
            </div>

        
        <div>
              <h6 className="text-lg font-bold mb-4 border-b border-gray-600 pb-1">Newsletter</h6>
              <p className="text-gray-400 mb-2">Enter your email address</p>
              <div className="flex">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-2 rounded-l-md bg-white text-black placeholder-gray-500 focus:outline-none"
                    />
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md font-semibold transition">
                    Subscribe
                  </button>
            </div>
              <p className="mt-4 text-gray-400">Keep in Touch</p>
              <div className="flex gap-4 mt-3 text-2xl">
                    <a href="#" className="transition hover:scale-110 hover:text-blue-400"><FaSquareXTwitter /></a>
                    <a href="#" className="transition hover:scale-110 hover:text-blue-500"><FaFacebookSquare /></a>
                    <a href="#" className="transition hover:scale-110 hover:text-pink-400"><FaInstagramSquare /></a>
              </div>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} HELLSTORM . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
