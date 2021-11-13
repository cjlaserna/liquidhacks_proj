import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const gameList = [
  {
    name: "Esports101",
    img: "https://thumbs.dreamstime.com/b/big-esports-event-video-games-fan-tribune-tournament-s-arena-hands-raised-cheering-his-favorite-team-big-esports-160802904.jpg",
  },
  {
    name: "Coaching",
    img: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2014/07/23/1331666235208_2/esports-coach",
  },
  {
    name: "Streaming",
    img: " https://image.shutterstock.com/image-photo/young-gamer-playing-strategy-online-260nw-1481295836.jpg",
  },
  {
    name: "CS:GO",
    img: "https://cdn.talkesport.com/wp-content/uploads/CSGO-Operation-10-Details-696x392.jpg",
  },
  {
    name: "LeagueofLegends",
    img: "https://static.techspot.com/images2/news/bigimage/2015/12/2015-12-18-image-4.jpg",
  },
  { name: "Valorant", img: "https://wallpaperaccess.com/full/3037903.jpg" },
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
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>

        <Button variant="primary" as={Link} to={`${props.name}`}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  </Col>
);
