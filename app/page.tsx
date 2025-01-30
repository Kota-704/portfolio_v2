import About from "@/components/about";
import Header from "../components/header";
import Hero from "../components/hero";
import Works from "../components/works";
import { Skill } from "@/components/skill";
import { Contact } from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="home">
        <About />
        <Works />
        <Skill />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
