import "./aboutpage.css";

import { Button, Col, Container, Row, Form } from "react-bootstrap";

export default function About() {
  return (
    <main className="about">
      <Container fluid className="hero">
        <Container>
          <Row>
            <Col>
              <h2 className="heading">All About</h2>
              <h1 className="brand">
                Liquid<span>Edu</span>
              </h1>
            </Col>
            <Col>
              <p className="desc">
                A global online learning platform aimed at promoting different
                roles within the esports workspace through courses from leading
                industry professionals.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="content--card">
        <Container>
          <Row>
            <Col>
              <h1 className="brand">
                Liquid<span>Edu</span>
              </h1>
              <p className="desc">
                With the massive growth of the esports industry totaling up to a
                worth of over $1B in 2021, the importance of educating the
                public about the industry has been evident.
                <div className="col-md-12 bs-linebreak" />
                Along with the growing esports industry, more companies gain
                interest in breaking in or taking part within the space.
                Therefore, It is imperative to give key stakeholders a better
                understanding towards the industry.
                <div className="col-md-12 bs-linebreak" />
                LiquidEdu aims to convey a better understanding on how others
                are able to transfer or elevate their skills to roles within the
                esports scene.
                <div className="col-md-12 bs-linebreak" />
                A majority of esports interest revolve around being a player or
                a streamer. However, there are roles in the industry that go
                beyond gaming. The black box surrounding the scene coupled with
                the stigma around work in esports discourage a lot of early
                interest in students.
                <div className="col-md-12 bs-linebreak" />
                By providing accessible resources to students with an interest
                in esports, they are better prepared to enter the industry, in
                any role they feel they fit.
                <div className="col-md-12 bs-linebreak" />
                In summary, LiquidEdu allows esports enthusiasts to understand
                the industry through courses designed by proffesionals.
              </p>
            </Col>
            <Col>
              <div className="preview"></div>
            </Col>
          </Row>
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
                <Button variant="outline-light" size="lg">
                  Buy Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="content--card">
        <Container>
          <Row>
            <Col>
              <h1 className="heading">Frequently Asked Questions</h1>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing vulputate convallis ipsum suspendisse nibh turpis id
                sed risus.
                <div className="col-md-12 bs-linebreak" />
                At ornare donec porttitor scelerisque proin vestibulum odio
                adipiscing condimentum.
                <div className="col-md-12 bs-linebreak" />
                Mattis varius morbi et nunc vulputate turpis nisl maecenas et.
                Elementum mauris, nisi tempus, venenatis eleifend. Quis morbi id
                non urna ipsum. Nam orci egestas ipsum, tempor. Ut nisi, duis
                posuere sit faucibus phasellus.
                <div className="col-md-12 bs-linebreak" />
                Ultricies justo nisl magna sollicitudin. Commodo proin sagittis,
                augue etiam gravida. Diam sem enim aliquet massa risus
                pellentesque mattis justo ac.
                <div className="col-md-12 bs-linebreak" />
                Nisl et habitant facilisis nunc. Enim, vitae, ullamcorper eu at.
                Porta mi risus et lacus. Augue sit posuere faucibus ultricies
                non sed id. A eleifend est cras orci, lectus.
                <div className="col-md-12 bs-linebreak" />
                Tristique aliquet mauris ornare morbi malesuada eget.
                Scelerisque arcu hendrerit integer quis arcu.
                <div className="col-md-12 bs-linebreak" />
                At dictumst diam dictum scelerisque elit, massa. Erat adipiscing
                faucibus iaculis enim, orci mi.
                <div className="col-md-12 bs-linebreak" />
                Ultricies diam pellentesque lorem consectetur justo arcu, diam
                at. Elit facilisis senectus maecenas condimentum nulla
                malesuada.
              </p>
            </Col>
          </Row>
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
