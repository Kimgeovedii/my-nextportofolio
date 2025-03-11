"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Dashboard Human Resource Development",
    image: "/img/Dashboard.png",
    demo: "https://lookerstudio.google.com/reporting/6398c402-1a2f-4502-9fbb-a16caf34c503",
    github: "#",
  },
  {
    title: "Invoice App Sales",
    image: "/img/invoice.png",
    demo: "#",
    github: "#",
  },
  {
    title: "Knowledge Management System",
    image: "/img/kms.png",
    demo: "https://kim-geovedi.github.io/Online-Courses-project-tailwindcss/src/",
    github: "https://github.com/kim-geovedi",
  },
  {
    title: "Analysis Palm Oil Plantation Production",
    image: "/img/Analisi-palm.png",
    demo: "https://lookerstudio.google.com/reporting/6a9292e5-95fe-47bd-9dc6-71c2d020b7da/page/7BuKC",
    github: "https://github.com/kim-geovedi/Online-Courses-project-tailwindcss",
  },
  {
    title: "Employee Satisfaction & Performance Rate",
    image: "/img/Employee.png",
    demo: "https://lookerstudio.google.com/reporting/eb6ab7f7-5732-4523-9042-d0c5d32d0a1c/page/7181B",
    github: "https://github.com/kim-geovedi/Online-Courses-project-tailwindcss",
  },
  {
    title: "Website Portofolio Project",
    image: "/img/portofolio.png",
    demo: "https://kimgeovedi-porto.vercel.app/",
    github: "https://github.com/Kimgeovedii/my-nextportofolio",
  },
  {
    title: "Real Estate Regency Website",
    image: "/img/real.png",
    demo: "https://ptlppgaronusantarasdmti.000webhostapp.com/",
    github: "https://github.com/kim-geovedi",
  },
];

export default function Portfolio() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        easing: "ease-in-out",
        duration: 300,
        delay: 0,
      });
    }
  }, []);
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16" data-aos="fade-up">
          <h4 className="font-semibold text-lg text-primary">Portofolio</h4>
          <h2 className="font-bold text-tulisan text-3xl sm:text-4xl lg:text-5xl">
            This Is My Portfolio
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              data-aos="flip-left"
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="font-semibold text-dark text-xl truncate">
                  {project.title}
                </h3>
                <p className="italic font-serif mb-2 text-slate-500">
                  Semua data yang ditampilkan data Dummy
                </p>
                <div className="flex gap-2">
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-70">
                    Demo
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-70">
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
