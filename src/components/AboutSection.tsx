import { Icon, Typography, styled } from "@mui/material";
import HomeSubtitle from "@/components/HomeSubtitle";
import { aboutData } from "@/utils/data";
import AnimatedWrapper from "@/components/animations/AnimatedWrapper";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  minHeight: "400px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    alignItems: "center",
    gap: "40px",
    paddingTop: "40px",
  },
}));

const InfoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "60%",
  gap: "44px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
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

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#D9D9D9",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "27px",
  letterSpacing: "0.15px",
  "& > span": {
    color: "#a6b981",
    fontWeight: 600,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const DescriptionWrapper = styled("article")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const AboutSection = () => {
  const mobileView = useMediaQuery("(max-width: 840px)");

  return (
    <MainContainer>
      <AnimatedWrapper delay={1.4} variants={{ opacity: 0, x: -100 }}>
        <HomeSubtitle subtitle="About" />
      </AnimatedWrapper>
      <AboutContents>
        <InfoWrapper>
          <AnimatedWrapper delay={1} variants={{ opacity: 0, x: -100 }}>
            <DescriptionWrapper>
              {aboutData.description.map((paragraph, paragraphIndex) => (
                <DescriptionTypography key={paragraphIndex}>
                  {paragraph.map((segment, segmentIndex) =>
                    segment.highlight ? (
                      <span key={segmentIndex}>{segment.text}</span>
                    ) : (
                      segment.text
                    ),
                  )}
                </DescriptionTypography>
              ))}
            </DescriptionWrapper>
          </AnimatedWrapper>
          <DescriptionTypography>{"My tech stack:"}</DescriptionTypography>
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
      </AboutContents>
    </MainContainer>
  );
};

export default AboutSection;
