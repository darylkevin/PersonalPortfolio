'use client';

import { useRef, useEffect } from "react";
import { projects } from "../lib/definitions";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsRef = useRef(null);

  window.addEventListener('scroll', () => {
    const projects = projectsRef.current

    projects.getBoundingClientRect().top <= 0 ? 
    projects.classList.add('backdrop-blur') : 
    projects.classList.remove('backdrop-blur')
  })

  return (
    <section id="projects" className="my-8 text-md border-[1px] border-green-400">
      <p ref={projectsRef} className="my-8 py-2 max-lg:sticky max-lg:top-0">Projects</p>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
