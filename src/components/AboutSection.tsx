import { Icon, Typography, styled } from "@mui/material";
import HomeSubtitle from "@/components/HomeSubtitle";
import { aboutData } from "@/utils/data";
import AnimatedWrapper from "@/components/animations/AnimatedWrapper";
import useMediaQuery from "@mui/material/useMediaQuery";

const sanitizeHtmlOptions = {
  allowedTags: ["span"],
  allowedAttributes: {},
  allowedIframeHostnames: [],
};

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
    fontweight: 600,
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
              <DescriptionTypography>
                As a Web Developer with a solid background in modern web
                technologies, I specialize in crafting responsive, stateful and
                user-centric web applications. My experience spans across
                diverse high-impact projects in various industries where I have
                consistently delivered engaging and intuitive web experiences.
              </DescriptionTypography>
              <DescriptionTypography>
                I am a self-driven and quick learner who thrives in agile team
                environments, always eager to expand my knowledge + and adapt to
                new challenges. My commitment to staying current with industry
                trends and best practices allows me to + create innovative
                solutions that align with user needs and business goals.
              </DescriptionTypography>
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
