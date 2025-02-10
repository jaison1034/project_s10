import { useState } from "react";
import { FaTachometerAlt, FaBullseye, FaComment, FaChartBar, FaClipboardCheck, FaUsers } from "react-icons/fa";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

// Page Components for routing
import GoalA from "../pages/adminGoal";
import FeedbackA from "../pages/feedbackAdmin";
 // Add a Dashboard component

import img from "../assets/images.png";
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/admin");

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, key: "/admin" },
    { name: "Goal", icon: <FaBullseye />, key: "/goala" },
    { name: "Feedback", icon: <FaComment />, key: "/feedbacka" },
    { name: "Appraisal", icon: <FaClipboardCheck />, key: "/appraisal" },
    { name: "Analytics", icon: <FaChartBar />, key: "/analytics" },
    { name: "Review", icon: <FaUsers />, key: "/review" },
  ];

  const handleTabClick = (path) => {
    setActiveTab(path);
    navigate(path);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar className="bg-white shadow-md p-0 m-0">
        <Container fluid>
          <Navbar.Brand href="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3674B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <path d="M12 2L2 22h20L12 2z" />
              <path d="M12 6l6 12H6l6-12z" />
            </svg>
            <h1 className="text-2xl font-bold text-[#3674B5] ml-2">SkillScale</h1>
          </Navbar.Brand>
          <Nav className="ml-auto flex items-center">
            <NavDropdown title={<img src={img} alt="Profile" className="rounded-full" width="40" height="40" />} id="basic-nav-dropdown" align="end">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* Sidebar and Content Wrapper */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-[#3674B5] text-white flex flex-col p-4">
          <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
          <nav>
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleTabClick(item.key)}
                className={`flex items-center space-x-2 p-2 w-full text-left hover:bg-[#2a5a8a] rounded-md ${
                  activeTab === item.key ? "bg-[#2a5a8a]" : ""
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/goala" element={<GoalA />} />
            <Route path="/feedbacka" element={<FeedbackA />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>

      {/* Footer Below Sidebar and Content */}
      <footer className="bg-gray-900 text-white py-2 ">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold">SkillScale</h2>
            <p className="mt-2 text-gray-400">Empowering growth through continuous performance tracking.</p>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                info@skillscale.com
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                6282645889
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                <span>CyberPark, Kozhikode, India</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
              <a href="mailto:info@skillscale.com" className="text-gray-400 hover:text-white"><FaEnvelope size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-600 mt-2">
          &copy; 2025 SkillScale. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
