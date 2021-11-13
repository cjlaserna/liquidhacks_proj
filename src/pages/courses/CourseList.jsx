import { Card, Col, Container, Row, Button, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const gameList = [
  { name: "Esports101  " },
  { name: "Coaching" },
  { name: "Streaming" },
  { name: "CS:GO" },
  { name: "LeagueofLegends" },
  { name: "Valorant" },
  { name: "Fortnite" },
  { name: "Dota2" },
  { name: "RocketLeague" },
];

const CourseList = () => {
  return (
    <Container className="courselist--container">
      <Breadcrumb className="forum--breadcrumbs">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Courses</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="hero heading">Our Courses</h1>
      <Row>
        {gameList.map((g) => (
          <SomeCard {...g} />
        ))}
        )
      </Row>
    </Container>
  );
};

export default CourseList;

const SomeCard = (props) => (
  <Col md={4} className=" py-4">
    <Card style={{ width: "100%", height: "500px" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/100" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>

        <Button className="float-end" variant="primary" as={Link} to={`${props.name}`}>
          View this Course
        </Button>
      </Card.Body>
    </Card>
  </Col>
);
