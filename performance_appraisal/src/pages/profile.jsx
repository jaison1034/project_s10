import { useState } from "react";
import { Camera, User, Mail, Briefcase, Building, Star } from "lucide-react";
import { motion } from "framer-motion";

const Profile = () => {
  const [employee, setEmployee] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Software Engineer",
    department: "Development",
    performanceScore: "85",
    profilePicture: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Handle Profile Picture Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setEmployee({ ...employee, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-900">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 blur-3xl opacity-30"
      ></motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-6 relative z-10"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Employee Profile
        </h2>

        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-32 h-32">
            <img
              src={imagePreview || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 shadow-md"
            />
            <label className="absolute bottom-2 right-2 bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-700 transition">
              <Camera className="w-5 h-5 text-white" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Employee Details Form */}
        <div className="space-y-4">
          <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow">
            <User className="text-indigo-500 w-5 h-5 mr-2" />
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              placeholder="Full Name"
            />
          </div>

          <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow">
            <Mail className="text-indigo-500 w-5 h-5 mr-2" />
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              placeholder="Email"
            />
          </div>

          <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow">
            <Briefcase className="text-indigo-500 w-5 h-5 mr-2" />
            <input
              type="text"
              name="role"
              value={employee.role}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              placeholder="Role"
            />
          </div>

          <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow">
            <Building className="text-indigo-500 w-5 h-5 mr-2" />
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              placeholder="Department"
            />
          </div>

          <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow">
            <Star className="text-indigo-500 w-5 h-5 mr-2" />
            <input
              type="number"
              name="performanceScore"
              value={employee.performanceScore}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              placeholder="Performance Score"
            />
          </div>

          {/* Save Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            Save Changes
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
