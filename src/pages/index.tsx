import { styled } from "@mui/material";
import HomePage from "@/views/HomePage";
import Head from "next/head";
import { motion } from "framer-motion";

const SpinnerWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
}));

export default function Home() {
  return (
    <>
      <Head>
        <title>Miguel Gnz - Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <HomePage />
      </motion.div>
    </>
  );
}
