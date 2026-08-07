"use client";
import { styled, Typography, Chip, keyframes } from "@mui/material";
import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";
import { experienceData } from "@/utils/data";

const TimelineContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const TimelineEntry = styled("div")(({ theme }) => ({
  position: "relative",
  paddingLeft: "44px",
  paddingBottom: "52px",
  "&:last-of-type": {
    paddingBottom: 0,
  },
  "&:hover .timeline-dot": {
    borderColor: theme.palette.primary.main,
    boxShadow: "0 0 14px rgba(166, 196, 108, 0.35)",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "34px",
    paddingBottom: "44px",
  },
}));

const Rail = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "7px",
  top: "26px",
  bottom: 0,
  width: "2px",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  [theme.breakpoints.down("md")]: {
    left: "6px",
  },
}));

const Dot = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: "4px",
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  boxSizing: "border-box",
  backgroundColor: "#011627",
  border: "2px solid #8D8D8D",
  transition: "border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out",
  [theme.breakpoints.down("md")]: {
    width: "14px",
    height: "14px",
  },
}));

const EntryContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "850px",
});

const EntryHeader = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

const DatesTypography = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  color: "#8D8D8D",
  fontStyle: "normal",
  fontWeight: 600,
  letterSpacing: "0.5px",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: theme.palette.primary.main,
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "30px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#D9D9D9",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "27px",
  letterSpacing: "0.15px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const ChipsWrapper = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

const StyledChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  fontSize: "11px",
  height: "28px",
}));

const forwardAnimation = keyframes`
  0% {
    transform: translate(0, 0),
  }
  100% {
    transform: translate(3px, -3px);
  }
`;

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  width: "fit-content",
  "& svg": {
    marginLeft: "6px",
    color: theme.palette.primary.main,
    fontSize: "16px",
  },
  "&:hover": {
    "& svg": {
      animation: `${forwardAnimation} 0.3s ease-in-out forwards`,
    },
  },
}));

const ExperienceTimeline = () => {
  return (
    <TimelineContainer>
      {experienceData.map((exp, index) => {
        const isCurrent = exp.endDate === "Present";
        const isLast = index === experienceData.length - 1;
        return (
          <TimelineEntry key={exp.company}>
            <Dot
              className="timeline-dot"
              sx={
                isCurrent
                  ? {
                      borderColor: "#A6C46C",
                      backgroundColor: "#A6C46C",
                      boxShadow: "0 0 12px rgba(166, 196, 108, 0.4)",
                    }
                  : undefined
              }
            />
            {!isLast && <Rail />}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <EntryContent>
                <EntryHeader>
                  <DatesTypography
                    sx={isCurrent ? { color: "#A6C46C" } : undefined}
                  >
                    {`${exp.startDate} — ${exp.endDate}`}
                  </DatesTypography>
                  <StyledLink href={exp.url} target="_blank">
                    <TitleTypography variant="h6">
                      {`${exp.title} @ ${exp.company}`}
                      <MdOpenInNew />
                    </TitleTypography>
                  </StyledLink>
                </EntryHeader>
                <DescriptionTypography>{exp.description}</DescriptionTypography>
                <ChipsWrapper>
                  {exp.skills.map((skill) => (
                    <StyledChip key={skill} label={skill} variant="outlined" />
                  ))}
                </ChipsWrapper>
              </EntryContent>
            </motion.div>
          </TimelineEntry>
        );
      })}
    </TimelineContainer>
  );
};

export default ExperienceTimeline;
