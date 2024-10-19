import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
  const location = useLocation(); // Get the current location
  const [activeTab, setActiveTab] = useState(location.pathname); // Set the active tab based on current route

  return (
    <Navbar expand="lg" className="bg-body-tertiary nav">
      <Container>
        <Navbar.Brand as={Link} to="/home" onClick={() => setActiveTab('/home')}>Sujit Dhotre</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/home" 
              active={activeTab === '/home'} 
              onClick={() => setActiveTab('/home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              active={activeTab === '/about'} 
              onClick={() => setActiveTab('/about')}
            >
              About Me
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/project" 
              active={activeTab === '/project'} 
              onClick={() => setActiveTab('/project')}
            >
              Project
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/skills" 
              active={activeTab === '/skills'} 
              onClick={() => setActiveTab('/skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/experience" 
              active={activeTab === '/experience'} 
              onClick={() => setActiveTab('/experience')}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              active={activeTab === '/contact'} 
              onClick={() => setActiveTab('/contact')}
            >
              Contact Me
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
