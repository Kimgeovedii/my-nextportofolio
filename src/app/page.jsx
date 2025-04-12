"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron";
import Footer from "@/components/Footer";

// Disable SSR for components that may use window / animations
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Skill = dynamic(() => import("@/components/Skill"), { ssr: false });
const Portfolio = dynamic(() => import("@/components/Portofolio"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
