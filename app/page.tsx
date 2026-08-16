import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Building from "@/components/Building";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <CurrentlyBuilding />
        <Skills />
        <Projects />
        <Building />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
