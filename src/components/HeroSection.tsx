import { styled, Typography, Box } from "@mui/material";
import ResumeButton from "@/components/ResumeButton";
import { heroData } from "@/utils/data";
import AnimatedWrapper from "@/components/animations/AnimatedWrapper";
import { SiLinkedin, SiGithub, SiCredly } from "react-icons/si";
import { contactData } from "@/utils/data";
import Link from "next/link";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "calc(100vh - 4rem)",
}));

const UpperTextWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const LowerTextWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const PhraseTypography = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#FFF",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",
  letterSpacing: "0.5px",
  userSelect: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const BigTitle = styled(Typography)(({ theme }) => ({
  fontSize: "60px",
  color: "#3780BB",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "3px",
  userSelect: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },
}));

const SocialIconsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "24px",
}));

const FlatLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  "& > svg": {
    color: "#FFF",
    fontSize: "2.5rem",
    "&:hover": {
      transform: "scale(1.2)",
      transition: "transform 0.3s ease-in-out",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& > svg": {
      fontSize: "2rem",
    },
  },
}));

const HeroSection = () => {
  const commonVariants = { opacity: 0, x: -100 };
  return (
    <MainContainer id="HeroSection">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <UpperTextWrapper>
          <AnimatedWrapper variants={commonVariants} delay={1}>
            <BigTitle variant="h1" sx={{ color: "#85d6f1", fontWeight: 400 }}>
              {heroData.nameTitle}
            </BigTitle>
          </AnimatedWrapper>
          <AnimatedWrapper variants={commonVariants} delay={1.1}>
            <BigTitle variant="h1"> {heroData.subtitle}</BigTitle>
          </AnimatedWrapper>
        </UpperTextWrapper>
        <LowerTextWrapper>
          <AnimatedWrapper variants={commonVariants} delay={1.2}>
            <PhraseTypography variant="h2">{heroData.intro}</PhraseTypography>
          </AnimatedWrapper>
        </LowerTextWrapper>

        <SocialIconsWrapper>
          <FlatLink href={contactData.linkedin} target="_blank">
            <SiLinkedin />
          </FlatLink>
          <FlatLink href={contactData.github} target="_blank">
            <SiGithub />
          </FlatLink>
          <FlatLink href={contactData.credly} target="_blank">
            <SiCredly />
          </FlatLink>
        </SocialIconsWrapper>
        <AnimatedWrapper variants={commonVariants} delay={1.3}>
          <ResumeButton />
        </AnimatedWrapper>
      </Box>
    </MainContainer>
  );
};

export default HeroSection;
