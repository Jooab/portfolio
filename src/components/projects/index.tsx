import {
  StyledSection,
  StyledUl,
  StyledLi,
  LiInfo,
  GoToProject,
  GoToRepo,
  Technologies,
} from "./css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaGitAlt } from "react-icons/fa";
import {
  SiReact,
  SiStyledcomponents,
  SiReactrouter,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
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
            <p>
              Este projeto é uma aplicação web de uma Pokedex, desenvolvida
              utilizando React e consumindo dados da PokeAPI. A Pokedex permite
              aos usuários visualizar informações detalhadas sobre diferentes
              Pokémon, incluindo suas imagens, tipos, habilidades e
              estatísticas.
            </p>
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
            <p>
              Tasty Treats é um projeto que simula uma loja de comidas variadas,
              desenvolvida utilizando React. O objetivo do projeto é
              proporcionar uma experiência de compra online, onde os usuários
              podem navegar pelas categorias de alimentos e adicionar itens ao
              carrinho de compras.
            </p>
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
            <p>
              Github User Search é um projeto que permite aos usuários buscar
              informações detalhadas sobre qualquer usuário do Github.
              Desenvolvido utilizando HTML, CSS e JavaScript, o projeto consome
              a API do Github para obter e exibir dados como nome, avatar,
              repositórios públicos, eventos, seguidores, seguindo e biografia
              do usuário.
            </p>
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
          <img src="/images/portfolio-thumb.png" alt="Portfolio" />
          <LiInfo>
            <h2>Portfólio</h2>
            <p>
              Este projeto é o meu portfólio, desenvolvido utilizando React e
              TypeScript. O objetivo desse portfólio é apresentar os projetos,
              habilidades e uma apresentação sobre mim de forma organizada e
              visualmente atraente. Nele aproveitei para utilizar o
              Typescript, tecnologia que sigo estudando para melhorar minhas
              habilidades de desenvolvimento.
            </p>

            <GoToRepo href="https://github.com/Jooab/portfolio" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </GoToRepo>

            <Technologies>
              <li>
                <SiReact />
              </li>
              <li>
                <SiTypescript />
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
      </StyledUl>
    </StyledSection>
  );
};
