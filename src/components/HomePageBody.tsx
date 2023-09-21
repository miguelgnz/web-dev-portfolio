import { Grid } from "@mui/material";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";

const HomePageBody = () => {
  return (
    <Grid container justifyContent={"center"} mt={10} rowGap={12}>
      <Grid item xs={10} md={9}>
        <HeroSection />
      </Grid>
      <Grid item xs={10} md={9}>
        <AboutSection />
      </Grid>
      <Grid item xs={10} md={9}>
        <ExperienceSection />
      </Grid>
    </Grid>
  );
};

export default HomePageBody;
