'use client';

import { useRef } from "react";
import { experiences } from "../lib/definitions";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  const experienceRef = useRef(null);

  window.addEventListener('scroll', () => {
    const experience = experienceRef.current

    if (experience.getBoundingClientRect().top === 0) {
      experience.classList.add('backdrop-blur')
    } else {
      experience.classList.remove('backdrop-blur')
    }
  })

  return (
    <section className="text-md border-[1px] border-blue-400">
      <p ref={experienceRef} className="mb-8 py-2 max-lg:sticky max-lg:top-0">Experiences</p>
      <div>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
