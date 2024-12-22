"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Works() {
  const { ref: sectionRef, isVisible: isSectionVisible } =
    useIntersectionObserver(0.1);

  return (
    <section
      ref={sectionRef}
      className={`about-content max-w-screen-xl mx-auto px-4 py-20 ${isSectionVisible ? " animate-fadeIn" : "opacity-0"}`}
    >
      <div>
        <h2 className="text-6xl font-dm-serif">Works</h2>
        <h3 className="text-xl font-relation">
          What I&apos;ve been working on.
        </h3>
      </div>
    </section>
  );
}
