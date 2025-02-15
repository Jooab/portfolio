import { Header } from "../header";
import { Contacts } from "../contacts";
import { Welcome } from "../welcome";
import { About } from "../about";
import { Skills } from "../skills";
import { Projects } from "../projects";
import { Button } from "../button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Header />
      <Contacts />
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Button />
    </>
  );
};
