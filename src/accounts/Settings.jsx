import { useState } from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
import { supabase } from "../supabase/supabaseClient";
import { useForm } from "../useHooks/useForm";

const Settings = ({ profile }) => {
  const profileForm = {
    username: profile.username,
  };
  const [sucess, setSucess] = useState(false);
  const updateProfile = async () => {
    await supabase.from("profiles").update(form).match(profileForm);

    setSucess(true);
  };

  const { form, handleChange, onSubmit } = useForm(profileForm, updateProfile);
  return (
    <Container className="my-4 py-4 min-vh-100">
      <h1>SETTINGS</h1>
      {!sucess ? (
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Change username</Form.Label>
            <Form.Control
              value={form.username}
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="Enter username "
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {" "}
            Update
          </Button>
        </Form>
      ) : (
        <>
          <h1>Updated</h1>
          <Image
            src="https://c.tenor.com/Hb_1tdjj6UYAAAAi/lets-go-liquid-blue.gif"
            alt="dance"
          />
        </>
      )}
    </Container>
  );
};

export default Settings;
