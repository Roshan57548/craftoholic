import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from '../../Image/logo.png';
import './Style/Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} id="Header-Brands">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link onClick={() => navigate("/")} id="Header-links">Home</Nav.Link>
            <Nav.Link eventKey={2} onClick={() => navigate("/About-Us")} id="Header-links">
            About Us
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/Gallary")}  id="Header-links">Gallary</Nav.Link>
            <Nav.Link onClick={() => navigate("/Contact-Us")}  id="Header-links">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
