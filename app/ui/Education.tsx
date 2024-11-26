import { education } from "../lib/definitions";
import { handleCardFocus, handleCardUnfocus } from "../lib/utils";

import EducationCard from "./EducationCard";
import Link from "next/link";

const Education = () => {
  return (
    <section id="education" className="text-md my-24">
      <p className="mb-6 py-4 font-bold lg:hidden">Education</p>
      {education.map((edu, index) => (
        <div
          onMouseEnter={() => handleCardFocus("education", index)}
          onMouseLeave={() => handleCardUnfocus()}
          key={index}
          className="hover:drop-shadow-glow"
        >
          <Link id={`education-${index}`} href={edu.link}>
            <EducationCard education={edu} index={index} />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Education;
