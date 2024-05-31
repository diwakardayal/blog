/** @format */

import { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { validateFormFields } from "../utils";
import { toast } from "react-toastify";
import { login } from "../services/user";
import { useAuth } from "../hooks";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setUserInfoHandler } = useAuth();

  async function handleLogin(e) {
    try {
      if (e) e.preventDefault();

      console.log(email, password);
      const { error } = validateFormFields(email, password);

      if (error) {
        toast.error(error);
        return;
      }

      const userData = {
        email,
        password,
      };

      const res = await toast.promise(login(userData), {
        pending: "Processing…",
        success: "Logged In. Redirecting…",
        error: "Logging failed. Please try again.",
      });

      if (res) {
        setTimeout(() => {
          setUserInfoHandler(res);
          navigate("/admin");
        }, 1500);
      }
    } catch (e) {
      console.log("e");
    }
  }

  async function guestLogin(e) {
    setEmail("diwakardayal65@gmail.com");
    setPassword("diwakar");
    await handleLogin(e);
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={5}>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" block className="mt-3">
              Login
            </Button>
            <div>
              <Button
                variant="primary"
                block
                className="mt-3"
                onClick={guestLogin}
              >
                Use Guest Credentials
              </Button>
            </div>

            <div className="text-center mt-3">
              <Link to="/register">User Registration ?</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
