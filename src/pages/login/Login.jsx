import { useState } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { Navigate } from "react-router";
import { supabase } from "../../supabase/supabaseClient";
import { useForm } from "../../useHooks/useForm";
const initiForm = {
  email: "",
  password: "",
};
const Login = ({ session }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleRegister = async () => {
    try {
      setErrorMessage(false);
      setLoading(true);
      const { error } = await supabase.auth.signIn(form);
      if (error) throw error;
    } catch (error) {
      setErrorMessage("error loading");
    } finally {
      setLoading(false);
    }
  };
  const { form, handleChange, onSubmit } = useForm(initiForm, handleRegister);
  if (session && !loading && !errorMessage) {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <h1>Login </h1>
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

        <Button disabled={loading} variant="primary" type="submit">
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
            "Submit"
          )}
        </Button>
        <p>{errorMessage}</p>
      </Form>
    </Container>
  );
};
export default Login;
