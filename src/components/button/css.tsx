import styled from "styled-components";

export const StyledButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 80px;
  transform: translateX(50%);
  display: flex;
  gap: 5px;
  align-items: center;
  z-index: 1;
  padding: 10px 20px;
  border-radius: 35px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: #fff;
  background-color: #597be5;
  font-weight: 600;

  @media (max-width: 700px) {
    padding: 8px 13px;
    font-size: 0.8rem;
    right: 60px;
  }

  &:hover {
    transform: scale(1.05) translateX(50%);
  }
`;
