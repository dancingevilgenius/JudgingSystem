import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function ContestantNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" variant="">
      <Container>
        <Navbar.Brand href="#home">Adv Country Swing</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <button>Logout</button>
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <NavDropdown title="Order by" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Bib #</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Raw Score</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Not Scored at top
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.5">
              Leader First Name
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.6">Leader Last Name</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.7">
              Follower First Name
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.8">
              Follower Last Name
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ContestantNavBar;
