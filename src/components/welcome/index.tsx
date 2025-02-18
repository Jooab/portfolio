import { Section, Hello, Name, Dev, WelcomeSection } from "./css";
import { useContext } from "react";
import { InViewContext } from "../../contexts/inViewContext";

export const Welcome = () => {
  const { beginRef } = useContext(InViewContext);

  return (
    <Section data-aos="fade-right" ref={beginRef} id="begin">
      <WelcomeSection>
        <Hello>Olá, eu sou</Hello>
        <Name>Joab Prates</Name>
        <Dev>Desenvolvedor Frontend</Dev>
      </WelcomeSection>

    </Section>
  );
};
