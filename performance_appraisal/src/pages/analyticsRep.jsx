import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import img from '../assets/images.png';

const topPerformers = [
  { name: "John Doe", rating: 95, position: "Software Engineer" },
  { name: "Jane Smith", rating: 92, position: "Project Manager" },
  { name: "Alice Johnson", rating: 90, position: "UX Designer" },
];

const employeePerformance = [
  { name: "John", performance: 95 },
  { name: "Jane", performance: 92 },
  { name: "Alice", performance: 90 },
  { name: "Robert", performance: 85 },
  { name: "Michael", performance: 82 },
  { name: "Sarah", performance: 78 },
  { name: "David", performance: 75 },
];

const Analytics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar className="bg-white shadow-md p-0 m-0">
        <Container fluid>
          <Navbar.Brand href="/" className="flex items-center">
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
            <h1 className="text-2xl font-bold text-[#3674B5] ml-2">SkillScale</h1>
          </Navbar.Brand>
          <Nav className="ml-auto flex items-center">
          <Nav.Link href="/home" className="text-gray-700 hover:text-blue-500 px-3">ANALYTICS AND REP</Nav.Link>
            <Nav.Link href="/goal" className="text-gray-700 hover:text-blue-500 px-3">GOAL</Nav.Link>
            <Nav.Link href="/feedback" className="text-gray-700 hover:text-blue-500 px-3">FEEDBACK</Nav.Link>
            <Nav.Link href="/Appraisal" className="text-gray-700 hover:text-blue-500 px-3">APPRAISAL DASHBOARD</Nav.Link>
            <Nav.Link href="/review" className="text-gray-700 hover:text-blue-500 px-3">REVIEW</Nav.Link>

            {/* Profile Dropdown */}
            <NavDropdown
              title={
                <img
                  src={img} // Replace with actual image URL
                  alt="Profile"
                  className="rounded-full"
                  width="40"
                  height="40"
                />
              }
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#profile" className="text-gray-700 hover:bg-gray-100">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/login" className="text-gray-700 hover:bg-gray-100">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h2 className="text-2xl font-bold mb-4">Top 3 Performers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {topPerformers.map((employee, index) => (
            <div key={index} className="p-4 shadow-lg border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold">{employee.name}</h3>
              <p className="text-gray-600">{employee.position}</p>
              <p className="text-lg font-bold text-blue-600">Rating: {employee.rating}%</p>
            </div>
          ))}
        </div>

        {/* Performance Chart */}
        <h2 className="text-2xl font-bold mb-4">Overall Employee Performance</h2>
        <div className="w-full h-96 bg-white shadow-md p-4 rounded-lg">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={employeePerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="performance" fill="#3182CE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-black py-4">
        <Container className="text-center">
          <p>&copy; 2025 SkillScale. All rights reserved. Contact us: <a href="mailto:info@skillscale.com" className="text-blue-400">info@skillscale.com</a></p>
          <p className="mt-2">Created By: Jaison T Jacob</p>
        </Container>
      </footer>
      
    </div>
  );
};

export default Analytics;
