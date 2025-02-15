import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledAside = styled.aside`
    display: flex;
    place-items: center;
    position: fixed;
    z-index: 1;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: #0f172a;
    padding: 25px;
    border-radius: 8px 0 0 8px;
    height: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    margin: 10px 0;
  }

  ul li a {
    text-decoration: none;
    font-size: 24px;
  }

  @media (max-width: 560px) {
    padding: 0 20px 10px;
    top: 90px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    flex-direction: column;
    box-shadow: none;

    ul {
      gap: 15px;
    }
  }
}
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  transition: 0.3s ease-in-out;
  color: #597be5;

  &:hover {
    transform: scale(1.1);
  }
`;
