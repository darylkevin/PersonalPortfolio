import Image from "next/image";

const ProjectCard = ({ project, index }) => {
  return (
    <article className="grid grid-cols-1 pb-8 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
      <p className="flex gap-2 pb-4 font-bold md:col-span-4 lg:col-span-3 xl:col-span-4">
        {project.title}
        <svg id={`project-link-${index}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3 m-1 link-icon">
            <path fillRule="evenodd" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
        </svg>
      </p>
      <Image
        src={project.image}
        alt={project.imageAlt}
        className="h-24 w-full rounded-lg object-cover text-slate-400 shadow-inner md:w-36"
        width={100}
        height={67}
      />
      <div className="md:col-span-3 md:pl-2 lg:col-span-2 xl:col-span-3">
        <p className="pt-2 text-sm text-slate-400 md:pt-0">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 py-2">
          {project.skills.map((skill) => (
            <p
              key={skill}
              className="rounded-full border p-2 text-xs font-medium bg-gradient-to-r from-sky-400/10 to-sky-300/10 text-sky-300 border-none"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
