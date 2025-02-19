import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  padding: 0 150px 40px;

  p {
    margin: 0;
  }

  @media (max-width: 900px) {
    padding: 0 30px 40px 70px;
  }

  @media (max-width: 490px) {
    padding: 0 30px 40px;
  }
`;

export const WelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media (max-width: 360px) {
    align-items: center;
  }
`;

export const Hello = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
`;

export const Name = styled.p`
  font-size: 8rem;
  font-weight: 700;
  color: #b7c5f3;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    font-size: 6.5rem;
  }

  @media (max-width: 935px) {
    font-size: 5rem;
  }

  @media (max-width: 630px) {
    font-size: 4rem;
  }

  @media (max-width: 490px) {
    font-size: 3rem;
  }

  &:hover {
    color: #597be5;
  }
`;

export const Dev = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  color: #fff;
  padding-bottom: 70px;

  @media (max-width: 1080px) {
    font-size: 2rem;
  }

  @media (max-width: 935px) {
    font-size: 1.8rem;
  }

  @media (max-width: 630px) {
    font-size: 1.5rem;
  }

  @media (max-width: 490px) {
    padding-bottom: 30px;
    font-size: 1.1rem;
  }
`;