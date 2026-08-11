import HomePage from "@/views/HomePage";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Miguel Gnz - Software Developer</title>
        <meta
          name="description"
          content="Miguel is a software developer based in Guatemala, with a passion for building web applications."
        />
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
