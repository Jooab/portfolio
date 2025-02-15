import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { StyledAside, StyledFontAwesomeIcon } from "./css";

export const Contacts = () => {
  return (
    <StyledAside>
      <ul>
        <li>
          <a href="https://github.com/Jooab" target="_blank">
            <StyledFontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/joab-prates/" target="_blank">
            <StyledFontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/5577981682828" target="_blank">
            <StyledFontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
      </ul>
    </StyledAside>
  );
};
