import Link from "next/link";
import Image from "next/image";
import { hero, profileLinks, profileLinkKey } from "../lib/definitions";

const Hero = ({ scrollStatus }) => {
  return (
    <section
      id="hero"
      className="flex h-full place-items-center border-[1px] border-red-400 pt-2 text-center font-bold"
    >
      <div className="flex-col justify-between">
        <span className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl">
          {hero.name}
        </span>
        <p className="text-md py-1 font-light sm:text-lg md:text-2xl lg:py-3 lg:text-xl">
          {hero.title}
        </p>
        <p className="text-md py-4 font-extralight lg:py-8">{hero.about}</p>

        <div className="flex h-24 justify-center gap-8 py-4 pb-8 max-lg:hidden">
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
              className={`${scrollStatus === "experiences" ? "text-lg" : "text-sm opacity-50"} select-none font-bold blur-2xl transition-all`}
            >
              Experiences
            </span>
            <h1
              className={`${scrollStatus === "experiences" ? "text-lg" : "pt-1 text-sm opacity-50"} absolute inset-0 select-auto font-bold transition-all`}
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
              className={`${scrollStatus === "projects" ? "text-lg" : "pt-1 text-sm opacity-50"} select-none font-bold blur-2xl transition-all`}
            >
              Projects
            </span>
            <h1
              className={`${scrollStatus === "projects" ? "text-lg" : "pt-1 text-sm opacity-50"} absolute inset-0 select-auto font-bold transition-all`}
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
              className={`${scrollStatus === "education" ? "text-lg" : "pt-1 text-sm opacity-50"} select-none font-bold blur-2xl transition-all`}
            >
              Education
            </span>
            <h1
              className={`${scrollStatus === "education" ? "text-lg" : "pt-1 text-sm opacity-50"} absolute inset-0 select-auto font-bold transition-all`}
            >
              Education
            </h1>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {Object.keys(profileLinks).map((link) => {
            const profileLink = profileLinks[link as profileLinkKey];
            return (
              <Link
                key={link}
                href={profileLink.url}
                className="opacity-50 hover:opacity-100"
              >
                <Image
                  src={profileLink.icon}
                  alt={profileLink.alt}
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
