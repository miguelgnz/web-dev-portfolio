import { styled } from "@mui/material";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import HomeSubtitle from "@/components/HomeSubtitle";

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "35px",
  justifyContent: "center",
});

const ExperienceSection = () => {
  return (
    <MainContainer>
      <HomeSubtitle subtitle="Experience" />
      <ExperienceTimeline />
    </MainContainer>
  );
};

export default ExperienceSection;
