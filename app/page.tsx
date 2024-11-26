"use client";
import { useEffect, useState } from "react";
// xs: 320
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// 2xl: 1536

import Education from "./ui/Education";
import Experiences from "./ui/Experiences";
import Footer from "./ui/Footer";
import Hero from "./ui/Hero";
import Projects from "./ui/Projects";
import { M_PLUS_1 } from "next/font/google";

// mobile-phones: 320px-480px
// tablets: 768px-1024px
// laptops: 1024px-1440px
// monitors: 1440px-2560px

export default function Home() {
  const [scrollStatus, setScrollStatus] = useState("experiences");

  useEffect(() => {
    const updateScrollStatus = () => {
      const currentScrollHeight = window.scrollY + window.innerHeight;
      const experiencesTop = document.getElementById("experiences")?.offsetTop;
      const projectsTop = document.getElementById("projects")?.offsetTop;
      const educationTop = document.getElementById("education")?.offsetTop;

      if (currentScrollHeight < 1.5 * projectsTop) {
        setScrollStatus("experiences");
      } else if (currentScrollHeight < educationTop) {
        setScrollStatus("projects");
      } else {
        setScrollStatus("education");
      }
    };

    window.addEventListener("scroll", updateScrollStatus);

    return () => {
      window.removeEventListener("scroll", updateScrollStatus);
    };
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="mx-auto grid grid-cols-1 gap-24 max-lg:px-4 xs:max-w-sm sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] lg:grid-cols-2 lg:px-12 xl:max-w-[1280px]">
        <header className="py-16 lg:sticky lg:top-0 lg:max-h-screen lg:min-h-[640px] lg:py-24">
          <Hero scrollStatus={scrollStatus} />
        </header>
        <main className="pb-16 lg:py-24">
          <Experiences />
          <Projects />
          <Education />
          <Footer />
        </main>
      </div>
    </div>
  );
}
