import {
  StyledSection,
  StyledUl,
  StyledLi,
  LiInfo,
  GoToProject,
  GoToRepo,
  Technologies
} from "./css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaGitAlt } from "react-icons/fa";
import { SiReact, SiStyledcomponents, SiReactrouter, SiVite, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { useContext } from "react";
import { InViewContext } from "../../contexts/inViewContext";

export const Projects = () => {
  const { projectsRef } = useContext(InViewContext);

  return (
    <StyledSection id="projects" ref={projectsRef}>
      <h1 data-aos="fade-right">Meus Projetos</h1>

      <StyledUl>
        <StyledLi data-aos="fade-right">
          <img src="/images/pokedex-thumb.png" alt="Pokedex" />
          <LiInfo>
            <h2>Pokedex</h2>
            <p>Pokedex que mostra os pokemons e suas informações</p>
            <GoToProject
              href="https://react-pokedex-seven-ivory.vercel.app"
              target="_blank"
            >
              <FontAwesomeIcon icon={faRightToBracket} />
            </GoToProject>
            <GoToRepo
              href="https://github.com/Jooab/react-pokedex"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </GoToRepo>
            <Technologies>
              <li>
                <SiReact />
              </li>
              <li>
                <SiStyledcomponents />
              </li>
              <li>
                <SiReactrouter />
              </li>
              <li>
                <SiVite />
              </li>
              <li>
                <FaGitAlt />
              </li>
            </Technologies>
          </LiInfo>
        </StyledLi>
        <StyledLi data-aos="fade-left">
          <img src="/images/tasty-treats-thumb.png" alt="Tasty Treats" />
          <LiInfo>
            <h2>Tasty Treats</h2>
            <p>Site de vendas de comidas variadas</p>
            <GoToProject
              href="https://tasty-treats-chi.vercel.app/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faRightToBracket} />
            </GoToProject>
            <GoToRepo
              href="https://github.com/Jooab/tasty-treats"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </GoToRepo>
            <Technologies>
              <li>
                <SiReact />
              </li>
              <li>
                <SiStyledcomponents />
              </li>
              
              <li>
                <SiVite />
              </li>
              <li>
                <FaGitAlt />
              </li>
            </Technologies>
          </LiInfo>
        </StyledLi>
        <StyledLi data-aos="fade-right">
          <img src="/images/github-api-thumb.png" alt="Github User Search" />
          <LiInfo>
            <h2>Github User Search</h2>
            <p>Site que busca informações de um usuário do github</p>
            <GoToProject
              href="https://jooab.github.io/Github-Api/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faRightToBracket} />
            </GoToProject>
            <GoToRepo
              href="https://github.com/Jooab/github-api"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </GoToRepo>
            <Technologies>
              <li>
                <SiHtml5 />
              </li>
              <li>
                <SiCss3 />
              </li>
              <li>
                <SiJavascript />
              </li>
              <li>
                <FaGitAlt />
              </li>
            </Technologies>
          </LiInfo>
        </StyledLi>
        <StyledLi data-aos="fade-left">
          <img src="/images/eccomerce-thumb.png" alt="Eccomerce Product" />
          <LiInfo>
            <h2>Eccomerce Product</h2>
            <p>Site de vendas de tênis</p>
            <GoToProject
              href="https://jooab.github.io/ecommerce-product-page/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faRightToBracket} />
            </GoToProject>
            <GoToRepo
              href="https://github.com/Jooab/ecommerce-product-page"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </GoToRepo>

            <Technologies>
              <li>
                <SiHtml5 />
              </li>
              <li>
                <SiCss3 />
              </li>
              <li>
                <SiJavascript />
              </li>
              <li>
                <FaGitAlt />
              </li>
            </Technologies>
          </LiInfo>
        </StyledLi>
      </StyledUl>
    </StyledSection>
  );
};
