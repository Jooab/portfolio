import { StyledButton } from "./css";
import { FaCloudDownloadAlt } from "react-icons/fa";

export const Button = () => {
  return (
    <StyledButton as="a" href="/images/Currículo Dev-Joab Prates.pdf" download="Currículo Dev-Joab Prates">
      Currículo <FaCloudDownloadAlt />
    </StyledButton>
  );
};
