import { Typography, styled } from "@mui/material";

type Props = {
  subtitle: string;
};

const SubtitleWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "8rem",
  [theme.breakpoints.down("md")]: {
    gap: "2rem",
  },
}));

const SubtitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  color: "#8D8D8D",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "0.5px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

const LineWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));
const SubtitleLine = styled("div")(({ theme }) => ({
  borderBottom: "1px solid #8D8D8D",
  width: "370px",
  [theme.breakpoints.down("md")]: {
    width: "130px",
  },
}));

const HomeSubtitle = ({ subtitle }: Props) => {
  return (
    <SubtitleWrapper>
      <SubtitleTypography variant="h4">{subtitle}</SubtitleTypography>
      <LineWrapper>
        <SubtitleLine />
      </LineWrapper>
    </SubtitleWrapper>
  );
};

export default HomeSubtitle;
