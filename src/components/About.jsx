// components/About.js

"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Instagram, Github } from "lucide-react";

export default function About() {
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
    <div>
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full mb-10 px-4 lg:w-1/2" data-aos="fade-right">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                About Me
              </h4>
              <h2 className="font-bold text-tulisan text-3xl mb-5 max-w-md lg:text-4xl">
                My Background
              </h2>
              <p className="font-medium text-base text-paragraf max-w-xl lg:text-lg">
                Hello! I'm Kim Geovedi, a skilled web development and data
                analysis specialist. With a strong background in creating
                dynamic and responsive websites, I bring expertise in HTML, CSS,
                JavaScript, and Laravel. I also excel in data visualization and
                business intelligence using Looker Studio and Excel. My journey
                in the tech world began with a passion for problem-solving and a
                keen eye for detail. Over the years, I have honed my skills and
                gained certifications as a Data Analyst from RevoU and Data
                Analyst for Business Development from PT LPP Agro Nusantara
                (PTPN Group).
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2" data-aos="fade-left">
              <h3 className="font-semi-bold text-tulisan text-base mb-6 lg:text-3xl lg:pt-10">
                Let's Collaborate
              </h3>
              <p className="font-medium text-base text-paragraf max-w-xl mb-10 lg:text-lg">
                I pride myself on delivering high-quality, efficient, and
                effective solutions tailored to meet the unique needs of my
                clients. Whether it's building a user-friendly website or
                creating insightful dashboards for decision support systems, I
                am committed to excellence and continuous improvement.
              </p>
              <p className="font-medium text-base text-paragraf max-w-xl mb-10 lg:text-lg">
                Let's collaborate to turn your vision into reality with
                cutting-edge technology and data-driven insights!
              </p>
              <div className="flex items-center">
                <Link
                  href="https://www.instagram.com/kim_geovedi"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:scale-150 duration-500 hover:text-white">
                  <Instagram />
                </Link>
                <Link
                  href="https://github.com/Kimgeovedii"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-150 duration-500">
                  <Github />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
