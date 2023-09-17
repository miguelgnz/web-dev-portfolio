import { styled } from "@mui/material";
import ExperienceTabs from "@/components/ExperienceTabs";
import HomeSubtitle from "@/components/HomeSubtitle";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "35px",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {},
}));

const ExperienceSection = () => {
  return (
    <MainContainer>
      <HomeSubtitle subtitle="Experience" />
      <ExperienceTabs />
    </MainContainer>
  );
};

export default ExperienceSection;
