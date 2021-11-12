import { useEffect, useState } from "react";
import { Container, Button, Card, Form } from "react-bootstrap";
import { supabase } from "../../supabase/supabaseClient";
import { Loader } from "../../utils/Loader";
import Forum from "./Forum";
import { DateTime } from "luxon";
import useModal from "../../useHooks/useModal";
import ModalForm from "../../layout/ModalForm";
import { useForm } from "../../useHooks/useForm";
import { Link } from "react-router-dom";
const initJob = {
  title: "",
  description: "",
};
const Job = ({ profile }) => {
  const [jobs, setJobs] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const { show, handleClose, handleShow } = useModal();

  useEffect(() => {
    let isMounted = true;
    const fetchJobs = async () => {
      setLoading(true);
      setErrorMessage(false);
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select("*, profiles:owner(username)");
        if (isMounted) {
          if (error) throw error;
          setJobs(data);
        }
      } catch (error) {
        if (isMounted) {
          setJobs(null);
          setErrorMessage(true);
        }
      } finally {
        isMounted && setLoading(false);
      }
    };

    fetchJobs();

    return () => (isMounted = false);
  }, []);
  const newJob = async () => {
    const userForm = { ...form, owner: profile.id };
    setLoading(true);
    setErrorMessage(false);
    try {
      const { data, error } = await supabase
        .from("jobs")
        .insert(userForm)
        .single();
      if (error) throw error;
      const userNew = { ...data, profiles: { username: profile.username } };

      setJobs((j) => [...j, userNew]);
      resetChanges();
    } catch (error) {
      setErrorMessage(true);
    } finally {
      setLoading(false);
      !errorMessage && handleClose();
    }
  };
  const { form, handleChange, onSubmit, resetChanges } = useForm(
    initJob,
    newJob
  );
  const authenticated = !profile ? true : false;
  return (
    <Forum>
      <Container>
        <h1>Esports Job and Industry Discussion</h1>
        <Button
          variant="primary"
          // onClick={() => newJob(example)}
        >
          New
        </Button>
        <Button variant="primary">Top</Button>
        <Button variant="primary">Hot</Button>
        <Button variant="primary" disabled={authenticated} onClick={handleShow}>
          Start a Discussion
        </Button>
        <ModalForm show={show} handleClose={handleClose} title="Awesome TItle">
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="awesome title"
                value={form.title}
                name="title"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={form.description}
                name="description"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </ModalForm>
        <section className="my-4 p-4  overflow-auto job-cards">
          <Loader loading={loading} error={errorMessage}>
            {jobs.map((i) => (
              <JobCard key={i.id} job={i} />
            ))}
          </Loader>
        </section>
      </Container>
    </Forum>
  );
};

export default Job;

const JobCard = ({ job }) => {
  const createdDate = new Date(job.created_at);
  const cDate = DateTime.fromJSDate(createdDate);

  return (
    <Card className="text-center my-4 box-shadow" border="primary">
      <Card.Header>{job.profiles.username}</Card.Header>
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>

        <Button variant="primary" as={Link} to={`${job.id}`}>
          Check It Out
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        {cDate.toLocaleString(DateTime.DATETIME_FULL)}
      </Card.Footer>
    </Card>
  );
};
