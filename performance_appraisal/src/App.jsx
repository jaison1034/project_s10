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
import AdminR from "./pages/adminReview";
import Manager from "./pages/manager";
import AttendanceM from "./pages/attendance_manager";
import EmpV from "./pages/employee_view";
import MaR from "./pages/manager_review";
import MeV from "./pages/Manager_empV";
import Pro from "./pages/profile";

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
     <Route path="/prof" element={<Pro />} />
     <Route path="/admin" element={<AdminDashboard />}>
          <Route path="goals" element={<GoalA />} />
          <Route path="empv" element={<EmpV />} />
          <Route path="adminr" element={<AdminR />} />
          
        </Route>
        <Route path="/manager" element={<Manager />}>
          <Route path="goals" element={<GoalA />} />
          <Route path="feedbacka" element={<FeedbackA />} />
          <Route path="marev" element={<MaR />}/>
          <Route path="attenm" element={<AttendanceM />}/>
          <Route path="mempv" element={<MeV />}/>
        </Route>
        <Route path="/manager" element={<Manager />}/>
    </Routes>

   </Router>
   </>
  )
}

export default App;
