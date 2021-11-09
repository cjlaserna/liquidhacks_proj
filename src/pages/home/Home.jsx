import "./landingpage.css";
import {Button, Col, Container, Row} from 'react-bootstrap';

export default function Home() {
  return (
    <main>
      <div className="hero--container">
      <Row>
        <Col md={{offset: 6}}><h1 className="hero__heading">LiquidEdu</h1></Col>
      </Row>
      <Row>
        <Col md={{offset: 6}}><p className="hero__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit porttitor interdum lorem venenatis. Volutpat mi in turpis egestas ut sed imperdiet habitant donec.</p></Col>
      </Row>
      <Row>
        <Col md={{offset: 6}}><Button variant="outline-light" size="lg">Learn More</Button></Col>
      </Row>
      </div>
      <Container>
        <Row>
          <Col>
            <h1>Esports 101</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec morbi vel mi laoreet nec at. Sed tempor arcu aliquam id. Odio gravida egestas eu semper vulputate sed cras sagittis aliquam. Cras duis viverra vivamus amet gravida tristique vitae lectus tincidunt. Diam commodo, aliquet egestas aliquet convallis est. Placerat in semper integer neque lorem nunc, ultrices sed. Fames arcu mauris arcu accumsan. Tellus tempus nisi, libero blandit. Nulla accumsan morbi lectus nisi.</p>
          </Col>
        </Row>
      </Container>
    </main>
    
  );
}
