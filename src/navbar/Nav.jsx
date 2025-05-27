import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMG from "../assets/log.png";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("LoginUser");
    setIsLoggedIn(!!user);
  }, []);
   const count = useSelector((state) => state.cart.items.length);
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        <Link to="/Home" className="flex items-center gap-2">
          <img src={IMG} alt="HELLSTORM" className="h-10 w-auto" />
          <span className="text-2xl font-bold">HELLSTORM</span>
        </Link>

        <div className="hidden md:flex gap-6" bg-black>
          <Link to="/Men" className="hover:text-gray-400">
            Men
          </Link>
          <Link to="/Women" className="hover:text-gray-400">
            Women
          </Link>
          <Link to="/Kid" className="hover:text-gray-400">
            Kids
          </Link>
          <Link to="/Beauty" className="hover:text-gray-400">
            Beauty
          </Link>
          <Link to="/Products" className="hover:text-gray-400">
            All
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-10 py-1 rounded-md text-black hidden md:block bg-white "
          />
        <Link to="/AddtoCart" className="relative text-2xl hover:text-gray-400">
  
  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
    {count}
  </span> 
  <FaShoppingCart />
</Link>
          <div className="relative inline-block text-left">
  {isLoggedIn ? (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="pt-2 text-3xl text-white focus:outline-none"
      >
        <IoPersonCircleSharp />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-10 z-80">
          <div className="py-2">
            <button
             onClick={() => {
                window.location.href = "/Profile";
              }}
            className="flex gap-0.5 w-full text-left px-4 py-2 text-sm text-black hover:bg-yellow">
             <span className="pt-1">
               <ImProfile />
              </span>
             Profile
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("LoginUser");
                window.location.href = "/login";
              }}
              className="flex gap-0.5 w-full text-left px-4 py-2 text-sm text-black hover:bg-yellow"
            >
              <span className="pt-1">
                <RiLogoutBoxFill />
              </span>
              Logout
            </button>
            
          </div>
        </div>
      )}
    </>
  ) : (
    <Link to="/Login" className="text-2xl hover:text-gray-400">
      <IoPersonAdd />
    </Link>
  )}
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
