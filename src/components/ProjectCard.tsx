"use client";
import {
  styled,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

type Props = {
  title: string;
  url: string;
  sourceLink: string;
  description: string;
  image: string;
  skills: string[];
};

const StyledCard = styled(Card)(({ theme }) => ({
  width: "328px",
  backgroundColor: "#02121F",
  "& .MuiCardContent-root": {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  "& .MuiCardMedia-root": {
    height: "200px",
  },
}));

const StyledCardActions = styled(CardActions)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  "& .MuiButtonBase-root": {
    minWidth: "48px",
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
  fontSize: "14px",
  color: "#D9D9D9",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0.15px",
  minHeight: "162px",
  paddingTop: "12px",
  [theme.breakpoints.down("md")]: {
    minHeight: "144px",
    fontSize: "12px",
  },
}));

const ChipsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  columnGap: "6px",
  rowGap: "6px",
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  fontSize: "11px",
  height: "28px",
}));

const ProjectCard = ({
  title,
  url,
  sourceLink,
  description,
  image,
  skills,
}: Props) => {
  return (
    <>
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.5 }}
      >
        <StyledCard raised>
          <CardActionArea href={url} target="_blank">
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              />
            </div>
            <CardContent>
              <TitleTypography variant="h6">{title}</TitleTypography>
              <DescriptionTypography>{description}</DescriptionTypography>
              <ChipsWrapper>
                {skills.map((skill, index) => (
                  <StyledChip key={index} label={skill} />
                ))}
              </ChipsWrapper>
            </CardContent>
          </CardActionArea>
          <StyledCardActions>
            <Button variant="outlined" href={sourceLink}>
              <FiGithub />
            </Button>
          </StyledCardActions>
        </StyledCard>
      </motion.div>
    </>
  );
};

export default ProjectCard;
