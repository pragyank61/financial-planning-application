import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light" as={Link} to="/signup">Signup</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNav;
