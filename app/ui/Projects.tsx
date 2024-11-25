"use client";

import { useRef, useEffect } from "react";
import { projects } from "../lib/definitions";
import { handleCardFocus, handleCardUnfocus } from "../lib/utils";

import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const projects = projectsRef.current;

      projects.getBoundingClientRect().top <= 0
        ? projects.classList.add("backdrop-blur")
        : projects.classList.remove("backdrop-blur");
    });

    return () => {
      window.removeEventListener("scroll", updateScrollStatus);
    };
  }, []);

  return (
    <section
      id="projects"
      className="text-md my-24 border-[1px] border-green-400"
    >
      <p
        ref={projectsRef}
        className="mb-6 font-bold max-lg:sticky max-lg:top-0 max-lg:pb-2 lg:hidden"
      >
        Projects
      </p>
      <div>
        {projects.map((project, index) => (
          <div
            onMouseEnter={() => handleCardFocus("project", index)}
            onMouseLeave={() => handleCardUnfocus()}
            key={index}
          >
            <Link
              id={`project-${index}`}
              className="hover:cursor-pointer"
              href={project.link}
            >
              <ProjectCard key={index} project={project} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
