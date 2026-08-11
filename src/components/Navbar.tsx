import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { menuData } from "@/utils/data";

const resumeUrl =
  "https://drive.google.com/file/d/1n3tqOxS0pjagJod9XKcgnSvtOr81hha3/view?usp=sharing";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(1, 22, 39, 0.82)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "none",
  backdropFilter: "blur(14px)",
  "& .MuiToolbar-root": {
    minHeight: "72px",
    justifyContent: "space-between",
    gap: "32px",
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiToolbar-root": {
      minHeight: "64px",
      gap: "14px",
    },
  },
}));

const IdentityLink = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
  flexShrink: 0,
  gap: "12px",
  color: "#FFFFFF",
  textDecoration: "none",
});

const IdentityName = styled(Typography)(({ theme }) => ({
  color: "#D9D9D9",
  fontSize: "13px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Navigation = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "28px",
  marginLeft: "auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SectionLink = styled(Link)(({ theme }) => ({
  position: "relative",
  color: "#8D8D8D",
  fontSize: "12px",
  letterSpacing: "0.8px",
  textDecoration: "none",
  transition: "color 0.2s ease",
  "&::after": {
    position: "absolute",
    right: 0,
    bottom: "-7px",
    left: 0,
    height: "1px",
    backgroundColor: theme.palette.primary.main,
    transform: "scaleX(0)",
    transformOrigin: "right",
    transition: "transform 0.2s ease",
  },
  "&:hover": {
    color: theme.palette.primary.main,
    "&::after": {
      transform: "scaleX(1)",
      transformOrigin: "left",
    },
  },
}));

const RightActions = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  flexShrink: 0,
  [theme.breakpoints.down("sm")]: {
    gap: "10px",
  },
}));

const ResumeLink = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "104px",
  height: "34px",
  padding: "0 15px",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "3px",
  color: theme.palette.primary.main,
  fontSize: "11px",
  letterSpacing: "1px",
  textDecoration: "none",
  transition: "background-color 0.2s ease, color 0.2s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#011627",
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.secondary.main}`,
    outlineOffset: "4px",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "88px",
    height: "32px",
    padding: "0 12px",
    fontSize: "10px",
  },
}));

const Navbar = () => {
  const visibleMenuItems = menuData.menu.items.filter(
    (item) => item.text !== "Projects",
  );

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <IdentityLink href="#home" aria-label="Back to home">
          <Image alt="Miguel Gnz" src="/memoji.png" width={40} height={40} />
          <IdentityName>Miguel Gnz</IdentityName>
        </IdentityLink>

        <Navigation aria-label="Section navigation">
          {visibleMenuItems.map((item) => (
            <SectionLink key={item.id} href={item.url}>
              {item.text}
            </SectionLink>
          ))}
        </Navigation>

        <RightActions>
          {/* <Availability>Open to opportunities</Availability> */}
          <ResumeLink href={resumeUrl} target="_blank" rel="noreferrer">
            RESUME
          </ResumeLink>
        </RightActions>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
