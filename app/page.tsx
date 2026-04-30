import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Languages />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
