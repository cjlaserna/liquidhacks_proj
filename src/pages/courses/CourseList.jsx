import { Card, Col, Container, Row, Button } from "react-bootstrap";
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
    <Container>
      <h1>List of Courses </h1>
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

        <Button variant="primary" as={Link} to={`${props.name}`}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  </Col>
);
