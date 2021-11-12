import { useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./course.css";

const course = [
  {
    id: 1,
    title: "intro",
    link: "Vrh3ELlhdsA",
  },
  { id: 9000, title: "Liquid Plus", link: "s7IRqVrEeVM" },
  {
    id: 2,
    title: "Coinbase",
    link: "KIJkRv6HM6M",
  },
  {
    id: 3,
    title: "Team Liquid X Naruto",
    link: "dvkJTBm1sEc",
  },
  {
    id: 4,
    title: "Apex Legends 101",
    link: "ILY1sM7jgmM",
  },
  {
    id: 5,
    title: "Best Roster",
    link: "C-BGtFws6iY",
  },
  {
    id: 6,
    title: "Tstats show",
    link: "cJLhBdXKqrk",
  },
  {
    id: 7,
    title: "Scoped Joins Team Liquid",
    link: "PgoS0TP4bnQ",
  },
];
const Course = () => {
  const [selection, setSelection] = useState({
    id: 1,
    title: "intro",
    link: "Vrh3ELlhdsA",
  });
  return (
    <Container className="py-4 ">
      <h1>Liquid Course</h1>
      <Row>
        <Col className="course-col py-4" md={8}>
          <iframe
            src={`https://www.youtube.com/embed/${selection.link}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            style={{ height: "100%", width: "100%" }}
          />
        </Col>
        <Col className="course-col py-4" md={4}>
          <Container className="course-sidebar px-2 d-flex flex-column">
            {course.map((c) => (
              <CourseCard {...c} setSelection={() => setSelection(c)} />
            ))}
          </Container>
        </Col>
      </Row>
      <h1>{selection.title}</h1>
    </Container>
  );
};

export default Course;

const CourseCard = (props) => (
  <Card
    style={{ width: "100%", height: "200px" }}
    border="primary"
    className="my-2"
  >
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>

      <Button onClick={props.setSelection} variant="primary">
        Check it
      </Button>
    </Card.Body>
  </Card>
);
