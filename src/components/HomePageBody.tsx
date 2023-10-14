import { Grid } from "@mui/material";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const HomePageBody = () => {
  return (
    <Grid container justifyContent={"center"} mt={10} rowGap={12}>
      <Grid item xs={10} md={9}>
        <div id="home">
          <HeroSection />
        </div>
      </Grid>
      <Grid item xs={10} md={9}>
        <div id="about">
          <AboutSection />
        </div>
      </Grid>
      <Grid item xs={10} md={9}>
        <div id="experience">
          <ExperienceSection />
        </div>
      </Grid>
      <Grid item xs={10} md={9}>
        <div id="projects">
          <ProjectsSection />
        </div>
      </Grid>
      <Grid item xs={10} md={9}>
        <div id="contact">
          <ContactSection />
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePageBody;
