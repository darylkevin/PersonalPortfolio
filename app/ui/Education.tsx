import { useRef, useEffect } from "react";
import { education } from "../lib/definitions";
import { handleCardFocus, handleCardUnfocus } from "../lib/utils";

import EducationCard from "./EducationCard";
import Link from "next/link";

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const education = educationRef.current;

      education.getBoundingClientRect().top <= 0
        ? education.classList.add("backdrop-blur")
        : education.classList.remove("backdrop-blur");
    });

    return () => {
      window.removeEventListener("scroll", updateScrollStatus);
    };
  }, []);

  return (
    <section
      id="education"
      className="text-md my-24 border-[1px] border-yellow-400"
    >
      <p
        ref={educationRef}
        className="mb-6 font-bold max-lg:sticky max-lg:top-0 max-lg:pb-2 lg:hidden"
      >
        Education
      </p>
      {education.map((edu, index) => (
        <div
          onMouseEnter={() => handleCardFocus("education", index)}
          onMouseLeave={() => handleCardUnfocus()}
          key={index}
        >
          <Link id={`education-${index}`} href={edu.link}>
            <EducationCard education={edu} />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Education;
