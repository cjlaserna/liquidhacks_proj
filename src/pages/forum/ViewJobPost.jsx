import { DateTime } from "luxon";
import { useEffect, useRef, useState } from "react";
import { Card, Container, Button, Form } from "react-bootstrap";
import { useParams } from "react-router";
import ModalForm from "../../layout/ModalForm";
import { supabase } from "../../supabase/supabaseClient";
import { useForm } from "../../useHooks/useForm";
import useModal from "../../useHooks/useModal";
import { Loader } from "../../utils/Loader";
import Forum from "./Forum";
import { Link } from "react-router-dom";

import { MdPersonOutline } from 'react-icons/md';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
const ViewJobPost = ({ profile }) => {
  const { viewId } = useParams();
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState(null);
  const isMounted = useRef(true);
  const initJob = profile
    ? {
        title: "",
        description: "",
        commenter: profile.id,
        jobid: viewId,
      }
    : null;

  useEffect(() => {
    const fetchJobPosts = async () => {
      isMounted.current = true;
      if (isMounted.current) {
        setLoading(true);
        setErrorMessage(false);
      }
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select(
            "*, profiles:owner(username), comments:comments(*, profiles:commenter(username))"
          )
          .eq("id", viewId)
          .single();

        if (error) throw error;
        isMounted.current && setJobs(data);
      } catch (error) {
        if (isMounted.current) {
          setJobs(null);
          setErrorMessage(true);
        }
      } finally {
        isMounted.current && setLoading(false);
      }
    };
    fetchJobPosts();
    return () => {
      isMounted.current = false;
    };
  }, [viewId]);
  const fetchJobComment = async () => {
    setLoading(true);
    setErrorMessage(false);

    try {
      const { data, error } = await supabase
        .from("jobs")
        .select(
          "*, profiles:owner(username), comments:comments(*, profiles:commenter(username))"
        )
        .eq("id", viewId)
        .single();

      if (error) throw error;
      setJobs(data);
    } catch (error) {
      if (isMounted.current) {
        setJobs(null);
        setErrorMessage(true);
      }
    } finally {
      setLoading(false);
    }
  };
  const { show, handleClose, handleShow } = useModal();
  const authenticated = !profile ? true : false;
  const addComments = (comment) =>
    setJobs((j) => ({ ...j, comments: [...j.comments, comment] }));
  return (
    <Forum>
      <Container className="jobpost--container">
        <Link to="/forum/job"><Button variant="primary"> <IoArrowBackCircleSharp className="float-start icon"/>&nbsp; Back to Browsing</Button></Link>
        <Loader loading={loading} error={errorMessage}>
          {jobs && <JobCard job={jobs} />}
          <h2>Comments: </h2>
          {profile && (
            <CommentForm
              initJob={initJob}
              show={show}
              handleClose={handleClose}
              fetchJobComment={fetchJobComment}
              userName={profile.username || null}
              addComments={(x) => addComments(x)}
            />
          )}
          <Button
            variant="primary"
            disabled={authenticated}
            onClick={handleShow}
          >
            Add a Comment
          </Button>
          <section className="my-4 p-4  overflow-auto comment-cards ">
            {jobs && jobs.comments.map((j) => <JobCard job={j} key={j.id} />)}
          </section>
        </Loader>
      </Container>
    </Forum>
  );
};

export default ViewJobPost;

const JobCard = ({ job }) => {
  const createdDate = new Date(job.created_at);
  const cDate = DateTime.fromJSDate(createdDate);

  return (
    <Card className="my-4"> 
      <Card.Header className="text-left">{job.profiles.username} < MdPersonOutline className="icon float-end" /></Card.Header>
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>

        <Card.Text>{job.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted text-right">
        {cDate.toLocaleString(DateTime.DATETIME_FULL)}
      </Card.Footer>
    </Card>
  );
};

const CommentForm = ({ show, handleClose, initJob, userName, addComments }) => {
  const onUpdate = async () => {
    const { data } = await supabase.from("comments").insert(form).single();
    const userNew = { ...data, profiles: { username: userName } };
    addComments(userNew);
    resetChanges();
    handleClose();
  };

  const { form, handleChange, onSubmit, resetChanges } = useForm(
    initJob,
    onUpdate
  );
  return (
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
  );
};
