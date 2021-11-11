import { useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { supabase } from "../../supabase/supabaseClient";
import { Loader } from "../../utils/Loader";
import Forum from "./Forum";
import { DateTime } from "luxon";
const Job = ({ profile }) => {
  const [jobs, setJobs] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

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
  // const newJob = async (jobForm) => {
  //   setLoading(true);
  //   setErrorMessage(false);
  //   try {
  //     const { data, error } = await supabase

  //       .from("jobs")
  //       .insert(jobForm)
  //       .single();
  //     if (error) throw error;
  //     setJobs((j) => [...j, data]);
  //   } catch (error) {
  //     setErrorMessage(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const authenticated = !profile ? true : false;
  return (
    <Forum>
      <Container>
        <h1>Esports Job and Industry Discussion</h1>
        <Button
          disabled={authenticated}
          variant="primary"
          // onClick={() => newJob(example)}
        >
          New
        </Button>{" "}
        <Button variant="primary">Top</Button>{" "}
        <Button variant="primary">Hot</Button>
        <Button variant="primary">Start a Discussion</Button>
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
    <Card className="text-center my-4 box-shadow">
      <Card.Header>{job.profiles.username}</Card.Header>
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>

        <Button variant="primary">Check It Out</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        {cDate.toLocaleString(DateTime.DATETIME_FULL)}
      </Card.Footer>
    </Card>
  );
};
