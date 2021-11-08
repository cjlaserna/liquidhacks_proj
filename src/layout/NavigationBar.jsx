import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";

export default function NavigationBar() {
  const logOut = async () => await supabase.auth.signOut();
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          LIQUID EDU
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/courses">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/forum">
              Forum
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Accounts" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">
                Register
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => logOut()}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
