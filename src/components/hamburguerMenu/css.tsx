import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 20px;
  position: fixed;
  z-index: 2;
  background-color: #0f172a;
  
  @media (min-width: 810px) {
    display: none;
  }
`;
export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  
  gap: 20px;

  li {
    border-bottom: 1px solid #374151;
    padding-bottom: 5px;
    transition: 0.3s ease-in-out;

    &.active {
      color: #597be5;
    }

    @media (max-width: 490px) {
      text-align: start;
    }
  }
`;

export const StyledDiv = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
  z-index: 2;
`;

export const StyledNav = styled.nav`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  padding: 20px 40px 25px 30px;
  background-color: #1e293b;
  border-radius: 0 0 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 490px) {
    top: 45px;
    width: 100vw;
    border-radius: 0 0 10px 10px;
    padding: 20px;
    background-color: #0f172a;
  }
`;
