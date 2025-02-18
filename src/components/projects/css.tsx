import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 50px 50px;
  gap: 30px;

  h1 {
    padding-left: 50px;
  }

  @media (max-width: 610px) {
    h1 {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 560px) {
    h1 {
      padding-left: 0;
    }
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0 0 0 50px;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;

  @media (max-width: 560px) {
    padding-left: 0;
  }
`;

export const StyledLi = styled.li`
  max-width: 500px;
  display: flex;
  max-height: 400px;
  flex-direction: column;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 50%;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
  }
`;

export const LiInfo = styled.div`
  border-radius: 0 0 10px 10px;
  background-color: #1e293b;
  height: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 50px 40px;
  gap: 10px;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const GoToProject = styled.a`
  display: flex;
  justify-content: center;
  padding: 10px;
  transition: 0.3s ease-in-out;
  position: absolute;
  top: 0;
  right: 20px;
  color: #a1b4f0;
  font-size: 2rem;

  &:hover {
    color: #597be5;
    transform: scale(1.05);
  }
`;

export const GoToRepo = styled.a`
  display: flex;
  justify-content: center;
  padding: 10px;
  transition: 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 20px;
  color: #a1b4f0;
  font-size: 2rem;

  &:hover {
    color: #597be5;
    transform: scale(1.05);
  }
`;

export const Technologies = styled.ul`
  display: flex;
  gap: 20px;
  position: absolute;
  padding-top: 10px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  li {
    font-size: 1.7rem;
    color: #a1b4f0;
  }
`;
