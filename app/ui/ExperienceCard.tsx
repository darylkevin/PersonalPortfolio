const ExperienceCard = ({ experience, index }) => {
  return (
    <article className="grid grid-cols-1 gap-2 pb-8 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
      <p className="pt-1 text-sm text-slate-400">{experience.period}</p>
      <div className="flex flex-col md:col-span-3 lg:col-span-2 xl:col-span-3">
        <div className="flex gap-2 font-bold">
          <p>
            {experience.company},{" "}
            <span className="font-light">{experience.title}</span>
          </p>
          <svg
            id={`experience-link-${index}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="m-1 size-3"
          >
            <path
              fillRule="evenodd"
              d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-sm font-extralight text-slate-400">
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-2 py-2">
          {experience.skills.map((skill) => (
            <p
              key={skill}
              className="rounded-full border border-none bg-gradient-to-r from-sky-400/10 to-sky-300/10 p-2 text-xs font-medium text-sky-300"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
