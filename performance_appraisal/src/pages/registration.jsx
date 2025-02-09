import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/performance-appraisal-methods.png";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match!",
      }));
      return;
    }

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image with blur */}
      
      {/* Overlay to dim the background */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      {/* Content container */}
      <div className="absolute top-6 left-6 flex items-center space-x-2 z-10">
        {/* Placeholder Logo (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3674B5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M12 2L2 22h20L12 2z" />
          <path d="M12 6l6 12H6l6-12z" />
        </svg>
        <h1 className="text-2xl font-bold text-[#3674B5]">SkillScale</h1>
      </div>
      <div className="relative flex flex-row w-4/5 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left-side image */}
        <div className="w-1/2 hidden lg:flex items-center justify-center p-4">
          <img src={img} alt="Left Visual" className="max-w-full" />
        </div>
        {/* Registration form */}
        <div className="w-full lg:w-1/2 p-8 text-left">
          <h1 className="text-3xl font-bold text-[#3674B5] mb-4 text-center">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#3674B5] font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3674B5]"
                required
              />
            </div>
            <div>
              <label className="block text-[#3674B5] font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3674B5]"
                required
              />
            </div>
            <div>
              <label className="block text-[#3674B5] font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3674B5]"
                required
              />
            </div>
            <div>
              <label className="block text-[#3674B5] font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3674B5]"
                required
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <div>
              <label className="block text-[#3674B5] font-medium mb-2">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3674B5]"
                required
              >
                <option value="">Select a role</option>
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#3674B5] text-white py-3 rounded-lg hover:bg-[#285a8d] transition-all"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-4 text-[#3674B5]">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
