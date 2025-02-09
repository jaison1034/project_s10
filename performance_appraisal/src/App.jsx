import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/login';
import Registration from './pages/registration';
import Goal from './pages/goalManagement';
import Home from './pages/homepage';
import Feedback from './pages/feedbackSelf';
import Review from './pages/review';
import AdminDashboard from './pages/admin'; // Changed to use AdminDashboard
import Appraisal from './pages/appraisalDashborad';
import Analytics from './pages/analyticsRep';
import GoalA from "./pages/adminGoal";
import FeedbackA from "./pages/feedbackAdmin";
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<AdminDashboard />} /> {/* Admin route */}
      <Route path="/goal" element={<Goal />} />
      <Route path="/home" element={<Home />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/review" element={<Review />} />
      <Route path="/Appraisal" element={<Appraisal />} />
      <Route path="/Analytics" element={<Analytics />} />
      <Route path="/goala" element={<GoalA />} />
     <Route path="/feedbacka" element={<FeedbackA />} />
    </Routes>
   </Router>
   </>
  )
}

export default App;
