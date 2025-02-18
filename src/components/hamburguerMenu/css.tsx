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
  z-index: 3;
  
  @media (min-width: 810px) {
    display: none;
  }
`;
export const StyledUl = styled.ul`

`;

export const StyledDiv = styled.div`
`;

export const StyledNav = styled.nav`

`;
