import { styled, keyframes } from "@mui/material";
import { ImSpinner9 } from "react-icons/im";

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(359deg);
    }
    `;

const StyledSpinner = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  "& > svg": {
    animation: `${rotateAnimation} 1.5s infinite`,
    fontSize: "48px",
    color: theme.palette.primary.main,
  },
}));

const Spinner = () => {
  return (
    <StyledSpinner>
      <ImSpinner9 />
    </StyledSpinner>
  );
};

export default Spinner;
