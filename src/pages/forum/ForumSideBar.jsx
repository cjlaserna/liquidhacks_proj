import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const ForumSideBar = () => {
  return (
    <Nav
      // defaultActiveKey="/home"
      as="ul"
      className="d-flex flex-column"
      variant="pills"
    >
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/forum">
          All Discussions
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action3">LiquidEDU</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Esport Landscape</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/forum/job">
          Jobs and Industry
        </NavDropdown.Item>
        <NavDropdown.Item href="#action5">Coaching</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Streaming</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Tournaments</NavDropdown.Item>
      </NavDropdown>

      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">My Posts</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Saved Posts</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default ForumSideBar;
