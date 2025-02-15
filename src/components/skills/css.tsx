import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style: none;
  padding: 50px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  width: 50%;
  flex-wrap: wrap;
  border: 3px solid #a1b4f0;
  border-radius: 10px;
  color: #a1b4f0;

  li {
    width: 100px;
    transition: 0.3s ease-in-out;
    font-size: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &:hover {
      color: #597be5;
      transform: scale(1.05);
    }
  }

  li svg {
    @media (max-width: 660px) {
      font-size: 3.3rem;
    }
  }

  li p {
    font-weight: 600;
    margin: 0;
    font-size: 22px;

    @media (max-width: 660px) {
      font-size: 1.2rem;
    }
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0 100px;

  @media (max-width: 710px) {
    h1 {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 900px) {
    padding-left: 80px;
  }

  @media (max-width: 560px) {
    padding: 0 30px 40px;
  }
`;
