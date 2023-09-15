import {
  Tab,
  Tabs,
  Box,
  Typography,
  styled,
  Chip,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { experienceData } from "@/utils/data";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "65%",
  paddingLeft: "2rem",
  [theme.breakpoints.down("lg")]: {
    width: "80%",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "1px",
    width: "100%",
  },
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  color: theme.palette.primary.main,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "30px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

const DatesTypography = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#FFF",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "24px",
  letterSpacing: "0.15px",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
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

const ChipsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    rowGap: "10px",
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  ["& .MuiTabs-scrollButtons"]: {
    color: "#FFF",
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            padding: "30px 30px 10px 10px",
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
  const theme = useTheme();

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <MainContainer>
        <StyledTabs
          aria-label="experience tabs"
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          value={value}
          onChange={handleChange}
        >
          {experienceData.map((exp) => {
            return (
              <Tab
                sx={{
                  color: "texts.main",
                  fontSize: { xs: "13px", md: "16px" },
                }}
                label={exp.company}
                key={exp.id}
              />
            );
          })}
        </StyledTabs>
        {experienceData.map((exp) => {
          return (
            <CustomTabPanel key={exp.id} value={value} index={exp.id}>
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
                  <DescriptionTypography>
                    {exp.description}
                  </DescriptionTypography>
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
      </MainContainer>
    </Box>
  );
};

export default ExperienceTabs;
