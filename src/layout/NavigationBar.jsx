import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";
import "./navbar.css";

export default function NavigationBar({ profile }) {
  const logOut = async () => await supabase.auth.signOut();
  const name = profile ? profile.username : "Guest";
  // console.log(name);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            LIQUID<span>EDU</span>
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
                  Hello {name}
                </NavDropdown.Item>
                {!profile ? (
                  <>
                    {" "}
                    <NavDropdown.Item as={Link} to="/login">
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/register">
                      Register
                    </NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item onClick={() => logOut()}>
                      Logout
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/settings">
                      Settings
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
