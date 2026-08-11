import { Button, styled } from "@mui/material";
import { HiOutlineDocumentText } from "react-icons/hi2";

const StyledButton = styled(Button)(({ theme }) => ({
  position: "relative",
  width: "180px",
  height: "46px",
  overflow: "hidden",
  borderRadius: "4px",
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "1.2px",
  transition: "color 0.25s ease, border-color 0.25s ease",
  "&::before": {
    // content: " ",
    position: "absolute",
    inset: 0,
    backgroundColor: theme.palette.primary.main,
    transform: "translateX(-101%)",
    transition: "transform 0.25s ease",
    zIndex: 0,
  },
  "& .MuiButton-startIcon, & .MuiButton-label": {
    position: "relative",
    zIndex: 1,
  },
  // "&:hover": {
  //   borderColor: theme.palette.primary.main,
  //   color: "#011627",
  //   backgroundColor: "transparent",
  //   "&::before": {
  //     transform: "translateX(0)",
  //   },
  // },
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.secondary.main}`,
    outlineOffset: "4px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "190px",
  },
}));

const ResumeButton = () => {
  return (
    <StyledButton
      href="https://drive.google.com/file/d/1n3tqOxS0pjagJod9XKcgnSvtOr81hha3/view?usp=sharing"
      variant="outlined"
      startIcon={<HiOutlineDocumentText />}
    >
      Resume
    </StyledButton>
  );
};
export default ResumeButton;
