import { Box, styled, Typography } from "@mui/material";
import Link from "next/link";
import { SiCredly, SiGithub } from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";
import AnimatedWrapper from "@/components/animations/AnimatedWrapper";
import ResumeButton from "@/components/ResumeButton";
import { contactData, heroData } from "@/utils/data";

const MainContainer = styled("section")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  minHeight: "calc(100vh - 4rem)",
  overflow: "hidden",
  padding: "72px 0 88px",
  "&::before": {
    // content: " ",
    position: "absolute",
    top: "12%",
    right: "-18%",
    width: "65%",
    height: "80%",
    border: "1px solid rgba(166, 196, 108, 0.12)",
    borderRadius: "50%",
    transform: "rotate(-18deg)",
    pointerEvents: "none",
  },
  [theme.breakpoints.down("md")]: {
    minHeight: "calc(100vh - 3rem)",
    padding: "56px 0 72px",
    alignItems: "flex-start",
    "&::before": {
      top: "38%",
      right: "-50%",
      width: "130%",
      height: "55%",
    },
  },
}));

const HeroGrid = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.3fr) minmax(260px, 0.7fr)",
  alignItems: "center",
  gap: "clamp(48px, 9vw, 140px)",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "56px",
  },
}));

const IntroColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const Eyebrow = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "24px",
  color: theme.palette.primary.main,
  fontSize: "13px",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  "&::before": {
    // content: '" "',
    display: "block",
    width: "34px",
    height: "1px",
    backgroundColor: theme.palette.primary.main,
  },
}));

const Name = styled(Typography)(({ theme }) => ({
  color: "#85D6F1",
  fontSize: "clamp(42px, 6.2vw, 88px)",
  fontWeight: 400,
  lineHeight: 0.98,
  letterSpacing: "clamp(1px, 0.35vw, 5px)",
  userSelect: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "clamp(42px, 12vw, 68px)",
  },
}));

const Role = styled(Typography)(({ theme }) => ({
  maxWidth: "720px",
  marginTop: "18px",
  color: theme.palette.secondary.main,
  fontSize: "clamp(26px, 3.5vw, 52px)",
  fontWeight: 700,
  lineHeight: 1.05,
  letterSpacing: "clamp(1px, 0.18vw, 3px)",
  [theme.breakpoints.down("md")]: {
    fontSize: "clamp(25px, 7vw, 40px)",
  },
}));

const Intro = styled(Typography)(({ theme }) => ({
  maxWidth: "500px",
  marginTop: "30px",
  color: "#D9D9D9",
  fontSize: "16px",
  fontWeight: 300,
  lineHeight: 1.8,
  letterSpacing: "0.3px",
  [theme.breakpoints.down("md")]: {
    marginTop: "24px",
    fontSize: "14px",
  },
}));

const Actions = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "28px",
  marginTop: "38px",
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    flexDirection: "column",
    gap: "24px",
    width: "100%",
  },
}));

const SocialIcons = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const SocialLink = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "42px",
  height: "42px",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  borderRadius: "4px",
  backgroundColor: "rgba(2, 18, 31, 0.5)",
  color: "#D9D9D9",
  fontSize: "19px",
  transition:
    "color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease",
  "&:hover": {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    backgroundColor: "rgba(166, 196, 108, 0.08)",
    transform: "translateY(-3px)",
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.secondary.main}`,
    outlineOffset: "4px",
  },
}));

const SignalPanel = styled("aside")(({ theme }) => ({
  position: "relative",
  padding: "28px",
  borderTop: `1px solid ${theme.palette.primary.main}`,
  borderRight: "1px solid rgba(255, 255, 255, 0.1)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  backgroundColor: "rgba(2, 18, 31, 0.55)",
  boxShadow: "20px 20px 0 rgba(1, 22, 39, 0.55)",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: "none",
    marginLeft: 0,
  },
}));

const SignalLabel = styled(Typography)({
  marginBottom: "30px",
  color: "#8D8D8D",
  fontSize: "11px",
  letterSpacing: "1.4px",
  textTransform: "uppercase",
});

const Availability = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: theme.palette.primary.main,
  fontSize: "14px",
  letterSpacing: "0.3px",
  "&::before": {
    // content: " ",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 0 5px ${theme.palette.primary.main}1A`,
  },
}));

const PanelRule = styled("div")({
  height: "1px",
  margin: "26px 0",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
});

const PanelText = styled(Typography)({
  color: "#D9D9D9",
  fontSize: "14px",
  lineHeight: 1.7,
});

const PanelMeta = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  gap: "18px",
  marginTop: "26px",
});

const MetaItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

const MetaValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "18px",
  fontWeight: 700,
}));

const MetaLabel = styled(Typography)({
  color: "#8D8D8D",
  fontSize: "10px",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
});

const HeroSection = () => {
  const commonVariants = { opacity: 0, x: -100 };

  return (
    <MainContainer id="HeroSection">
      <HeroGrid>
        <IntroColumn>
          <AnimatedWrapper variants={commonVariants} delay={0.8}>
            <Eyebrow>Frontend / UI</Eyebrow>
          </AnimatedWrapper>
          <AnimatedWrapper variants={commonVariants} delay={0.95}>
            <Name variant="h1">{heroData.nameTitle}</Name>
          </AnimatedWrapper>
          <AnimatedWrapper variants={commonVariants} delay={1.1}>
            <Role variant="h2">{heroData.subtitle}</Role>
          </AnimatedWrapper>
          <AnimatedWrapper variants={commonVariants} delay={1.4}>
            <Actions>
              <ResumeButton />
              <SocialIcons aria-label="Social profiles">
                <SocialLink
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <TfiLinkedin />
                </SocialLink>
                <SocialLink
                  href={contactData.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <SiGithub />
                </SocialLink>
                <SocialLink
                  href={contactData.credly}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Credly"
                >
                  <SiCredly />
                </SocialLink>
              </SocialIcons>
            </Actions>
          </AnimatedWrapper>
        </IntroColumn>

        <AnimatedWrapper variants={{ opacity: 0, y: 30 }} delay={1.35}>
          <SignalPanel>
            <SignalLabel>Current signal // 01</SignalLabel>
            <Availability>Open to interesting problems</Availability>
            <PanelRule />
            <PanelText>
              Building thoughtful interfaces where reliable engineering meets a
              sharp user experience.
            </PanelText>
            <PanelMeta>
              <MetaItem>
                <MetaValue>UI</MetaValue>
                <MetaLabel>Focus</MetaLabel>
              </MetaItem>
              <MetaItem>
                <MetaValue>React</MetaValue>
                <MetaLabel>Core stack</MetaLabel>
              </MetaItem>
              <MetaItem>
                <MetaValue>GT</MetaValue>
                <MetaLabel>Based in</MetaLabel>
              </MetaItem>
            </PanelMeta>
          </SignalPanel>
        </AnimatedWrapper>
      </HeroGrid>
      <Box
        sx={{
          position: "absolute",
          bottom: "22px",
          left: 0,
          color: "#8D8D8D",
          fontSize: "11px",
          letterSpacing: "1px",
          opacity: 0.7,
        }}
      >
        SCROLL TO EXPLORE ↓
      </Box>
    </MainContainer>
  );
};

export default HeroSection;
