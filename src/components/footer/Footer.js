import React from "react";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer py-5">
      <h3>Contact me</h3>
      <ul className="footer__list">
        <li>
          <a
            href="https://www.linkedin.com/in/dina-hassan-a09655138/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="fontAwesome"
              icon={faLinkedin}
              size="2x"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Dinakhaled"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="fontAwesome"
              icon={faGithubSquare}
              size="2x"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dina-hassan-a09655138/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="fontAwesome"
              icon={faEnvelopeSquare}
              size="2x"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
