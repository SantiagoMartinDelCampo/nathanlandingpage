import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Goals from "@/components/goals";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Goals />
      <Footer />
    </main>
  );
}
