'use client';

import { useRef } from "react";
import { projects } from "../lib/definitions";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectRef = useRef(null);

  window.addEventListener('scroll', () => {
    const project = projectRef.current

    if (project.getBoundingClientRect().top === 0) {
      project.classList.add('backdrop-blur')
    } else {
      project.classList.remove('backdrop-blur')
    }
  })

  return (
    <section className="my-8 text-md border-[1px] border-green-400">
      <p ref={projectRef} className="my-8 py-2 max-lg:sticky max-lg:top-0">Projects</p>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
