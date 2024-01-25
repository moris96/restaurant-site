import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <NavbarBs sticky='top' className='navbar navbar-custom navbar-dark bg-dark'>
      <Container>
        {/* Logo */}
        {/* <img src="./public/images/logo.jpg" alt="Logo" width={100} height={100} /> */}

        {/* Title */}
        <h1 className='title'>Hobbiton Bistro</h1>
          
        {/* Navigation */}
        <Nav className='ms-auto'>
          <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
          <Nav.Link to={"/menu"} as={NavLink}>Menu</Nav.Link>
          <Nav.Link to={"/reservations"} as={NavLink}>Reservations</Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar
