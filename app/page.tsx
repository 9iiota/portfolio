import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Stack from '@/components/Stack';
import Languages from '@/components/Languages';
import CV from '@/components/CV';
import Contact from '@/components/Contact';
import Foot from '@/components/Foot';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="shell">
        <Hero />
        <About />
        <Work />
        <Stack />
        <Languages />
        <CV />
        <Contact />
      </main>
      <Foot />
    </>
  );
}
