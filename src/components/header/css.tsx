import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export const StyledHeader = styled.header`
  @media (max-width: 810px) {
    display: none;
  }

  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1;
  background-color: #0f172a;

  p {
    padding-left: 100px;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #597be5;
    }
  }

  a {
    transition: 0.3s ease-in-out;
    &:hover {
      color: #597be5;
    }
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding-right: 35px;

  li {
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #597be5;
    }

    &.active {
      color: #597be5;
    }
  }
`;
