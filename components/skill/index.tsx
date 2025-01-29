"use client";

import { SkillItem } from "../SkillItem";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useLanguage } from "@/context/LanguageContext";

export function Skill() {
  const { ref: sectionRef, isVisible: isSectionVisible } =
    useIntersectionObserver(0.1);
  const { language, translations } = useLanguage();

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
            <h3
              className={`text-2xl mt-10
            ${language === "ja" ? "font-notosans" : "font-dm-serif"}
            ${language === "ja" ? "text-lg" : "text-xl"}`}
            >
              {translations.skill.frontend}
            </h3>
            <ul className="flex flex-wrap gap-10">
              <SkillItem image="html.png" text="HTML" />
              <SkillItem image="css.png" text="CSS" />
              <SkillItem image="javascript.png" text="JavaScript" />
              <SkillItem image="typescript.png" text="TypeScript" />
              <SkillItem image="reactjs.png" text="React" />
              <SkillItem image="icons8-next.js.svg" text="Next.js" />
              <SkillItem image="Vue.js_Logo_2.svg.png" text="Vue.js" />
              <SkillItem image="nuxt_green.svg" text="Nuxt.js" />
              <SkillItem image="tailwind.png" text="Tailwind CSS" />
            </ul>
          </div>
          {/* <div className="skill__content__item">
            <h3 className="text-2xl font-dm-serif mt-10">
              {translations.skill.backend}
            </h3>
            <ul className="flex flex-wrap gap-10 mt12">
              <SkillItem image="pngwing.com.png" text="PHP(WordPress)" />
              <SkillItem image="python.png" text="Python" />
              <SkillItem image="django.png" text="Django" />
            </ul>
          </div>
          <div className="skill__content__item">
            <h3 className="text-2xl font-dm-serif mt-10 mb-4">
              {translations.skill.database}
            </h3>
            <ul className="flex flex-wrap gap-10 mt12">
              <SkillItem image="mysql.png" text="MySQL" />
              <SkillItem image="Postgresql.png" text="PostgreSQL" />
            </ul>
          </div> */}
          <div className="skill__content__item">
            <h3
              className={`text-2xl mt-10 mb-4
            ${language === "ja" ? "font-notosans" : "font-dm-serif"}
            ${language === "ja" ? "text-lg" : "text-xl"}`}
            >
              {translations.skill.tools}
            </h3>
            <ul className="flex flex-wrap gap-10 mt12">
              <SkillItem image="git.png" text="Git" />
              <SkillItem image="github.png" text="GitHub" />
              <SkillItem image="VSCode.png" text="VS Code" />
              <SkillItem image="figma.png" text="Figma" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
