import { useState } from "react";
import { FaTachometerAlt, FaBullseye, FaComment, FaChartBar, FaClipboardCheck, FaUsers } from "react-icons/fa";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import img from "../assets/images.png";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, key: "dashboard" },
    {
      name: "Goal",
      icon: <FaBullseye />,
      key: "goal",
      submenu: [
        { name: "📝Set Goals", key: "set-goals"},
        { name: "✅Goals Completed", key: "goals-completed"  },
        { name: "Employee To Complete", key: "employee-to-complete", icon: <FaUsers /> },
      ],
    },
    {
      name: "Feedback",
      icon: <FaComment />,
      key: "feedback",
      submenu: [
        { name: "📝Set Self Assessment", key: "set-self-assessment"},
        { name: "✅Self Assessment Completed", key: "self-assessment-completed" },
        { name: "Employee To Complete Feedback", key: "employee-feedback-complete", icon: <FaUsers /> },
      ],
    },
    { name: "Appraisal", icon: <FaClipboardCheck />, key: "appraisal" },
    { name: "Analytics", icon: <FaChartBar />, key: "analytics" },
    {
      name: "Review",
      icon: <FaUsers />,
      key: "review",
      submenu: [
        { name: "📝Set Review", key: "set-review"},
        { name: "✅Review Completed", key: "review-completed", icon: <FaClipboardCheck /> },
        { name: "Employee To Complete Review", key: "employee-review-complete", icon: <FaUsers /> },
      ],
    },
  ];

  const handleTabClick = (key, hasSubmenu) => {
    if (hasSubmenu) {
      setOpenSubmenu(openSubmenu === key ? null : key);
    } else {
      setActiveTab(key);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar className="bg-white shadow-md p-0 m-0">
        <Container fluid>
          <Navbar.Brand href="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3674B5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M12 2L2 22h20L12 2z" />
              <path d="M12 6l6 12H6l6-12z" />
            </svg>
            <h1 className="text-2xl font-bold text-[#3674B5] ml-2">SkillScale</h1>
          </Navbar.Brand>
          <Nav className="ml-auto flex items-center">
            <NavDropdown
              title={<img src={img} alt="Profile" className="rounded-full" width="40" height="40" />}
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-[#3674B5] text-white flex flex-col p-4">
          <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
          <nav>
            {menuItems.map((item) => (
              <div key={item.key}>
                <button
                  className={`flex items-center space-x-2 p-2 w-full text-left hover:bg-[#2a5a8a] rounded-md ${
                    activeTab === item.key ? "bg-[#2a5a8a]" : ""
                  }`}
                  onClick={() => handleTabClick(item.key, item.submenu)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
                {item.submenu && openSubmenu === item.key && (
                  <div className="ml-6">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.key}
                        className={`flex items-center space-x-2 p-2 text-sm w-full text-left hover:bg-[#2a5a8a] rounded-md ${
                          activeTab === sub.key ? "bg-[#2a5a8a]" : ""
                        }`}
                        onClick={() => setActiveTab(sub.key)}
                      >
                        {sub.icon}
                        <span>{sub.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Content and Footer Container */}
        <div className="flex flex-col flex-1">
          {/* Page Content */}
          <div className="flex-1 p-6 bg-gray-100">
            <h2 className="text-2xl font-bold text-[#3674B5]">{activeTab.replace(/-/g, " ").toUpperCase()}</h2>
          </div>

          {/* Footer */}
          <footer className="bg-white text-black py-2 w-full shadow-md">
            <Container className="text-center">
              <p className="mb-4 text-black">
                &copy; 2025 SkillScale. All rights reserved. Contact us:{" "}
                <a href="mailto:info@skillscale.com" className="text-blue-400">
                  info@skillscale.com
                </a>
              </p>
              <div className="flex justify-center space-x-4">
                <p className="mb-4">Created By: Jaison T Jacob</p>
              </div>
            </Container>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
