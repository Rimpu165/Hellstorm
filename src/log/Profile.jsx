import React from 'react';
import P from "../kidsimage/image3.webp"
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={P}
            alt="Profile"
            className="w-25 h-26 object-cover rounded-full border-2 border-gray-300"
          />
          <div className='mb-7'>
            <h2 className="text-xl font-bold text-gray-800">Mohit</h2>
            <p className="text-sm text-gray-500">Mohit@gmail.com</p>
          </div>
        </div>
      </header>

      <div className="flex">
       
        <div    className="w-64 bg-white p-6 shadow h-screen">
          <nav className="space-y-8">
         <Link to="/Profile" className="block text-gray-700 hover:text-blue-600">  Profile </Link> 
         <Link to="/Home" className="block text-gray-700 hover:text-blue-600"> Home</Link>
         <Link to="/AddtoCart" className="block text-gray-700 hover:text-blue-600"> Orders</Link>
             
             <Link to="/Profile" className="block text-gray-700 hover:text-blue-600"> Settings</Link>
             
              <Link to="/" className="block text-gray-700 hover:text-blue-600"> Contact Us</Link>
              <Link to="/" className="block text-gray-700 hover:text-blue-600"> Services</Link>
              <Link to="" className="block text-gray-700 hover:text-blue-600"> Help</Link>
              <Link to="/login" className="block text-red-700     "> Logout</Link>
          </nav>
        </div>

      
        <div className="flex-1  bg-gray-50">
          <h3 className="text-2xl font-semibold mb-4">Edit Profile</h3>
          <form className="space-y-6 max-w-xl">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Nmae"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="enter your E-mail"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+91 *******"
              />
            </div>
              <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input
                type="text  "
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="*******"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
