/** @format */
import { Navbar, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{ maxWidth: "80%" }}>
        <Row className="w-100">
          <Col className="d-flex align-items-center justify-content-between">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Navbar.Brand href="#">Blog</Navbar.Brand>
            </Link>
            <Button variant="outline-primary">Login</Button>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
