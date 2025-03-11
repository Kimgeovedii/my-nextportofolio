"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron";
import Skill from "@/components/Skill";
import Portfolio from "@/components/Portofolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Import About component dynamically with SSR disabled
const About = dynamic(() => import("@/components/About"), { ssr: false });

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
