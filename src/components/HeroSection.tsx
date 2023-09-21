import { styled, Typography, Box } from "@mui/material";
import ResumeButton from "@/components/ResumeButton";
import { heroData } from "@/utils/data";

const HeroSectionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
  color: "rgba(246, 139, 107, 0.8)",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  letterSpacing: "0.5px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

const BigTitle = styled(Typography)(({ theme }) => ({
  fontSize: "60px",
  //   color: "#8D8D8D",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "3px",
  [theme.breakpoints.down("md")]: {
    fontSize: "48px",
  },
}));

const HeroSection = () => {
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
          <BigTitle sx={{ color: "#85d6f1", fontWeight: 300 }}>
            {heroData.nameTitle}
          </BigTitle>
          <BigTitle sx={{ color: "#3780BB" }}>{heroData.subtitle}</BigTitle>
        </UpperTextWrapper>
        <LowerTextWrapper>
          <PhraseTypography>{heroData.intro}</PhraseTypography>
        </LowerTextWrapper>
        <ResumeButton />
      </Box>
    </MainContainer>
  );
};

export default HeroSection;