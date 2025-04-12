// components/Skill.jsx
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skill() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      duration: 300,
      delay: 0,
    });
  }, []);

  const skills = [
    { name: "HTML", image: "/img/skills/html-1.svg" },
    { name: "CSS", image: "/img/skills/css-3.svg" },
    { name: "JAVASCRIPT", image: "/img/skills/javascript-1.svg" },
    { name: "LARAVEL", image: "/img/laravel-2.svg" },
    { name: "TAILWIND", image: "/img/skills/tailwind-css-2.svg", wide: true },
    { name: "LOOKER", image: "/img/skills/looker-1.svg", fullWidth: true },
    { name: "NEXT JS", image: "/img/skills/nextjs.png" },
    { name: "REACT JS", image: "/img/skills/newreact.svg" },
  ];

  return (
    <section id="skills" className="pt-36 pb-16 bg-transparent bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16" data-aos="fade-up">
          <h4 className="font-semibold text-lg text-primary">My Skills</h4>
          <h2 className="font-bold text-tulisan text-3xl mb-4 sm:text-4xl lg:text-5xl">
            My Experience
          </h2>
          <p className="font-medium text-md text-paragraf lg:text-lg">
            With my combination of skills, I am ready to assist you in web
            development and data analysis projects with efficient, effective,
            and high-quality solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              className="shadow-md shadow-[#040c16] w-full hover:scale-110 duration-500 grayscale hover:grayscale-0">
              <img
                src={skill.image}
                alt={skill.name}
                className={`${
                  skill.fullWidth ? "w-full" : skill.wide ? "w-32" : "w-20"
                } mx-auto`}
              />
              <p className="text-white my-3 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
