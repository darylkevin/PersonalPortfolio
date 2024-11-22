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

// mobile-phones: 320px-480px
// tablets: 768px-1024px
// laptops: 1024px-1440px
// monitors: 1440px-2560px

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="mx-auto grid grid-cols-1 px-8 xs:max-w-sm sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] lg:grid-cols-2 lg:px-12 xl:max-w-[1280px]">
        <header className="py-16 lg:sticky lg:top-0 lg:min-h-[640px] lg:max-h-screen lg:py-24">
          <Hero />
        </header>
        <main className="py-16 lg:py-24">
          <Experiences />
          <Projects />
          <Education />
          <Footer />
        </main>
      </div>
    </div>
  );
}
