import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
import './App.css'
import Login from './pages/login'
import Registration from './pages/registration'
import Goal from './pages/goalManagement'
import Home from './pages/homepage'
import Feedback from './pages/feedbackSelf'
import Review from './pages/review'
import Admin from './pages/admin'
import Appraisal from './pages/appraisalDashborad'
import Analytics from './pages/analyticsRep'

function App() {
 

  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/goal" element={<Goal />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/feedback" element={<Feedback />}/>
      <Route path="/review" element={<Review />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="/Appraisal" element={<Appraisal />}/>
      <Route path="/Analytics" element={<Analytics />}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
