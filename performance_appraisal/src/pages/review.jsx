import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import rImg from '../assets/images.png'

const ReviewPage = () => {
  const [completedReviews, setCompletedReviews] = useState([]);
  const [pendingReviews, setPendingReviews] = useState(["John Doe", "Jane Smith"]);
  const [newReview, setNewReview] = useState({ employee: "", feedback: "" });

  const handleReviewSubmit = () => {
    if (newReview.employee && newReview.feedback) {
      setCompletedReviews([...completedReviews, newReview]);
      setPendingReviews(pendingReviews.filter((emp) => emp !== newReview.employee));
      setNewReview({ employee: "", feedback: "" });
    }
  };

  return (
    <>
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
            <Nav.Link href="/feedback" className="text-gray-700 hover:text-blue-500 px-3">FEEDBACK</Nav.Link>
            <Nav.Link href="/Appraisal" className="text-gray-700 hover:text-blue-500 px-3">APPRAISAL DASHBOARD</Nav.Link>
            <Nav.Link href="/Analytics" className="text-gray-700 hover:text-blue-500 px-3">ANALYTICS AND REP</Nav.Link>
            
            <NavDropdown
                          title={
                            <img
                              src={rImg} // Replace with actual image URL
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
      
      {/* Review Section */}
      <Container className="my-15">
        <h2 className="text-2xl font-bold text-center text-[#3674B5] mb-6">Employee Reviews</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Add Review */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-[#3674B5] mb-4">Add Review</h3>
            <select
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={newReview.employee}
              onChange={(e) => setNewReview({ ...newReview, employee: e.target.value })}
            >
              <option value="">Select Employee</option>
              {pendingReviews.map((emp, index) => (
                <option key={index} value={emp}>{emp}</option>
              ))}
            </select>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Write your review here..."
              value={newReview.feedback}
              onChange={(e) => setNewReview({ ...newReview, feedback: e.target.value })}
            ></textarea>
            <button
              className="w-full bg-[#3674B5] text-white py-2 rounded-lg"
              onClick={handleReviewSubmit}
            >Submit Review</button>
          </div>

          {/* Completed Reviews */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-[#3674B5] mb-4">✅Completed Reviews</h3>
            {completedReviews.length > 0 ? (
              <ul>
                {completedReviews.map((review, index) => (
                  <li key={index} className="border-b py-2">{review.employee}: {review.feedback}</li>
                ))}
              </ul>
            ) : (
              <p>No reviews completed yet.</p>
            )}
          </div>

          {/* Pending Reviews */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-[#3674B5] mb-4">📅Pending Reviews</h3>
            {pendingReviews.length > 0 ? (
              <ul>
                {pendingReviews.map((emp, index) => (
                  <li key={index} className="border-b py-2">{emp}</li>
                ))}
              </ul>
            ) : (
              <p>All reviews completed!</p>
            )}
          </div>
        </div>
      </Container>

      {/* Footer */}
      <footer className="bg-white text-black py-4 text-center mt-6">
        <p className="mb-4">&copy; 2025 SkillScale. All rights reserved. Contact us: <a href="mailto:info@skillscale.com" className="text-blue-400">info@skillscale.com</a></p>
        <div className="flex justify-center space-x-4">
          <p className="mb-4">Created By : Jaison T Jacob</p>
        </div>
      </footer>
    </>
  );
};

export default ReviewPage;