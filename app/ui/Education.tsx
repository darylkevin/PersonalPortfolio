import { useRef, useEffect } from "react";
import { education } from "../lib/definitions";

const Education = () => {
  const educationRef = useRef(null);

  window.addEventListener('scroll', () => {
    const education = educationRef.current

    education.getBoundingClientRect().top <= 0 ? 
    education.classList.add('backdrop-blur') : 
    education.classList.remove('backdrop-blur')
  })

  return (
    <section id="education" className="my-8 text-md border-[1px] border-yellow-400">
      <p ref={educationRef} className="my-8 py-2 max-lg:sticky max-lg:top-0">Education</p>
      <article className="py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="text-[0.75em]">{education.period}</p>
          <p>{education.institution}</p>
          <p className="font-bold">{education.degree}</p>
          <p className="py-2 text-sm">{education.description}</p>
        </div>
      </article>
    </section>
  );
};

export default Education;
