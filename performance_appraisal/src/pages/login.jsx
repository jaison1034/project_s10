import './Login.css';
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../assets/login_back.jpg'; // Ensure this image is high-quality
import { FaEyeSlash, FaEye,FaChartLine } from "react-icons/fa";

const Login = () => {
  const [loginData, setLoginData] = useState({
    fullName: "",
    password: "",
    role: "", // Added role state
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // To redirect after login

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded Admin credentials
    const adminCredentials = {
      username: "admin", // Admin username
      password: "admin123", // Admin password
    };

    // Check if the user is trying to log in as admin
    if (loginData.role === "admin" && loginData.fullName === adminCredentials.username && loginData.password === adminCredentials.password) {
      alert("Admin Login Successful!");
      navigate("/admin"); // Redirect to admin dashboard
      return;
    }

    // Check local storage for users based on role
    const storageKey = loginData.role === "manager" ? "managers" : loginData.role === "employee" ? "employees" : null;

    if (!storageKey) {
      alert("Please select a valid role!");
      return;
    }

    let users = JSON.parse(localStorage.getItem(storageKey)) || [];
    const user = users.find(
      (u) => u.fullName === loginData.fullName && u.password === loginData.password
    );

    if (user) {
      alert("Login Successful!");

      // Save logged-in user data in local storage
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      // Redirect based on role
      if (loginData.role === "manager") {
        navigate("/manager"); // Redirect to manager dashboard
      } else if (loginData.role === "employee") {
        navigate("/home"); // Redirect to employee dashboard
      }
    } else {
      alert("Invalid name, password, or role!");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#D1F8EF] to-[#A1E3F9] min-h-screen flex items-center justify-center relative">
      {/* SkillScale Branding (Top Left Corner) */}
      <div className="absolute top-6 left-6 flex items-center space-x-2 z-10">
        {/* Placeholder Logo (SVG) */}
        
        <FaChartLine className="text-blue-600 text-3xl" />
        <h1 className="text-2xl font-bold text-[#3674B5]">SkillScale</h1>
      </div>

      {/* Left Side - Image */}
      <div className="hidden lg:block w-1/2 h-screen overflow-hidden z-0">
        <img 
          src={loginImage} 
          alt="SkillScale" 
          className="w-full h-full object-cover transform scale-110" 
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8 z-20">
        <div className="text-left max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 border border-[#578FCA]">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Login to Your Account</h2>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-[#3674B5] font-medium mb-2">Employee Name:</label>
              <input 
                type="text"
                name="fullName"
                value={loginData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-[#A1E3F9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#578FCA] transition-all"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#3674B5] font-medium mb-2">Role:</label>
              <select
                name="role"
                value={loginData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#A1E3F9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#578FCA] transition-all"
                required
              >
                <option value="">Select Role</option>
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option> {/* Added Admin option */}
              </select>
            </div>

            <div className="mb-6 relative">
              <label className="block text-[#3674B5] font-medium mb-2">Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-[#A1E3F9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#578FCA] transition-all pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#3674B5] text-white py-3 rounded-lg hover:bg-[#578FCA] transition-all font-semibold"
            >
              Sign In
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#3674B5] hover:underline font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
