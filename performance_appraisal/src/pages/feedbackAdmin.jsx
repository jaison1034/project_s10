import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Card, Button, Form, Table } from "react-bootstrap";
import img from '../assets/feedback.avif';
import imgn from '../assets/images.png';

const AdminFeedbackPage = () => {
  const [assessments, setAssessments] = useState([
    { id: 1, title: "Quarterly Self-Assessment", dueDate: "2025-02-10", status: "completed" },
    { id: 2, title: "Mid-Year Self-Assessment", dueDate: "2025-06-15", status: "scheduled" },
    { id: 3, title: "Year-End Self-Assessment", dueDate: "2025-12-20", status: "scheduled" },
  ]);

  const [employees, setEmployees] = useState([
    { id: 1, name: "Adwaith", department: "Engineering", assessmentStatus: "completed" },
    { id: 2, name: "Pranav", department: "HR", assessmentStatus: "not completed" },
    { id: 3, name: "Mrudul", department: "Marketing", assessmentStatus: "not completed" },
  ]);

  const [questions, setQuestions] = useState([
    "What achievements are you most proud of in this period?",
    "What challenges did you face and how did you overcome them?",
    "How do you plan to improve your performance?",
    "What support do you need from management?",
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [assignedQuestions, setAssignedQuestions] = useState({});

  const addQuestion = () => {
    if (newQuestion.trim() !== "") {
      setQuestions([...questions, newQuestion]);
      setNewQuestion("");
    }
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const assignQuestionsToEmployee = (employeeId) => {
    setSelectedEmployee(employeeId);
  };

  const saveAssignedQuestions = () => {
    if (selectedEmployee) {
      setAssignedQuestions({
        ...assignedQuestions,
        [selectedEmployee]: questions,
      });
      setSelectedEmployee(null);
    }
  };

  const completedAssessments = employees.filter(emp => emp.assessmentStatus === "completed");
  const notCompletedAssessments = employees.filter(emp => emp.assessmentStatus === "not completed");

  return (
    <div
      className="bg-cover bg-center min-h-screen relative"
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        {/* Navbar */}
        

        {/* Admin Dashboard Sections */}
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Card: Employees Completed Assessments */}
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Completed Assessments</Card.Title>
              <Card.Text className="text-4xl font-bold text-green-600">
                {completedAssessments.length}
              </Card.Text>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                  {completedAssessments.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.name}</td>
                      <td>{emp.department}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Card: Employees Not Completed Assessments */}
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Not Completed Assessments</Card.Title>
              <Card.Text className="text-4xl font-bold text-red-600">
                {notCompletedAssessments.length}
              </Card.Text>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                  {notCompletedAssessments.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.name}</td>
                      <td>{emp.department}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Card: Total Assessments Created */}
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Assessments</Card.Title>
              <Card.Text className="text-4xl font-bold text-blue-600">
                {assessments.length}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Admin Section to Manage Questions */}
        <div className="container mx-auto p-6 mt-6">
          <h2 className="text-2xl font-bold mb-4">Manage Self-Assessment Questions</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Add New Question</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={addQuestion}>
              Add Question
            </Button>
          </Form>

          <div className="mt-4">
            {questions.map((question, index) => (
              <div key={index} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded">
                <p>{question}</p>
                <Button variant="danger" size="sm" onClick={() => removeQuestion(index)}>
                  Remove
                </Button>
              </div>
            ))}
          </div>

          {/* Assign Questions to Employees */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Assign Questions to Employees</h2>
            <Form.Group className="mb-3">
              <Form.Label>Select Employee</Form.Label>
              <Form.Control
                as="select"
                value={selectedEmployee || ""}
                onChange={(e) => setSelectedEmployee(e.target.value)}
              >
                <option value="">Select an employee</option>
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.name} ({emp.department})
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={saveAssignedQuestions}>
              Assign Questions
            </Button>
          </div>
        </div>

        {/* Footer */}
        
      </div>
    </div>
  );
};

export default AdminFeedbackPage;