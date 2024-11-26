import { experiences } from "../lib/definitions";
import { handleCardFocus, handleCardUnfocus } from "../lib/utils";
import Link from "next/link";

import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  return (
    <section id="experiences" className="text-md mb-24 max-lg:relative">
      <p className="mb-6 py-4 font-bold lg:hidden">Experiences</p>
      {experiences.map((exp, index) => (
        <div
          onMouseEnter={() => handleCardFocus("experience", index)}
          onMouseLeave={() => handleCardUnfocus()}
          key={index}
          className="hover:drop-shadow-glow"
        >
          <Link
            id={`experience-${index}`}
            className="hover:cursor-pointer"
            href={exp.link}
          >
            <ExperienceCard experience={exp} index={index} />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Experiences;
