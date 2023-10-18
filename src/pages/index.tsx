import { useState, useEffect } from "react";
import { styled } from "@mui/material";
import HomePage from "@/views/HomePage";
import Spinner from "@/components/Spinner";
import Head from "next/head";

const SpinnerWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
}));

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <div>
          <Head>
            <title>Miguel Gnz - Software Developer</title>
          </Head>
          <HomePage />
        </div>
      )}
    </>
  );
}
