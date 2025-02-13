import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaChevronDown } from "react-icons/fa";
import { User, Mail } from "lucide-react";
import img from '../assets/people.avif';

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

    // Choose the storage key based on the role
    const storageKey = formData.role === "manager" ? "managers" : "employees";

    // Retrieve existing users from local storage based on role
    const existingUsers = JSON.parse(localStorage.getItem(storageKey)) || [];

    // Add the new user to the list
    const updatedUsers = [...existingUsers, formData];

    // Save updated users list to local storage
    localStorage.setItem(storageKey, JSON.stringify(updatedUsers));

    alert("Registration successful!");

    // Navigate to login page after registration
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
        filter: "brightness(1.0)",
      }}
    >
      <div className="absolute top-6 left-6 flex items-center space-x-2 z-10 ml-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3674B5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 text-[#3674B5]"
        >
          <path d="M12 2L2 22h20L12 2z" />
          <path d="M12 6l6 12H6l6-12z" />
        </svg>
        <h1 className="text-3xl font-bold text-white ml-2">SkillScale</h1>
      </div>

      <div className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-80 rounded-xl shadow-xl text-left mt-20 ml-200">
        <h2 className="text-2xl font-semibold text-[#3674B5] mb-6 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-[#3674B5] font-medium mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3674B5]" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3674B5] transition-all"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-[#3674B5] font-medium mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3674B5]" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3674B5] transition-all"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-[#3674B5] font-medium mb-2">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3674B5]" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3674B5] transition-all"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-[#3674B5] font-medium mb-2">Confirm Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3674B5]" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3674B5] transition-all"
                required
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div className="relative">
            <label className="block text-[#3674B5] font-medium mb-2">Role</label>
            <div className="relative">
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3674B5]" />
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3674B5] transition-all appearance-none"
                required
              >
                <option value="">Select a role</option>
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
              </select>
            </div>
          </div>

          {/* Conditional rendering of role-specific forms */}
          {formData.role === "manager" && (
            <div className="relative">
              <label className="block text-[#3674B5] font-medium mb-2">Department</label>
              <div className="relative">
                <input
                  type="text"
                  name="managerSpecificField"
                  placeholder="Enter manager-specific info"
                  className="w-full px-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3674B5] transition-all"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#3674B5] text-white py-3 rounded-lg hover:bg-[#285a8d] transition-all"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-[#3674B5]">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold underline hover:text-[#285a8d] transition-all">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
