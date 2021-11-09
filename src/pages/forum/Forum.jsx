import { Image } from "react-bootstrap";
import "./forum.css";
import Logo from "./logo.png";
const Forum = () => {
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
    </main>
  );
};

export default Forum;
