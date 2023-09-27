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
import { FiGithub } from "react-icons/fi";

type Props = {
  title: string;
  description: string;
  image: string;
  skills: string[];
  sourceLink: string;
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
  [theme.breakpoints.down("md")]: {},
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
  paddingTop: "12px",
  [theme.breakpoints.down("md")]: {
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
  description,
  image,
  skills,
  sourceLink,
}: Props) => {
  return (
    <StyledCard raised>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <TitleTypography>{title}</TitleTypography>
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
  );
};

export default ProjectCard;
