import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarBs sticky='top' className='navbar navbar-dark bg-dark'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>About</Nav.Link>
          <Nav.Link to={"/menu"} as={NavLink}>Menu</Nav.Link>
          <Nav.Link to={"/contact"} as={NavLink}>Contact</Nav.Link>
          <Nav.Link to={"/reservations"} as={NavLink}>Reservations</Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar
