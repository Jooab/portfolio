import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  StyledFontAwesomeIcon,
  StyledHeader,
  StyledUl,
  StyledDiv,
  StyledNav,
} from "./css";
import {
  faUser,
  faScrewdriverWrench,
  faFileLines,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { InViewContext } from "../../contexts/inViewContext";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { sectionInView } = useContext(InViewContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledHeader>
      <p>
        <StyledFontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:joab.prattes@gmail.com">joab.prattes@gmail.com</a>
      </p>
      <StyledDiv className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </StyledDiv>
      {isOpen && (
        <StyledNav >
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
      </StyledNav>
      )}
    </StyledHeader>
  );
};
