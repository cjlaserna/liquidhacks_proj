import { Col, Row, Breadcrumb, Container } from "react-bootstrap";
import "./forum.css";
import ForumSideBar from "./ForumSideBar";
import { Link } from "react-router-dom";

const Forum = ({ children }) => {
  return (
    <main className="forum__container">
      <Breadcrumb className="forum--breadcrumbs">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Forum</Breadcrumb.Item>
      </Breadcrumb>
      <section className="bd-highlight forum--banner d-flex flex-row align-content-center flex-wrap p-2">
        <Container>
          <Row>
            <Col>
              <article className="p-4">
                <div className="banner--logo">
                  <h1 className="brand">
                    Liquid<span>EDU FORUM</span>
                  </h1>
                </div>
              </article>
            </Col>
            <Col>
              <article className="p-4">
                <p className="desc">
                  LiquidEdu’s industry chat forum is a space to explore careers
                  and promote insights within esports. Please be courteous to
                  others and follow forum rules.
                  <div className="col-md-12 bs-linebreak" />
                  Check out the latest discussions on esports!
                </p>
              </article>
            </Col>
          </Row>
        </Container>
      </section>

      <Row as="section" className="forum__content d-flex flex-row ">
        <Col as="article" className="forum__sidebar" md={4} xs={12}>
          <ForumSideBar />
        </Col>
        <Col as="article" className="forum__jobs p-4 " xs={12} md={8}>
          {children}
        </Col>
      </Row>
    </main>
  );
};

export default Forum;
