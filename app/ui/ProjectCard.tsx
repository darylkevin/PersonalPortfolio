import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <article className="grid grid-cols-1 pb-8 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
      <p className="pb-4 font-bold md:col-span-4 lg:col-span-3 xl:col-span-4">
        {project.title}
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
              className="rounded-full border p-2 text-xs font-medium"
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
