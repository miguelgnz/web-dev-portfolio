import { Grid } from "@mui/material";
import ExperienceSection from "./ExperienceSection";

const HomePageBody = () => {
  return (
    <Grid container justifyContent={"center"} mt={10}>
      <Grid item xs={10}>
        <ExperienceSection />
      </Grid>
    </Grid>
  );
};

export default HomePageBody;
