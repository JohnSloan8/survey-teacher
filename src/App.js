import { Outlet, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand href="#home">LARA Questionnaire Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Link className="m-2" to="/creator">
                  Creator
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="m-2" to="/list">
                  List
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default App;
