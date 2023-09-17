import { Icon, Typography, styled } from "@mui/material";
import HomeSubtitle from "@/components/HomeSubtitle";
import { aboutData } from "@/utils/data";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "35px",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {},
}));

const AboutContents = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "25px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const InfoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "70%",
  gap: "25px",
  [theme.breakpoints.down("md")]: {},
}));

const SkillsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  rowGap: "32px",
  [theme.breakpoints.down("md")]: {},
}));

const IndividualSkillWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  width: "50%",
  [theme.breakpoints.down("md")]: {},
}));

const ImageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "30%",
  [theme.breakpoints.down("md")]: {},
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#D9D9D9",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "27px",
  letterSpacing: "0.15px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const AboutSection = () => {
  return (
    <MainContainer>
      <HomeSubtitle subtitle="About" />
      <AboutContents>
        <InfoWrapper>
          <DescriptionTypography>{aboutData.description}</DescriptionTypography>
          <SkillsContainer>
            {aboutData.skills.map((skill) => {
              return (
                <IndividualSkillWrapper key={skill.id}>
                  <Icon
                    component={skill.icon}
                    sx={{ color: `${skill.color}`, fontSize: "30px" }}
                  />
                  <DescriptionTypography sx={{ color: "#FFF" }}>
                    {skill.name}
                  </DescriptionTypography>
                </IndividualSkillWrapper>
              );
            })}
          </SkillsContainer>
        </InfoWrapper>
        <ImageWrapper></ImageWrapper>
      </AboutContents>
    </MainContainer>
  );
};

export default AboutSection;
