import React, { useState, useEffect } from 'react';
import { FaUserTie, FaBuilding, FaUserShield, FaTrash } from 'react-icons/fa';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  // Fetch employee data from API or mock data
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Mock data (this would usually come from your API)
  const fetchEmployees = async () => {
    const data = [
      { id: 1, name: 'Adwaith', role: 'Software Engineer', department: 'IT', manager: 'Alice Smith' },
      { id: 2, name: 'Pranav', role: 'HR Manager', department: 'HR', manager: 'Bob Johnson' },
      { id: 3, name: 'Mrudul', role: 'Data Analyst', department: 'IT', manager: 'Alice Smith' },
    ];
    setEmployees(data);
  };

  // Handle remove employee action
  const removeEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const departmentColors = {
    IT: 'bg-blue-100 text-blue-800',
    HR: 'bg-green-100 text-green-800',
    Finance: 'bg-yellow-100 text-yellow-800',
    Sales: 'bg-red-100 text-red-800',
  };

  return (
    <div className="p-6 min-h-screen ">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-600">Employee List</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {employees.map((employee) => (
          <div key={employee.id} className={`employee-card p-6 rounded-lg shadow-lg w-64 text-center ${departmentColors[employee.department] || 'bg-gray-100 text-gray-800'}`}>
            <FaUserTie className="text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-4">{employee.name}</h3>
            <p className="flex items-center justify-center gap-2"><FaUserShield /> Role: {employee.role}</p>
            <p className="flex items-center justify-center gap-2"><FaBuilding /> Department: {employee.department}</p>
            <p className="flex items-center justify-center gap-2"><FaUserTie /> Manager: {employee.manager}</p>
            <button
              onClick={() => removeEmployee(employee.id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
            >
              <FaTrash /> Remove Employee
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
