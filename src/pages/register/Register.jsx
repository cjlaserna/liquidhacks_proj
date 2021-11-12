import "./register.css";

import React, { useState } from "react";
import { Container, Form, Button, Spinner, Row, Col } from "react-bootstrap";
import { useForm } from "../../useHooks/useForm";
import { supabase } from "../../supabase/supabaseClient";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const initiForm = {
  email: "",
  password: "",
};
export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      setError(false);
      setLoading(true);
      const { error } = await supabase.auth.signUp(form);
      navigate("/");
      if (error) throw error;
    } catch (error) {
      setError("error loading");
    } finally {
      setLoading(false);
    }
  };
  const { form, handleChange, onSubmit } = useForm(initiForm, handleRegister);
  return (
    <Container fluid className="register--container">
      <Container className="register__box">
        <Row>
          <Col md={{ offset: 1 }}>
            <Container>
              <div className="banner--logo">
                <h1 className="brand">
                  Liquid<span>EDU</span>
                </h1>
              </div>
              <h1 className="heading"> Welcome! </h1>
            </Container>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Enter email"
                value={form.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                onChange={handleChange}
                value={form.password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button disabled={loading} variant="primary" type="submit" className="float-end">
              {loading ? (
                <>
                  {" "}
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  Loading
                </>
              ) : (
                "Register"
              )}
            </Button>
            <p>{error}</p>
            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </Form>
          </Col>
          <Col xs={6} md={6} className="preview--container"><div className="preview"></div></Col>
        </Row>
      </Container>
    </Container>
  );
}
