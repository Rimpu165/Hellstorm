import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMG from "../assets/log.png";
import { IoPersonCircleSharp, IoPersonAdd } from "react-icons/io5";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("LoginUser");
      setIsLoggedIn(!!user);
    };

    checkLogin();

    window.addEventListener("loginStatusChanged", checkLogin);

    return () => {
      window.removeEventListener("loginStatusChanged", checkLogin);
    };
  }, []);

  const count = useSelector((state) => state.cart.items.length);

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        <Link to="/Home" className="flex items-center gap-2">
          <img src={IMG} alt="HELLSTORM" className="h-10 w-auto" />
          <span className="text-2xl font-bold">HELLSTORM</span>
        </Link>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden md:flex gap-6">
          <Link to="/Men" className="hover:text-gray-400">Men</Link>
          <Link to="/Women" className="hover:text-gray-400">Women</Link>
          <Link to="/Kid" className="hover:text-gray-400">Kids</Link>
          <Link to="/Beauty" className="hover:text-gray-400">Beauty</Link>
          <Link to="/Products" className="hover:text-gray-400">All</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-10 py-1 rounded-md text-black bg-white"
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
                  <div className="absolute right-0 mt-2 w-40 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-10 z-50">
                    <div className="py-2">
                      <button
                        onClick={() => (window.location.href = "/Profile")}
                        className="flex gap-2 w-full text-left px-4 py-2 text-sm text-black hover:bg-yellow-100"
                      >
                        <ImProfile className="mt-0.5" /> Profile
                      </button>
                      <button
                        onClick={() => {
                          localStorage.removeItem("LoginUser");
                          window.dispatchEvent(new Event("loginStatusChanged"));
                          window.location.href = "/login";
                        }}
                        className="flex gap-2 w-full text-left px-4 py-2 text-sm text-black hover:bg-yellow-100"
                      >
                        <RiLogoutBoxFill className="mt-0.5" /> Logout
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

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 border-t border-gray-700 pt-4">
          <Link to="/Men" className="hover:text-gray-400" onClick={() => setMobileMenuOpen(false)}>Men</Link>
          <Link to="/Women" className="hover:text-gray-400" onClick={() => setMobileMenuOpen(false)}>Women</Link>
          <Link to="/Kid" className="hover:text-gray-400" onClick={() => setMobileMenuOpen(false)}>Kids</Link>
          <Link to="/Beauty" className="hover:text-gray-400" onClick={() => setMobileMenuOpen(false)}>Beauty</Link>
          <Link to="/Products" className="hover:text-gray-400" onClick={() => setMobileMenuOpen(false)}>All</Link>

          <div className="mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-md text-black bg-white"
            />
          </div>

          <Link to="/AddtoCart" className="flex items-center gap-2 text-lg hover:text-gray-400" onClick={() => setMobileMenuOpen(false)}>
            <FaShoppingCart />
            Cart <span className="ml-auto bg-red-600 px-2 py-0.5 rounded-full text-xs">{count}</span>
          </Link>

          {isLoggedIn ? (
            <>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = "/Profile";
                }}
                className="flex items-center gap-2 text-lg hover:text-gray-400"
              >
                <ImProfile /> Profile
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("LoginUser");
                  window.dispatchEvent(new Event("loginStatusChanged"));
                  setMobileMenuOpen(false);
                  window.location.href = "/login";
                }}
                className="flex items-center gap-2 text-lg hover:text-gray-400"
              >
                <RiLogoutBoxFill /> Logout
              </button>
            </>
          ) : (
            <Link to="/Login" className="flex items-center gap-2 text-lg hover:text-gray-400" onClick={() => setMobileMenuOpen(false)}>
              <IoPersonAdd /> Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
