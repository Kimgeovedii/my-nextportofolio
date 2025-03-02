"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        const fixedNav = header.offsetTop;
        setIsNavbarFixed(window.pageYOffset > fixedNav);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-transparent absolute shadow-xl top-0 left-0 w-full flex items-center z-10 transition-all duration-300 ${
        isNavbarFixed ? "navbar-fixed" : ""
      }`}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              href="/"
              className="font-bold text-lg text-primary block py-6">
              KIM GEOVEDI
            </Link>
          </div>
          <div className="flex items-center px-4">
            {/* Hamburger Button */}
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block absolute right-4 lg:hidden ${
                isMenuOpen ? "hamburger-active" : ""
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            {/* Navigation Menu */}
            <nav
              id="nav-menu"
              className={`absolute py-5 bg-nav shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition-all duration-300 ${
                isMenuOpen ? "block" : "hidden"
              }`}>
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    href="#home"
                    className="text-base text-tulisan py-2 mx-8 flex group-hover:text-primary">
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#about"
                    className="text-base text-tulisan py-2 mx-8 flex group-hover:text-primary">
                    About
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#skills"
                    className="text-base text-tulisan py-2 mx-8 flex group-hover:text-primary">
                    Skills
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#portfolio"
                    className="text-base text-tulisan py-2 mx-8 flex group-hover:text-primary">
                    Portofolio
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#contact"
                    className="text-base text-tulisan py-2 mx-8 flex group-hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
