import { useState } from "react";

const employees = [
  { id: 1, name: "Adwaith" },
  { id: 2, name: "Pranav" },
  { id: 3, name: "Mrudul" },
];

export default function AttendancePage() {
  const [attendance, setAttendance] = useState({});
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  const handleAttendanceChange = (id) => {
    setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const submitAttendance = () => {
    const date = new Date().toLocaleDateString();
    const day = new Date().toLocaleDateString(undefined, { weekday: 'long' });
    const records = employees.map((emp) => ({
      id: emp.id,
      name: emp.name,
      present: attendance[emp.id] || false,
      date,
      day,
    }));
    setAttendanceRecords((prevRecords) => [...prevRecords, { date, day, records }]);
    alert("Attendance submitted successfully!");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto border rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-bold mb-4 text-center">📅Employee Attendance</h2>
      <div className="mb-4 p-6 border rounded-lg bg-gray-100">
        <h3 className="text-xl font-semibold mb-2">✅Mark Attendance for Today</h3>
        {employees.map((employee) => (
          <div key={employee.id} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              id={`emp-${employee.id}`}
              checked={attendance[employee.id] || false}
              onChange={() => handleAttendanceChange(employee.id)}
              className="w-4 h-4 cursor-pointer"
            />
            <label htmlFor={`emp-${employee.id}`} className="text-lg cursor-pointer">
              {employee.name}
            </label>
          </div>
        ))}
        <button 
          onClick={submitAttendance} 
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit Attendance
        </button>
      </div>

      <h2 className="text-2xl font-bold mt-6 text-center">📜Attendance Records</h2>
      <div className="p-6 border rounded-lg bg-gray-50">
        {attendanceRecords.length === 0 ? (
          <p className="text-center text-gray-500">No attendance records available.</p>
        ) : (
          attendanceRecords.map((recordSet, index) => (
            <div key={index} className="mb-4 p-4 border-b">
              <h3 className="text-lg font-semibold">{recordSet.day}, {recordSet.date}</h3>
              <ul className="mt-2">
                {recordSet.records.map((record) => (
                  <li key={record.id} className="mb-1">
                    {record.name}: <span className={record.present ? "text-green-600" : "text-red-600"}>{record.present ? "Present" : "Absent"}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
