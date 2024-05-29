/** @format */

import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignInForm() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={5}>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" block className="mt-3">
              Login
            </Button>

            <div className="text-center mt-3">
              <Link to="/register">User Registration ?</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
