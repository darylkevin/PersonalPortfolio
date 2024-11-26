import { projects } from "../lib/definitions";
import { handleCardFocus, handleCardUnfocus } from "../lib/utils";

import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="text-md my-24">
      <p className="mb-6 py-4 font-bold lg:hidden">Projects</p>
      <div>
        {projects.map((project, index) => (
          <div
            onMouseEnter={() => handleCardFocus("project", index)}
            onMouseLeave={() => handleCardUnfocus()}
            key={index}
            className="hover:drop-shadow-glow"
          >
            <Link
              id={`project-${index}`}
              className="hover:cursor-pointer"
              href={project.link}
            >
              <ProjectCard key={index} project={project} index={index} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
