import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        easing: "ease-in-out",
        duration: 300,
        delay: 0,
      });
    }
  });
  return (
    <div>
      <section
        id="contact"
        className="pt-36 pb-16 bg-transparent"
        data-aos="fade-up">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary">Contact</h4>
              <h2 className="font-bold text-tulisan text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Hubungi Kami
              </h2>
            </div>
          </div>
          <form action="https://getform.io/f/amdppgpb" method="post">
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base text-primary font-bold">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full bg-paragraf p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base text-primary font-bold">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full bg-paragraf p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="pesan"
                  className="text-base text-primary font-bold">
                  Pesan:
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  className="w-full bg-paragraf p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
              </div>
              <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
