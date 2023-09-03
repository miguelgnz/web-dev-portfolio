import { Typography, styled } from "@mui/material";
import ExperienceTabs from "./ExperienceTabs";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "35px",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {},
}));

const SubtitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  color: "#8D8D8D",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "0.5px",
}));

const ExperienceSection = () => {
  return (
    <MainContainer>
      <SubtitleTypography>Experience</SubtitleTypography>
      <ExperienceTabs />
    </MainContainer>
  );
};

export default ExperienceSection;
