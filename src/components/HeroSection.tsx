import { styled, Typography, Box } from "@mui/material";
import ResumeButton from "@/components/ResumeButton";
import { heroData } from "@/utils/data";
import AnimatedWrapper from "@/components/animations/AnimatedWrapper";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {},
}));

const UpperTextWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {},
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
    fontSize: "16px",
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
    fontSize: "48px",
  },
}));

const HeroSection = () => {
  const commonVariants = { opacity: 0, x: -100 };
  return (
    <MainContainer>
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
        <AnimatedWrapper variants={commonVariants} delay={1.3}>
          <ResumeButton />
        </AnimatedWrapper>
      </Box>
    </MainContainer>
  );
};

export default HeroSection;
