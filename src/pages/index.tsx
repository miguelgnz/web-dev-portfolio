import { Inter } from "next/font/google";
import { Box, Button, Typography, styled } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <Typography>Hey there</Typography>
      <Button variant="outlined">SSR BUTTON</Button>
    </Box>
  );
}
