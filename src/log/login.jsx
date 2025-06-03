import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (isSignup) {
      if (!username.trim()) newErrors.username = "Username is required";
      else if (username.length < 3) newErrors.username = "Minimum 3 characters required";

      if (!mobile.trim()) newErrors.mobile = "Mobile is required";
      else if (!/^\d{10}$/.test(mobile)) newErrors.mobile = "Enter valid 10-digit number";

      if (!password.trim()) newErrors.password = "Password is required";
      else if (password.length < 6) newErrors.password = "Minimum 6 characters required";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        toast.error("Please fix the errors.");
        return;
      }

      const userData = { username, password, mobile };
      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("Registered successfully! You can now login.");
      setIsSignup(false);
      setUsername('');
      setPassword('');
      setMobile('');
      setErrors({});
    } else {
      if (!username.trim()) newErrors.username = "Username is required";
      if (!password.trim()) newErrors.password = "Password is required";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        toast.error("Please fill all fields.");
        return;
      }

      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.username === username &&
        storedUser.password === password
      ) {
        localStorage.setItem("LoginUser", JSON.stringify(storedUser));
        window.dispatchEvent(new Event("loginStatusChanged"));

        toast.success("Login successful!");
        setTimeout(() => navigate("/"), 1500);
        setErrors({});
      } else {
        toast.warning("Invalid username or password.");
      }
    }
  };

  return (
    <div className="login min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
        <div className="md:w-1/2 bg-black text-white flex flex-col justify-center p-10">
          <h2 className="text-3xl font-bold mb-4">WELCOME TO ...</h2>
          <p className="text-sm mb-2">Your one-stop fashion store</p>
          <p className="text-sm">Get exclusive deals after login!</p>
        </div>
        <div className="md:w-1/2 p-10 pt-20">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {isSignup ? "Signup" : "Login"}
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border px-4 py-2 rounded"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>
            {isSignup && (
              <div>
                <input
                  type="text"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full border px-4 py-2 rounded"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
            )}

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-4 py-2 rounded"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded"
            >
              {isSignup ? "Signup" : "Login"}
            </button>

            <p className="text-sm text-center mt-4">
              {isSignup ? "Already have an account?" : "New user?"}{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  setIsSignup(!isSignup);
                  setErrors({});
                }}
              >
                {isSignup ? "Login" : "Signup"}
              </span>
            </p>
          </form>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Login;
