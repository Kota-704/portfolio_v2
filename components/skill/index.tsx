"use client";

import { SkillItem } from "../SkillItem";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function Skill() {
  const { ref: sectionRef, isVisible: isSectionVisible } =
    useIntersectionObserver(0.1);

  return (
    <section
      ref={sectionRef}
      className={`about-content max-w-screen-xl mx-auto px-4 py-20 ${isSectionVisible ? " animate-fadeIn" : "opacity-0"}`}
    >
      <div className="about-content-inner">
        <h2 className="about-title text-6xl font-dm-serif">Skill</h2>
        <h3 className="text-xl font-relation">What I specialize in.</h3>
        <div className="skill__content">
          <div className="skill__content__item">
            <h3 className="text-2xl font-dm-serif">Front-end</h3>
            <ul className="skill__content__item__list">
              <SkillItem image="html.png" text="HTML" />
              <SkillItem image="css.png" text="CSS" />
              <SkillItem image="javascript.png" text="JavaScript" />
              <SkillItem image="reactjs.png" text="React" />
              <SkillItem image="next-js.svg" text="Next.js" />
              <SkillItem image="Vue.js_Logo_2.svg.png" text="Vue.js" />
              <SkillItem image="nuxt.svg" text="Nuxt.js" />
              <SkillItem image="tailwind.png" text="Tailwind CSS" />
              <SkillItem image="typescript.png" text="TypeScript" />
            </ul>
          </div>
          <div className="skill__content__item">
            <h3 className="skill__content__item__title">Back-end</h3>
            <ul className="skill__content__item__list">
              <li>PHP(WordPress)</li>
              <li>Python</li>
              <li>django</li>
            </ul>
          </div>
          <div className="skill__content__item">
            <h3 className="skill__content__item__title">Database</h3>
            <ul className="skill__content__item__list">
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="skill__content__item">
            <h3 className="skill__content__item__title">Tools</h3>
            <ul className="skill__content__item__list">
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
