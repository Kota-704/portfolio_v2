"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { ref: sectionRef, isVisible: isSectionVisible } =
    useIntersectionObserver(0.1);
  const { translations } = useLanguage();

  return (
    <section
      ref={sectionRef}
      className={`about-content max-w-screen-xl mx-auto px-4 py-20 ${
        isSectionVisible ? " animate-fadeIn" : "opacity-0"
      }`}
    >
      <div className="about-content-inner">
        <h2 className="about-title text-6xl font-dm-serif">About Me</h2>
        <h3 className="text-xl font-relation">
          Who am I and what do I specialize in.
        </h3>
        <div className="flex justify-around items-center gap-16">
          <div className="about-image mt-16">
            <Image
              src="/img/fv.jpg"
              alt="about_image"
              width={1706}
              height={960}
              className="w-64 h-96 rounded-full object-cover"
            />
          </div>
          <div className="about-text">
            <p className="max-w-lg font-bodoni text-xl mt-4">
              {translations.about?.p1}
            </p>
            <p className="max-w-lg font-bodoni text-xl mt-4">
              {translations.about?.p2}
            </p>
            <p className="max-w-lg font-bodoni text-xl mt-4">
              {translations.about?.p3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
