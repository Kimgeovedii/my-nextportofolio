import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircleStop } from "lucide-react";

export default function Skill() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        easing: "ease-in-out",
        duration: 300,
        delay: 0,
      });
    }
  }, []);
  const skills = [
    { name: "HTML", image: "/img/skills/html-1.svg" },
    { name: "CSS", image: "/img/skills/css-3.svg" },
    { name: "JAVASCRIPT", image: "/img/skills/javascript-1.svg" },
    { name: "LARAVEL", image: "/img/laravel-2.svg" },
    { name: "TAILWIND", image: "/img/skills/tailwind-css-2.svg", wide: true },
    { name: "LOOKER", image: "/img/skills/looker-1.svg", fullWidth: true },
    { name: "EXCEL", image: "/img/skills/excel-4.svg" },
    { name: "BOOTSTRAP", image: "/img/skills/bootstrap-5-1.svg" },
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
        {/* <div>
          <div className="border w-full h-64 bg-white flex flex-row justify-between">
            <div className="border w-full">
              <img src="/img/skills/bootstrap-5-1.svg" width={16} height={16} />
            </div>
            <div className="border text-center">
              <ol class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <svg
                      class="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </span>
                  <h3 class="font-medium leading-tight">Personal Info</h3>
                  <p class="text-sm">Step details here</p>
                </li>
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                    <svg
                      class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16">
                      <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                    </svg>
                  </span>
                  <h3 class="font-medium leading-tight">Account Info</h3>
                  <p class="text-sm">Step details here</p>
                </li>
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                    <svg
                      class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20">
                      <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                    </svg>
                  </span>
                  <h3 class="font-medium leading-tight">Review</h3>
                  <p class="text-sm">Step details here</p>
                </li>
                <li class="ms-6">
                  <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                    <svg
                      class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20">
                      <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                    </svg>
                  </span>
                  <h3 class="font-medium leading-tight">Confirmation</h3>
                  <p class="text-sm">Step details here</p>
                </li>
              </ol>
            </div>
            <div className="border w-full">
              <h1 className="font-bold text-center">
                Software Engineer & IT Governance
              </h1>
              <div className="mt-4 text-justify">
                <p>
                  Developed apps with Laravel, Node.js, React.js, Next.js,
                  Tailwind, Blade, Vite. Implemented CI/CD, Docker, managed
                  servers, GitHub, migrated dashboards to MySQL, built analytics
                  with Looker Studio, applied COBIT 2019, achieved certification
                  (Sep 30 - Oct 4, 2024).
                </p>
              </div>
            </div>
          </div>
        </div> */}
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
