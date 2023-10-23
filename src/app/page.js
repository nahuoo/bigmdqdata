import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Intro from "@/components/Intro";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Intro />
      <Navbar />
      <Hero />
      <Contact />
    </main>
  );
}
