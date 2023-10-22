import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Intro from "@/components/Intro";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Intro />
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
