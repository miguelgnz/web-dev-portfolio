import { Icon, Typography, keyframes, styled } from "@mui/material";
import HomeSubtitle from "@/components/HomeSubtitle";
import { aboutData } from "@/utils/data";
import AnimatedWrapper from "@/components/animations/AnimatedWrapper";

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "35px",
  justifyContent: "center",
});

const AboutContents = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "48px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: "40px",
  },
}));

const InfoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "55%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const CodeWindowWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "45%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const CodeWindow = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  backgroundColor: "#02121F",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.35)",
});

const CodeWindowHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 16px",
  backgroundColor: "rgba(255, 255, 255, 0.03)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
});

const WindowDot = styled("span")({
  width: "11px",
  height: "11px",
  borderRadius: "50%",
});

const FileNameTypography = styled(Typography)({
  marginLeft: "8px",
  fontSize: "12px",
  color: "#8D8D8D",
  letterSpacing: "0.5px",
  userSelect: "none",
});

const CodeBody = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  padding: "18px 20px 22px",
  fontSize: "13px",
  lineHeight: "24px",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

const CodeLine = styled("div")({
  display: "flex",
  whiteSpace: "pre-wrap",
});

const LineNumber = styled("span")({
  width: "26px",
  flexShrink: 0,
  color: "#8D8D8D",
  opacity: 0.45,
  userSelect: "none",
});

const EntryContent = styled("span")({
  paddingLeft: "2ch",
});

const Keyword = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const VariableName = styled("span")({
  color: "#85D6F1",
});

const PropertyKey = styled("span")({
  color: "#85D6F1",
});

const StringValue = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const Punctuation = styled("span")({
  color: "#D9D9D9",
});

const blink = keyframes`
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`;

const Cursor = styled("span")(({ theme }) => ({
  display: "inline-block",
  width: "8px",
  height: "15px",
  marginLeft: "5px",
  verticalAlign: "text-bottom",
  backgroundColor: theme.palette.primary.main,
  animation: `${blink} 1.1s step-end infinite`,
}));

const TechStackWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  paddingTop: "12px",
});

const TechStackLabel = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  fontSize: "16px",
  fontWeight: 600,
  color: "#FFF",
  letterSpacing: "0.5px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const AccentBar = styled("span")(({ theme }) => ({
  display: "block",
  width: "4px",
  height: "22px",
  borderRadius: "2px",
  backgroundColor: theme.palette.primary.main,
}));

const SkillsContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "12px",
});

const SkillPill = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "8px 18px",
  backgroundColor: "#02121F",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderRadius: "999px",
  transition: "border-color 0.25s ease-in-out, transform 0.25s ease-in-out",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    transform: "translateY(-3px)",
  },
}));

const SkillNameTypography = styled(Typography)({
  fontSize: "14px",
  color: "#D9D9D9",
  fontWeight: 400,
  letterSpacing: "0.15px",
});

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#D9D9D9",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "27px",
  letterSpacing: "0.15px",
  "& > span": {
    color: "#a6b981",
    fontWeight: 600,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const DescriptionWrapper = styled("article")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const AboutSection = () => {
  const { codeWindow } = aboutData;
  const totalLines = codeWindow.entries.length + 2;

  return (
    <MainContainer>
      <AnimatedWrapper delay={1.4} variants={{ opacity: 0, x: -100 }}>
        <HomeSubtitle subtitle="About" />
      </AnimatedWrapper>
      <AboutContents>
        <InfoWrapper>
          <AnimatedWrapper delay={1} variants={{ opacity: 0, x: -100 }}>
            <DescriptionWrapper>
              {aboutData.description.map((paragraph, paragraphIndex) => (
                <DescriptionTypography key={paragraphIndex}>
                  {paragraph.map((segment, segmentIndex) =>
                    segment.highlight ? (
                      <span key={segmentIndex}>{segment.text}</span>
                    ) : (
                      segment.text
                    ),
                  )}
                </DescriptionTypography>
              ))}
            </DescriptionWrapper>
          </AnimatedWrapper>
        </InfoWrapper>
        <CodeWindowWrapper>
          <AnimatedWrapper delay={1.2} variants={{ opacity: 0, x: -100 }}>
            <CodeWindow>
              <CodeWindowHeader>
                <WindowDot sx={{ backgroundColor: "#F68B6B" }} />
                <WindowDot sx={{ backgroundColor: "#A6C46C" }} />
                <WindowDot sx={{ backgroundColor: "#3780BB" }} />
                <FileNameTypography>{codeWindow.fileName}</FileNameTypography>
              </CodeWindowHeader>
              <CodeBody>
                <CodeLine>
                  <LineNumber>1</LineNumber>
                  <span>
                    <Keyword>const</Keyword>{" "}
                    <VariableName>{codeWindow.variableName}</VariableName>{" "}
                    <Punctuation>= {"{"}</Punctuation>
                  </span>
                </CodeLine>
                {codeWindow.entries.map((entry, index) => {
                  const values = Array.isArray(entry.value)
                    ? entry.value
                    : [entry.value];
                  return (
                    <CodeLine key={entry.key}>
                      <LineNumber>{index + 2}</LineNumber>
                      <EntryContent>
                        <PropertyKey>{entry.key}</PropertyKey>
                        <Punctuation>: </Punctuation>
                        {Array.isArray(entry.value) && (
                          <Punctuation>[</Punctuation>
                        )}
                        {values.map((item, itemIndex) => (
                          <span key={item}>
                            <StringValue>{`"${item}"`}</StringValue>
                            {itemIndex < values.length - 1 && (
                              <Punctuation>, </Punctuation>
                            )}
                          </span>
                        ))}
                        {Array.isArray(entry.value) ? (
                          <Punctuation>],</Punctuation>
                        ) : (
                          <Punctuation>,</Punctuation>
                        )}
                      </EntryContent>
                    </CodeLine>
                  );
                })}
                <CodeLine>
                  <LineNumber>{totalLines}</LineNumber>
                  <span>
                    <Punctuation>{"};"}</Punctuation>
                    <Cursor />
                  </span>
                </CodeLine>
              </CodeBody>
            </CodeWindow>
          </AnimatedWrapper>
        </CodeWindowWrapper>
      </AboutContents>
      <AnimatedWrapper delay={1.3} variants={{ opacity: 0, x: -100 }}>
        <TechStackWrapper>
          <TechStackLabel>
            <AccentBar />
            {"My tech stack:"}
          </TechStackLabel>
          <SkillsContainer>
            {aboutData.skills.map((skill) => (
              <SkillPill key={skill.id}>
                <Icon
                  component={skill.icon}
                  sx={{ color: `${skill.color}`, fontSize: "20px" }}
                />
                <SkillNameTypography>{skill.name}</SkillNameTypography>
              </SkillPill>
            ))}
          </SkillsContainer>
        </TechStackWrapper>
      </AnimatedWrapper>
    </MainContainer>
  );
};

export default AboutSection;
