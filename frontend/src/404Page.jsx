/** @format */

import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={5}>
          <h1 className="text-center mb-4">Page Not Found</h1>
          <div className="text-center mt-3">
           <Link to="/" className="text-center">Home page</Link>
            </div>
        </Col>
      </Row>
    </Container>
  );
}
