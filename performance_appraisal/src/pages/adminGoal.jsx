import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import img from '../assets/images.png';

const AdminGoalManagement = () => {
  const [goals, setGoals] = useState([
    { id: 1, title: "Complete Project Report", dueDate: "2025-02-10", employeesCompleted: ["Alice", "Bob"], employeesPending: ["Charlie"] },
    { id: 2, title: "Submit Performance Review", dueDate: "2025-02-15", employeesCompleted: ["David"], employeesPending: ["Eve", "Frank"] },
  ]);

  const [newGoal, setNewGoal] = useState({ title: "", dueDate: "" });

  // Function to add a new goal
  const addGoal = () => {
    if (newGoal.title && newGoal.dueDate) {
      setGoals([...goals, { id: goals.length + 1, title: newGoal.title, dueDate: newGoal.dueDate, employeesCompleted: [], employeesPending: [] }]);
      setNewGoal({ title: "", dueDate: "" });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar className="bg-white shadow-md p-0 m-0">
        <Container fluid>
          <Navbar.Brand href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-[#3674B5] ml-2">SkillScale - Admin</h1>
          </Navbar.Brand>
          <Nav className="ml-auto flex items-center">
            <Nav.Link href="/dashboard" className="text-gray-700 hover:text-blue-500 px-3">DASHBOARD</Nav.Link>
            <Nav.Link href="/goals" className="text-gray-700 hover:text-blue-500 px-3">GOALS</Nav.Link>
            <Nav.Link href="/analytics" className="text-gray-700 hover:text-blue-500 px-3">ANALYTICS</Nav.Link>
            <NavDropdown title={<img src={img} alt="Profile" className="rounded-full" width="40" height="40" />} id="admin-nav-dropdown" align="end">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* Goal Management Section */}
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Add Goal Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-600">➕ Set New Goal</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Goal Title</Form.Label>
              <Form.Control type="text" value={newGoal.title} onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" value={newGoal.dueDate} onChange={(e) => setNewGoal({ ...newGoal, dueDate: e.target.value })} />
            </Form.Group>
            <Button onClick={addGoal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Goal</Button>
          </Form>
        </div>

        {/* Goal Completion Status */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-green-600">📋 Goal Progress</h2>
          {goals.map(goal => (
            <div key={goal.id} className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-700">{goal.title}</h3>
              <p className="text-sm text-gray-500">Due by: {goal.dueDate}</p>
              <p className="text-green-600">Completed: {goal.employeesCompleted.join(", ") || "None"}</p>
              <p className="text-red-600">Pending: {goal.employeesPending.join(", ") || "None"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-lg text-black py-6 mt-6">
        <Container className="text-center">
          <p className="mb-4">&copy; 2025 SkillScale. All rights reserved. Contact us: <a href="mailto:info@skillscale.com" className="text-blue-500 hover:text-blue-400">info@skillscale.com</a></p>
          <p className="mb-4">Created By: Jaison T Jacob</p>
        </Container>
      </footer>
    </div>
  );
};

export default AdminGoalManagement;
