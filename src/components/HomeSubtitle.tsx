import { Typography, styled } from "@mui/material";

type Props = {
  subtitle: string;
};

const SubtitleWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "8rem",
}));

const SubtitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  color: "#8D8D8D",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "0.5px",
}));

const LineWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));
const SubtitleLine = styled("div")(() => ({
  borderBottom: "1px solid #8D8D8D",
  width: "370px",
}));

const HomeSubtitle = ({ subtitle }: Props) => {
  return (
    <SubtitleWrapper>
      <SubtitleTypography>{subtitle}</SubtitleTypography>
      <LineWrapper>
        <SubtitleLine />
      </LineWrapper>
    </SubtitleWrapper>
  );
};

export default HomeSubtitle;
