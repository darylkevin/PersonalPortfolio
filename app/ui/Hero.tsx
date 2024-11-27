import Link from "next/link";
import Image from "next/image";
import { hero, profileLinks } from "../lib/definitions";

interface ProfileLinks {
  github: {
    alt: string;
    url: string;
    icon: string;
  };
  linkedin: {
    alt: string;
    url: string;
    icon: string;
  };
  email: {
    alt: string;
    url: string;
    icon: string;
  };
}

const Hero = ({ scrollStatus }: { scrollStatus: string }) => {
  return (
    <section id="hero" className="flex h-full place-items-center font-bold">
      <div className="flex-col justify-between">
        <p
          className="text-3xl hover:cursor-pointer sm:text-4xl md:text-6xl lg:text-5xl"
          onClick={() => window.scrollTo(scrollX, 0)}
        >
          {hero.name}
        </p>
        <p className="text-md py-2 font-light sm:text-lg md:text-2xl lg:py-3 lg:text-xl">
          {hero.title}
        </p>
        <p className="text-md py-4 font-extralight text-slate-400 lg:py-8">
          {hero.about}
        </p>

        <div className="flex h-24 gap-6 py-4 pb-8 max-lg:hidden">
          {["experiences", "projects", "education"].map((section) => (
            <div
              key={section}
              className="relative transition-all hover:scale-105 hover:cursor-pointer"
              onClick={() =>
                window.scrollTo(
                  scrollX,
                  (document.getElementById(section)?.offsetTop ?? 0) -
                    (document.getElementById("hero")?.offsetTop ?? 0),
                )
              }
            >
              <span
                className={`${
                  scrollStatus === section
                    ? "text-sm"
                    : "pt-1 text-xs text-slate-400"
                } select-none font-bold blur-2xl transition-all`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
              <h1
                className={`${
                  scrollStatus === section
                    ? "text-sm"
                    : "pt-1 text-xs text-slate-400"
                } absolute inset-0 select-auto font-bold transition-all`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex gap-2 py-8">
          {Object.keys(profileLinks).map((link) => {
            const profileLink = profileLinks[link as keyof ProfileLinks];
            return (
              <Link
                key={link}
                href={profileLink.url}
                className="text-slate-400 opacity-50 hover:opacity-100"
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
