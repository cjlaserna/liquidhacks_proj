import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";

export default function NavigationBar() {
  const logOut = async () => await supabase.auth.signOut();
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>{" "}
        <Nav className="mr-auto">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/login">
              Login
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/register">
              Register
            </NavDropdown.Item>

            <NavDropdown.Item onClick={() => logOut()}>Logout</NavDropdown.Item>
          </NavDropdown>{" "}
        </Nav>
      </Container>
    </Navbar>
  );
}
