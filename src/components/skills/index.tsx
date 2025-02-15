import { StyledUl, Container } from "./css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiGithub,
  SiStyledcomponents,
  SiReactrouter,
  SiJest,
  SiVite,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { useContext } from "react";
import { InViewContext } from "../../contexts/inViewContext";

export const Skills = () => {
  const { skillsRef } = useContext(InViewContext);

  return (
    <Container data-aos="fade-right" id="skills" ref={skillsRef}>
      <h1>Habilidades</h1>
      <StyledUl>
        <li>
          <SiHtml5 /> <p>HTML</p>
        </li>
        <li>
          <SiCss3 /> <p>CSS</p>
        </li>
        <li>
          <SiJavascript /> <p>JavaScript</p>
        </li>
        <li>
          <SiReact /> <p>React</p>
        </li>
        <li>
          <SiTypescript /> <p>TypeScript</p>
        </li>
        <li>
          <FaGitAlt /> <p>Git</p>
        </li>
        <li>
          <SiGithub /> <p>Github</p>
        </li>
        <li>
          <SiStyledcomponents /> <p>Styled Components</p>
        </li>
        <li>
          <SiReactrouter /> <p>React Router</p>
        </li>
        <li>
          <SiJest /> <p>Jest</p>
        </li>
        <li>
          <SiVite /> <p>Vite</p>
        </li>
      </StyledUl>
    </Container>
  );
};
