"use client";

import Link from "next/link";
import { Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/kim_geovedi/"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-110 duration-300">
                <Instagram />
              </Link>
              {/* GitHub */}
              <Link
                href="https://github.com/kim-geovedi"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-110 duration-300">
                <Github />
              </Link>
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/mohamad-mustofa-hakim/"
                target="_blank"
                className="w-9 h-9 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-110 duration-300">
                <Linkedin />
              </Link>
            </div>
            <p className="font-medium text-sm text-slate-500 text-center mb-3">
              © 2024 Created by Kim Geovedi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
