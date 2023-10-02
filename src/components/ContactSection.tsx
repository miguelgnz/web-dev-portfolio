import { styled } from "@mui/material";
import HomeSubtitle from "@/components/HomeSubtitle";
import { SiLinkedin, SiGithub } from "react-icons/si";
import Link from "next/link";
import { contactData } from "@/utils/data";

const MainContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "35px",
  justifyContent: "center",
}));

const IconsWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "6rem",
}));

const FlatLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
  "& > svg": {
    color: "#FFF",
    fontSize: "3.5rem",
    "&:hover": {
      transform: "scale(1.2)",
      transition: "transform 0.3s ease-in-out",
    },
  },
}));

const ContactSection = () => {
  return (
    <MainContainer>
      <HomeSubtitle subtitle="Git & Contact" />
      <IconsWrapper>
        <FlatLink href={contactData.linkedin} target="_blank">
          <SiLinkedin />
        </FlatLink>
        <FlatLink href={contactData.github} target="_blank">
          <SiGithub />
        </FlatLink>
      </IconsWrapper>
    </MainContainer>
  );
};

export default ContactSection;
