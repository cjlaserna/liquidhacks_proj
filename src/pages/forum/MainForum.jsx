import { Container } from "react-bootstrap";
import Forum from "./Forum";

import { MdOutlineLocalPolice, MdOutlineStarBorderPurple500 } from 'react-icons/md';


const MainForum = () => {
  return (
    <Forum>
      <Container fluid className="mainforum--container">
        <Container>
        <h2 className="heading"><MdOutlineLocalPolice className="icon float-start"/> FORUM RULES: </h2>
          <ul className="desc">
            <li>
              No Spam / Advertising / Self-promote in the forums
            </li>
            <li>
              Do not post “offensive” posts, links or images
            </li>
            <li>
              Remain respectful of other members at all times
            </li>
            <li>
              Do not abuse the space, or exploit other members.
            </li>
          </ul>
          <h2 className="heading"><MdOutlineStarBorderPurple500 className="icon float-start"/> Announcements </h2>
          <ul className="desc">
            <li>
              This site was deployed through Netlify :)
            </li>
            <li>
              Collaborating members include Kannen, Nathan, Sean, and Catherine!
            </li>
            <li>
              Developed within Team Liquid's annual Hackathon, Liquid Hacks!
            </li>
            <li>
              Here's some more sample text
            </li>
          </ul>
        </Container>
      </Container>
    </Forum>
  );
};

export default MainForum;
