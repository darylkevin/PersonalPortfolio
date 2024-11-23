import { useEffect, useRef } from "react";
import { experiences } from "../lib/definitions";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  const experiencesRef = useRef(null);

  window.addEventListener('scroll', () => {
    const experiences = experiencesRef.current

    experiences.getBoundingClientRect().top <= 0 ? 
    experiences.classList.add('backdrop-blur') : 
    experiences.classList.remove('backdrop-blur')
  })

  return (
    <section id="experiences" className="text-md border-[1px] border-blue-400">
      <p ref={experiencesRef} className="mb-8 py-2 max-lg:sticky max-lg:top-0">Experiences</p>
      <div>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
