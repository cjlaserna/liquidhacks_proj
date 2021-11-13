import "./landingpage.css";
import {
  Button,
  Col,
  Container,
  Card,
  Row,
  Carousel,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import previmg_1 from "../../assets/courses/esports101.jpg";
import previmg_2 from "../../assets/courses/coaching.jpg";
import previmg_3 from "../../assets/courses/streaming.jpg";

import jackfenton from "../../assets/mentors/jackfenton.png";
import naraparker from "../../assets/mentors/naraparker.jpg";
import davidmills from "../../assets/mentors/davidmills.jpg";

export default function Home() {
  return (
    <main>
      <div className="hero--container">
        <Row>
          <Col md={{ offset: 6 }}>
            <h1 className="hero__heading">LiquidEdu</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 6 }}>
            <p className="desc">
              A global online learning platform aimed at promoting different
              roles within the esports workspace through courses from leading
              industry professionals.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 6 }}>
            <Link to="/about">
              <Button variant="outline-light" size="lg">
                Learn More
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
      <Container className="content--card">
        <Row>
          <Col>
            <h1 className="heading">Esports 101</h1>
            <p className="desc">
              Esports is a term used for competitive gaming. In esports, games
              revolve around PvP gameplay. These games include titles like:
              <ul>
                <li>League of Legends</li>
                <li>Counter-Strike: GO</li>
                <li>...and all sorts of vastly different games.</li>
              </ul>
              One of the most misunderstood element of entering the esports
              scene is that there's only room for players within the space.
              However, organizations seek out a variety of employees, roles are
              almost never limited to gamers. In this course, we'll explore
              esports in it's entirety and break down the stigma surrounding it.
            </p>
            <div className="float-end">
              <Link to="/Courses">
                <Button variant="outline-primary">Read More...</Button>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="preview"></div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="courses--container container--full">
        <Container>
          <h1 className="heading">Courses</h1>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col>
                  <Card>
                    <Container>
                      <Card.Img variant="top" src={previmg_1} />
                      <Card.ImgOverlay>
                        <span className="text-muted citation">
                          {" "}
                          Photo by{" "}
                          <a href="https://unsplash.com/@florianolv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Florian Olivo
                          </a>{" "}
                          on{" "}
                          <a href="https://unsplash.com/s/photos/esports?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash
                          </a>
                        </span>
                      </Card.ImgOverlay>
                    </Container>
                    <Card.Title className="desc">
                      <strong>Esports 101</strong>
                    </Card.Title>
                    <Card.Text className="desc">
                      A free general introduction to the world of esports.
                    </Card.Text>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Container>
                      <Card.Img variant="top" src={previmg_2} />
                      <Card.ImgOverlay>
                        <span className="text-muted citation">
                          {" "}
                          Photo by{" "}
                          <a href="https://unsplash.com/@tannerboriack?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Tanner Boriack
                          </a>{" "}
                          on{" "}
                          <a href="https://unsplash.com/s/photos/streaming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash
                          </a>
                        </span>
                      </Card.ImgOverlay>
                    </Container>
                    <Card.Title className="desc">
                      <strong>Coaching</strong>
                    </Card.Title>
                    <Card.Text className="desc">
                      A quick guide peeking into the collaborative work of
                      coaching.
                    </Card.Text>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Container>
                      <Card.Img variant="top" src={previmg_3} />
                      <Card.ImgOverlay>
                        <span className="text-muted citation">
                          {" "}
                          Photo by{" "}
                          <a href="https://unsplash.com/@uusaez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Fausto Sandoval
                          </a>{" "}
                          on{" "}
                          <a href="https://unsplash.com/s/photos/esports?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash
                          </a>
                        </span>
                      </Card.ImgOverlay>
                    </Container>
                    <Card.Title className="desc">
                      <strong>Streaming</strong>
                    </Card.Title>
                    <Card.Text className="desc">
                      Explore the spaces within the likes of Twitch and Youtube.
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
      <Container className="price--container" fluid>
        <Container>
          <Row>
            <Col>
              <p id="price">
                <span>$9.99</span>
                <span>/month</span>
              </p>
              <p className="desc">
                This plan unlocks all courses and features within LiquidEdu.
              </p>
            </Col>
            <Col>
              <p className="desc">
                A plan for anyone looking into entering the field of esports and
                exploring careers within the scene.
              </p>
              <div className="mb-2">
                <Button variant="outline-primary" size="lg">
                  Buy Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="mentors--container container--full" fluid>
        <h1 className="heading text-center">Our Mentors</h1>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={jackfenton} />
                <Card.Title>Jack Fenton</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Head of WarwickU Esports
                </Card.Subtitle>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={naraparker} />
                <Card.Title>Nara Parker</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Proffesional Coach
                </Card.Subtitle>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={davidmills} />
                <Card.Title>David Mills</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Proffesional Coach
                </Card.Subtitle>
              </Card>
            </Col>
          </Row>
          <span className="text-muted citation">
            Photos{" "}
            <a href="https://unsplash.com/@cikstefan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              {" "}
              from Unsplash
            </a>
          </span>
        </Container>
      </Container>
      <Container className="contact--container">
        <Row>
          <Col>
            <div className="preview"></div>
          </Col>
          <Col>
            <h1 className="heading">Contact Us</h1>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" placeholder="Message" rows={10} />
              </Form.Group>
              <div className="mb-2">
                <Button variant="outline-primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
}