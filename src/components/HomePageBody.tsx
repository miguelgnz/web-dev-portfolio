import { Grid } from "@mui/material";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";

const HomePageBody = () => {
  return (
    <Grid container justifyContent={"center"} mt={10} rowGap={12}>
      <Grid item xs={10}>
        <AboutSection />
      </Grid>
      <Grid item xs={10}>
        <ExperienceSection />
      </Grid>
    </Grid>
  );
};

export default HomePageBody;
