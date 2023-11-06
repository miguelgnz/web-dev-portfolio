import { styled } from "@mui/material";
import HomeSubtitle from "@/components/HomeSubtitle";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/utils/data";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "35px",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {},
}));

const CardsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  columnGap: "182px",
  rowGap: "inherit",
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: "1000px",
  [theme.breakpoints.down("md")]: {},
}));

const ProjectsSection = () => {
  return (
    <MainContainer>
      <HomeSubtitle subtitle="Projects" />
      <CardsContainer>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            url={project.url}
            description={project.description}
            skills={project.skills}
            image={project.image}
            sourceLink={project.sourceLink}
          />
        ))}
      </CardsContainer>
    </MainContainer>
  );
};

export default ProjectsSection;
