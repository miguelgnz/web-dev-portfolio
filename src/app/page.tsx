import AiWorkflow from "@/components/AiWorkflow";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import SelectedWork from "@/components/SelectedWork";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-30 rounded-md bg-fg px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <div id="top" />
        <Hero />
        <Highlights />
        <SelectedWork />
        <AiWorkflow />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
