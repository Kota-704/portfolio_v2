import About from "@/components/about";
import Header from "../components/header";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="home">
        <About />
      </main>
    </>
  );
}
