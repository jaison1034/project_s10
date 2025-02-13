import React, { useState } from "react";



const ManagerReviewPage = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Adwaith", status: "pending", review: "" },
    { id: 2, name: "Pranav", status: "completed", review: "Great team player." },
    { id: 3, name: "Mrudul", status: "pending", review: "" },
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [reviewText, setReviewText] = useState("");

  const submitReview = () => {
    setEmployees(employees.map(emp => 
      emp.id === selectedEmployee.id ? { ...emp, status: "completed", review: reviewText } : emp
    ));
    setSelectedEmployee(null);
    setReviewText("");
  };

  return (
    <div className="bg-cover bg-center min-h-screen relative" >
    
      <div className="relative z-10">
        
        {/* Review Section */}
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Employees List */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-blue-600">📝 Employee Reviews</h2>
            <ul>
              {employees.map(employee => (
                <li key={employee.id} className="p-4 rounded-lg bg-gray-100 mb-3 flex justify-between">
                  <span>{employee.name}</span>
                  <span className={employee.status === "completed" ? "text-green-600" : "text-red-600"}>{employee.status}</span>
                  {employee.status === "pending" && (
                    <button
                      onClick={() => setSelectedEmployee(employee)}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition"
                    >Give Review</button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Review Form */}
          {selectedEmployee && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-blue-600">Give Review for {selectedEmployee.name}</h2>
              <textarea
                className="w-full border rounded p-2"
                rows="4"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Enter your review..."
              />
              <button
                onClick={submitReview}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-4"
              >Submit Review</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagerReviewPage;
