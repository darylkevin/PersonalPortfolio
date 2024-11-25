import Link from "next/link";
import Image from "next/image";
import { hero, profileLinks } from "../lib/definitions";

const Hero = ({ scrollStatus }) => {
  return (
    <section
      id="hero"
      className="flex h-full place-items-center pt-2 font-bold"
    >
      <div className="flex-col justify-between">
        <span className="hover:cursor-pointer text-3xl sm:text-4xl md:text-6xl lg:text-5xl" onClick={() => window.scrollTo(scrollX, 0)}>
          {hero.name}
        </span>
        <p className="text-md py-2 font-light sm:text-lg md:text-2xl lg:py-3 lg:text-xl">
          {hero.title}
        </p>
        <p className="text-md py-4 font-extralight text-slate-400 lg:py-8">
          {hero.about}
        </p>

        <div className="flex h-24 gap-6 py-4 pb-8 max-lg:hidden">
          <div
            className="relative transition-all hover:scale-105 hover:cursor-pointer"
            onClick={() =>
              window.scrollTo(
                scrollX,
                document.getElementById("experiences")?.offsetTop -
                  document.getElementById("hero")?.offsetTop,
              )
            }
          >
            <span
              className={`${scrollStatus === "experiences" ? "text-sm" : "pt-1 text-xs text-slate-400"} select-none font-bold blur-2xl transition-all`}
            >
              Experiences
            </span>
            <h1
              className={`${scrollStatus === "experiences" ? "text-sm" : "pt-1 text-xs text-slate-400"} absolute inset-0 select-auto font-bold transition-all`}
            >
              Experiences
            </h1>
          </div>
          <div
            className="relative transition-all hover:scale-105 hover:cursor-pointer"
            onClick={() =>
              window.scrollTo(
                scrollX,
                document.getElementById("projects")?.offsetTop -
                  document.getElementById("hero")?.offsetTop,
              )
            }
          >
            <span
              className={`${scrollStatus === "projects" ? "text-sm" : "pt-1 text-xs text-slate-400"} select-none font-bold blur-2xl transition-all`}
            >
              Projects
            </span>
            <h1
              className={`${scrollStatus === "projects" ? "text-sm" : "pt-1 text-xs text-slate-400"} absolute inset-0 select-auto font-bold transition-all`}
            >
              Projects
            </h1>
          </div>
          <div
            className="relative transition-all hover:scale-105 hover:cursor-pointer"
            onClick={() =>
              window.scrollTo(
                scrollX,
                document.getElementById("education")?.offsetTop -
                  document.getElementById("hero")?.offsetTop,
              )
            }
          >
            <span
              className={`${scrollStatus === "education" ? "text-sm" : "pt-1 text-xs text-slate-400"} select-none font-bold blur-2xl transition-all`}
            >
              Education
            </span>
            <h1
              className={`${scrollStatus === "education" ? "text-sm" : "pt-1 text-xs text-slate-400"} absolute inset-0 select-auto font-bold transition-all`}
            >
              Education
            </h1>
          </div>
        </div>

        <div className="flex gap-2 py-8">
          {Object.keys(profileLinks).map((link) => {
            return (
              <Link
                key={link}
                href={profileLinks[link].url}
                className="text-slate-400 opacity-50 hover:opacity-100"
              >
                <Image
                  src={profileLinks[link].icon}
                  alt={profileLinks[link].alt}
                  width={24}
                  height={24}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
