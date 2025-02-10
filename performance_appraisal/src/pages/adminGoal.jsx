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
      
    </div>
  );
};

export default AdminGoalManagement;
