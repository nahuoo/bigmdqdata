import { Navbar } from "@/components/Navbar";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main>
      <Intro />
      <Navbar />
      <Hero />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
