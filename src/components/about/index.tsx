import { StyledSection, StyledSpan, StyledDiv } from "./css";
import { useContext } from "react";
import { InViewContext } from "../../contexts/inViewContext";

export const About = () => {
  const { aboutRef } = useContext(InViewContext);

  return (
    <StyledSection data-aos="fade-right" id="about" ref={aboutRef}>
      <h1>Sobre mim</h1>

      <StyledDiv>
        <p>
          Sou um entusiasta da tecnologia e apaixonado por programação.
          Dedicação e esforço são minhas marcas registradas, sempre buscando
          aprender e evoluir para me tornar um profissional cada vez melhor.
          Tenho experiência com{" "}
          <StyledSpan>
            HTML, CSS, JavaScript, Git, React, bibliotecas React
          </StyledSpan>
          , e conhecimentos básicos em{" "}
          <StyledSpan>TypeScript e Jest</StyledSpan>, sempre criando interfaces
          modernas, responsivas e intuitivas. <br />
          Além disso, estou sempre explorando novas tecnologias e boas práticas
          para desenvolver soluções eficientes. Atualmente, estou em busca de
          uma oportunidade na área de desenvolvimento frontend para aplicar meus
          conhecimentos, crescer profissionalmente e contribuir com projetos
          inovadores. Acredito no poder da tecnologia para transformar ideias em
          realidade e estou pronto para enfrentar novos desafios!
        </p>
        <img src="/images/joab.jpg" alt="Joab" />
      </StyledDiv>
    </StyledSection>
  );
};
