import { useEffect, useState, useRef } from "react";
import { Container, Form, Button, Spinner, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { supabase } from "../../supabase/supabaseClient";
import { useForm } from "../../useHooks/useForm";
import { Link } from "react-router-dom";

import './login.css';

const initiForm = {
  email: "",
  password: "",
};
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const navigate = useNavigate();
  const handleRegister = async () => {
    let success = false;
    try {
      if (isMounted.current) {
        setErrorMessage(false);
        setLoading(true);
      }
      const { error, data } = await supabase.auth.signIn(form);
      if (error) throw error;
      if (data) {
        success = true;
      }
    } catch (error) {
      isMounted.current && setErrorMessage(error.message);
    } finally {
      isMounted.current && setLoading(false);
      if (success) {
        navigate("/");
      }
    }
  };
  const { form, handleChange, onSubmit } = useForm(initiForm, handleRegister);

  return (
    <Container fluid className="login--container">
      <Container className="login__box">
        <Row>
          <Col md={{ offset: 1 }}>
            <Container>
              <div className="banner--logo">
                <h1 className="brand">
                  Liquid<span>EDU</span>
                </h1>
              </div>
              <h1 className="heading"> Welcome Back! </h1>
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

              <Button
                disabled={loading}
                variant="primary"
                type="submit"
                className="float-end"
              >
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
                  "Login"
                )}
              </Button>
              <p>{errorMessage}</p>
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </Form>
          </Col>
          <Col xs={6} md={6} className="preview--container">
            <div className="preview"></div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Login;
