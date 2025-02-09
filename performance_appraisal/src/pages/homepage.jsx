import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../assets/images.png';
import bimg from '../assets/homeb.jpg';
import simg from '../assets/home.jpg';

function HomePage() {
  return (
    <>
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
            <Nav.Link href="/goal" className="text-gray-700 hover:text-blue-500 px-3">GOAL</Nav.Link>
            <Nav.Link href="/feedback" className="text-gray-700 hover:text-blue-500 px-3">FEEDBACK</Nav.Link>
            <Nav.Link href="/Appraisal" className="text-gray-700 hover:text-blue-500 px-3">APPRAISAL DASHBOARD</Nav.Link>
            <Nav.Link href="/Analytics" className="text-gray-700 hover:text-blue-500 px-3">ANALYTICS AND REP</Nav.Link>
            <Nav.Link href="/review" className="text-gray-700 hover:text-blue-500 px-3">REVIEW</Nav.Link>

            {/* Profile Dropdown */}
            <NavDropdown
              title={
                <img
                  src={img} // Replace with actual image URL
                  alt="Profile"
                  className="rounded-full"
                  width="40"
                  height="40"
                />
              }
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#profile" className="text-gray-700 hover:bg-gray-100">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/login" className="text-gray-700 hover:bg-gray-100">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${bimg})`}} // Replace with your background image URL
      >
         
        <section className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Welcome to the SkillScale</h2>
          <p className="text-lg text-gray-700 max-w-2xl mb-6">
            SkillScale is designed to help organizations track, evaluate, and improve employee performance. With our system, you can set goals, provide feedback, and generate detailed reports to ensure continuous growth and development.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mb-6">
            Whether you're a manager looking to assess your team's performance or an employee seeking to understand your progress, our platform provides the tools you need to succeed. Explore our features and take the first step towards a more efficient and transparent appraisal process.
          </p>
          
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white-800 text-black py-2">
        <Container className="text-center">
          <p className="mb-4 text-black">&copy; 2025 SkillScale. All rights reserved.  Contact us: <a href="mailto:info@skillscale.com" className="text-blue-400">info@skillscale.com</a></p>
          <div className="flex justify-center space-x-4">
            <p className="mb-4">Created By : Jaison T Jacob</p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default HomePage;

