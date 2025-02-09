"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { WorksItem } from "@/components/worksItem";

export default function Works() {
  const { ref: sectionRef, isVisible: isSectionVisible } =
    useIntersectionObserver(0.1);

  return (
    <section
      ref={sectionRef}
      className={`${isSectionVisible ? "animate-fadeIn" : "opacity-0"}`}
      id="works"
    >
      <WorksItem />
    </section>
  );
}
