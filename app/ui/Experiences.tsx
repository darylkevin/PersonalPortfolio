import { useEffect, useRef } from "react";
import { experiences } from "../lib/definitions";
import { handleCardFocus, handleCardUnfocus } from "../lib/utils";
import Link from "next/link";

import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  const experiencesRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const experiences = experiencesRef.current;
  
      experiences.getBoundingClientRect().top <= 0
        ? experiences.classList.add("backdrop-blur")
        : experiences.classList.remove("backdrop-blur");
    });

    return () => {
      window.removeEventListener("scroll", updateScrollStatus);
    };
  }, [])


  return (
    <section
      id="experiences"
      className="text-md mb-24 border-[1px] border-blue-400"
    >
      <p
        ref={experiencesRef}
        className="mb-6 font-bold max-lg:sticky max-lg:top-0 max-lg:pb-2 lg:hidden"
      >
        Experiences
      </p>
      {experiences.map((exp, index) => (
        <div
          onMouseEnter={() => handleCardFocus("experience", index)}
          onMouseLeave={() => handleCardUnfocus()}
          key={index}
        >
          <Link
            id={`experience-${index}`}
            className="hover:cursor-pointer"
            href={exp.link}
          >
            <ExperienceCard experience={exp} />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Experiences;
