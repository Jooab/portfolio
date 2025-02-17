import styled from "styled-components";

export const StyledButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
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

  &:hover {
    transform: scale(1.05);
  }
`;
