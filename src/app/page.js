import { Hero } from "@/components/Hero";
import Intro from "@/components/Intro";
import { Navbar } from "@/components/Navbar";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Intro />
      <Navbar />
      <Hero />
      <Team />
    </main>
  );
}
