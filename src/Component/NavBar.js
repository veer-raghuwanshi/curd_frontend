import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Veer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/">Login</Nav.Link>
             {/* <NavDropdown title="Account" id="basic-nav-dropdown"> */}
            {/* <NavDropdown.Item href="/editprofile">Edit Profile</NavDropdown.Item> */}
            {/* <NavDropdown.Item href="/logout">Logout</NavDropdown.Item> */}
          {/* </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
