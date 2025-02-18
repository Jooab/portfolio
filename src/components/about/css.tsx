import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  place-items: center;
  flex-direction: column;
  padding: 120px 100px 120px 150px;
  text-align: justify;
  gap: 40px;

  @media (max-width: 630px) {
    padding: 50px 50px 120px 120px;
  }

  @media (max-width: 560px) {
    padding: 0 50px 40px;
  }

  img {
    width: 250px;
    border-radius: 50%;
    border: 3px solid #080c15;

    @media (max-width: 630px) {
      width: 200px;
    }
  }

  h1 {
    @media (max-width: 630px) {
      font-size: 2rem;
    }
  }
`;

export const StyledSpan = styled.span`
  font-weight: 700;
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 100px;
  place-items: center;

  p {
    margin: 0;
  }

  @media (max-width: 1070px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 25px;
  }
`;
