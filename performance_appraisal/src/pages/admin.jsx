import { useState } from "react";
import { FaTachometerAlt, FaBullseye, FaComment, FaChartBar, FaClipboardCheck, FaUsers } from "react-icons/fa";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

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
    <div className="flex flex-col h-screen">
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

      {/* Main Layout */}
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

        {/* Content and Footer Container */}
        <div className="flex flex-col flex-1">
          {/* Page Content */}
          <div className="flex-1 p-6 bg-gray-100">
            <Routes>
              
              <Route path="/goala" element={<GoalA />} />
              <Route path="/feedbacka" element={<FeedbackA />} />
              {/* Add other routes here */}
            </Routes>
          </div>

          {/* Footer */}
          <footer className="bg-white text-black py-2 w-full shadow-md">
            <Container className="text-center">
              <p className="mb-4 text-black">
                &copy; 2025 SkillScale. All rights reserved. Contact us:{" "}
                <a href="mailto:info@skillscale.com" className="text-blue-400">
                  info@skillscale.com
                </a>
              </p>
              <div className="flex justify-center space-x-4">
                <p className="mb-4">Created By: Jaison T Jacob</p>
              </div>
            </Container>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;