import { Section, Hello, Name, Dev, WelcomeSection, ArrowDown } from "./css";
import { useContext } from "react";
import { InViewContext } from "../../contexts/inViewContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";

export const Welcome = () => {
  const { beginRef } = useContext(InViewContext);

  return (
    <Section data-aos="fade-right" ref={beginRef} id="begin">
      <WelcomeSection>
        <Hello>Olá, eu sou</Hello>
        <Name>Joab Prates</Name>
        <Dev>Desenvolvedor Frontend</Dev>
      </WelcomeSection>

      <ArrowDown>
        <FontAwesomeIcon icon={faCircleDown} />
      </ArrowDown>
    </Section>
  );
};
