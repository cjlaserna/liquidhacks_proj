import { Container } from "react-bootstrap";
import Forum from "./Forum";

const MainForum = () => {
  return (
    <Forum>
      <Container>
        <h2>FORUM RULES: </h2>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec morbi
            vel mi laoreet nec at. Sed tempor arcu aliquam id.
          </li>
          <li>
            Odio gravida egestas eu semper vulputate sed cras sagittis aliquam.
            Cras duis viverra vivamus amet gravida tristique vitae lectus
            tincidunt.
          </li>
          <li>
            Diam commodo, aliquet egestas aliquet convallis est. Placerat in
            semper integer neque lorem nunc, ultrices sed.
          </li>
          <li>
            Mauris mattis arcu sed mauris feugiat dapibus. Nulla sit amet nisi
            ac mi aliquet fermentum in.
          </li>
        </ul>
      </Container>
    </Forum>
  );
};

export default MainForum;
