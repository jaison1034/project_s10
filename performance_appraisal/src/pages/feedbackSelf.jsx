import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import img from '../assets/feedback.avif'
import imgn from '../assets/images.png'
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";


const FeedbackPage = () => {
  const [assessments, setAssessments] = useState([
    { id: 1, title: "Quarterly Self-Assessment", dueDate: "2025-02-10", status: "completed" },
    { id: 2, title: "Mid-Year Self-Assessment", dueDate: "2025-06-15", status: "scheduled" },
    { id: 3, title: "Year-End Self-Assessment", dueDate: "2025-12-20", status: "scheduled" },
  ]);

  const [showAssessment, setShowAssessment] = useState(false);
  const [answers, setAnswers] = useState({});

  // Questions for self-assessment
  const questions = [
    "What achievements are you most proud of in this period?",
    "What challenges did you face and how did you overcome them?",
    "How do you plan to improve your performance?",
    "What support do you need from management?",
  ];

  // Handle answer changes
  const handleAnswerChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  // Submit Self-Assessment
  const submitAssessment = () => {
    alert("Self-Assessment Submitted Successfully!");
    setShowAssessment(false);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen relative"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
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
                    <Nav.Link href="/home" className="text-gray-700 hover:text-blue-500 px-3">HOME</Nav.Link>
                    <Nav.Link href="/goal" className="text-gray-700 hover:text-blue-500 px-3">GOAL</Nav.Link>
                    <Nav.Link href="/Appraisal" className="text-gray-700 hover:text-blue-500 px-3">APPRAISAL DASHBOARD</Nav.Link>
                    <Nav.Link href="/Analytics" className="text-gray-700 hover:text-blue-500 px-3">ANALYTICS AND REP</Nav.Link>
                    <Nav.Link href="/review" className="text-gray-700 hover:text-blue-500 px-3">REVIEW</Nav.Link>
        
                    {/* Profile Dropdown */}
                    <NavDropdown
                      title={
                        <img
                          src={imgn} // Replace with actual image URL
                          alt="Profile"
                          className="rounded-full"
                          width="40"
                          height="40"
                        />
                      }
                      id="basic-nav-dropdown"
                      align="end"
                    >
                      <NavDropdown.Item href="#profile" className="text-gray-700 hover:bg-gray-100">🧑‍💼Profile</NavDropdown.Item>
                      <NavDropdown.Item href="/login" className="text-gray-700 hover:bg-gray-100">⬅️Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Container>
              </Navbar>
       

        {/* Feedback Page Sections */}
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Completed Assessments */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-green-600">✅ Completed Assessments</h2>
            {assessments.filter(a => a.status === "completed").length === 0 ? (
              <p className="text-gray-500">No assessments completed yet.</p>
            ) : (
              assessments.filter(a => a.status === "completed").map(a => (
                <div key={a.id} className="p-4 rounded-lg bg-green-100 mb-3">
                  <p className="font-semibold">{a.title}</p>
                  <p className="text-sm text-gray-500">Completed on: {a.dueDate}</p>
                </div>
              ))
            )}
          </div>

          {/* Scheduled Assessments */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-yellow-600">📅 Scheduled Assessments</h2>
            {assessments.filter(a => a.status === "scheduled").map(a => (
              <div key={a.id} className="p-4 rounded-lg bg-yellow-100 mb-3">
                <p className="font-semibold">{a.title}</p>
                <p className="text-sm text-gray-500">Scheduled for: {a.dueDate}</p>
              </div>
            ))}
          </div>

          {/* Self-Assessment Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-blue-600">📝 Self-Assessment</h2>
            {!showAssessment ? (
              <button
                onClick={() => setShowAssessment(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Start Self-Assessment
              </button>
            ) : (
              <div>
                {questions.map((question, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-semibold">{question}</p>
                    <textarea
                      className="w-full border rounded p-2"
                      rows="3"
                      placeholder="Type your answer here..."
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                    />
                  </div>
                ))}
                <button
                  onClick={submitAssessment}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  Submit Assessment
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-2 items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold">SkillScale</h2>
          <p className="mt-2 text-gray-400">Empowering growth through continuous performance tracking.</p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 items-center">
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

        {/* Contact & Social */}
        <div className="items-center">
          <h3 className="text-lg font-semibold">Connect With Us</h3>
          <div className="mt-6 flex space-x-4 items-center">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white items-center"><FaFacebook size={20} /></a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
            <a href="mailto:info@skillscale.com" className="text-gray-400 hover:text-white"><FaEnvelope size={20} /></a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className=" text-center text-gray-500 text-sm border-t border-gray-600 text-center">
        &copy; 2025 SkillScale. All Rights Reserved.
      </div>
    </footer>
       
      </div>
      </div>
    
  );
};

export default FeedbackPage;
