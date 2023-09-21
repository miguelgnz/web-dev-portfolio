import { Button, styled } from "@mui/material";
import { HiOutlineDocumentText } from "react-icons/hi2";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  width: "340px",
  [theme.breakpoints.down("lg")]: {
    width: "300px",
  },
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
}));

const ResumeButton = () => {
  return (
    <StyledButton variant="outlined" startIcon={<HiOutlineDocumentText />}>
      Resume
    </StyledButton>
  );
};
export default ResumeButton;
