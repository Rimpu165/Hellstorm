import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import defaultPic from "../kidsimage/image3.webp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState(defaultPic);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (storedProfile) {
      setProfilePic(storedProfile.profilePic || defaultPic);
      setFullName(storedProfile.fullName || '');
      setEmail(storedProfile.email || '');
      setPhone(storedProfile.phone || '');
      setPassword(storedProfile.password || '');
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userProfile = {
      profilePic,
      fullName,
      email,
      phone,
      password,
    };
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    toast.success("Profile updated successfully!");
  };

  const handleLogout = () => {
    toast.info("You have been logged out.");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <ToastContainer position="top-right" autoClose={2000} />

      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <img
              src={profilePic}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border-4 border-blue-500"
            />
            <input
              type="file"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
              title="Change Profile Picture"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-800">{fullName || "User Name"}</h1>
            <p className="text-sm text-gray-500">{email || "user@email.com"}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </header>

      <div className="flex flex-col lg:flex-row mt-8 px-4 gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-white rounded-lg shadow-md p-5 space-y-4">
          <nav className="flex flex-col space-y-2 text-gray-700 text-base">
            <Link to="/Profile" className="hover:text-blue-600">👤 Profile</Link>
            <Link to="/Home" className="hover:text-blue-600">🏠 Home</Link>
            <Link to="/AddtoCart" className="hover:text-blue-600">🛒 Orders</Link>
            <Link to="/Settings" className="hover:text-blue-600">⚙️ Settings</Link>
            <Link to="/Contact" className="hover:text-blue-600">📞 Contact Us</Link>
            <Link to="/Services" className="hover:text-blue-600">🛠️ Services</Link>
            <Link to="/Help" className="hover:text-blue-600">❓ Help</Link>
          </nav>
        </aside>

        {/* Profile Form */}
        <main className="flex-1 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Your Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter full name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 **********"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Save Profile
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};
export default Profile;
