import Header from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Portfolio from "@/components/Portofolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
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
