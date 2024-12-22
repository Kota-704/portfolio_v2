"use client";

import About from "@/components/about";
import Header from "../components/header";
import Hero from "../components/hero";
import Works from "../components/works";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="home">
        <About />
        <Works />
      </main>
    </>
  );
}
