/** @format */

import { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks";
import { validateFormFields } from "../utils";
import { toast } from "react-toastify";
import { register } from "../services/user";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { setUserInfoHandler } = useAuth();

  async function handleSignup(e) {
    try {
      e.preventDefault();

      if (!name || !password || !email) {
        toast.error("Please fill the form");
        return;
      }

      if (confirmPassword !== password) {
        toast.error("Password doesnt match");
        return;
      }

      const userData = {
        email,
        password,
        name,
      };

      const res = await toast.promise(register(userData), {
        pending: "Processing…",
        success: "User registration done. Redirecting…",
        error: "Registration failed. Please try again.",
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

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={5}>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="example@example.com"
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

            <Form.Group controlId="formBasicPassword" className="mt-4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" block className="mt-3">
              Sign Up
            </Button>

            <div className="text-center mt-3">
              <Link to="/login">Already have account ? Sign in </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
