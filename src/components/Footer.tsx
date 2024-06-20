import { keyframes, styled, Typography } from "@mui/material";

const MainContainer = styled("footer")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "12rem",
  backgroundColor: "#011627",
  margin: "4rem 0 1rem 0",
}));

const FooterContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  width: "420px",
  [theme.breakpoints.down("lg")]: {
    width: "268px%",
  },
  [theme.breakpoints.down("md")]: {
    width: "248px",
  },
}));

const pulseAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const EmojiWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  animation: `${pulseAnimation} 1.3s infinite`,
  fontSize: "30px",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
  },
}));

const FooterTypography = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  color: "#8D8D8D",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "22.5px",
  letterSpacing: "0.15px",
  textAlign: "center",
  "& span": {
    fontWeight: 400,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
  },
}));

const Footer = () => (
  <MainContainer>
    <FooterContent>
      <FooterTypography>
        Designed in <span>Figma</span>, coded in <span>VS Code</span> with{" "}
        <span>NextJS/Typescript</span> & <span>MUI</span>, deployed in{" "}
        <span>Vercel</span>.
      </FooterTypography>
      <FooterTypography>{"w/<3"}</FooterTypography>
      <EmojiWrapper>
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </EmojiWrapper>
    </FooterContent>
  </MainContainer>
);

export default Footer;
