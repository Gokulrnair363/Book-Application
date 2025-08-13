import { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate, } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Header = (inside) => {
  const {  logout } = useContext(AuthContext);
  const navigate = useNavigate();


  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand onClick={() => navigate("/books")} style={{ cursor: "pointer" }}>
           MyBookApp
        </Navbar.Brand>
        {inside&& (
          <Nav className="ms-auto">
            <Button
              variant="outline-light"
              className="me-2"
              onClick={() => navigate("/books")}
            >
              Home
            </Button>
            <Button variant="outline-light" onClick={logout}>
              Logout
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
