/** @format */
import { Navbar, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks";

export default function Header() {
  const { user, handleLogout } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container style={{ maxWidth: "80%" }}>
        <Row className="w-100">
          <Col className="d-flex align-items-center justify-content-between">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Navbar.Brand href="#">Blog</Navbar.Brand>
            </Link>

            {user ? (
              <Button variant="outline-danger" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button variant="outline-primary">Login</Button>
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
