import { useState } from "react";
import { Card, Col, Container, Row, Breadcrumb } from "react-bootstrap";
import { useParams } from "react-router";
import "./course.css";

import { Link } from "react-router-dom";

const course = [
  {
    id: 1,
    title: "Section 1: Understanding the game",
    link: "Vrh3ELlhdsA",
  },

  {
    id: 2,
    title: "Section 2: Understanding different roles",
    link: "KIJkRv6HM6M",
  },
  {
    id: 3,
    title: "Section 3: Working as a team",
    link: "dvkJTBm1sEc",
  },
  {
    id: 4,
    title: "Section 4",
    link: "ILY1sM7jgmM",
  },
  { id: 9000, title: "Liquid Plus", link: "s7IRqVrEeVM" },
  {
    id: 5,
    title: "Section 5",
    link: "C-BGtFws6iY",
  },
  {
    id: 6,
    title: "Section 6",
    link: "cJLhBdXKqrk",
  },
  {
    id: 7,
    title: "Section 7",
    link: "PgoS0TP4bnQ",
  },
];
const Course = () => {
  const { name } = useParams();
  const [selection, setSelection] = useState({
    id: 1,
    title: "intro",
    link: "Vrh3ELlhdsA",
  });
  return (
    <Container className="course__container py-4">
      <Breadcrumb className="forum--breadcrumbs">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/courses">Courses</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{name}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="heading">{name} Course</h1>
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
    className="my-2"
  >
    <Card.Body onClick={props.setSelection} className="course-sectionlist-item">
      <Card.Title>{props.title}</Card.Title>
    </Card.Body>
  </Card>
);
