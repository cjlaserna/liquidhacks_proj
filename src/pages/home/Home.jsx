import "./landingpage.css";
import { Button, Col, Container, Card, Row, Carousel, Form } from "react-bootstrap";
import previmg_1 from "../../assets/courses/esports101.jpg";
import previmg_2 from "../../assets/courses/coaching.jpg";
import previmg_3 from "../../assets/courses/streaming.jpg";

import johndoe from "../../assets/mentors/johndoe.jpg";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              porttitor interdum lorem venenatis. Volutpat mi in turpis egestas
              ut sed imperdiet habitant donec.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 6 }}>
            <Button variant="outline-light" size="lg">
              Learn More
            </Button>
          </Col>
        </Row>
      </div>
      <Container className="content--card">
        <Row>
          <Col>
            <h1 className="heading">Esports 101</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec morbi
              vel mi laoreet nec at. Sed tempor arcu aliquam id. Odio gravida
              egestas eu semper vulputate sed cras sagittis aliquam. Cras duis
              viverra vivamus amet gravida tristique vitae lectus tincidunt.
              Diam commodo, aliquet egestas aliquet convallis est. Placerat in
              semper integer neque lorem nunc, ultrices sed. Fames arcu mauris
              arcu accumsan. Tellus tempus nisi, libero blandit. Nulla accumsan
              morbi lectus nisi.
            </p>
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
                      A free introduction to the world of esports.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
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
                <span>$000</span>
                <span>/year</span>
              </p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
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
              <Card.Img variant="top" src={johndoe} />
                <Card.Title>John Doe</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Proffesional Coach
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
        <span className="text-muted citation">Photos <a href="https://unsplash.com/@cikstefan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> from Unsplash</a></span>
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
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
