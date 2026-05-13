import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Who from "@/components/Who";
import How from "@/components/How";
import What from "@/components/What";
import CaseStudy from "@/components/CaseStudy";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Who />
      <How />
      <What />
      <CaseStudy />
      <Values />
      <Contact />
      <Footer />
    </>
  );
}
