import { Tab, Tabs, Box, Typography, styled, Chip } from "@mui/material";
import { useState } from "react";
import { experienceData } from "@/utils/data";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {},
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  color: theme.palette.primary.main,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "30px",
  letterSpacing: "0.15px",
}));

const DatesTypography = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#FFF",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: "0.15px",
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#D9D9D9",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "27px",
  letterSpacing: "0.15px",
}));

const ChipsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {},
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  [theme.breakpoints.down("md")]: {},
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

const ExperienceTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        paddingLeft: "10rem",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="experience tabs"
      >
        {experienceData.map((exp) => {
          return (
            <Tab
              sx={{
                color: "texts.main",
              }}
              label={exp.company}
              key={exp.id}
            />
          );
        })}
      </Tabs>
      {experienceData.map((exp) => {
        return (
          <CustomTabPanel value={value} index={exp.id} key={exp.id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "48px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <TitleTypography>
                  {`${exp.title} @ ${exp.company}`}
                </TitleTypography>
                <DatesTypography>
                  {`${exp.startDate} - ${exp.endDate}`}
                </DatesTypography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "29px",
                }}
              >
                <DescriptionTypography>{exp.description}</DescriptionTypography>
                <ChipsWrapper>
                  {exp.skills.map((skill, index) => {
                    return (
                      <StyledChip
                        label={skill}
                        key={index}
                        variant="outlined"
                        sx={{ mr: 1 }}
                      />
                    );
                  })}
                </ChipsWrapper>
              </Box>
            </Box>
          </CustomTabPanel>
        );
      })}
    </Box>
  );
};

export default ExperienceTabs;
