import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar2() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/homepage">Veer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/homepage">Home</Nav.Link>
          <Nav.Link as={Link} to="/aboutpage">About Us</Nav.Link>
          <Nav.Link as={Link} to="/editprofile">Edit Profile</Nav.Link>
          <Nav.Link as={Link} to="/manageusers">Manageusers</Nav.Link>
          <Nav.Link as={Link} to="/">Logout</Nav.Link>
             {/* <NavDropdown title="Account" id="basic-nav-dropdown"> */}
            {/* <NavDropdown.Item href="/editprofile">Edit Profile</NavDropdown.Item> */}
            {/* <NavDropdown.Item href="/logout">Logout</NavDropdown.Item> */}
          {/* </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar2;
