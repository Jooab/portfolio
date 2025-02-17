import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  background-color: #0f172a;
  z-index: 1;
  padding: 15px;

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

  @media (min-width: 811px) {
    display: none;
  }

  @media (max-width: 390px) {
    p {
      padding-left: 70px;
      font-size: 0.8rem;
    }
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding-right: 50px;
  flex-direction: column;
  padding: 35px 45px;

  li {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    border-bottom: 2px solid #a1b4f0;
    padding-bottom: 8px;

    &:hover {
      color: #597be5;
    }

    &.active {
      color: #597be5;
    }
  }
`;

export const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  z-index: 2;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }
  }
`;

export const StyledNav = styled.nav`
  &.nav-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    right: -100%;
    background: #1e293b;
    transition: 0.3s ease-in-out;
    border-radius: 0 0 0 15px;

    @media (max-width: 450px) {
      width: 100%;
      border-radius: 0 0 15px 15px;
    }
  }

  &.nav-menu.active {
    right: 0;
  }

  }
`;
