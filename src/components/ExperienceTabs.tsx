"use client";
import {
  Tab,
  Tabs,
  Box,
  Typography,
  styled,
  Chip,
  useTheme,
  keyframes,
} from "@mui/material";
import { useState } from "react";
import { experienceData } from "@/utils/data";
import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";

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
  fontSize: "18px",
  color: theme.palette.primary.main,
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "30px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

const DatesTypography = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
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

const ChipsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  rowGap: "8px",
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
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

const StyledTabs = styled(Tabs)(({ theme }) => ({
  ["& .MuiTabs-scrollButtons"]: {
    color: "#FFF",
  },
  ["& .MuiButtonBase-root"]: {
    fontSize: "17px",
    letterSpacing: "0.35px",
    fontWeight: 700,
  },
  [theme.breakpoints.down("md")]: {
    ["& .MuiButtonBase-root"]: {
      fontSize: "15px",
    },
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
        justifyContent: "flex-start",
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
              <motion.div
                initial={{ opacity: 0, x: 800 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
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
                    <StyledLink href={exp.url} target="blank">
                      <TitleTypography variant="h6">
                        {`${exp.title} @ ${exp.company}`}
                        <MdOpenInNew />
                      </TitleTypography>
                    </StyledLink>
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
              </motion.div>
            </CustomTabPanel>
          );
        })}
      </MainContainer>
    </Box>
  );
};

export default ExperienceTabs;
