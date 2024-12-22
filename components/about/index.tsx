"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function About() {
  const { ref: sectionRef, isVisible: isSectionVisible } =
    useIntersectionObserver(0.1);

  return (
    <>
      <section
        ref={sectionRef}
        className={`about-content max-w-screen-xl mx-auto px-4 py-20 ${isSectionVisible ? " animate-fadeIn" : "opacity-0"}`}
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
                Since starting my career as a Frontend Engineer in January 2023,
                I’ve gained experience with technologies like React, Next.js,
                and Tailwindcss.
              </p>
              <p className="max-w-lg font-bodoni text-xl mt-4">
                My passion lies in designing and developing websites that are
                not only visually striking but also highly performant.
              </p>
              <p className="max-w-lg font-bodoni text-xl mt-4">
                I actively seek opportunities to challenge myself and deepen my
                knowledge in web development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
