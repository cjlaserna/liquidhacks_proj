import { Col, Row } from "react-bootstrap";
import "./forum.css";
import ForumSideBar from "./ForumSideBar";

const Forum = ({ children }) => {
  return (
    <main className="forum__container">
      <section className="forum--bar" />
      <section className="bd-highlight forum--banner d-flex flex-row align-content-center flex-wrap p-2">
        <article className="p-4" style={{ flex: "1 0 " }}>
          <div className="banner--logo">
            <h1>Liquid EDU FORUM</h1>
          </div>
        </article>
        <article className="p-4" style={{ flex: "1 0 " }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            velit dictumst in vel rhoncus. Aliquet eget nunc et pretium morbi.
            Pharetra, luctus volutpat quam odio blandit porttitor posuere.
            Aliquam at dictum a aliquam faucibus odio magna lectus neque. Eu
            fermentum velit ultricies amet donec porta placerat risus.{" "}
          </p>
        </article>
      </section>

      <Row as="section" className="forum__content d-flex flex-row ">
        <Col as="article" className="forum__sidebar" md={4} xs={12}>
          <ForumSideBar />
        </Col>
        <Col as="article" className="forum__jobs " xs={12} md={8}>
          {children}
        </Col>
      </Row>
    </main>
  );
};

export default Forum;
