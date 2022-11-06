import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//Adapted from react-bootstrap documentation
//TODO: Add Login/Signup button on far right, add routing, currently don't route anywhere
function TopNavbar() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">UCLA Dining Hall Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Write A Review</Nav.Link>
            <NavDropdown title="Dining Halls" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">De Neve</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bruin Plate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Epicuria</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default TopNavbar;