import { PaletteOptions, createTheme } from "@mui/material/styles";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  style: "normal",
  subsets: ["latin"],
});

interface CustomPaletteSettings extends PaletteOptions {
  texts?: {
    main: string;
  };
  accent?: {
    main: string;
  };
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 840,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#A6C46C",
    },
    secondary: {
      main: "#F68B6B",
    },
    texts: {
      main: "#FFFFFF",
    },
    accent: {
      main: "#8D8D8D",
    },
    background: {
      default: "#011627",
    },
  } as CustomPaletteSettings,
  typography: {
    fontFamily: sourceCodePro.style.fontFamily,
  },
});

export default theme;
