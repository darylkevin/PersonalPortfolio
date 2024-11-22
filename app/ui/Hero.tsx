import Link from "next/link";
import Image from "next/image";
import { hero, profileLinks, profileLinkKey } from "../lib/definitions";

const Hero = () => {
  return (
    <section className="flex border-[1px] border-red-400 pt-2 font-bold place-items-center h-full text-center">
      <div className="flex-col justify-between">
          <span className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl">
            {hero.name}
          </span>
          <p className="text-md py-1 font-light sm:text-lg md:text-2xl lg:py-3 lg:text-xl">
            {hero.title}
          </p>
          <p className="text-md py-4 font-extralight lg:py-8">{hero.about}</p>
          <div className="flex gap-2 justify-center">
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
