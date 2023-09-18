import { Icon, Typography, styled } from "@mui/material";
import HomeSubtitle from "@/components/HomeSubtitle";
import { aboutData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";

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

const ImageAndBadgeWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "40%",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const PhotoContainer = styled("div")(({ theme }) => ({
  borderRadius: "24px",
  minWidth: "180px",
  height: "190px",
  [theme.breakpoints.down("md")]: {
    minWidth: "145px",
    height: "155px",
  },
}));

const BadgeContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  marginTop: "-36px",
  marginLeft: "172px",
  [theme.breakpoints.down("md")]: {
    marginTop: "-28px",
    marginLeft: "142px",
  },
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#D9D9D9",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "27px",
  letterSpacing: "0.15px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const AboutSection = () => {
  const mobileView = useMediaQuery("(max-width: 840px)");
  return (
    <MainContainer>
      <HomeSubtitle subtitle="About" />
      <AboutContents>
        <InfoWrapper>
          <DescriptionTypography>{aboutData.description}</DescriptionTypography>
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
        <ImageAndBadgeWrapper>
          <PhotoContainer>
            <Image
              src={"/profile.jpg"}
              width={100}
              height={100}
              alt={"profile picture"}
              objectFit="cover"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px",
                border: "4px solid transparent",
                background: "linear-gradient(145deg, #8D8D8D, #8D8D8D)",
                boxShadow: " 0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </PhotoContainer>
          <BadgeContainer>
            <Link
              href={
                "https://www.credly.com/badges/df638cc1-377b-42de-a136-280321f8a901/public_url"
              }
              target="_blank"
            >
              <Image
                src={"/aws-badge.png"}
                width={100}
                height={100}
                alt={"badge"}
                style={{
                  width: mobileView ? "68px" : "90px",
                  height: mobileView ? "68px" : "90px",
                  objectFit: "cover",
                }}
              />
            </Link>
          </BadgeContainer>
        </ImageAndBadgeWrapper>
      </AboutContents>
    </MainContainer>
  );
};

export default AboutSection;
