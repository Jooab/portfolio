import { StyledFontAwesomeIcon, StyledHeader, StyledUl } from "./css";
import {
  faUser,
  faScrewdriverWrench,
  faFileLines,
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { InViewContext } from "../../contexts/inViewContext";
import { HamburgerMenu } from "../hamburguerMenu";

export const Header = () => {
  const { sectionInView } = useContext(InViewContext);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HamburgerMenu />

      <StyledHeader data-aos="fade">
        <p>
          <StyledFontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:joab.prattes@gmail.com">joab.prattes@gmail.com</a>
        </p>

        <nav>
          <StyledUl>
            <li
              onClick={() => scrollToSection("begin")}
              className={sectionInView === "begin" ? "active" : ""}
            >
              <StyledFontAwesomeIcon icon={faHouse} />
              Início
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className={sectionInView === "about" ? "active" : ""}
            >
              <StyledFontAwesomeIcon icon={faUser} />
              Sobre
            </li>
            <li
              onClick={() => scrollToSection("skills")}
              className={sectionInView === "skills" ? "active" : ""}
            >
              <StyledFontAwesomeIcon icon={faScrewdriverWrench} />
              Habilidades
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className={sectionInView === "projects" ? "active" : ""}
            >
              <StyledFontAwesomeIcon icon={faFileLines} />
              Projetos
            </li>
          </StyledUl>
        </nav>
      </StyledHeader>
    </>
  );
};
